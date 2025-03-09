# SpiritX_Devsquare_01
# 🚀 SecureConnect - Next.js & MongoDB Authentication

This project is a **Next.js authentication system** using MongoDB as the database.

---

## 📜 Prerequisites
Before running the project, ensure you have the following installed:

- **Node.js** (LTS version) → [Download Here](https://nodejs.org/)
- **npm** or **yarn** → Check installation:
  ```sh
  node -v
  npm -v
  ```
MongoDB Atlas or Local MongoDB

If using MongoDB Atlas, ensure your connection string is correct.

If using local MongoDB, make sure MongoDB is running.

##📌 1. Clone the Repository
```sh
git clone https://github.com/PulinduVR/SpiritX_Devsquare_01.git
cd secureconnect
```

##📌 2. Install Dependencies
```sh
npm install
# or
yarn install
```

##📌 3. Set Up Environment Variables
Create a .env.local file in the root of your project.
Add the following variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
NEXTAUTH_SECRET=your_random_secret_key
```
##📌 4. Start the Development Server
```sh
npm run dev
# or
yarn dev
```
Your project will be available at: http://localhost:3000

##📌 6. Run in Production (Optional)

To build and run:
```
npm run build
npm start
```

##📌 7. Troubleshooting
Environment Variables Not Loading? Restart the server.
MongoDB Connection Issues? Check IP whitelisting in MongoDB Atlas.
Port Conflict? Change port:
```
PORT=4000 npm run dev
```


