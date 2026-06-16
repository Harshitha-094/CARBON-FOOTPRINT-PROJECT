function calculateFootprint() {
    let electricity = parseFloat(document.getElementById("electricity").value) || 0;
    let travel = parseFloat(document.getElementById("travel").value) || 0;

    if (electricity <= 0 && travel <= 0) {
        alert("Please enter at least one value.");
        return;
    }

    let electricityEmission = electricity * 0.92;
    let travelEmission = travel * 0.21;
    let totalEmission = electricityEmission + travelEmission;

    let grade = "🟢 A";
    if (totalEmission > 100) grade = "🟡 B";
    if (totalEmission > 200) grade = "🔴 C";

    document.getElementById("result").innerHTML =
        `Total: ${totalEmission.toFixed(2)} kg CO₂/month<br>
         Grade: ${grade}`;

    // Graph bars
    let barElectricity = document.getElementById("barElectricity");
    let barTravel = document.getElementById("barTravel"); 

    barElectricity.style.width = "250px";

    barTravel.style.width = "250px";

    barElectricity.innerHTML =
         `⚡ Electricity: ${eCarbon.toFixed(1)} kg CO₂`;

    barTravel.innerHTML =
         `🚗 Travel: ${tCarbon.toFixed(1)} kg CO₂`;
    // Save history
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