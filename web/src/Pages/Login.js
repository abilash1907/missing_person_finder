import React, {useState } from 'react';
import './Login.css';
 import {firebaseapp} from '../Firebase';


function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit=(e)=>{
        e.preventdefault();
        firebaseapp.firestore().collection('products').add({
            password:pass,
            username:user
            
        })
        
        setUser("");
        setPass("");
    }
        return (
            <div>
                <form>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="email" value={user} onChange={(e)=>setUser(e.target.value)} name="uname" required />
                        
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} name="pass" required />
                    </div>
                    <div className="button-container">
                        <input onClick={handleSubmit} type="submit" />
                    </div>
                </form>
            </div>
        );
    
}

export default Login;
