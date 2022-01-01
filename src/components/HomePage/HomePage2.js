import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SodaList from '../SodaList/SodaList';
import { reorder, reorderSodas } from '../../reorder';

const HomePage = () => {
    const [sodasMap, setSodas] = useState({
        s: ["Coke", "Pepsi", "Dr. Pepper"],
        a: ["Fanta Orange", "Fanta Grape"],
        b: ["Rootbeer", "Sprite", "MountainDew"]
    })
    const [rankedBeverages, setRankedBeverages ] = useState(sodasMap); 


    const handleOnDragEnd = (result) => {
        console.log(result)
        if (!result) {
            return
        }
        const items = Array.from(rankedBeverages); 
        const [reorderedItem] = items.splice(result.source.index, 1); 
        items.splice(result.destination.index, 0, reorderedItem); 
    
        setRankedBeverages(items) 
    }

    
    return (
        <DragDropContext 
            onDragEnd={({destination, source}) => {
                // // dropped outside the list
                    if (!destination) {
                        return;
                    }
                
                    setSodas(
                        reorderSodas({
                            sodasMap,
                            source,
                            destination,
                        }),
                    );
            }}>
            {Object.entries(sodasMap).map(([key, value]) => (
                <SodaList
                    internalScroll
                    key={key}
                    listId={key}
                    listType="CARD"
                    sodas={value}
                />
            ))}
        </DragDropContext>
    )
}

export default HomePage;
