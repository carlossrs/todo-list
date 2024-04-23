import { useEffect, useState } from 'react';

export default function useWindowSize(): number {
    const [windowSize, setWindowSize] = useState<number>(0);

    useEffect(() => {
        function handleResize(): void {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}
