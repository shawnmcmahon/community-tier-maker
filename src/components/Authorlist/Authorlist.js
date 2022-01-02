import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';


export const AuthorList = ({listId, urls}) => { 
    return (
        <Droppable
            id={listId}
            droppableId={listId}
            direction="horizontal"
            isCombineEnabled={false}
        >
            {dropProvided => (
                <div className="outter-container border-black w-11/12 h-15 bg-black" 
                {...dropProvided.droppableProps}>
                        <div 
                            className="tier-row flex flex-row text-white bg-darkgray w-100 h-16"
                            ref={dropProvided.innerRef}
                        >
                            <div className="tier-label w-1/12 flex justify-center self-center text-2xl">
                                {listId}
                            </div>
                            {urls.map((url, index) => (
                                <Draggable id={url} key={url} draggableId={url} index={index} >
                                {dragProvided => (
                                    <div
                                    {...dragProvided.dragHandleProps}
                                    {...dragProvided.draggableProps}
                                    ref={dragProvided.innerRef}
                                    >
                                       <img className="flex max-h-16" src={url} />
                                    </div>
                                )}
                                </Draggable>
                            ))}
                        {dropProvided.placeholder}
                        </div>
                </div>
            )}
        </Droppable>
    )
}
