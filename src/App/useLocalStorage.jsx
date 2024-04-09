import React from "react";

function useLocalStorage (itemName, initialValue) {
    const localStorageItems = localStorage.getItem(itemName)
  
    let parsedItems;
    
    if (!localStorageItems) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItems = initialValue
    } else {
      parsedItems = JSON.parse(localStorageItems)
    }
  
    // Esta linea crea el custom Hook que permite la comunicación con el componente App
    const [item, setItem] = React.useState(parsedItems)
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return [item, saveItem]
  }

export { useLocalStorage }