import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const HomePage = () => {
    const [sodasMap, setSodas] = useState({
        s: ["Coke", "Pepsi", "Dr. Pepper"],
        a: ["Fanta Orange", "Fanta Grape"],
        b: ["Rootbeer", "Sprite", "MountainDew"]
    })
    const [rankedBeverages, setRankedBeverages ] = useState(sodas); 


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
                    if (!result.destination) {
                        return;
                    }
                
                    setSodas(
                        reorderSodas({
                            sodas,
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
                    sodas={v}
                />
            ))}
        </DragDropContext>
    )
}

export default HomePage;
