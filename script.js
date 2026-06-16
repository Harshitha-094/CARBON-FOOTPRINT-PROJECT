function calculateFootprint() {

    let electricity = parseFloat(document.getElementById("electricity").value);
    let travel = parseFloat(document.getElementById("travel").value);

    if (isNaN(electricity) || electricity < 0) {
        alert("Please enter a valid electricity value.");
        return;
    }

    if (isNaN(travel) || travel < 0) {
        travel = 0;
    }

    // Emission calculations
    let electricityEmission = electricity * 0.92;
    let travelEmission = travel * 0.21;
    let totalEmission = electricityEmission + travelEmission;

    // Grade system
    let grade = "";
    let status = "";

    if (totalEmission < 100) {
        grade = "🟢 A";
        status = "Excellent Environmental Impact";
    }
    else if (totalEmission < 250) {
        grade = "🟡 B";
        status = "Moderate Environmental Impact";
    }
    else {
        grade = "🔴 C";
        status = "High Environmental Impact";
    }

    document.getElementById("result").innerHTML = `
        Total: ${totalEmission.toFixed(2)} kg CO₂/month <br>
        Grade: ${grade} <br>
        ${status}
    `;

    // Graph Bars
    let barElectricity = document.getElementById("barElectricity");
    let barTravel = document.getElementById("barTravel");

    let maxEmission = Math.max(electricityEmission, travelEmission, 1);

    barElectricity.style.width =
        (electricityEmission / maxEmission * 100) + "%";

    barTravel.style.width =
        (travelEmission / maxEmission * 100) + "%";

    barElectricity.innerHTML =
        `⚡ Electricity: ${electricityEmission.toFixed(1)} kg CO₂`;

    barTravel.innerHTML =
        `🚗 Travel: ${travelEmission.toFixed(1)} kg CO₂`;

    // Eco Tips
    let tips = "";

    if (grade.includes("A")) {
        tips = "🌱 Great job! Keep maintaining sustainable habits.";
    }
    else if (grade.includes("B")) {
        tips = "🚲 Consider using public transport and reducing energy usage.";
    }
    else {
        tips = "⚠ Reduce electricity consumption and travel emissions.";
    }

    document.getElementById("tips").innerHTML = tips;

    // History
    let history = JSON.parse(localStorage.getItem("history")) || [];

    history.push(
        `E:${electricity}, T:${travel}, Total:${totalEmission.toFixed(1)}`
    );

    localStorage.setItem("history", JSON.stringify(history));

    displayHistory();
}

function displayHistory() {

    let history = JSON.parse(localStorage.getItem("history")) || [];

    let historyList = document.getElementById("historyList");

    historyList.innerHTML = "";

    history.forEach(item => {

        let li = document.createElement("li");

        li.textContent = item;

        historyList.appendChild(li);

    });
}

function clearHistory() {

    localStorage.removeItem("history");

    displayHistory();
}

window.onload = displayHistory;