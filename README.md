# GlucoGuide - Diabetes Management App

A mobile application built with React Native and Expo for helping people manage their diabetes effectively.

## Features

- User Authentication (Sign up, Login, Password Reset)
- Glucose Level Tracking
- Medication Management
- Health Insights
- Secure Data Storage with Firebase

## Tech Stack

- React Native
- Expo
- TypeScript
- Firebase (Authentication & Firestore)
- React Navigation

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Sentebale93/diabetes-app.git
cd diabetes-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Firebase configuration:
```
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npx expo start
```

## Project Structure

```
diabetes-app/
├── app/                    # Main application code
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Main app tabs
│   ├── config/            # Configuration files
│   ├── hooks/             # Custom React hooks
│   └── services/          # API and service functions
├── assets/                # Static assets
└── types/                 # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
