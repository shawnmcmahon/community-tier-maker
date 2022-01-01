import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const HomePage = () => {
    const [sodas, setSodas] = useState({
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
        <div className="flex flex-col justify-center align-center w-full h-full">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="tiers"> 
                    { (provided) => (
                        <ul {...provided.droppableProps} ref={provided.innerRef}>
                            {rankedBeverages.map((currentSoda, index) => {
                                return (
                                    <Draggable key={currentSoda} draggableId={currentSoda} index={index}> 
                                        {(provided) => (
                                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} key={currentSoda} className="item w-20 h-20 bg-black text-white"> 
                                                {currentSoda}
                                            </li>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                    </ul>
                )}
                </Droppable>
            </DragDropContext>
        </div> 
    )
}

export default HomePage;
