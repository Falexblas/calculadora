function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    let display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  }

  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.querySelector(".calculator").classList.toggle("dark");
    document.querySelectorAll("button").forEach(btn => btn.classList.toggle("dark"));
  });