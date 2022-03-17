import React, {useState } from 'react';
import './Login.css';
 import {db,store} from '../Firebase';

function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
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
        
        const promises=[]
        db.collection('products').add({
            password:pass,
            username:user
            
        })
        file.map(image=>{
            const upload=store.ref(`/images/${image.name}`).put(image);
            promises.push(upload)
        })
        Promise.all(promises)
        .then(()=>alert('image is Uploaded'))
        .catch(err=>console.log(err.code))
        
    }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="email" value={user} onChange={(e)=>setUser(e.currentTarget.value)} name="uname" required />
                        
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" value={pass} onChange={(e)=>setPass(e.currentTarget.value)} name="pass" required />
                    </div>
                    <div>
                        <input onChange={imagehandle} type="file" multiple/>
                    </div>
                    <div className="button-container">
                        <input  type="submit" />
                    </div>
                    
                </form>
            </div>
        );
    
}

export default Login;
