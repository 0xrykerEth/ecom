import React from 'react'
import { createContext,useState} from 'react'

const AppContext = React.createContext({
    item : [],
    addItem : () => {},
    removeItem : () => {},
})


const AppProvider = ({children}) => {
    const [item,setItem] = useState([]);

    const addItem = (newItem) => {

        const found = item.find(
        item => item.id === newItem.id
    );
    if(found){
        found.quantity += 1;
        setItem([...item]);
    }else{
        setItem([...item,{...newItem,quantity : 1}]);
    }

    }

    return (
        <AppContext.Provider value={{item,addItem ,removeItem : (id) => setItem(item.filter((i) => i.id !== id))}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider};