
const skills = [
    {
        name: "Python",
        description: "Learn programming and problem solving.",
        url: "https://www.python.org/about/gettingstarted/"
    },
    {
        name: "Java",
        description: "Practice object-oriented programming.",
        url: "https://dev.java/learn/"
    },
    {
        name: "Git & GitHub",
        description: "Learn version control and collaboration.",
        url: "https://docs.github.com/en/get-started"
    },
    {
        name: "Linux",
        description: "Learn commands and system basics.",
        url: "https://ubuntu.com/tutorials"
    },
    {
        name: "Cloud Computing",
        description: "Explore cloud and AWS fundamentals.",
        url: "https://aws.amazon.com/getting-started/"
    }
];

const list = document.getElementById("skill-list");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

let completed = JSON.parse(
    localStorage.getItem("skillorbit-progress") || "[]"
);

function renderSkills() {
    list.innerHTML = "";

    skills.forEach((skill, index) => {
        const card = document.createElement("article");
        card.className = "skill-card";

        const title = document.createElement("h3");
        title.textContent = skill.name;

        const description = document.createElement("p");
        description.textContent = skill.description;

        const link = document.createElement("a");
        link.href = skill.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Start learning →";

        const label = document.createElement("label");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = completed.includes(index);

        checkbox.addEventListener("change", () => {
            if (checkbox.checked && !completed.includes(index)) {
                completed.push(index);
            } else {
                completed = completed.filter(id => id !== index);
            }

            localStorage.setItem(
                "skillorbit-progress",
                JSON.stringify(completed)
            );

            updateProgress();
        });

        label.append(checkbox, " Mark completed");
        card.append(title, description, link, label);
        list.appendChild(card);
    });

    updateProgress();
}

function updateProgress() {
    const count = completed.length;

    progressText.textContent =
        `${count} of ${skills.length} skills completed`;

    progressBar.style.width =
        `${(count / skills.length) * 100}%`;
}

document.getElementById("reset-btn").addEventListener("click", () => {
    completed = [];
    localStorage.removeItem("skillorbit-progress");
    renderSkills();
});

renderSkills();
