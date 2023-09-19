# Design Document for FlightBuddy App

## Introduction

This design document outlines the architecture and design considerations for the FlightBuddy application, which consists of two main repositories: the front-end repository [FlightBuddy](https://github.com/omer117/FlightBuddy) and the back-end repository [FlightBuddyServer](https://github.com/omer117/FlightBuddyServer).

FlightBuddy is an application designed to provide users with real-time information and assistance related to flights, including flight tracking, booking, and airport-related services. The front-end repository contains the client-side code, while the back-end repository contains the server-side code and database management.

## Front-end Repository (FlightBuddy)

### Technologies Used

- **Framework**: React.js
- **Styling**: CSS Modules
- **API Integration**: Axios
- **Routing**: React Router

### Project Structure

- `src/`

  - `components/`: Contains React components organized by their functionality.
  - `pages/`: Contains every page of the app.
  - `assets/`: contains images and Accompanied files.
  - `App.js`: Main entry point of the application.

### Application Flow

1. **User Authentication**

   - Users can sign up and log in to access personalized features.

2. **Dashboard**
   - After authentication, users land on the dashboard.
   - The user selects airports relevant to his search and sends them to the smart search algorithm. 5 results of different airports that will match are obtained.

3. **Flight Info**
   - Users can see different flights number and departure/arrival airports.


### Deployment

- Deployment on Render.




## Back-end Repository (FlightBuddyServer)

### Technologies Used

- **Framework**: Node.js (Express.js)
- **Database**: MongoDB
- **Authentication**: JWT

### Project Structure

- `src/`
  - `controllers/`: Contains route handlers.
  - `models/`: Defines data models (e.g., User, Flight).
  - `routes/`: Defines API routes.
  - `app.js`: Main entry point of the server.

### Authentication 

- JWT authentication, with encryption on the server side with bcrypt.

### Deployment

- Deployment on Render .
