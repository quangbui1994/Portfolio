import { useState, useEffect, useRef } from 'react';

export const useFormFields = (initialState) => {
    const [fields, setFields] = useState(initialState);

    return [
        fields,
        function (event) {
            setFields({
                ...fields,
                [event.target.id]: event.target.value
            })
        }
    ]
}

export const useDidUpdateEffect = (fn, inputs) => {
    const didMountRef = useRef(false);
  
    useEffect(() => {
      if (didMountRef.current)
        fn();
      else
        didMountRef.current = true;
    }, inputs);
}