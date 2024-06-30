const observerOption = {
    root: null,
    threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            observer.unobserve(entry.target);
        }
    });
}, observerOption);

window.addEventListener("DOMContentLoaded", (event) => {
    const sections = Array.from(document.querySelectorAll
    (".observable"));

    for (let section of sections) {
        observer.observe(section);
    }
});