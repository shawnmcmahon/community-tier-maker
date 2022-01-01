import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';


export default class SodaList extends Component {
  static defaultProps = {
    isCombineEnabled: false,
  };
  renderBoard = (dropProvided) => {
    const { sodas } = this.props;

    return (
      <div>
        <div style={{display: "flex"}} ref={dropProvided.innerRef}>
          {sodas.map((soda, index) => (
            <Draggable id={soda} key={soda} draggableId={soda} index={index} >
              {(
                dragProvided
              ) => (
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
    );
  };

  render() {
    const { listId, listType, internalScroll, isCombineEnabled } = this.props;
    console.log(listId)
    return (
      <Droppable
        id={listId}
        droppableId={listId}
        direction="horizontal"
        isCombineEnabled={isCombineEnabled}
      >
        {(
          dropProvided
        ) => (
          <div
            {...dropProvided.droppableProps}
          >
            {internalScroll ? (
              <div>
                {this.renderBoard(dropProvided)}
              </div>
            ) : (
              this.renderBoard(dropProvided)
            )}
          </div>
        )}
      </Droppable>
    );
  }
}
