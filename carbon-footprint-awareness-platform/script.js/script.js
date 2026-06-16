function calculateFootprint() {
    let electricity = document.getElementById("electricity").value;

    if (electricity === "") {
        alert("Please enter electricity usage.");
        return;
    }

    let footprint = electricity * 0.85;

    document.getElementById("result").innerHTML =
        "Estimated Carbon Footprint: " +
        footprint.toFixed(2) +
        " kg CO₂";
}