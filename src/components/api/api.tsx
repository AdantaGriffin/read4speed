import React, {useState, useEffect, createContext, useContext} from 'react';

const ApiContext = createContext();

export function ApiProvider({children}){
    
    //create all useState and functions here to be exported via API Provider 
    const [feelGood, setFeelGood] = useState([]);
    const [horror, setHorror] = useState([]);
    const [filter, setFilter] = useState('');
    useEffect(() => {
        async function getData(){
            const response = await fetch('/stories.json');
            const result = await response.json();
            //console.log(result.feelGood);
            setFeelGood(result.feelGood)
        }
        getData()
    },[])
     useEffect(() => {
        async function getData(){
            const response = await fetch('/stories.json');
            const result = await response.json();
            //console.log(result.feelGood);
            setHorror(result.horror)
        }
        getData()
    },[])

    return(
        <ApiContext.Provider
            value={{feelGood, horror, filter, setFilter}}// pass all useState in here so outside components can use
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    return useContext(ApiContext);
}