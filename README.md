# FAST-StudyCircle

**FAST-StudyCircle** is a web-based peer tutoring platform designed for students of FAST University. It connects juniors seeking help in their courses with verified seniors who have excelled in those subjects. The platform fosters academic collaboration, allowing juniors to post help requests and seniors to apply for tutoring roles.

---

## 🚀 Features

- Juniors can post help requests for specific courses.
- Seniors can apply to tutor based on their grades and course expertise.
- Request status tracking – juniors can view which requests are pending, approved, or fulfilled.
- Search and filter options – juniors can browse tutors by course, semester, or availability.
- Availability scheduling – seniors can set tutoring slots.
- Admin approval system for verifying tutor applications.
- Mail Sending as welcome greetings when a user signs up and for password reset as well.
- Streamlined communication between juniors and seniors.
- Authentication and authorization to manage secure access for juniors, seniors, and admins.
- Built with a focus on usability and performance.
- Responsive UI works well on desktop, tablet, and mobile.
- MySQL-backed database to persist users, requests, and applications, making more than 10 normalized tables.
- Robust backend API built with Express.js for handling all CRUD operations.

---

## 📂 Project Structure

- FAST-StudyCircle/
- ├── backend/ # Express server for managing API and DB
- │ ├── server.js # Entry point of the backend
- │ └── ... # Other backend files (routes, models, etc.)
- └── frontend/ # Frontend built with React
- └── ... # All React component files and config


---

## ⚙️ Getting Started

Follow the steps below to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/smshozab/FAST-StudyCircle.git
cd FAST-StudyCircle
```

### 2. Run the Backend
```bash
cd backend
npm install
node server.js
```
This starts the backend server.

### 3. Run the Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
This starts the frontend development server.

### 🛠 Tech Stack
- Frontend: React.js, TailwindCSS
- Backend: Node.js, Express.js
- Database: MongoDB

### 🤝 Contributing
Contributions are welcome! If you find a bug or have a feature request, open an issue or submit a pull request.

### 📬 Contact
For questions, suggestions, or feedback, feel free to reach out or open an issue on the repo.

Made with ❤️ for the FAST University community.
