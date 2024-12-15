# Laravel Project Setup

## Prerequisites

Before starting, ensure you have the following installed:

- **PHP** (version 8.0 or higher)
- **Composer** (for managing PHP dependencies)
- **Node.js** (with npm)
- **npm** (Node Package Manager)

## Installation

### 1. Clone the Repository

### 2. Install PHP Dependencies
Run the following command to install PHP dependencies using Composer:
`composer install`

### 3. Install Node.js Dependencies
`npm install`

### 4. Environment Configuration
Make sure you have a .env file in the root of your project. If not, copy the .env.example file:
`cp .env.example .env`
You may need to configure your database and other environment settings in the .env file as needed.

### 5. Generate Application Key
Generate the application key for Laravel:
`php artisan key:generate`

## Running the Project
### 1. Start the Laravel Development Server
To start the Laravel development server, use the following command:

`php artisan serve`

By default, the server will start at http://127.0.0.1:8000.

###  2. Run the Frontend Build
To compile the frontend assets, run:

`npm run dev`
This will start the development process for the frontend and automatically watch for changes to your assets.
