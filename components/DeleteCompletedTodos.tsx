'use client';

import { deleteCompletedTodos } from '@/app/actions/todoActions';
import Button from './Button';
import Form from './Form';

function DeleteCompletedTodos() {
    return (
        <Form action={deleteCompletedTodos}>
            <Button
                actionButton
                value='Clear completed'
                type='submit'
                className='dark:hover:text-[--darkMode-hover] hover:text-[--lightMode-hover]'
            />
        </Form>
    );
}

export default DeleteCompletedTodos;
