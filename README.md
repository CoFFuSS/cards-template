# React Redux Toolkit Query App

This is a simple React application that demonstrates the use of Redux Toolkit and Redux Toolkit Query to fetch and manage posts from an API. The application includes a basic front-end where users can view posts, log in, and see detailed information about each post along with its comments.

## Features

- **Main Page**: Displays a list of posts fetched from an API using Redux Toolkit Query.
- **Login**: Users can log in by entering a username. If the user exists, their username will be displayed, and the "Sign In" button will change to "Log Out."
- **Post Details**: Clicking on a post navigates to a detailed view of the post, showing its full content and comments.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast development environment for modern web projects.
- **Yarn**: Dependency management tool.
- **react-toastify**: A react-toast library for toasts.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.

### Running the Application with Docker

1. **Clone the repository**:

   ```bash
    git clone <your-repo-url>

    cd <your-repo-name>

    cd cards-template
   ```

2. **Install dependencies**:

   ```bash
    yarn install
   ```

3. **Rebuild the Application**:

   ```bash
    yarn build
   ```

4. **Rebuild the Docker Image**:

   ```bash
    docker build -t my-react-app .
   ```

5. **Run the Docker Container**:

```bash
   docker run -p 3000:3000 my-react-app
```
