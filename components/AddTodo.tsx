import { create } from '@/app/actions/todoActions';
import Button from './Button';
import Form from './Form';
import Input from './Input';

function AddTodo() {
    return (
        <Form
            action={create}
            className='flex w-full items-center gap-3 rounded-[4px] bg-white px-4 py-4 text-[18px] text-[#656468] dark:bg-[--dark-desaturated-blue] dark:text-white'
        >
            <Button
                type='submit'
                className='bg-transparent min-h-[20px] min-w-[20px] cursor-pointer rounded-full border'
            />
            <Input
                name='input'
                type='text'
                placeholder='Create a new todo...'
            />
        </Form>
    );
}

export default AddTodo;
