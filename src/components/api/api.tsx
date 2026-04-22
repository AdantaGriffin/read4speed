import {useState, useEffect, createContext, useContext} from 'react';
type Story = {
    id: string;
    name: string;
    cover: string;
    story: string[];
    brief?: string;
    wordct?: number;
};
type ApiContextType = {
    feelGood: Story[];
    horror: Story[];
    filter: Story[];
    setFilter: React.Dispatch<React.SetStateAction<Story[]>>;
};
const ApiContext = createContext<ApiContextType | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //create all useState and functions here to be exported via API Provider 
   const [feelGood, setFeelGood] = useState<Story[]>([]);
    const [horror, setHorror] = useState<Story[]>([]);
    const [filter, setFilter] = useState<Story[]>([]); 
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
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within ApiProvider");
    }

    return context;
}