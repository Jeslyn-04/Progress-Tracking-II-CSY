import React from 'react'
import ItemList from './ItemList'
const Array = () => {
    const itemsArray=['Item 1','Item 2','Item 3'];
  return (
    <div>
    <h1>Item List Example</h1>
    <ItemList items={itemsArray}/>
    </div>
    
  )
}

export default Array