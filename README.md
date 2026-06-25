# NexWork

**NexWork** (Next Generation Work) is a modern web platform that connects clients and freelancers for digital, project-based work. It enables clients to post jobs, manage contracts, define milestones, and review deliverables, while freelancers can browse opportunities, submit proposals, and track work through structured project phases.

---

## 🚀 Tech Stack

* **Frontend:** React (JavaScript, Vite)
* **Backend-as-a-Service:** Firebase

  * Authentication (Email/Password, Google)
  * Cloud Firestore (Database)
  * Firebase Storage (File uploads)
* **Hosting/Deployment:** Azure Static Web Apps

---

## 📦 Features (Phase 1 - Current)

* User authentication (Register/Login)
* Role-based access (Client / Freelancer)
* Firestore user profiles
* Protected routes setup
* Basic client and freelancer dashboards
* Firebase project integration
* Azure deployment-ready structure

---

## 🏗️ Project Structure

```
src/
│
├── components/
|
├── contexts/
│   └── AuthContext.jsx
|
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ClientDashboard.jsx
│   └── FreelancerDashboard.jsx
│
├── contexts/
│   └── AuthContext.jsx
│
├── firebase/
│   └── firebase.js
|
├── stylesheets/
│
├── App.jsx
└── main.jsx
```

---


## ⚙️ Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/DevQuestKhuselo/NexWork.git

# Navigate into the project
cd NexWork

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧭 Roadmap

### Phase 1 (Current)

* Authentication system
* Role-based users
* Firebase setup
* Basic dashboards

### Phase 2

* Job posting system
* Job browsing & search
* Proposal submissions

### Phase 3

* Contracts & milestones
* Deliverable uploads
* Approval workflow

### Phase 4

* Messaging system
* Notifications
* Reviews & ratings

### Phase 5

* Payments integration
* Advanced analytics
* AI job matching

---

## 💡 Vision

NexWork aims to simplify how digital work is discovered, managed, and delivered by combining structured workflows (milestones, contracts) with real-time collaboration tools.

---

## 📌 Author

Built by Khuselo Sofohlo

Computer Science Student | Software Developer | Aspiring Systems Builder
