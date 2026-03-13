# 🌤️ Weather Report Card
An interactive design template that fetches and displays real-time weather data from the OpenWeatherMap API, focusing on a clean and colorful user experience.
## 💻 Technologies
* HTML, JavaScript, and Tailwind CSS v4
* OpenWeather API (v2.5)
* 
## 🚀 Features
* **City Search:** Get weather reports for any city globally.
* **Smooth UI:** Features a blur-to-visibility animation when data loads.
* **Detailed Stats:** Displays Temp, Humidity, Wind Speed, and "Feels Like" metrics.

## 🧠 What I Learned
* **DOM Logic:** Using `document.getElementByID` and `classList` methods (`add`, `remove`, `replace`) to swap styles dynamically.
* **API Integration:** Handling asynchronous data with the **Fetch API**.
* **Randomization:** Using `Math.random()` to generate varied UI elements or logic.
* **Modern CSS:** Managing layouts and themes with the Tailwind CLI.

## ⚙️ The Process
I started by building the core logic—a simple input field and a fetch function to pull API data. Once the data was flowing correctly, I used Tailwind CSS to build the visual card. I focused on making the transition from "empty state" to "weather report" feel seamless using JavaScript to manipulate the DOM classes as the data arrived.

## ⚡ Running the Project
1. **Clone** the repo.
2. **Install Tailwind:** `npm install -D tailwindcss @tailwindcss/cli`
3. **Build CSS:** `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
4. **API Key:** Add your OpenWeatherMap key to the JS file.
5. **Launch:** Open `index.html`.

## 🖼️ Preview
The raw layout was transformed manually using tailwind classes I studied into a vibrant, modern card. Using Tailwind's utility-first approach, the design features a clean hierarchy of weather information, reinforced by subtle transition effects that make the data "pop" once the API call is successful. This Transformation can be clearly seen below:

### BEFORE STYLE
<img width="467" height="358" alt="Screenshot (1491)" src="https://github.com/user-attachments/assets/54d66efc-fc5f-4f08-ba97-164edc8c02ed" />


### AFTER STYLE (VIDEO)
https://github.com/user-attachments/assets/25aa5672-157a-40b5-bf97-dd10df4c2267


### SCREENSHOT OF DATA RECIEVED IN VIDEO 
<img width="277" height="505" alt="image" src="https://github.com/user-attachments/assets/199969ed-3859-47dc-8a38-9e517eef282b" />


