import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import ISong from "../../types/songTypes";
import SongRow from "../songRow/SongRow";

export const DraggableList = ({
  songList,
  setSongList,
}: {
  songList: ISong[];
  setSongList: (songList: ISong[]) => void;
}) => {
  const handleDrag = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) {
      return;
    }
    const isSourceComesBeforeDestination = source.index < destination.index;

    const smallestIndex = isSourceComesBeforeDestination
      ? source.index
      : destination.index;

    const biggestIndex = isSourceComesBeforeDestination
      ? destination.index
      : source.index;

    const firstElement = isSourceComesBeforeDestination
      ? songList[destination.index]
      : songList[source.index];

    const secondElement = isSourceComesBeforeDestination
      ? songList[source.index]
      : songList[destination.index];

    // Using .slice method a new array is created containing elements up to but not including the element at the smallestIndex.
    // Then, firstElement is inserted into the new list.
    // The firstElement is either the item being dragged or the item at the destination position.
    // After inserting the firstElement, the elements between the smallestIndex and biggestIndex are inserted into the new list.
    // These are the elements between the source and the destination.
    // After them, secondElement is being inserted. The secondElement is the other one of the two items being swapped (dragged item or the destination item.)
    // The last .slice method adds the remaining items to the new list,  starting after biggestIndex.
    // If the biggestItem is the last item in the list, it adds an empty array, otherwise, it adds the remaining items after biggestItem.
    // Finally, songList is updated with the newly created list with the help of setSongList function.
    const newList = [
      ...songList.slice(0, smallestIndex),
      firstElement,
      ...songList.slice(smallestIndex + 1, biggestIndex),
      secondElement,
      ...(biggestIndex === songList.length - 1
        ? []
        : songList.slice(Math.min(biggestIndex + 1))),
    ];
    setSongList(newList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="DroppableId">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {songList.map((song, index) => (
                <Draggable
                  draggableId={song.trackNumber.toString()}
                  index={index}
                  key={song.trackNumber.toString()}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SongRow song={song} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DraggableList;
