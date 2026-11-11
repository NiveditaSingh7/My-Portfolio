
/* Mobile Navigation */

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const isOpen = nav.classList.toggle("active");
    const toggle = document.querySelector(".menu-toggle");
    if (toggle) {
        toggle.setAttribute("aria-expanded", String(isOpen));
    }
}

/* Dark and Light Mode */

function toggleTheme() {
    document.body.classList.toggle("light");

    const theme = document.body.classList.contains("light")
        ? "light"
        : "dark";

    localStorage.setItem("portfolioTheme", theme);
    updateThemeButton(theme);
}

function updateThemeButton(theme) {
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
        toggle.setAttribute(
            "aria-label",
            theme === "light" ? "Switch to dark theme" : "Switch to light theme"
        );
    }
}

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}
updateThemeButton(savedTheme === "light" ? "light" : "dark");

/* Typing Animation */

const typing = document.getElementById("typing");

if (typing) {
    const words = [
        "Web Developer",
        "Programmer",
        "Student",
        "Tech Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const word = words[wordIndex];

        typing.textContent = word.substring(0, charIndex);

        if (!deleting) {
            charIndex++;

            if (charIndex > word.length) {
                deleting = true;
                setTimeout(typeEffect, 1000);
                return;
            }
        } else {
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    typeEffect();
}

/* Contact Form */

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subjectText = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subjectText || !message) {
            document.getElementById("formStatus").textContent =
                "Please complete all fields.";
            return;
        }

        const recipient = "snivedita.cse@gmail.com";

        const subject = encodeURIComponent(subjectText);

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        document.getElementById("formStatus").textContent =
            "Opening your email application...";

        window.location.href =
            `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
}
