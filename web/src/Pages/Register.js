import React, { useState } from 'react';
import './Register.css';
import {RegionDropdown} from 'react-country-region-selector';
function Register() {
    const [fname,SetFname]=useState('');
    const [Lname,SetLname]=useState('');
    const [Country,SetCountry]=useState('');
    const [des,SetDes]=useState('');
    const [file,setFile] = useState([])
    const imagehandle =(e)=>{
        for(let i =0; i<e.currentTarget.files.length;i++){
            const newFiles= e.currentTarget.files[i]
            newFiles["id"]=Math.random();
            setFile(prestate=>[...prestate,newFiles])
        }
    }
    const handleSubmit= e =>{
        e.preventDefault()
        console.log(fname);
        console.log(Lname);
        console.log(Country);
        console.log(des);
    }

        return (
            <div class="container">
            <h1>Register New case</h1>
        <form onSubmit={handleSubmit}>
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
                <RegionDropdown country="India" value={Country} onChange={e=> SetCountry(e)}/>

            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label for="subject">Subject</label>
            </div>
            <div class="col-75">
                <textarea id="subject" value={des} onChange={e=> SetDes(e.currentTarget.value)} name="subject" placeholder="Write something.."></textarea>
            </div>
            <div class="col-25">
                <label for="Image">ImageUpload</label>
            </div>
            <div class="col-75">
                <input type="file" onChange={imagehandle} accept="image/*"/>
            </div>
            </div>
            <div class="row">
            <input type="submit" value="Submit"/>
            </div>
        </form>
    </div>
        );
    
}

export default Register;
