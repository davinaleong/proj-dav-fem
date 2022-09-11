console.log(`main.js loaded`)

// Declate elements
const cardGridEl = document.querySelector(`[data-card-grid]`)

const card = (project) => {
    const { name, completedAt, image, demoLink, repoLink, challengeLink } = project
    const date = dayjs(completedAt).format(`DD MMM YYYY`)

    return `
    <div class="card | bg-neutral-800">
        <img src="./images/${image}" alt="${name} Image" class="card-image">
        <div class="card-body | p-400">
            <h2 class="card-heading | ff-heading fs-600 fw-bold mb-300">${name}</h2>
            <p><em>${date}</em></p>
        </div>
        <div class="card-footer">
            <a href="${demoLink}" class="link-primary" target="_blank">View<br>Demo</a>
            <a href="${repoLink}" class="link-primary" target="_blank">View<br>Repo</a>
            <a href="${challengeLink}" class="link-primary" target="_blank">View<br>Challenge</a>
        </div>
    </div>
    `
}

let cardGridInnerHtml = ``

// Sort projects by completed at in descending order
const sortedProjects = projects.sort((a, b) => (a.completedAt < b.completedAt) ? 1 : -1)

sortedProjects.forEach(project => {
    cardGridInnerHtml += card(project)
})

cardGridEl.innerHTML = cardGridInnerHtml