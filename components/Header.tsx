import AddTodo from './AddTodo';
import ThemeSwitch from './ThemeSwitch';

function Header() {
    return (
        <div className='flex min-w-full flex-col items-center justify-between gap-7 text-center'>
            <div className='flex min-w-full items-center justify-between'>
                <h1 className='p-0 text-[30px] font-[700] leading-none tracking-[10px] sm:text-[40px]'>
                    TODO
                </h1>
                <ThemeSwitch />
            </div>
            <AddTodo />
        </div>
    );
}

export default Header;
