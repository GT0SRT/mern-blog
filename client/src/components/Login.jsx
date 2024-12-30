import {useContext, useState} from "react";
import {Navigate} from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
            setUserInfo(userInfo);
            setRedirect(true);
        });
        } else {
            alert('wrong credentials');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return(
        <>
        <h1 className="font-bold m-7 p-2 text-center text-3xl mt-36">LOGIN</h1>
        <form className="flex flex-col gap-3 justify-center items-center" onSubmit={login}>
            <input type="text"
                placeholder="username" 
                value={username}
                className="border-2 border-black rounded-md p-2 pt-1 pb-1"
                onChange={ev => setUsername(ev.target.value)}></input>
            <input type="password" 
                placeholder="password"
                value={password}
                className="border-2 border-black rounded-md p-2 pt-1 pb-1"
                onChange={ev => setPassword(ev.target.value)}></input>
            <button className="border-2 border-green-500 rounded-md p-3 pt-1 pb-1
            text-green-500 hover:text-white hover:bg-green-500">Login</button>
        </form>
        </>
    );
};