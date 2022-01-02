import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';


export const SodaList = ({listId, listType, sodas}) => { 
    return (
        <Droppable
            id={listId}
            droppableId={listId}
            direction="horizontal"
            isCombineEnabled={false}
        >
            {dropProvided => (
                <div className="outter-container border-black w-11/12 h-10 bg-black text-white" 
                {...dropProvided.droppableProps}>
                    <div>
                        <div 
                            className="tier-row flex flex-row text-white bg-gray-900 w-100 h-16"
                            ref={dropProvided.innerRef}
                        >
                        {sodas.map((soda, index) => (
                            <Draggable id={soda} key={soda} draggableId={soda} index={index} >
                            {dragProvided => (
                                <div
                                {...dragProvided.dragHandleProps}
                                {...dragProvided.draggableProps}
                                ref={dragProvided.innerRef}
                                >
                                    <div className="bg-yellow-50 text-black m-1"> 
                                        {soda}
                                    </div>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {dropProvided.placeholder}
                        </div>
                    </div>
                </div>
            )}
        </Droppable>
    )
}
