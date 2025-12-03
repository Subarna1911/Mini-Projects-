import {useEffect, useRef} from 'react';

 export const usePreviousHook = (value)=>{
    const prevValue = useRef(null);

useEffect(()=>{
    prevValue.current = value;
}, [value]);


return prevValue.current;

}

