# Smart Plant Care

A hybrid mobile app integrated with IoT sensors to automate manual plant care activities — built with React Native, Arduino, and Firebase.

Smart Plant Care replaces reminder-only plant care apps with real sensor-driven automation. The system monitors soil moisture, air temperature, humidity, and light intensity in real time, and automatically triggers watering, heating, and misting actions — notifying the user through the app before each action, with an automatic fallback if the user doesn't respond within 3 minutes.

> 🎓 **Final Year Project** — BS Software Engineering, University of Lahore (2023)

---

## Demo Video

▶️ Application Working:https://drive.google.com/file/d/18Uzqt_LboNuaEWIIA-XlWhO1prudm2D3/view?usp=sharing
IndoorPrototype:https://drive.google.com/file/d/1oI2E7gGnw5mutjMu7y5DV0gcXS_NHafr/view?usp=sharing
OutdoorPrototype:https://drive.google.com/file/d/1gqTOqDB86cckG9rwSk3mLDb5vtcdUOuj/view?usp=sharing

> The physical prototype was submitted to the university as part of the FYP requirement. The demo videos above shows the complete system working — sensors detecting conditions, Firebase receiving real-time data, and the app triggering automated plant care actions.

---

## Features

- **Real-Time Sensor Monitoring** — soil moisture, temperature, humidity, and light intensity data streamed live from Arduino to Firebase
- **Automated Watering** — pump activates automatically when soil moisture drops below threshold; turns off when sufficient moisture is detected
- **Automated Heating** — bulb activates when temperature falls below threshold to provide heat to indoor plants
- **Automated Misting/Sprinkling** — sprinkler activates when temperature exceeds threshold to cool outdoor plants
- **Push Notifications** — user is notified before each automated action with a 3-minute response window; system acts automatically if no response
- **Plant Categorization** — supports Indoor, Outdoor, Seasonal, Fruit, and Vegetable plant types
- **Analysis Reports** — daily, weekly, and monthly reports showing watering, sprinkling, and heating duration — a feature missing from existing plant care apps
- **Disease Detection** — plant disease identification via image scanning
- **User Authentication** — secure sign up, sign in, and profile management via Firebase Auth

---

## Tech Stack

- **Mobile App:** React Native, Expo
- **IoT Hardware:** Arduino (microcontroller), Soil Moisture Sensor, DHT Temperature & Humidity Sensor, Light Intensity Sensor, Water Pump, Relay Module, Sprinkler
- **Backend / Database:** Firebase (Authentication, Firestore, Realtime Database, Storage)
- **Language:** JavaScript

---

## System Architecture

```
Arduino (sensors) → Firebase Realtime Database → React Native App → Push Notification to User
                                                                  ↓
                                               Automated action (pump/bulb/sprinkler)
```

---

### Splash Screen

![Splash Screen](ScreenShots/SplashScreen.png)

App landing screen with the Smart Plant Care logo and tagline.

<br>

### Sign In

![Sign In](ScreenShots/LoginScreen.png)

Secure login screen powered by Firebase Authentication.

<br>

### Home

![Home](ScreenShots/HomeScreen.png)

Main dashboard showing the three core modules — **Indoor Plants**, **Outdoor Plants**, and **Analysis Report** — with a quick summary of available actions for each.

<br>

### Categories

![Categories](ScreenShots/CategoriesScreen.png)

Plant categorization screen supporting **Indoor, Outdoor, Seasonal, Fruit, and Vegetable** plant types.

<br>

### Read Plant

![Read Plant](ScreenShots/ReadPlantScreen.png)

Displays detailed information about a selected plant, including its name, category, watering schedule, and care instructions.

<br>

### Notifications

![Notifications](ScreenShots/NotificationScreen.png)

Real-time automated alerts triggered by sensor data, notifying users when watering or heating is required.

<br>

### Analysis Report

![Analysis Report](ScreenShots/AnalysisReportScreen.png)

Provides daily, weekly, and monthly insights into watering, sprinkling, and heating activities, helping users monitor plant care performance over time.

<br>

---
---

## Getting Started

This repository contains the mobile application source code (React Native/Expo). The Arduino firmware code is not included as the physical prototype was submitted to the university.

To run the app locally, you will need your own Firebase project and configuration:

1. Clone the repository
   ```
   git clone https://github.com/1010rabiaasif-lgtm/Smart-Plant-Care.git
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Add your Firebase configuration in `firebase/firebase.config.js`
4. Start the app
   ```
   npx expo start
   ```

> **Note:** This project was built with Expo SDK 46. You may need a compatible Expo Go version or a local development build to run it.

---

## Author

**Rabia Asif**
React Native Developer
[1010rabiaasif@gmail.com](mailto:1010rabiaasif@gmail.com)
[GitHub](https://github.com/1010rabiaasif-lgtm)
