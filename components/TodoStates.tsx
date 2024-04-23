'use client';
import Button from './Button';
import useWindowSize from '@/app/hooks/WindowWidth';
import Form from './Form';
import { showActive, showAll, showCompleted } from '@/app/actions/todoActions';

function TodoStates({ length }: { length: number }) {
    const width = useWindowSize();
    const template =
        width < 640 && length ? (
            <div className='flex w-full justify-center gap-3 rounded-lg bg-white text-[#777a92] shadow-2xl dark:bg-[--dark-desaturated-blue] dark:shadow-black px-3 py-2 mt-2 text-[15px]'>
                <Form action={showAll}>
                    <Button
                        actionButton
                        type='submit'
                        value={'All'}
                        className='hover:text-[#e4e5f1] focus:text-[#3a7bfd]'
                    />
                </Form>
                <Form action={showActive}>
                    <Button
                        actionButton
                        type='submit'
                        value={'Active'}
                        className='hover:text-[#e4e5f1] focus:text-[#3a7bfd]'
                    />
                </Form>
                <Form action={showCompleted}>
                    <Button
                        actionButton
                        type='submit'
                        value={'Completed'}
                        className='hover:text-[#e4e5f1] focus:text-[#3a7bfd]'
                    />
                </Form>
            </div>
        ) : null;
    return <div className='w-full'>{template}</div>;
}

export default TodoStates;
