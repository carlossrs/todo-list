import { updateCompletedStatus } from '@/app/actions/todoActions';
import { todoType } from '@/types/todoTypes';
import Form from './Form';
import Button from './Button';

function ChangeTodoStatus({ todo }: { todo: todoType }) {
    return (
        <Form action={updateCompletedStatus} className='flex '>
            <input
                name='inputId'
                value={todo.id}
                className='border-gray-700 border'
                type='hidden'
            />

            <Button
                actionButton
                type='submit'
                className={`${
                    todo.isCompleted ? 'check-input-checked' : 'check-input'
                } h-5 w-5 cursor-pointer appearance-none rounded-full border-[#d2d3db] border  bg-transparent bg-contain bg-center bg-no-repeat  focus:ring-white focus:ring-offset-0  dark:focus:ring-[#4d5066]`}
            />
        </Form>
    );
}

export default ChangeTodoStatus;
