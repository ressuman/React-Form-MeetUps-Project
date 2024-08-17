# React Form Meetups App

Welcome to the React Meetups App! This application allows users to browse, add, and manage meetups. It includes features such as adding new meetups, viewing all meetups, and managing favorite meetups.

## Table of Contents

- [React Form Meetups App](#react-form-meetups-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Components](#components)
  - [Environment Variables](#environment-variables)
  - [License](#license)
    - [Gif](#gif)
  - [](#)
    - [React + Vite](#react--vite)

## Features

- **View All Meetups:** Browse a list of all available meetups.
- **Add New Meetup:** Add new meetups with title, image, address, and description.
- **Manage Favorites:** Add or remove meetups from your favorites list.
- **Error Handling:** Includes error handling for fetching and posting data.

## Technologies

- **React:** JavaScript library for building user interfaces.
- **React Router DOM:** For client-side routing.
- **Axios:** For making HTTP requests.
- **Firebase:** Used as a backend for storing and retrieving meetups.
- **PropTypes:** For type-checking props in React components.
- **Tailwind CSS:** For styling (if applicable).

## Setup

To set up this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-meetups-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd react-meetups-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory of the project with the following content:**

   ```env
   VITE_REACT_BACKEND_FIREBASE_DATABASE_SERVER_URL=https://your-firebase-project.com
   ```

5. **Start the development server:**

   ```bash
   npm start
   ```

6. **Open the application in your browser:**

   Visit `http://localhost:3000` to view the app.

## Usage

- **Viewing Meetups:** Navigate to the home page to view all available meetups.
- **Adding Meetups:** Go to the "Add New MeetUp" page to add a new meetup.
- **Managing Favorites:** Click on the "My Favorites" link to manage your favorite meetups.

## Components

- **MainNavigation:** Provides navigation links for the app.
- **MeetUpList:** Displays a list of meetups.
- **MeetUpItem:** Represents a single meetup item.
- **NewMeetUpForm:** Form for adding a new meetup.
- **FavoritesContext:** Context provider for managing favorite meetups.

## Environment Variables

- **VITE_REACT_BACKEND_FIREBASE_DATABASE_SERVER_URL:** URL for Firebase Realtime Database. Replace with your Firebase project URL.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Gif

Here is an expected gif of the preview of the App(React Form Meetups Management)

## ![React Form Meetups Management gif](./src/assets/meetups.gif)

---

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
