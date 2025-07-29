# Dine Connect Frontend

A modern restaurant reservation and review web application built with React and Vite.

## Project Description
Dine Connect is a web platform that allows users to discover restaurants, make reservations, and leave reviews. It features role-based dashboards for admins, owners, and regular users, with a focus on a seamless and interactive user experience.

## Features
- User authentication (login/signup)
- Restaurant search and filtering
- Restaurant details with reviews and ratings
- Reservation booking and management
- Admin dashboard for restaurant management
- Owner dashboard for managing owned restaurants
- Responsive design and user-friendly UI

## Live Demo
[Live Web App](https://dineconnect.netlify.app)

## Repository
[GitHub Repository](https://github.com/NeslynChellaiah/csci_5709_frontend)

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NeslynChellaiah/csci_5709_frontend.git
   cd csci_5709_frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and store VITE_MAPBOX_API_KEY=<GOOGLE_MAPS_KEY>

### Running the App
To start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production
```bash
npm run build
```

### Running Tests
```bash
npm run test
```

## Usage
- **Login/Signup:** Create an account or log in to book reservations and leave reviews.
- **Home Page:** Browse and search for restaurants.
- **Restaurant Details:** View restaurant info, reviews, and make a reservation.
- **Admin Dashboard:** Manage all restaurants, approve or edit listings.
- **Owner Dashboard:** Manage your own restaurants and view bookings.
- **404 Page:** Custom not found page for invalid routes.

## API & Services Documentation
[Backend Code Repository](https://github.com/Siva-2707/DineConnect)

### Base URL
The frontend communicates with a backend API. Set the `BASE_URL` in `constants.js` or via environment variables.

### Main Endpoints
- `GET /restaurants` — List all restaurants
- `POST /restaurants/filter` — Filter restaurants by criteria
- `GET /restaurants/:id` — Get details for a specific restaurant
- `POST /auth/login` — User login
- `POST /auth/signup` — User registration
- `POST /reservations` — Create a reservation
- `GET /reservations/user` — Get user reservations
- `GET /reviews/:restaurantId` — Get reviews for a restaurant
- `POST /reviews` — Add a review

> **Note:** All endpoints requiring authentication expect a JWT token in the `Authorization` header.

---

**Repository Link:** [https://github.com/NeslynChellaiah/csci_5709_frontend](https://github.com/NeslynChellaiah/csci_5709_frontend)

**Live App:** [https://dineconnect.netlify.app](https://dineconnect.netlify.app)
