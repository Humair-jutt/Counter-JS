function jsCounter() {
  const button = document.querySelectorAll(".counterBtn");
  let count = 0;

  button.forEach(function (buton) {
    buton.addEventListener("click", function () {
      if (buton.classList.contains("prevBtn")) {
        count--;
      } else if (buton.classList.contains("nextBtn")) {
        count++;
      }

      const counter = document.querySelector("#counter");
      counter.textContent = count;

      // Change  Color
      if (count < 0) {
        counter.style.color = "red";
      } else if (count > 0) {
        counter.style = "color:green";
      } else {
        counter.style.color = "black";
      }
      //
    });
    //
  });

  //
}
jsCounter();
