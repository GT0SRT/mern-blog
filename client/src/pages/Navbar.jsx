import { Link } from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Navbar () {
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
          credentials: 'include',
          method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return(
        <div className='justify-center items-center w-full flex mt-[16px]'>
        <header className='flex p-3 max-w-[1000px] w-full'>
            <div className='font-bold text-xl'><Link to='/'>MyBlog</Link></div>
            <div className='ml-auto'>
                {username && (
                <>
                    <Link to="/create" className='p-1 font-semibold'>Create new post</Link>
                    <button onClick={logout} className='p-1 font-semibold'>Logout ({username})</button>
                </>
                )}
                {!username && (
                <>
                    <Link to='/login' className='p-1 font-semibold'>Login</Link>
                    <Link to='/register' className='p-1 font-semibold'>Register</Link>
                </>
                )}
            </div>
        </header>
        </div>
    );
};