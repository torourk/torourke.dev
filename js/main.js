function queryDarkMode() {
    let theme_val = localStorage.getItem("theme");
    return (theme_val == "dark") ||
        ((theme_val == null) && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

function setDarkMode(dark_mode) {
    // Stores the dark mode setting in local storage.
    let theme_value = dark_mode ? "dark" : "light";
    localStorage.setItem("theme", theme_value);

    // Updates CSS and theme.
    if (dark_mode) {
        document.documentElement.classList.add("dark-mode");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#121212");
    } else {
        document.documentElement.classList.remove("dark-mode");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fcfcf8");
    }
}

function toggleDarkMode() {
    let dark_mode_enabled = queryDarkMode();
    setDarkMode(!dark_mode_enabled);
}

// Applies preferred theme on load.
let dark_mode = queryDarkMode();
setDarkMode(dark_mode);
