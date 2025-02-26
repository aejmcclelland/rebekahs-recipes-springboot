# Rebekah's Recipes - Spring Boot & Next.js

## About the Project
This is a **redevelopment** of the original Rebekah's Recipes project, transitioning from a purely **Next.js** full-stack app to a **Spring Boot** backend with a **Next.js** client-side frontend. The goal is to provide a modern, scalable recipe management application using a **RESTful API** and a **MongoDB** database.

## Tech Stack
### Backend:
- **Spring Boot** (Java 17)
- **Spring Data MongoDB**
- **Spring Security** (for authentication & authorization)
- **Maven** (for dependency management)

### Frontend:
- **Next.js 15** (React-based frontend framework)
- **Tailwind CSS** (for styling)
- **daisyUI** (UI components)

### Database:
- **MongoDB Atlas** (cloud-hosted MongoDB instance)

## Getting Started

### Prerequisites
Before running the project, ensure you have the following installed:
- Java 17 or later
- Node.js & npm/pnpm
- MongoDB Atlas account (or local MongoDB instance)
- Maven
- Git

### Cloning the Repository
```sh
git clone https://github.com/aejmcclelland/rebekahs-recipes-springboot.git
cd rebekahs-recipes-springboot
```

### Backend Setup (Spring Boot)
1. Navigate to the `server/` directory:
   ```sh
   cd server
   ```
2. Install dependencies and build the project:
   ```sh
   ./mvnw clean package
   ```
3. Run the Spring Boot application:
   ```sh
   ./mvnw spring-boot:run
   ```
4. The API will be available at:
   ```
   http://localhost:8080/api/recipes
   ```

### Frontend Setup (Next.js)
1. Navigate to the `client/` directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Start the development server:
   ```sh
   pnpm dev
   ```
4. Open `http://localhost:3000` in your browser.

## API Endpoints
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | `/api/recipes`      | Fetch all recipes     |
| POST   | `/api/recipes`      | Add a new recipe      |
| GET    | `/api/recipes/{id}` | Fetch a single recipe |
| PUT    | `/api/recipes/{id}` | Update a recipe       |
| DELETE | `/api/recipes/{id}` | Delete a recipe       |

## Contributing
Pull requests are welcome! Feel free to open an issue for feature suggestions or bug reports.

## License
This project is licensed under the **MIT License**.

---
_Developed by Andrew McClelland_ 🚀

