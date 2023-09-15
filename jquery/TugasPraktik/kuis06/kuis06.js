function hideEl() {
  // Menyembunyikan elemen tanpa class
  const element = document.querySelector("div:not([class])");
  if (element) {
      element.style.display = "none";
  }
}

function hideClass() {
  // Menyembunyikan elemen dengan class "my-class"
  const element = document.querySelector(".my-class");
  if (element) {
      element.style.display = "none";
  }
}

function hideAttr() {
  // Menyembunyikan elemen dengan atribut href
  const element = document.querySelector("a[href]");
  if (element) {
      element.style.display = "none";
  }
}

function showAll() {
  const elementsToDisplay = document.querySelectorAll("div:not([class]), .my-class, a[href]");

  elementsToDisplay.forEach((element) => {
      element.style.display = "";
  });
}
