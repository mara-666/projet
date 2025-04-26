const EPSILON_0 = 8.854e-12;

function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function revealNav() {
    document.getElementById('nav-bar').classList.remove('hidden');
    document.getElementById('initial-choice').classList.add('hidden');
}

function calculateSingleCharge() {
    const q = parseFloat(document.getElementById('charge').value);
    const r = parseFloat(document.getElementById('distance').value);

    if (isNaN(q) || isNaN(r) || r <= 0) {
        alert("Entrez des valeurs valides pour la charge et la distance.");
        return;
    }

    const potential = q / (4 * Math.PI * EPSILON_0 * r);
    document.getElementById('result-single').innerHTML =
        `<p>Potentiel : <strong>${potential.toExponential(4)} V</strong></p>`;
}

let chargeCount = 0;
function addChargeInput() {
    chargeCount++;
    const container = document.getElementById('charges-container');
    const div = document.createElement('div');
    div.innerHTML = `
        <label>Charge (C) :</label>
        <input type="number" id="charge-${chargeCount}" placeholder="Exemple : 1e-6" required>
        <label>Distance (m) :</label>
        <input type="number" id="distance-${chargeCount}" placeholder="Exemple : 0.1" required>
    `;
    container.appendChild(div);
}

function calculateMultipleCharges() {
    let totalPotential = 0;

    for (let i = 1; i <= chargeCount; i++) {
        const q = parseFloat(document.getElementById(`charge-${i}`).value);
        const r = parseFloat(document.getElementById(`distance-${i}`).value);

        if (isNaN(q) || isNaN(r) || r <= 0) {
            alert(`Valeur invalide pour la charge ${i}`);
            return;
        }

        totalPotential += q / (4 * Math.PI * EPSILON_0 * r);
    }

    document.getElementById('result-multiple').innerHTML =
        `<p>Potentiel total : <strong>${totalPotential.toExponential(4)} V</strong></p>`;
}

function calculateContinuousDistribution() {
    const density = parseFloat(document.getElementById('density').value);
    const r = parseFloat(document.getElementById('distance-continuous').value);

    if (isNaN(density) || isNaN(r) || r <= 0) {
        alert("Entrez des valeurs valides pour la densité et la distance.");
        return;
    }

    const potential = density / (4 * Math.PI * EPSILON_0 * r);
    document.getElementById('result-continuous').innerHTML =
        `<p>Potentiel : <strong>${potential.toExponential(4)} V</strong></p>`;
}
