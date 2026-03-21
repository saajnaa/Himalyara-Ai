# Himalyara AI

Himalyara AI is an intelligent chat application powered by Google's Gemini AI, designed to provide seamless conversational experiences. Built with a modern full-stack architecture, it combines a React-based frontend with a Node.js/Express backend to deliver real-time AI responses.

## Features

- **AI-Powered Conversations**: Integrated with Google's Gemini AI for natural language processing and responses.
- **Real-Time Chat Interface**: Interactive chat UI with message history and loading states.
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS.
- **Secure API Communication**: CORS-enabled backend with environment variable management.
- **Error Handling**: Comprehensive error handling for API failures and user feedback.
- **Modular Architecture**: Clean separation of frontend and backend components.

## Tech Stack

### Frontend
- **React**: Component-based UI library
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests
- **ESLint**: Code linting and formatting

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **LangChain**: Framework for building AI applications
- **Google AI (Gemini)**: AI model for conversational responses
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variable management
- **Nodemon**: Development server with auto-restart

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Google AI API Key** (obtain from [Google AI Studio](https://makersuite.google.com/app/apikey))

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd himalyara-ai
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```
   Gemini_API_KEY=your_google_ai_api_key_here
   PORT=3000
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   ```

## Usage

1. **Start the Backend Server:**
   ```bash
   cd backend
   npm start
   # or for development with auto-restart
   npx nodemon server.js
   ```
   The server will run on `http://localhost:3000`

2. **Start the Frontend Development Server:**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (default Vite port)

3. **Open your browser** and navigate to the frontend URL to start chatting with the AI.

## API Documentation

### POST /
Send a message to the AI and receive a response.

**Request Body:**
```json
{
  "Message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "content": "AI response content"
  }
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

### GET /
Health check endpoint.

**Response:**
```
"Welcome to Himlyara AI Server! Send a POST request with your message to get a response from the AI."
```

## Project Structure

```
himalyara-ai/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   ├── .env               # Environment variables
│   └── node_modules/      # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React app
│   │   ├── main.jsx       # App entry point
│   │   ├── index.css      # Global styles
│   │   ├── component/
│   │   │   ├── Chatai.jsx     # Chat input component
│   │   │   └── Chatsection.jsx # Chat display component
│   │   └── Header.jsx     # Header component
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── index.html         # HTML template
│   └── README.md          # Frontend-specific documentation
└── README.md              # Project root README (this file)
```

## Development

### Running Tests
```bash
# Backend tests (if implemented)
cd backend
npm test

# Frontend tests (if implemented)
cd frontend
npm test
```

### Building for Production
```bash
# Build frontend
cd frontend
npm run build

# Backend is ready to deploy as-is
cd backend
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Environment Variables

### Backend (.env)
- `Gemini_API_KEY`: Your Google AI API key
- `PORT`: Server port (default: 3000)

## Troubleshooting

### Common Issues

1. **API Key Errors**: Ensure your Google AI API key is valid and has access to Gemini models.
2. **CORS Issues**: The backend is configured with CORS, but check if your frontend is running on the correct port.
3. **Model Not Found**: Verify the model name in `server.js` matches available models for your API key.
4. **Port Conflicts**: Change the PORT in .env if 3000 is already in use.

### Debug Mode
Run the backend with debug logging:
```bash
cd backend
DEBUG=* npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google AI for providing the Gemini model
- LangChain for the AI integration framework
- React and Vite communities for excellent documentation and tools

---

For more information or support, please open an issue in the repository.