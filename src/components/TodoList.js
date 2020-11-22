
const TodoList = ({id, title, completed, markComplete, deleteTodo}) => {

  return (
    <div>
      <li>
          <p>
            <span className={ completed ? 'completed' : null }>
              { title }
            </span>
            { 
            completed ? null :
            <button onClick={() => markComplete(id)}>Mark Complete</button>
            }
            <button onClick={() => deleteTodo(id)}>X</button>
          </p>
      </li>
    </div>
  );
}

export default TodoList;
