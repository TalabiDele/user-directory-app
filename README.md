# 📱 User Directory App

A simple React Native app built with Expo that fetches and displays users from
the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).

## 🚀 Features

- User List screen:
  - Displays **name**, **email**, and **company**
  - Supports **pull-to-refresh**
- User Detail screen:
  - Displays **name**, **email**, **phone**, **address**, and **company info**
- **React Navigation** for screen navigation
- **Redux Toolkit** with **Redux Thunk** for state management
- Loading and error states
- Styled with `StyleSheet` (can extend with UI libraries)

---

## 🛠️ Tech Stack / Libraries

- [Expo](https://expo.dev/) – for running the app
- [React Navigation](https://reactnavigation.org/) – navigation between screens
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
- [Redux Toolkit](https://redux-toolkit.js.org/) – state management
- [React Redux](https://react-redux.js.org/) – connect Redux with React
  components
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) – async logic/middleware
  for API calls
- [Axios](https://axios-http.com/) – HTTP client for fetching users

---

## 📂 Project Structure

UserDirectoryApp/ ├── src/ │ ├── components/ # Reusable UI components │ ├──
screens/ # Users, UserDetails │ ├── store/ # index, api │ ├── utils/ #
apiConfig, errorHandler │ ├── types/ # All types │ └── App.tsx

# ⚡ Getting Started

## Clone the repo

git clone https://github.com/yourusername/user-directory-app.git cd
user-directory-app

## Install dependencies

npm install

# or

yarn install

## Run the app

npx expo start

## Open on device/emulator

Use Expo Go on your phone, or

Run on iOS/Android simulator
