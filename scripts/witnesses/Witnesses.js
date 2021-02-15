

export const Witness = (witness) => {
    return `
    <div class="witness__">
    <p class="__name">Name: ${witness.name}</p>
    <p class="__statement">Statement: ${witness.statements}</p>
    </div>
    `
    
}

// Not sure if the "ShowWitnessesBUtton" goes here on line 8