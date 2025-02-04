📊 Number Classification API
🔗 Live Demo
🚀 API Base URL: Number Classification API

📝 Project Description
The Number Classification API is a simple RESTful service that provides mathematical properties and fun facts about any given number. It determines whether a number is prime, perfect, Armstrong, and more.

🎯 Features
✅ Classifies numbers based on various mathematical properties
✅ Fetches fun facts using the Numbers API
✅ Returns JSON responses in a structured format
✅ Handles errors gracefully
✅ Deployed on Render, making it publicly accessible

🚀 API Usage
1️⃣ Classify a Number
Endpoint:

http
Copy
Edit
GET /api/classify-number?number=<your_number>
Example Request:

http
Copy
Edit
GET https://number-classification-api-0erc.onrender.com/api/classify-number?number=371
Example Response (200 OK):

json
Copy
Edit
{
"number": 371,
"is_prime": false,
"is_perfect": false,
"properties": ["armstrong", "odd"],
"class_sum": 11,
"fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
2️⃣ Handling Errors
If an invalid input is provided, the API returns a 400 Bad Request error.
Example Request:

http
Copy
Edit
GET https://number-classification-api-0erc.onrender.com/api/classify-number?number=abc
Example Response (400 Bad Request):

json
Copy
Edit
{
"number": "abc",
"error": true
}
🛠️ Tech Stack
Node.js + Express.js
Numbers API (for fun facts)
Deployed on Render
🛠️ How to Run Locally
1️⃣ Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api
2️⃣ Install dependencies:

bash
Copy
Edit
npm install
3️⃣ Create a .env file in the root directory and add:

makefile
Copy
Edit
PORT=3000
4️⃣ Start the server:

bash
Copy
Edit
npm start
The API will be available at http://localhost:3000/api/classify-number?number=371.

🤝 Contributing
Feel free to submit issues or pull requests to improve this API!

Let me know if you want any more changes! 🚀🔥
