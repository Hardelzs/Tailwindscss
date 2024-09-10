// const sunIcon = document.querySelector('.sun');
// const moonIcon = document.querySelector('.moon');

// const userTheme = localStorage.getItem('theme');
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// const iconToggle = () => {
//     sunIcon.classList.toggle("display-none");
//     moonIcon.classList.toggle("display-none");
// };

// const themeCheck = () => {
//     if (userTheme === "dark" || (!userTheme && systemTheme)) {
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none");
//         sunIcon.classList.remove("display-none");
//         return;
//     }
//     sunIcon.classList.add("display-none");
//     moonIcon.classList.remove("display-none");
// };

// const themeSwitch = () => {
//     if (document.documentElement.classList.contains("dark")) {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         iconToggle();
//         return;
//     }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     iconToggle();
// };

// sunIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// moonIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// themeCheck();


const hamburger = document.getElementById('hamburg')
const cancel = document.getElementById('cancel')

cancel.addEventListener('click', () => {
    const hamburg = document.getElementById('hamburg')
    const cancel = document.getElementById('cancel')
    cancel.style.display = 'none'
    hamburg.style.display = 'block'
})

hamburger.addEventListener('click', () => {
    const hamburg = document.getElementById('hamburg')
    const cancel = document.getElementById('cancel')
    cancel.style.display = 'block'
    hamburg.style.display = 'none'
})
