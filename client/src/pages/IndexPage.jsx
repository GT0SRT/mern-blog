import Post from "./Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div className='justify-center items-center w-full flex mt-[16px]'>
    <div className="max-w-[1000px] m-7 mt-0 md:m-3 w-full">
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
    </div>
  );
}