console.log(`main.js loaded`)

// Declare elements
const cardGridEl = document.querySelector(`[data-card-grid]`)

const card = (project, index = 0) => {
  const { name, completedAt, image, demoLink, repoLink, challengeLink } =
    project
  const date = dayjs(completedAt).format(`DD MMM YYYY`)

  return `
    <div class="card | bg-neutral-800">
        <img src="./images/${image}" alt="${name} Image" class="card-image" data-element="card-image">
        <div class="card-body | p-400">
            <h2 class="card-heading | ff-heading fs-600 fw-bold mb-300">${
              index + 1
            }) ${name}</h2>
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
const sortedProjects = projects.sort((a, b) =>
  a.completedAt < b.completedAt ? 1 : -1
)

sortedProjects.forEach((project, index) => {
  cardGridInnerHtml += card(project, index)
})

cardGridEl.innerHTML = cardGridInnerHtml

// Modal
const openAttr = `data-open`
const srcAttr = `src`

const modalEl = document.querySelector(`[data-element="modal"]`)
const btnModalCloseEl = document.querySelector(
  `[data-element="btn-modal-close"]`
)
const modalImageEl = document.querySelector(`[data-element="modal-image"]`)

const cardImageEls = document.querySelectorAll(`[data-element="card-image"]`)

cardImageEls.forEach((element) => {
  element.addEventListener(`click`, (e) => {
    const src = e.target.getAttribute(srcAttr)

    modalImageEl.setAttribute(srcAttr, src)
    modalEl.setAttribute(openAttr, true)
  })
})

btnModalCloseEl.addEventListener(`click`, (e) => {
  modalEl.removeAttribute(openAttr)
})
