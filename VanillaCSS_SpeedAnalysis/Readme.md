# ⚡ Speed Test Analysis

A simple and interactive typing speed test application designed to measure your words per minute (WPM) with an intuitive interface and real-time feedback.

## 💻 Technologies

- HTML, JavaScript, and Vanilla CSS
- No external frameworks or libraries required

## 🚀 Features

- **Typing Speed Test:** Challenge yourself to retype a provided text as accurately and quickly as possible.
- **Auto-Fill Reference Text:** The text to type is automatically populated when you click "Start Test".
- **Real-Time Analysis:** Calculate words per minute (WPM) and time elapsed instantly.
- **Responsive Results Card:** Results are hidden by default and only appear after the test ends with smooth scrolling into view.
- **organized Results Display:** Metrics are displayed in a grid layout with labels on the left and corresponding figures on the right for easy comparison.
- **Smooth UI:** Clean and responsive design with an eye-catching gradient background.
- **Focus Management:** Auto-focus on input field when test starts for seamless interaction.

## 🧠 What I Learned

- **DOM Manipulation:** Using `document.getElementById()`, `addEventListener`, and `innerHTML` to dynamically update the UI based on test results.
- **Time Tracking:** Implementing precise timing mechanisms using `new Date().getTime()` to measure test duration in milliseconds.
- **Text Processing:** Parsing user input with regex (`/\s+/`) to accurately count words and filter empty strings.
- **Dynamic Button Behavior:** Toggling button functionality between starting and ending the test with `onclick` handlers.
- **Display Types:** Understanding how to conditionally toggle the visibility of elements using `display: none` and `block` to show/hide the results card only when the test concludes.
- **CSS Grid Layout:** Using CSS Grid to structure the results display with two columns—labels on the left and numerical values on the right—for a clean, organized presentation.
- **Linear Gradients:** Creating visually appealing backgrounds with multi-color linear gradients using `linear-gradient(135deg, color1, color2)` to achieve depth and modern aesthetics.
- **Flexbox Layout:** Leveraging flexbox properties (`display: flex`, `align-items`, `justify-content`) to center content and create responsive, flexible layouts.

## ⚡ Running the Project

1. **Clone** the repo.
2. **Launch:** Open `speed_analysis.html` in your browser.
3. **Start Test:** Click the "Start Test" button.

## 🖼️ Preview

https://github.com/user-attachments/assets/ec743863-ed2c-4912-9bea-c619ea7c475a



