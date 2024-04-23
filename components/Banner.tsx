import Image from 'next/image';

export default function Banner() {
    return (
        <div className='absolute top-0 z-[-1] h-[28vh] min-w-full bg-cover bg-no-repeat sm:h-[37.5vh]'>
            <Image
                className='block dark:hidden sm:hidden '
                src={'/images/bg-mobile-light.jpg'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%' }}
            />
            <Image
                className='hidden dark:block sm:dark:hidden '
                src={'/images/bg-mobile-dark.jpg'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%' }}
            />
            <Image
                className='hidden sm:block sm:dark:hidden'
                src={'/images/bg-desktop-light.jpg'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%' }}
            />
            <Image
                className='hidden sm:dark:block'
                src={'/images/bg-desktop-dark.jpg'}
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
