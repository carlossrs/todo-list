import { todoType } from '@/types/todoTypes';
import DeleteTodo from './DeleteTodo';
import ChangeTodoStatus from './ChangeTodoStatus';

function Todo({ todo }: { todo: todoType }) {
    const todoStyle = {
        textDecoration: todo.isCompleted === true ? 'line-through' : 'none',
        opacity: todo.isCompleted === true ? 0.5 : 1,
    };
    return (
        <div
            className={`w-full flex items-center bg-transparent py-4 px-4 gap-2 group`}
        >
            <ChangeTodoStatus todo={todo} />
            <span
                className='w-full text-[14px] sm:text-[18px] text-[#4d5066] peer-checked:text-[#d2d3db] peer-checked:line-through dark:text-[#d2d3db] dark:peer-checked:text-[#4d5066] pt-1'
                style={todoStyle}
            >
                {todo.value}
            </span>

            <DeleteTodo todo={todo} />
        </div>
    );
}

export default Todo;
