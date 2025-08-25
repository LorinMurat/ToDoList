let inputBox = document.getElementById("entered");
let listCont = document.getElementById("listCont");

// gorev ekleme fonksiyonu
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // yeni li olustur
    let li = document.createElement("li"); // yeni gorev olustur
    li.innerHTML = inputBox.value; // li yi liste containera ekle
    listCont.appendChild(li);

    let span = document.createElement("span"); // x icin bir span olustur
    span.innerHTML = "\u00d7"; // x
    li.appendChild(span); // span i li ye ekle
  }
  inputBox.value = ""; // input kutusunu temizle
  saveData();
}

listCont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listCont.innerHTML);
}

function showTask() { 
  listCont.innerHTML = localStorage.getItem("data");
}
showTask();
