# 🌱 Carbon Footprint Awareness Platform

## 📌 Project Overview

The Carbon Footprint Awareness Platform is a web-based application designed to help users estimate their monthly carbon emissions based on electricity consumption and travel distance. The platform promotes environmental awareness by providing carbon footprint calculations, eco-ratings, visual emission analysis, and sustainability tips.

---

## 🎯 Objectives

* Raise awareness about personal carbon emissions.
* Encourage environmentally friendly habits.
* Provide a simple and interactive carbon footprint calculator.
* Visualize emission sources through graphs.
* Store previous calculations for comparison and tracking.

---

## ✨ Features

### 🔋 Electricity Emission Calculator

Calculates carbon emissions based on monthly electricity usage (kWh).

### 🚗 Travel Emission Calculator

Estimates emissions based on travel distance (km).

### 📊 Emission Graph

Displays a visual comparison of electricity and travel emissions.

### 🏆 Eco Rating System

Provides an environmental score:

* 🟢 Grade A – Low Carbon Impact
* 🟡 Grade B – Moderate Carbon Impact
* 🔴 Grade C – High Carbon Impact

### 💾 Calculation History

Stores previous calculations using browser Local Storage.

### 🎨 Modern User Interface

Responsive and eco-themed design for better user experience.

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript
* Local Storage API
* Git & GitHub

---

## 📐 Calculation Formula

### Electricity Emissions

Carbon Emissions = Electricity Usage × 0.92

### Travel Emissions

Carbon Emissions = Travel Distance × 0.21

### Total Carbon Footprint

Total Emissions = Electricity Emissions + Travel Emissions

---

## 📂 Project Structure

carbon-footprint-awareness-platform/

├── index.html

├── style.css

├── script.js

└── README.md

---

## 🚀 How to Run the Project

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html`.
4. Run using Live Server or any modern web browser.
5. Enter electricity and travel values.
6. Click **Calculate** to view results.

---

## 🌍 Future Enhancements

* Food consumption carbon analysis
* Water usage tracking
* Renewable energy recommendations
* Monthly carbon footprint reports
* Interactive charts and dashboards
* User authentication system

---

## 📸 Sample Input

Electricity Usage: 150 kWh

Travel Distance: 100 km

### Sample Output

Total Carbon Footprint: 159.00 kg CO₂/month

Eco Rating: Grade B

---

## 🎓 Academic Relevance

This project demonstrates the practical implementation of:

* Front-End Web Development
* User Interface Design
* Environmental Sustainability Concepts
* Data Visualization
* Local Storage Management

---

## 👩‍💻 Author

**Harshitha KC**

Bachelor of Computer Applications (BCA)

Academic Mini Project – Carbon Footprint Awareness Platform

---

## 📜 License

This project is developed for educational and academic purposes.


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
