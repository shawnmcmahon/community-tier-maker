import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { AuthorList } from '../Authorlist/Authorlist';
import { reorderSodas } from '../../reorder';

const HomePage = () => {
    const [sodasMap, setSodas] = useState({
        s: [],
        a: [],
        b: [],
        c: [], 
        d: [], 
        u: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/255px-15-09-26-RalfR-WLC-0098.jpg",
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/PepsiLight2009.jpg/225px-PepsiLight2009.jpg"    
    ]
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
                <AuthorList
                    internalScroll
                    key={key}
                    listId={key}
                    listType="CARD"
                    urls={value}
                />
            ))}
        </DragDropContext>
    )
}

export default HomePage;
