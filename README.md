# Random Users

A modern, responsive web application that fetches and displays random user profiles using the **Random User API**.  
The project focuses on clean UI/UX, smooth animations, and good frontend development practices using **vanilla HTML, CSS, and JavaScript**.

---

## 🌐 Live Demo

https://bhavanish-mantri.github.io/Random-users/

---

## 🧠 Learning Outcomes

While building this project, the following concepts and skills were practiced and strengthened:

- Working with **public APIs** using the Fetch API
- Handling **asynchronous data loading** in JavaScript
- Dynamically creating and updating DOM elements
- Implementing a **skeleton loader** to improve perceived performance
- Adding **fade-in animations** using CSS keyframes
- Managing application state using **localStorage**
- Implementing **Dark and Light mode** using CSS variables
- Designing clean and responsive layouts using **Flexbox**

This project helped reinforce real-world frontend development practices and improved understanding of building interactive, user-friendly interfaces without relying on frameworks.

---

## 🛠️ Project Structure
```
Random-users/
├── index.html
├── style.css 
├── script.js 
└── README.md
```

---

## 📚 How It Works

- On load, the app displays **skeleton cards** to indicate loading.
- A request is sent to the Random User API to fetch user data.
- Once data is received:
  - Skeletons are removed
  - User cards are dynamically created and inserted into the DOM
  - Cards appear with a smooth fade-in animation
- The **Refresh Users** button repeats this process.
- Theme toggling is handled using CSS variables and JavaScript, with persistence via `localStorage`.

---

## 🎨 UI & UX Highlights

- Subtle gradient background for visual comfort
- Elevated card design with soft shadows
- Skeleton loading improves perceived performance
- Fade-in animation enhances visual flow
- Clear separation between primary (refresh) and secondary (theme) actions

---


## 📌 Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Variables, Animations)
- JavaScript (ES6+, Fetch API, DOM manipulation)
- Random User API

---

## 🚀 Future Improvements

- Add error UI for failed API requests
- Add loading spinner fallback for slow networks
- Improve accessibility (ARIA labels, keyboard navigation)
- Allow user count selection
- Convert to a framework version (React / Vue)

---

## 📄 License

This project is **open-source** and intended for learning, practice, and portfolio use.
