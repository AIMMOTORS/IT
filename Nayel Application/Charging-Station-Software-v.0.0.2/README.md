# Charging-Station-Software


## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Development Environment Setup](#development-environment-setup)
  - [Clone the Project Repository](#step-1-clone-the-project-repository-from-git)
  - [Navigate to the Project Directory](#step-2-navigate-to-the-project-directory)
  - [Install Project Dependencies](#step-4-install-project-dependencies-using-npm-install--f)
- [Running the Project Locally](#running-the-project-locally)
- [Conclusion](#conclusion)
- [AutoStartSetup](#AutoStartSetup)

## Introduction
Our project focuses on developing a sophisticated dashboard designed specifically for electric bike charging stations. This dashboard acts as a central management platform, offering a comprehensive array of features and tools for efficient charging station operation.

## Prerequisites
Before setting up and running the dashboard for electric bike charging stations, ensure you have the following prerequisites installed:
- Node.js: Download it from the official website [Node.js Download](https://nodejs.org/).
- Vite: Install globally using npm.

```bash
npm install -g create-vite
``````
-TypeScript: TypeScript is the primary language used for this project. Ensure TypeScript is installed globally:
By having these prerequisites in place, you'll be ready to proceed with the setup and development of the electric bike charging station dashboard.
```bash
npm install -g typescript
``````

## Development Environment Setup
Step 1: Clone the Project Repository from Git
-Open a Terminal or command prompt on your local machine.
-Navigate to the desired directory using the following command:

cd path/to/your/projects

Replace path/to/your/projects with the actual path to your desired directory.


### Clone the Repository:
Use the git clone command to clone the project repository from Git. Replace repository-URL with the actual URL of your Git repository:

This will create a new directory named after your project within the directory you navigated to.

Step 2: Navigate to the Project Directory

Change Directory: Use the cd command to navigate into the project directory that was created during the cloning process. For example:

cd your-project

Replace your-project with the actual name of your project directory.

Step 4: Install Project Dependencies using npm install -f
Install Dependencies: Run the following command to install the project dependencies listed in the package.json file:

```bash
npm install -f
``````

This command will download and install all the required packages and libraries needed for your project. It may take a moment to complete.

Once you've completed these steps, your development environment should be set up, and you'll be ready to work on your React-Vite-based web project. You can start your development server, build your project, and perform other development tasks as needed.

## Running the Project Locally
- For Frontend:
Step 1: Navigate to the Frontend Directory
If your frontend and backend are in separate directories, you'll need to open another terminal or command prompt and navigate to the frontend directory (e.g., chargingstation-software-frontend). Use the cd command to change directories:

Step 2: Start the Frontend Development Server
For a typical React-vite project created with Create React App, you can start the development server with:
```bash
npm run dev
``````
- For Backend:
Step 1: Navigate to the Backend Directory
First, open your terminal or command prompt and navigate to the directory where your backend project is located, in your case, the chargingstation-software-backend directory.


Step 1: Start the Backend Development Server

To start the backend development server, you need first to install this package:
```bash
npm install nodemon -g
``````
Now we are ready to start the backend server by running this script:

```bash
nodemon index.js
``````

## Conclusion
This document guides you through setting up a functional development environment for a TypeScript and React-vite project. By following these steps, you will have a local environment ready to run the project and start contributing.

## AutoStartSetup
Open & Follow this Document 
https://docs.google.com/document/d/1xfV6WSei4b9pu83k2eszhUMJY3pASNogJJYbx-YYoR8/edit?usp=sharing


