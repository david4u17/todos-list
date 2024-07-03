import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    // let myStyle = {
    //     minHeight: "50vh",
    //     margin: "40px auto",
    //     justifycontent: "center"
    // }
    return (
        <div className="container mt-5 justify-content-center align-items-center" style={{ width: '800px', height: '100%' }}>

            <div>
                <h3 className="my-5 text-center">Todos List</h3>
                {props.todos.length === 0 ? "No Todos to display" :
                    props.todos.map((todo) => {
                        console.log(todo.sno);
                        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        )
                    })
                }
            </div>

        </div>
    )
}
