import React, {useState} from "react";

const App = (props) => {
    const [notes, setNotes]= useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] =useState("");

    const addNotes =(e) =>{
        e.preventDefault();
        setNotes([
            ...notes,
            {title, body}
        ]);
        setBody(" ")
        setTitle(" ")
     }
    const removeNotes =(title) =>{
        setNotes(notes.filter((notes)=>(notes.title !==title)))
    }
    return(
        <div>
        <h1>To Do App</h1>
        <form onSubmit={addNotes}>
        {notes.map((data) =>(
            <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <button onClick={() =>removeNotes(data.title)}>X</button>
            </div>
        ))}
        <input value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <textarea  value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add Notes</button>
        </form>
        </div>
    );
};

export default App;



