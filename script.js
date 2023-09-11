const draggableItem = document.querySelector('[draggable="true"]');
const dragoverZone = document.querySelector(".dropzone-container");

function dragStart(ev) {
  ev.currentTarget.classList.add("dragging");
  ev.dataTransfer.setData("id", ev.target.dataset.id);
}

function dragOver(ev) {
  ev.preventDefault();
  ev.target.classList.add("dragging-over");
}

function dragLeave(ev) {
  ev.target.classList.remove("dragging-over");
}

function dragEnd(ev) {
  ev.target.classList.remove("dragging");
}

function drop(ev) {
  ev.preventDefault();
  const id = ev.dataTransfer.getData("id");
  const element = document.querySelector(`[data-id="${id}"]`);
  ev.target.appendChild(element);
  ev.target.classList.remove("dragging-over");
}

draggableItem.addEventListener("dragstart", dragStart);
draggableItem.addEventListener("dragend", dragEnd);

dragoverZone.addEventListener("dragover", dragOver);
dragoverZone.addEventListener("drop", drop);
dragoverZone.addEventListener("dragleave", dragLeave);
