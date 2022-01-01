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
                <div {...dropProvided.droppableProps}>
                    <div>
                        <div style={{display: "flex"}} ref={dropProvided.innerRef}>
                        {sodas.map((soda, index) => (
                            <Draggable id={soda} key={soda} draggableId={soda} index={index} >
                            {dragProvided => (
                                <div
                                {...dragProvided.dragHandleProps}
                                {...dragProvided.draggableProps}
                                ref={dragProvided.innerRef}
                                >
                                    <div style={{backgroundColor: "blue"}}> 
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
