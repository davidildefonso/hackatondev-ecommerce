/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {useRef, useEffect, DependencyList} from 'react';

export const useDebounce = (callback: () => void, timeout: number, deps: DependencyList) => {
    const ref  : any = useRef();
	
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        clearTimeout(ref.current);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        ref.current = window.setTimeout(callback, timeout);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return ()  => clearTimeout(ref.current);
    }, deps);
};

