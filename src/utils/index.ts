import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => value === 0 ? false : ! value

export const cleanObject = (object: object) => {
    // ...object = Object.assign({}, object)
    const result = {...object}
    Object.keys(result).forEach(key => {
        // @ts-ignore
        const value = result[key]
        if(isFalsy(value)) {
            // @ts-ignore
            delete result[key]
        }
    });
    return result;
};

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
};

// const debounce = (func, delay) => {
//     let timeout;
//     return (...param) => {
//         if (timeout) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(founction() {
//             func(...param);
//     },delay);
//     }
// }
// const log = debounce(() => console.log('call'), 5000)
// log()
// log()
// log()

export const useDebounce = <v>(value: v, delay?: number) => {
    
    const [debouncedValue, setDebouncedValue] = useState(value)
    
    useEffect(() => {
        // 每次在Value变化后，设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        // 每次在上一个useEffect处理完后再运行
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debouncedValue
};

// useArray for TsReactTest
export const useArray = <T>(initialArray: T[]) => {
    const [value, setValue] = useState(initialArray)
    return {
        value,
        setValue,
        add: (item: T) => setValue([...value, item]),
        clear: () => setValue([]),
        removeIndex: (index: number) => {
            const copy = [...value]
            copy.splice(index, 1)
            setValue(copy)
        }
    }
}