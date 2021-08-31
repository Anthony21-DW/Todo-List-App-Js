// * Ambil element button add, input, dan div.todo-list
const add = document.getElementById("add");
const input = document.getElementById("input");
const lists = document.getElementById("todo-lists");

add.addEventListener("click", function () {
  // * Simpan nilai input dalam variabel text
  const text = input.value;

  if (text === "") return alert("Type something please!");

  //* buat elemen baru dengan class list
  const list = document.createElement("DIV");
  list.classList.add("list");

  // * Buat element span dengan class text- todo dan letakan di dalam class list
  const span = document.createElement("SPAN");
  span.classList.add("text-todo");
  span.innerText = text;
  list.appendChild(span);

  // * buat element button edit and remove
  const btnEdit = document.createElement("BUTTON");
  const btnRemove = document.createElement("BUTTON");
  btnEdit.classList.add("btn", "edit-btn");
  btnEdit.innerText = "edit";
  list.appendChild(btnEdit);
  btnRemove.classList.add("btn", "remove-btn");
  btnRemove.innerText = "remove";
  list.appendChild(btnRemove);

  // * tambahkan semua elemen dalam list ke dalam lists todo
  lists.appendChild(list);

  // *hilangkan text dalam input
  input.value = "";

  // * remove a list
  btnRemove.addEventListener("click", function () {
    btnRemove.parentElement.remove();
  });

  // * edit list text
  btnEdit.addEventListener("click", function () {
    if (btnEdit.innerText === "edit") {
      // * ambil text yang ada di dalam list
      const textEdit = btnEdit.previousSibling.innerText;
      btnEdit.style.backgroundColor = "orange";

      // *buat elemen input baru
      const inputEdit = document.createElement("INPUT");
      inputEdit.classList.add("edit-todo");
      inputEdit.value = textEdit;

      // * Ganti elemen span dengan elemen input yang baru dibuat
      list.replaceChild(inputEdit, span);
      return (btnEdit.innerText = "update");
    }
    if (btnEdit.innerText === "update") {
      // * hilangkan class update pada tombol update
      btnEdit.classList.remove("update");
      btnEdit.style.backgroundColor = "royalblue";

      // * simpan text yang telah diedit ke dalam variabel textGanti
      const textGanti = btnEdit.previousSibling.value;

      //* ambil elemen input(edit todo)
      const inputTag = btnEdit.previousSibling;

      // * ganti elemen input(edit todo) dengan epan
      list.replaceChild(span, inputTag);

      // * Isi elemen span dengan teks yang telah diedit
      btnEdit.previousSibling.innerText = textGanti;
      return (btnEdit.innerText = "edit");
    }
  });
});
