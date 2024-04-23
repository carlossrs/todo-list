'use client';

import Form from './Form';
import Button from './Button';
import { deleteTodo } from '@/app/actions/todoActions';
import { todoType } from '@/types/todoTypes';
import { XMarkIcon } from '@heroicons/react/24/solid';

function DeleteTodo({ todo }: { todo: todoType }) {
    return (
        <Form
            action={deleteTodo}
            className='flex sm:group-hover:flex items-center dark:hover:text-[#e4e5f1] text-[#777a92] sm:hidden'
        >
            <input type='hidden' name='inputId' value={todo.id} />
            <Button
                actionButton
                value={<XMarkIcon className='h-6 w-6 cursor-pointer ' />}
                type='submit'
            />
        </Form>
    );
}

export default DeleteTodo;
