# 🔥 Resume Roast AI

An AI-powered web application that analyzes a resume and generates constructive, humorous, and actionable feedback using Groq.

Built as a production-style learning project to understand backend architecture, API development, frontend integration, and AI application deployment.

---

## ✨ Features

* 📄 Upload resumes as PDF files
* 🤖 AI-powered resume roasting using Groq
* ⚡ FastAPI backend with service-layer architecture
* 🎨 Modern React + Vite frontend
* 🔒 Environment variable management for API keys
* 🧩 Modular and maintainable project structure

---

## 🛠 Tech Stack

### Backend

* Python
* FastAPI
* Groq API
* PyPDF
* Uvicorn

### Frontend

* React
* TypeScript
* Vite
* CSS

### Development Tools

* Git
* GitHub

---

## 🏗 Project Structure

```text
resume-roast-ai/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── config/
│   │   ├── models/
│   │   ├── prompts/
│   │   ├── services/
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── assets/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## 💻 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a file named:

```text
backend/.env
```

Add:

```env
GROQ_API_KEY=youy_GROQ_API_KEY_
```

---

## 🚀 API Endpoints

### Roast Resume Text

```
POST /roast
```

### Roast Resume PDF

```
POST /roast-pdf
```

---

## 📚 What I Learned

This project helped me gain hands-on experience with:

* Designing REST APIs using FastAPI
* Service-layer architecture
* Working with GROQ APIs
* Extracting text from PDF files
* Building React frontends
* Connecting frontend and backend
* Managing environment variables securely
* Structuring a production-style application

---

## 🔮 Future Improvements

* User authentication
* Resume history
* Roast customization
* Better PDF parsing
* Docker support
* Cloud deployment
* CI/CD pipeline
* Automated testing

---

## 📄 License

MIT