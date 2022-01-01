import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';

const HomePage = () => {

    const allowDrop = event => {
        event.preventDefault();
    }

    const drag = event => {
        event.dataTransfer.setData("text", event.target.id)
    }

    const drop = event => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    }

    return (
        <div className="flex flex-col justify-center align-center w-full h-full">
            <DragDropContext>
                <Dropable droppableId="tiers"> 
                    { (provided) => (
                    
                    <div className="outter-container border-black w-11/12 h-80 bg-black text-white" {...provided.droppableProps} ref={provided.innerRef}>
                        <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16">
                            <div className="row-label bg-red-800 w-20 h-16">S</div>
                        </div>
                        <div className="tier-row flex-row text-white bg-gray-900 w-100 h-16" ondrop={drop} ondragover={allowDrop}>
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
                    )}
                </Dropable>
                <div className="item w-20 h-20 bg-black text-white" draggable="true" onDragStart={drag}> 
                    Item
                </div>
            </DragDropContext>
        </div> 
        )
}

export default HomePage;
