import React,{useState} from "react";
import "./Wordbook.css";
import axios from "axios";


export default function Wordbook () {
let [keyword, setkeyword] = useState("");

function search(event){
event.preventDefault();
alert(`searching for ${keyword} definition`);
}

function handlekeywordchange (event) {
setkeyword(event.target.value);
}

return ( 
<div className= "Wordbook" > 
<form onSubmit={search}>
    <input type="search" onChange={handlekeywordchange}/>
     </form>
    
</div>

);
}

