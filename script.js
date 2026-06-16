```javascript
let pieChart = null;
let trendChart = null;

function calculateFootprint() {

    const electricity =
        parseFloat(document.getElementById("electricity").value) || 0;

    const travel =
        parseFloat(document.getElementById("travel").value) || 0;

    if (electricity <= 0) {
        alert("Please enter a valid electricity value.");
        return;
    }

    const electricityEmission = electricity * 0.92;
    const travelEmission = travel * 0.21;
    const totalEmission = electricityEmission + travelEmission;

    let grade = "";
    let tips = "";

    if (totalEmission < 100) {
        grade = "🟢 Grade A";
        tips = "🌱 Great job! Keep maintaining sustainable habits.";
    }
    else if (totalEmission < 250) {
        grade = "🟡 Grade B";
        tips = "🚲 Consider using public transport and reducing energy usage.";
    }
    else {
        grade = "🔴 Grade C";
        tips = "⚠ Reduce electricity consumption and travel emissions.";
    }

    document.getElementById("result").innerHTML =
        `
        <strong>Total Carbon Footprint:</strong>
        ${totalEmission.toFixed(2)} kg CO₂/month
        <br>
        <strong>${grade}</strong>
        `;

    document.getElementById("tips").innerHTML = tips;

    // Graph Bars
    const barElectricity =
        document.getElementById("barElectricity");

    const barTravel =
        document.getElementById("barTravel");

    const maxValue =
        Math.max(electricityEmission, travelEmission, 1);

    barElectricity.style.width =
        (electricityEmission / maxValue * 100) + "%";

    barTravel.style.width =
        (travelEmission / maxValue * 100) + "%";

    barElectricity.innerHTML =
        `⚡ Electricity: ${electricityEmission.toFixed(1)} kg CO₂`;

    barTravel.innerHTML =
        `🚗 Travel: ${travelEmission.toFixed(1)} kg CO₂`;

    // History
    let history =
        JSON.parse(localStorage.getItem("history")) || [];

    history.push(totalEmission.toFixed(1));

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    displayHistory();

    createPieChart(
        electricityEmission,
        travelEmission
    );

    createTrendChart(history);
}

function createPieChart(electricity, travel) {

    const canvas =
        document.getElementById("emissionChart");

    if (!canvas) return;

    if (pieChart) {
        pieChart.destroy();
    }

    pieChart = new Chart(canvas, {
        type: "pie",
        data: {
            labels: [
                "Electricity",
                "Travel"
            ],
            datasets: [{
                data: [
                    electricity,
                    travel
                ]
            }]
        }
    });
}

function createTrendChart(history) {

    const canvas =
        document.getElementById("trendChart");

    if (!canvas || history.length === 0) return;

    if (trendChart) {
        trendChart.destroy();
    }

    trendChart = new Chart(canvas, {
        type: "line",
        data: {
            labels:
                history.map(
                    (_, index) => "Run " + (index + 1)
                ),
            datasets: [{
                label: "Carbon Footprint",
                data: history
            }]
        }
    });
}

function displayHistory() {

    const history =
        JSON.parse(localStorage.getItem("history")) || [];

    const historyList =
        document.getElementById("historyList");

    if (!historyList) return;

    historyList.innerHTML = "";

    history.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            item + " kg CO₂";

        historyList.appendChild(li);
    });
}

function clearHistory() {

    localStorage.removeItem("history");

    document.getElementById("historyList").innerHTML = "";

    if (trendChart) {
        trendChart.destroy();
        trendChart = null;
    }
}

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}

function downloadReport() {

    const report =
        document.getElementById("result").innerText;

    const blob =
        new Blob(
            [report],
            { type: "text/plain" }
        );

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "carbon_report.txt";

    link.click();
}

window.onload = function () {
    displayHistory();
};
```
