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
  if (!ev.dataTransfer.types.includes("id")) return;
  ev.preventDefault();
  this.classList.add("dragging-over");
}

function dragLeave() {
  this.classList.remove("dragging-over");
}

function drop(ev) {
  ev.preventDefault();
  const id = ev.dataTransfer.getData("id");
  if (!id) return;
  const element = document.querySelector(`[data-id="${id}"]`);
  this.append(element);
  ev.dataTransfer.clearData('id');
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