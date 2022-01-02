import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { SodaList } from '../SodaList/SodaList';
import { reorder, reorderSodas } from '../../reorder';

const HomePage = () => {
    const [sodasMap, setSodas] = useState({
        s: ["Coke", "Pepsi", "Fanta Orange"],
        a: ["Mountain Dew"],
        b: ["Sprite",],
        c: [], 
        d: ["Rootbeer", "Fanta Grape"], 
    })

    
    return (
        <DragDropContext 
            onDragEnd={({destination, source}) => {
                // // dropped outside the list
                    if (!destination) {
                        return;
                    }
                
                    setSodas(
                        reorderSodas(
                            sodasMap,
                            source,
                            destination,
                        ),
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
