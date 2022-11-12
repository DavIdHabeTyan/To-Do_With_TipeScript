import { ITodo } from "../types/data";
interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
const { id, title, completed, toggleTodo, removeTodo  } = props;
    return (
        <div>
            <input
                checked={completed}
                type="checkbox"
                onChange={() => toggleTodo(id)}
            />

            {title}
            <button
                onClick={()=>removeTodo(id)}
                style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "blue",
                    fontWeight: "bold",
                    cursor: "pointer",
            }}
            >X</button>
        </div>
    )
}

export { TodoItem }