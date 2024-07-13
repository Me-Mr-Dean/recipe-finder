# Recipe Finder Application

This is a Recipe Finder application built using React for the frontend and Python(Flask) for the backend.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [Known Issues](#known-issues)

## Installation

If your GitHub isn't setup correctly in your Visual Studio and commits are made from the wrong account, do the following:

1. Make sure you are in the correct directory, it should contain the .git file.
   ```sh
   cd .\recipe-finder
   ```
3. Run the following command to make sure it is using the correct credentials.
   ```sh
   git config --global user.name
   git config --global user.email
   ```
5. If it isn't correct, use the following commands to change it.
   ```sh
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

### Frontend

1. **Install Node.js and npm**: Download and install from [Node.js](https://nodejs.org/).

I had trouble with Node.js version 17, the solution was to use version 16. To do this download the .exe file for Node Version Manager from the following link and allow it to manage which version of node your computer is using.
https://github.com/coreybutler/nvm-windows/releases

Afterwards run the following commands in you command prompt.
nvm install 16
nvm use 16

2. **Create React App**:

   ```sh
   npx create-react-app recipe-finder
   ```
