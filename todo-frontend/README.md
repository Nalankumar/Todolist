# Todolist Front End

This folder holds the front-end section of the to-do list application, providing the user interface and client-side functionality for task management.

## Tech Stack
- React
- TailwindCSS
- Vite
  
## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 16 or higher. [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js. Ensure it's up to date with `npm install -g npm`.

## Getting Started

Follow these steps to set up and run the application:

### 1. Clone the Repository

```bash
git clone https://github.com/Nalankumar/Todolist
cd Todolist/todo-frontend
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required packages as defined in the `package.json` file.

### 3. Run the Development Server

To start the application in development mode:

```bash
npm run dev
```

The app will be available at the URL displayed in the terminal, typically `http://localhost:3000`.

### 4. Build the Application

To create an optimized production build:

```bash
npm run build
```

The production build files will be generated in the `dist` directory.

### 5. Preview the Production Build

To serve and preview the production build locally:

```bash
npm run preview
```

This will start a local server and serve the contents of the `dist` folder.

## Scripts

The following scripts are defined in the `package.json`:

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production-ready build.
- `npm run preview`: Previews the production build locally.

## Folder Structure

```
todo-frontend
├── public/          # Static assets
├── src/             # Application source code
│   ├── components/  # Reusable components
│   ├── assets/      # Images, fonts, etc.
│   ├── App.jsx      # Main app component
│   ├── main.js      # Entry point
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── vite.config.js   # Vite configuration
```

## Additional Notes

- Ensure all environment variables are configured in a `.env` file if required.
- Refer to the [Vite documentation](https://vitejs.dev/) for advanced configurations.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

