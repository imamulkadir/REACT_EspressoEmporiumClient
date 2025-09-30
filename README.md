# ☕ Espresso Emporium

<div align="center">

![Espresso Emporium Logo](src/assets/headerLogo.png)

**A Full-Stack Coffee Management System**

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12.3.0-FFCA28.svg)](https://firebase.google.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.20.0-47A248.svg)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000.svg)](https://expressjs.com/)

_Sip & Savor - Relaxation in every sip!_

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [API Endpoints](#-api-endpoints)
- [Authentication](#-authentication)
- [Components](#-components)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Espresso Emporium** is a comprehensive coffee management system that allows users to browse, add, update, and manage coffee inventory. Built with modern web technologies, it provides a seamless experience for coffee enthusiasts and store managers.

### Key Highlights

- 🔐 **Secure Authentication** with Firebase
- 📱 **Responsive Design** for all devices
- ☕ **Coffee Management** - CRUD operations
- 👥 **User Management** with profiles
- 🎨 **Beautiful UI** with Tailwind CSS
- 🚀 **Fast Performance** with Vite

---

## ✨ Features

### 🔐 Authentication System

- **User Registration** with profile creation
- **Secure Login/Logout** functionality
- **Profile Management** with photo uploads
- **Session Management** with Firebase Auth

### ☕ Coffee Management

- **Browse Coffee Collection** with beautiful cards
- **Add New Coffee** with detailed information
- **Update Coffee Details** with pre-filled forms
- **View Coffee Details** in dedicated pages
- **Delete Coffee** with confirmation

### 👥 User Features

- **User Dashboard** with profile information
- **User List** for administrators
- **Profile Customization** with photos and details
- **Last Login Tracking**

### 🎨 UI/UX Features

- **Responsive Design** for mobile and desktop
- **Beautiful Hero Section** with coffee imagery
- **Interactive Components** with hover effects
- **Loading States** and error handling
- **Sweet Alerts** for user feedback

---

## 🛠 Tech Stack

### Frontend

- **React 19.1.1** - Modern UI library
- **Vite 7.1.7** - Fast build tool and dev server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **React Router 7.9.3** - Client-side routing
- **React Icons 5.5.0** - Icon library
- **SweetAlert2 11.23.0** - Beautiful alerts

### Backend

- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **MongoDB 6.20.0** - NoSQL database
- **CORS 2.8.5** - Cross-origin resource sharing

### Authentication & Database

- **Firebase 12.3.0** - Authentication service
- **MongoDB Atlas** - Cloud database
- **MongoDB Driver** - Database connectivity

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Nodemon** - Development server
- **DaisyUI** - Tailwind CSS components

---

## 📁 Project Structure

```
EspressoEmporium/
├── EE_Client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   ├── Hero.jsx       # Landing hero section
│   │   │   ├── Home.jsx       # Coffee listing page
│   │   │   ├── AddCoffee.jsx  # Add new coffee form
│   │   │   ├── UpdateCoffee.jsx # Update coffee form
│   │   │   ├── CoffeeDetails.jsx # Coffee detail view
│   │   │   ├── CoffeCard.jsx  # Coffee card component
│   │   │   ├── User.jsx       # User profile page
│   │   │   ├── Users.jsx      # User listing page
│   │   │   ├── Footer.jsx     # Site footer
│   │   │   ├── FollowUs.jsx   # Social media section
│   │   │   └── ErrorPage.jsx  # 404 error page
│   │   ├── pages/             # Page components
│   │   │   ├── SignIn.jsx     # Login page
│   │   │   └── SignUp.jsx     # Registration page
│   │   ├── context/           # React Context
│   │   │   ├── AuthContext.jsx # Auth context definition
│   │   │   └── AuthProvider.jsx # Auth context provider
│   │   ├── firebase/          # Firebase configuration
│   │   │   └── firebase.init.js
│   │   ├── layouts/           # Layout components
│   │   │   └── MainLayout.jsx # Main app layout
│   │   ├── assets/            # Static assets
│   │   │   ├── *.png          # Images and icons
│   │   │   └── *.jpg          # Background images
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # App entry point
│   │   └── index.css          # Global styles
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
│
└── EE_Server/                 # Backend Node.js Application
    ├── index.js               # Server entry point
    ├── package.json           # Backend dependencies
    └── .env                   # Environment variables
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB Atlas** account
- **Firebase** project

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/espresso-emporium.git
cd espresso-emporium
```

### 2. Backend Setup (EE_Server)

```bash
cd EE_Server
npm install
```

Create a `.env` file in the `EE_Server` directory:

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=3000
```

Start the backend server:

```bash
npm run dev
# or
npm start
```

### 3. Frontend Setup (EE_Client)

```bash
cd EE_Client
npm install
```

Start the development server:

```bash
npm run dev
```

### 4. Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password
3. Update `src/firebase/firebase.init.js` with your Firebase config

### 5. MongoDB Setup

1. Create a MongoDB Atlas cluster
2. Get your connection string
3. Update the connection string in `EE_Server/index.js`

---

## 🔌 API Endpoints

### Coffee Management

| Method   | Endpoint       | Description       |
| -------- | -------------- | ----------------- |
| `GET`    | `/coffees`     | Get all coffees   |
| `GET`    | `/coffee/:id`  | Get single coffee |
| `POST`   | `/coffees`     | Add new coffee    |
| `PUT`    | `/coffees/:id` | Update coffee     |
| `DELETE` | `/coffees/:id` | Delete coffee     |

### User Management

| Method   | Endpoint           | Description         |
| -------- | ------------------ | ------------------- |
| `GET`    | `/users`           | Get all users       |
| `GET`    | `/users?email=...` | Get user by email   |
| `POST`   | `/users`           | Create user profile |
| `PATCH`  | `/users`           | Update user data    |
| `DELETE` | `/users/:id`       | Delete user         |

### Coffee Data Structure

```json
{
  "_id": "ObjectId",
  "name": "Espresso Blend",
  "quantity": 50,
  "supplier": "Coffee Supplier Co.",
  "taste": "Rich and Bold",
  "price": "$4.99",
  "details": "Premium espresso blend with notes of chocolate and caramel",
  "photo": "https://example.com/coffee-image.jpg"
}
```

### User Data Structure

```json
{
  "_id": "ObjectId",
  "email": "user@example.com",
  "name": "John Doe",
  "photoURL": "https://example.com/profile.jpg",
  "address": "123 Main St, City, State",
  "phone": "+1234567890",
  "createdAt": "2025-01-01T00:00:00.000Z",
  "lastSignInTime": "2025-01-01T00:00:00.000Z"
}
```

---

## 🔐 Authentication

The application uses **Firebase Authentication** for secure user management:

### Features

- **Email/Password Authentication**
- **User Registration** with profile creation
- **Secure Login/Logout**
- **Session Management**
- **Protected Routes**

### Authentication Flow

1. User registers with email/password
2. Firebase creates authentication record
3. User profile is stored in MongoDB
4. Session is maintained across app
5. Protected routes check authentication status

### Context Usage

```jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const { user, profile, logout, createUser, signInUser } =
  useContext(AuthContext);
```

---

## 🧩 Components

### Core Components

#### Header Component

- **Responsive navigation** with logo and title
- **Authentication-aware** menu items
- **User profile display** with photo
- **Logout functionality**

#### Home Component

- **Coffee grid display** with cards
- **Add coffee button** for authenticated users
- **Real-time data loading** with React Router

#### Coffee Management

- **AddCoffee**: Form for adding new coffee items
- **UpdateCoffee**: Pre-filled form for editing
- **CoffeeDetails**: Detailed view of individual coffee
- **CoffeCard**: Reusable coffee display card

#### User Management

- **User**: Individual user profile page
- **Users**: List of all registered users
- **SignIn/SignUp**: Authentication forms

### Layout Components

- **MainLayout**: Main app wrapper with header/footer
- **Hero**: Landing page hero section
- **Footer**: Site footer with contact info
- **FollowUs**: Social media section

---

## 📱 Screenshots

### Home Page

![Home Page](src/assets/1.png)
_Beautiful coffee grid with responsive design_

### Coffee Details

![Coffee Details](src/assets/2.png)
_Detailed coffee information with high-quality images_

### User Authentication

![Authentication](src/assets/3.png)
_Clean and secure login/signup forms_

### Add Coffee

![Add Coffee](src/assets/4.png)
_Intuitive form for adding new coffee items_

---

## 🎨 Design Features

### Color Scheme

- **Primary**: `#664221` (Coffee Brown)
- **Secondary**: `#794c23` (Lighter Brown)
- **Accent**: `#D2B48C` (Tan)
- **Background**: `#F4F3F0` (Cream)

### Typography

- **Headings**: Rancho (Google Fonts)
- **Body**: Raleway (Google Fonts)
- **Responsive text sizes** with Tailwind classes

### UI Elements

- **Rounded corners** for modern look
- **Hover effects** for interactivity
- **Shadow effects** for depth
- **Gradient backgrounds** for visual appeal

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
cd EE_Client
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Heroku)

```bash
cd EE_Server
# Set environment variables
# Deploy with your preferred platform
```

### Environment Variables

```env
# Backend
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
PORT=3000

# Frontend (if needed)
VITE_API_URL=https://your-api-url.com
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Developer**: [Your Name](https://github.com/yourusername)
- **Design**: Custom design with Tailwind CSS
- **Icons**: React Icons library

---

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: info@espressoemporium.com
- 📱 **Phone**: +8801717171717
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/espresso-emporium/issues)

---

<div align="center">

**Made with ☕ and ❤️**

_Sip & Savor - Relaxation in every sip!_

[⬆ Back to Top](#-espresso-emporium)

</div>
