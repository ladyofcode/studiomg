let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const lightModeDoor = document.querySelector("#lab-light");
const lightModeWindow = document.querySelector("#window-light");
const darkModeDoor = document.querySelector("#lab-dark");
const darkModeWindow = document.querySelector("#window-dark");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
  lightModeDoor.style.display = "none";
  lightModeWindow.style.display = "none";
  darkModeDoor.style.display = "block";
  darkModeWindow.style.display = "block";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
  lightModeDoor.style.display = "block";
  lightModeWindow.style.display = "block";
  darkModeDoor.style.display = "none";
  darkModeWindow.style.display = "none";
};

if (darkMode === "enabled") {
    enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
