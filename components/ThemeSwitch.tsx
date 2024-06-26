'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <Image
                src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
                width={16}
                height={16}
                sizes='16x16'
                alt='Loading Light/Dark Toggle'
                priority={false}
                title='Loading Light/Dark Toggle'
            />
        );

    if (resolvedTheme === 'dark') {
        return (
            <SunIcon
                className='h-7 w-7 cursor-pointer sm:h-9 sm:w-9'
                onClick={() => setTheme('light')}
            />
        );
    }

    if (resolvedTheme === 'light') {
        return (
            <MoonIcon
                className='h-7 w-7 cursor-pointer sm:h-9 sm:w-9'
                onClick={() => setTheme('dark')}
            />
        );
    }
}
