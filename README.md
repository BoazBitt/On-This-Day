# Wikipedia "On This Day" Featured Events Landing Page

## Overview
This static website was developed as part of a job interview task. It dynamically displays the "On This Day" selected historical events from Wikipedia's API, designed to function similarly to our landing page. The interface utilizes MUI (Material-UI) for its React components, providing a polished and responsive design.

## Features

- **Responsive Web Design**: Ensures the webpage is functional and visually appealing on desktops, tablets, and mobile devices.
- **Theme Toggling**: Users can switch between light and dark mode using React Context.
- **Data Fetching and Caching**: Utilizes `@tanstack/react-query` for efficient data fetching and caching from the Wikipedia API.
- **Accessibility Features**: Implements accessibility features to make the website usable for people with disabilities.
- **Performance Optimizations**: Includes techniques to enhance the site's performance and speed.

## Technology Stack

- **React.js**: For building the user interface.
- **TypeScript**: For adding type safety to the JavaScript code.
- **React Context**: For state management across the application, particularly for theme toggling.
- **@tanstack/react-query**: For managing server state in React applications, specifically for data fetching, caching, and updating.

## API Endpoint

This application fetches data from the Wikipedia API:
`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/{MM}/{DD}`

## Technology Stack

- **React**: For building the user interface.
- **TypeScript**: Provides static type checking.
- **React Context**: Used for managing theme state.
- **@tanstack/react-query**: Used for fetching, caching, and updating the API data.

## Setup and Deployment

### Local Development

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd [project-directory]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Open http://localhost:3000 to view it in the browser.

### Deployed Application

The website is deployed and can be accessed at the following URL:
[Deployed Website Link Here](https://on-this-day.onrender.com)
