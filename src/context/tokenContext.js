import { createContext } from "react";

export let tokenContext = createContext();

export default function tokenContextProvider(props){
    console.log(props.children);
    return (
    <tokenContext.Provider>
        {props.children}
    </tokenContext.Provider>
    )
}

