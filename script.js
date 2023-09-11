const draggableItem = document.querySelector('[draggable="true"]');
const dragoverZone = document.querySelectorAll(".dropzone");

function dragStart(ev) {
  this.classList.add("dragging");
  ev.dataTransfer.setData("id", this.dataset.id);
}

function dragEnd(ev) {
  ev.preventDefault();
  this.classList.remove("dragging");
}

function dragEnter(ev) {
  ev.preventDefault();
}

function dragOver(ev) {
  ev.preventDefault();
  this.classList.add('dragging-over');
}

function dragLeave() {
  this.classList.remove("dragging-over");
}

function drop(ev) {
  ev.preventDefault();
  this.append(draggableItem);
  draggableItem.classList.remove("dragging");
  this.classList.remove("dragging-over");
}

draggableItem.addEventListener("dragstart", dragStart);
draggableItem.addEventListener("dragend", dragEnd);

dragoverZone.forEach((el) => {
  el.addEventListener("dragenter", dragEnter);
  el.addEventListener("dragleave", dragLeave);
  el.addEventListener("dragover", dragOver);
  el.addEventListener("drop", drop);
});
