import {TodoItem} from "./TodoItem";

import {ITodo} from "../types/data";

interface ITodoListProps {
    item: ITodo[],
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    deleteCompleted: () => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {item, toggleTodo, removeTodo, deleteCompleted} = props;

    return (
        <div>
            {props.item.map(todo => (
                <TodoItem
                    {...todo}
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            ))
            }
            <button onClick={deleteCompleted} >Delete completed</button>
        </div>
    )
}

export {TodoList}