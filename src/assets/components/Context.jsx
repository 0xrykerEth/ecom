import React from 'react'
import { createContext,useState,useEffect} from 'react'

const AppContext = React.createContext({
    item : [],
    addItem : () => {},
    removeItem : () => {},
})


const AppProvider = ({children}) => {
    const [item,setItem] = useState(() => {
        const storedItems = localStorage.getItem('cartItems');
         if (storedItems) {
            return JSON.parse(storedItems);
        }

        return [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(item));
    }, [item]);

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

    const removeItem = (id) => {
        const foundItem = item.find(item => item.id === id);
        if(foundItem){
            if(foundItem.quantity > 1){
                foundItem.quantity -= 1;
                setItem([...item]);
            }else{
                setItem(item.filter(i => i.id !== id));
            }
        }
    }

    const removeAll = () => {
        setItem([]);
    }

    return (
        <AppContext.Provider value={{item,addItem ,removeItem,removeAll}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider};