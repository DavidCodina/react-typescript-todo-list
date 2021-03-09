import React, { useEffect } from 'react';
import { Todo }             from '../interfaces';


interface Props {
  todos:           Todo[];
  toggleCompleted: (index: number) => void;
  removeTodo:      (index:number) => void;
  updateTodo:      (index:number, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


const Todos: React.FC<Props> = ({ todos, toggleCompleted, removeTodo, updateTodo }) => {
  useEffect(() => {
    const textareas: NodeListOf<HTMLTextAreaElement> = document.querySelectorAll('TEXTAREA');

    function resize(textarea: HTMLTextAreaElement){
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }

    textareas.forEach((textarea: HTMLTextAreaElement) => resize(textarea));
  });



  if (todos.length === 0){ return null; }


  const toggleEditing = (e: React.MouseEvent<SVGSVGElement, MouseEvent>):void => {
    const pencil   = e.currentTarget;
    const textarea = e.currentTarget.previousElementSibling as HTMLTextAreaElement;

    if (textarea.readOnly === true){
      textarea.readOnly     = false;
      textarea.style.color  = "#00BFFF";
      pencil.setAttribute('fill', "#00BFFF");
    } else {
      textarea.readOnly = true;
      textarea.style.color = "";
      pencil.setAttribute('fill', "rgb(200,200,200)");
    }
  }


  return (
    <ul className="list-group mx-auto" style={{maxWidth: 500}}>
      {
        todos.map((todo, index) => {
          return (
            <li
              className="d-flex list-group-item py-0 border border-dark align-items-center"
              style={{marginTop: '-1px'}}
              key={index}
            >
              <svg
                className="me-2"
                style={{ width: 25, cursor: 'pointer' }}
                onClick={() => toggleCompleted(index)}
                fill={todo.completed ? "#66FF66" : "rgb(200,200,200)" }
                viewBox="0 0 16 16"
              >
                <path  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path  d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
              </svg>

              <textarea
                className="todo form-control-plaintext"
                style={{flex:1, overflowWrap: 'anywhere'}}
                onChange={(e) => updateTodo(index, e)}
                rows={1}
                spellCheck={false}
                value={todo.todo}
                readOnly
              >
              </textarea>


              <svg
                style={{ width: 25, marginRight: 10, cursor: 'pointer' }}

                fill="rgb(200,200,200)"
                viewBox="0 0 16 16"
                onClick={toggleEditing}
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>


              <svg
                style={{ width: 25, cursor: 'pointer' }}
                fill="#FD5B78"
                viewBox="0 0 16 16"
                onClick={() => removeTodo(index)}
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </li>
          );
        })
      }
    </ul>
  );
}


export default Todos;
