import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const HomePage = () => {
    const [sodas, setSodas] = useState(["Coke", "Pepsi", "Dr. Pepper", "Fanta Orange", "Fanta Grape", "Rootbeer", "Sprite", "MountainDew"])
    const [rankedBeverages, setRankedBeverages ] = useState(sodas); 

    const handleOnDragEnd = (result) => {
        console.log(result)

        const items = Array.from(rankedBeverages); 
        const [reorderedItems] = items.splice(result.source.index, 1); 
        items.splice(result.destination.index, 0, reorderedItems); 
    
        setRankedBeverages(items) 
    }
   
    return (
        <div className="flex flex-col justify-center align-center w-full h-full">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="tiers"> 
                    { (provided) => (
                        <div>
                            <div className="outter-container border-black w-11/12 h-80 bg-black text-white" {...provided.droppableProps} ref={provided.innerRef}>
                                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                                    <div className="row-label bg-red-800 w-20 h-16">S</div>
                                </div>
                                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                                    <div className="row-label bg-orange-500 w-20 h-16">A</div>
                                </div>
                                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                                    <div className="row-label bg-yellow-400 w-20 h-16">B</div>
                                </div>
                                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                                    <div className="row-label bg-yellow-300 w-20 h-16">C</div>
                                </div>
                                <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                                    <div className="row-label bg-green-600 w-20 h-16">D</div>
                                </div>
                            </div>
                        <ul className="item-list"> 
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
                    </div>
                )}
                </Droppable>
            </DragDropContext>
        </div> 
    )
}

export default HomePage;
