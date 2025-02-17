import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'
import {RegionDropdown} from 'react-country-region-selector';
function Register() {
    const [fname,SetFname]=useState('');
    const [Lname,SetLname]=useState('');
    const [Country,SetCountry]=useState('');
    const [des,SetDes]=useState('');
    const [file,setFile] = useState(null)
    const[url,setUrl]=useState([]);
    const data="http://localhost:8000/register/";
    function imagehandle (e){
        const datas=[]
        for(let i =0; i<e.currentTarget.files.length;i++){
            const value= e.currentTarget.files[i]
            setUrl(prestate=>[...prestate, URL.createObjectURL(value)])
            datas.push(value)
        }
        setFile(datas)
    }
     const handleSubmit=(e)=>{
        e.preventDefault()
        let form_data = new FormData();
        form_data.append('firstname',fname);
        form_data.append('lastname',Lname);
        for(let i =0; i<file.length;i++){
            
            form_data.append('image',file[i])
        }
        axios.post(data, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>console.log(err))
        
        
    }

        return (
            <div class="container">
            <h1>Register New case</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div class="row">
            <div class="col-25">
                <label for="fname">First Name</label>
            </div>
            <div class="col-75">
                <input type="text" value={fname} onChange={e=> SetFname(e.currentTarget.value)} id="fname" name="firstname" placeholder="Your name.." />
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div class="col-75">
                <input type="text" value={Lname} onChange={e=> SetLname(e.currentTarget.value)} id="lname" name="lastname" placeholder="Your last name.."/>
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label for="country">Last Seen</label>
            </div>
            <div class="col-75">
                <RegionDropdown country="India" value={Country} name="place" onChange={e=> SetCountry(e)}/>

            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label for="description">Description</label>
            </div>
            <div class="col-75">
                <textarea id="des" value={des} onChange={e=> SetDes(e.currentTarget.value)} name="description" placeholder="Write something.."></textarea>
            </div>
            <div class="col-25">
                <label for="Image">ImageUpload</label>
            </div>
            <div class="col-75">
                <input type="file" name='img' src={file} onChange={(e)=>imagehandle(e)} multiple accept="image/*"/>  
            </div>
            </div>
            <div className="row">
            {url? url.map(img=>{
                    return(
                    <img alt='post' width="200px" height="200px" src={img}></img>
                    );
                }) : ''}
            </div>
            <div class="row">
            <input type="submit" value="Submit"/>
            </div>
        </form>
    </div>
        );
    
}

export default Register;
