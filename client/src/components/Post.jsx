import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function post({_id,title,summary,cover,content,createdAt,author}){
    return(
        <div className="flex mt-[32px]">
            <Link to={`/post/${_id}`}>
                <img alt="" className="w-[90vw]" src={'http://localhost:4000/'+cover}></img>
            </Link>
            <div>
                <Link to={`/post/${_id}`}>
                    <h2 className="font-bold text-[2vw] p-3 pl-7">{title}</h2>
                </Link>
                <p className="pl-7 text-[1vw]">by <span className="font-bold">{author.username}</span> on <span className="font-bold">{formatISO9075(new Date(createdAt))}</span></p>                <p className="p-3 pl-7 text-[1.2vw]">{summary}</p>
            </div>
        </div>
    );
};