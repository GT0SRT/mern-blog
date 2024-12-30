import { useState } from "react";


export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }
    return(
        <>
        <h1 className="font-bold m-7 p-2 text-center text-3xl mt-24">REGISTER</h1>
        <form className="flex flex-col gap-3 justify-center items-center" onSubmit={register}>
            <input type="text"
                placeholder="username"
                value={username} 
                className="border-2 border-black rounded-md p-2 pt-1 pb-1"
                onChange={ev => setUsername(ev.target.value)}></input>
            {/* <input type="email"
                placeholder="email address" 
                value={email}
                className="border-2 border-black rounded-md p-2 pt-1 pb-1"
                onChange={ev => setEmail(ev.target.value)}></input> */}
            <input type="password" 
                placeholder="password"
                value={password}
                className="border-2 border-black rounded-md p-2 pt-1 pb-1"
                onChange={ev => setPassword(ev.target.value)}></input>
            <button className="border-2 border-green-500 rounded-md p-3 pt-1 pb-1
            text-green-500 hover:text-white hover:bg-green-500">Register</button>
        </form>
        </>
    );
};