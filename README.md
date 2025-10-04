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

  - `expo`: ~54.0.12
  - `expo-status-bar`: ~3.0.8

- [React Navigation](https://reactnavigation.org/) – navigation between screens

  - `@react-navigation/native`: ^7.1.17
  - `@react-navigation/native-stack`: ^7.3.26
  - `react-native-gesture-handler`: ^2.28.0
  - `react-native-reanimated`: ^4.1.2
  - `react-native-safe-area-context`: ^5.6.1
  - `react-native-screens`: ^4.16.0

- [Redux Toolkit](https://redux-toolkit.js.org/) – state management

  - `@reduxjs/toolkit`: ^2.9.0

- [React Redux](https://react-redux.js.org/) – connect Redux with React
  components

  - `react-redux`: ^9.2.0

- [Redux Thunk](https://github.com/reduxjs/redux-thunk) – async logic/middleware
  for API calls

- [React](https://react.dev/) – core framework

  - `react`: 19.1.0
  - `react-native`: 0.81.4

- [React Native Dotenv](https://www.npmjs.com/package/react-native-dotenv) –
  environment variables
  - `react-native-dotenv`: ^3.4.11

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
