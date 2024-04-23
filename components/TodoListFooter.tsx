'use client';
import useWindowSize from '@/app/hooks/WindowWidth';
import DeleteCompletedTodos from './DeleteCompletedTodos';
import Button from './Button';
import Form from './Form';
import { showActive, showAll, showCompleted } from '@/app/actions/todoActions';

function TodoListFooter({ length }: { length: number }) {
    const width = useWindowSize();

    return (
        <div className='flex w-full justify-between px-3 py-3 text-[15px] text-[#777a92] '>
            <div>
                {length} {length == 1 ? 'item left' : 'items left'}
            </div>
            {width >= 640 ? (
                <div className='flex gap-3'>
                    <Form action={showAll}>
                        <Button
                            actionButton
                            type='submit'
                            value={'All'}
                            className='dark:hover:text-[#e4e5f1] hover:text-[#484b6a] focus:text-[#3a7bfd]'
                        />
                    </Form>
                    <Form action={showActive}>
                        <Button
                            actionButton
                            type='submit'
                            value={'Active'}
                            className='dark:hover:text-[#e4e5f1] hover:text-[#484b6a] focus:text-[#3a7bfd]'
                        />
                    </Form>
                    <Form action={showCompleted}>
                        <Button
                            actionButton
                            type='submit'
                            value={'Completed'}
                            className='dark:hover:text-[#e4e5f1] hover:text-[#484b6a] focus:text-[#3a7bfd]'
                        />
                    </Form>
                </div>
            ) : null}
            <DeleteCompletedTodos />
        </div>
    );
}

export default TodoListFooter;
