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
        <div ref={dropProvided.innerRef}>
          {sodas.map((soda, index) => (
            <Draggable key={quote.id} draggableId={soda} index={index}>
              {(
                dragProvided
              ) => (
                <div
                  {...dragProvided.dragHandleProps}
                  {...dragProvided.draggableProps}
                  ref={dragProvided.innerRef}
                >
                    <div style={{backgroundColor: "blue"}}> 

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

    return (
      <Droppable
        droppableId={listId}
        type={listType}
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
