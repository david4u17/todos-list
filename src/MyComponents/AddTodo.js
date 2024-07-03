import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <>
        <div className='head-text' style={{ backgroundColor:'#5256a0', borderRadius:'20px 20px 0 0', padding:'10px' , margin:'0 -12px'}}> 
        <h3 className='text-center'>Add a Todo</h3>
        </div>
       
        <div className="container mt-4 justify-content-center align-items-center" style={{ width: '800px' }}>
            <div className='justify-content-center'>

          
            <form onSubmit={submit}>
                <div className="mb-3 mt-5">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
            </div>
        </div>
        </>
    )
}
