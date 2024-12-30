import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from './Editor';

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return(
        <>
        <h1 className="font-bold m-7 p-2 text-center text-3xl mt-12">Create A Post</h1>
        <form className="flex flex-col gap-3 justify-center items-center" onSubmit={createNewPost}>
            <input type="title"
                placeholder={'Title'}
                value={title}
                className="border-2 border-black rounded-md p-2 pt-1 pb-1 pr-32"
                onChange={ev => setTitle(ev.target.value)} />
            <input type="summary"
                placeholder={'Summary'}
                value={summary}
                className="border-2 border-black rounded-md p-2 pt-1 pb-1 pr-32"
                onChange={ev => setSummary(ev.target.value)} />
            <input type="file"
                onChange={ev => setFiles(ev.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button style={{marginTop:'5px'}} className="border-2 border-green-500 rounded-md p-3 pt-1 pb-1
            text-green-500 hover:text-white hover:bg-green-500">Create post</button>
        </form>
        </>
    );
};