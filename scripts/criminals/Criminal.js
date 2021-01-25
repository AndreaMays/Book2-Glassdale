export const Criminal = (criminal) => {
    return `
    <div class="criminal__">
    <p class="__name">${criminal.name}</p>
    <p class="__age">${criminal.age}</p>
    <p class="__conviction">${criminal.conviction}</p>
    <p class="__incarceration">${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</p>
    <p class="__incarceration">${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}

// ${criminal.id}