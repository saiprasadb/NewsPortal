# News Portal

## Table of Contents
- [Installation](#Installation)
- [Steps](#Steps)
- [Configuration](#Configuration)

## Installation
  **Prerequisites**
  1. Node.js and npm installed (for Angular 16)
  2. Visual Studio or Visual Studio Code (for .NET 8 development)
  3. Local database software (e.g., SQL Server Express, SSMS)

## Steps
1. Clone the repository **https://github.com/saiprasadb/NewsPortal.git**
2. Backend Setup
   Open the backend solution in Visual Studio.
			Ensure .NET 8 SDK is selected.
			Restore NuGet packages if necessary.
			Modify the connection string in appsettings.json to point to your local database.
3. Database Setup
   Create a local database instance or use an existing one.
   Update the database schema using Code First migrations: dotnet ef database update
4. Frontend Setup
   Navigate to the "News-Portal" directory.
   Install dependencies: npm install

## Configuration
	Backend Configuration: Modify appsettings.json for environment-specific settings.
 
