console.log(`main.js loaded`)

const cardGridEl = document.querySelector(`[data-card-grid]`)

const card = (project) => {
    const { name, completedAt, image, demoLink, repoLink, challengeLink } = project
    return `
    <div class="card | bg-neutral-800">
        <img src="./images/${image}" alt="${name} Image" class="card-image">
        <div class="card-body | p-400">
            <h2 class="card-heading | ff-heading fs-600 fw-bold mb-300">${name}</h2>
            <p><em>${completedAt}</em></p>
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

projects.forEach(project => {
    cardGridInnerHtml += card(project)
})

cardGridEl.innerHTML = cardGridInnerHtml