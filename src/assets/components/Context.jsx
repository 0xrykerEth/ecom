import React from 'react'
import { createContext,useState} from 'react'

const AppContext = React.createContext({
    item : [],
    addItem : () => {},
    removeItem : () => {},
})


const AppProvider = ({children}) => {
    const [item,setItem] = useState([]);

    return (
        <AppContext.Provider value={{item,addItem : (newItem) => setItem([...item,newItem]),removeItem : (id) => setItem(item.filter((i) => i.id !== id))}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider};