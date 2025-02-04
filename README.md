# Number Classification API

## Overview

The **Number Classification API** is a simple yet powerful API built with **Node.js** and **Express.js**. It classifies numbers based on mathematical properties and fetches interesting fun facts about them from the [Numbers API](http://numbersapi.com/).

## Features

✅ Classifies a number as **Prime**, **Perfect**, **Armstrong**, **Even**, or **Odd**  
✅ Fetches fun facts about numbers from [Numbers API](http://numbersapi.com/)  
✅ Handles errors gracefully  
✅ Deployed and publicly accessible

## Live API Endpoint

🚀 **Base URL:** `https://your-api-url.com/api/classify-number?number=<number>`  
📌 Replace `<number>` with any number you want to classify.

### Example Request:

```sh
GET https://your-api-url.com/api/classify-number?number=371
```

### Example Response:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "class_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

---

## Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/number-classifier-api.git
cd number-classifier-api
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run Locally

```sh
npm start
```

👉 API runs at `http://localhost:3000/api/classify-number?number=371`

---

## Deployment

This API can be deployed using **Railway**, **Render**, **Vercel**, or **Heroku**.

### Deploy on Railway (Recommended)

1. Push your code to **GitHub**:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/number-classifier-api.git
   git push -u origin main
   ```
2. Deploy on **Railway**:
   - Sign up at [Railway.app](https://railway.app/)
   - Create a new project
   - Connect your **GitHub Repo**
   - Deploy! 🚀

---

## API Details

### **Endpoint:** `/api/classify-number`

#### **Request Parameters:**

| Parameter | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| `number`  | Number | ✅ Yes   | The number to be classified |

#### **Response Fields:**

| Field        | Type    | Description                                                   |
| ------------ | ------- | ------------------------------------------------------------- |
| `number`     | Number  | The input number                                              |
| `is_prime`   | Boolean | Whether the number is prime                                   |
| `is_perfect` | Boolean | Whether the number is perfect                                 |
| `properties` | Array   | List of classifications (Prime, Even, Odd, etc.)              |
| `class_sum`  | Number  | Sum of the digits of the number                               |
| `fun_fact`   | String  | A fun fact fetched from [Numbers API](http://numbersapi.com/) |

---

## Error Handling

The API gracefully handles errors and returns appropriate responses.

### **Example Invalid Request:**

```sh
GET https://your-api-url.com/api/classify-number?number=abc
```

**Response:**

```json
{
  "number": "abc",
  "error": true,
  "message": "Invalid input, must be a number"
}
```

---

## Technologies Used

- **Node.js** + **Express.js**
- **Axios** (for external API requests)
- **Cors** (for cross-origin support)
- **Dotenv** (for environment variables)

---

## License

This project is **open-source** and available under the **MIT License**.

---

## Contact

💻 **GitHub:** @aiyus2020(https://github.com/aiyus2020)  
📧 **Email:** aiyusboss@gmail.com
