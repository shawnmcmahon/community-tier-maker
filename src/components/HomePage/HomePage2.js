import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { AuthorList } from '../Authorlist/Authorlist';
import { reorderSodas } from '../../reorder';
import { scrapeImages } from '../../../scrapers';

const HomePage = () => {
    const [sodasMap, setSodas] = useState({
        s: [],
        a: [],
        b: [],
        c: [], 
        d: [], 
        u: ["https://tiermaker.com/images/chart/chart/the-definitive-soda-tier-list-30678/cocacoladietjpg",
        "https://tiermaker.com/images/chart/chart/the-definitive-soda-tier-list-30678/7updietcherryjpeg",
        "https://tiermaker.com/images/chart/chart/the-definitive-soda-tier-list-30678/fantaorangejpg",  
        "https://tiermaker.com/images/chart/chart/the-definitive-soda-tier-list-30678/mtndewpng",
        "https://tiermaker.com/images/chart/chart/the-definitive-soda-tier-list-30678/spritepng"    
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
