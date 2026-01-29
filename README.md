# ⏳ Timeny

**Spend your time wisely. Know your life.**

![Timeny App](https://raw.githubusercontent.com/ibayjimwell/Timeny/refs/heads/master/frontend/public/app-image.png)

🌐 **Live App:** [https://timeny.vercel.app/](https://timeny.vercel.app/)

---

## 📖 Overview

**Timeny** is a web app that gives users insight into their time based on **average human life expectancy** and their birthday.

It transforms simple birth data into meaningful, eye-opening information — helping people reflect on time, life milestones, and personal awareness.

No sign-up. No payments. Just instant insights.

---

## 🎯 Purpose

Timeny is designed to:

* Encourage awareness about how we spend time
* Provide interesting birthday-based statistics
* Deliver a simple yet thought-provoking experience

---

## 🚀 Features

### ⚡ Instant Access

Use the app immediately — no login or subscription required.

### 📊 Life Expectancy Insights

See estimated remaining lifetime based on global averages.

### 🎂 Birthday Information

Discover fun and informative data related to your birth date.

### 🎨 Simple & Clean UI

Designed for clarity and easy understanding.

---

## 🧠 Use Cases

| Type           | Description                                        |
| -------------- | -------------------------------------------------- |
| 🧍 Personal    | Reflect on your time and life milestones           |
| 🔬 Research    | Use birthday-based data for studies or experiments |
| 🧩 Integration | Use the public API in other apps or platforms      |

---

## 🔌 Public API

Timeny provides a simple API for developers.

```
https://timeny.vercel.app/api/?name=YOUR_NAME&birthday=TIMESTAMP
```

### Example

```
https://timeny.vercel.app/api/?name=John&birthday=915148800000
```

**Parameters**

| Param      | Description                                     |
| ---------- | ----------------------------------------------- |
| `name`     | Person's name                                   |
| `birthday` | Birth date in **Unix timestamp (milliseconds)** |

---

## 🧱 Tech Stack

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge\&logo=python\&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge\&logo=flask\&logoColor=white)
![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge\&logo=vuedotjs\&logoColor=%234FC08D)

* **Flask** — Backend API
* **Vue.js** — Frontend interface
* **Python** — Core logic

---

## 💡 How It Works

1. User enters name and birthday
2. The system calculates age and estimated remaining life
3. The API returns processed life statistics
4. The frontend presents the data in a readable format

---

## 🔮 Future Improvements

* Country-based life expectancy
* Milestone timeline visualization
* Dark mode
* Shareable results
* Life goals tracking

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a Pull Request

---

## 👨‍💻 Author

**Jimwell Ibay**
Creator & Maintainer
