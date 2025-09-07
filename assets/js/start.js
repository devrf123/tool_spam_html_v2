const dropdown = document.getElementById("dropdown");
  const button = dropdown.querySelector(".dropbtn");

  button.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });

  // Click ngoài thì đóng
  window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });