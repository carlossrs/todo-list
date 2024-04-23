import Banner from '@/components/Banner';
import TodoListFooter from '@/components/TodoListFooter';
import Header from '@/components/Header';
import Todo from '@/components/Todo';
import TodoStates from '@/components/TodoStates';
import { prisma } from '@/utils/prisma';

async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            value: true,
            id: true,
            isCompleted: true,
            show: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return data;
}

export default async function Home() {
    const data = await getData();

    const showArray = data.filter((todo) => todo.show == true);
    let length = showArray.length;

    return (
        <>
            <Banner />
            <main className='mx-auto mt-[50px] flex min-h-dvh w-[87%] flex-col items-center sm:gap-6 gap-4 text-[18px] sm:mt-[70px] sm:w-[max(540px,_37.5%)] text-white'>
                <Header />
                <div className='flex w-full flex-col justify-center rounded-[4px] bg-white text-[--darkMode-active-font-color-hover] shadow-2xl first:rounded-t-lg last:rounded-b-lg dark:bg-[--dark-desaturated-blue] dark:shadow-black [&>*:not(:last-child)]:border-b-[1px] dark:[&>*:not(:last-child)]:border-b-[#4d5066] '>
                    {data.map(
                        (todo, id) =>
                            todo.show === true && (
                                <div className='w-full ' key={id}>
                                    <Todo todo={todo} />
                                </div>
                            )
                    )}

                    {length > 0 && <TodoListFooter length={length} />}
                </div>
                <TodoStates length={length} />
            </main>
        </>
    );
}
