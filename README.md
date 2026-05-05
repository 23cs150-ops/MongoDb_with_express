# Mogo with Express

A simple chat application built with Express.js and MongoDB. This app allows you to view and create chat messages between users.

## Features

- View all chat messages
- Create new chat messages between users
- Store chats in MongoDB database
- Clean UI with EJS templating

## Tech Stack

- **Backend**: Express.js 5.2.1
- **Database**: MongoDB with Mongoose 9.6.1
- **Template Engine**: EJS 5.0.2
- **Runtime**: Node.js

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Prerequisites

- Node.js installed
- MongoDB running locally on `mongodb://127.0.0.1:27017`

## Setup

1. Make sure MongoDB is running on your local machine
2. (Optional) Run `init.js` to populate the database with sample data:
   ```bash
   node init.js
   ```

## Running the Application

Start the server:
```bash
node index.js
```

The application will:
- Connect to MongoDB at `mongodb://127.0.0.1:27017/whatsapp`
- Display "Connected to MongoDB" in the console
- Server is ready to accept requests

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/chats` | GET | Display all chats |
| `/chats/new` | GET | Show form to create a new chat |
| `/chats` | POST | Create a new chat message |

## Project Structure

```
.
├── index.js           # Main Express application
├── init.js            # Database initialization script
├── package.json       # Project dependencies
├── model/
│   └── chat.js        # Mongoose Chat schema
├── views/
│   ├── index.ejs      # Display all chats
│   ├── new.ejs        # Create new chat form
│   └── edit.ejs       # Edit chat (if needed)
└── public/
    └── style.css      # Stylesheet
```

## Chat Schema

```javascript
{
  from: String,
  to: String,
  message: String,
  created_st: Date
}
```

## Future Enhancements

- Add edit and delete functionality for chats
- Add user authentication
- Add real-time messaging with WebSockets
- Add message search functionality
- Add pagination for chat list
