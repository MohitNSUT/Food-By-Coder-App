<h1 align="![Screenshot (3055)](https://github.com/user-attachments/assets/9df6e1e6-7759-424d-8932-3165dd2e173e)
center">Food By Coder App</h1>
![Screenshot (3055)](https://github.com/user-attachments/assets/eeffa9e0-1f44-41ed-88a0-d0a11c55e166)
![Screenshot (3056)](https://github.com/user-attachments/assets/b3b6c181-654f-4cfe-ae0a-41507fc7b75e)
![Screenshot (3057)](https://github.com/user-attachments/assets/052dd570-bf33-4536-9c1a-dd7c328672ff)
![Screenshot (3058)](https://github.com/user-attachments/assets/d683045c-6fec-4ed4-9cc6-63b63c934eb6)
![Screenshot (3059)](https://github.com/user-attachments/assets/5024a69a-38e0-49f3-aa97-e3204e551fab)
![Screenshot (3060)](https://github.com/user-attachments/assets/b7269f9b-e55c-400c-8727-3e03cfe8c349)
![Screenshot (3061)](https://github.com/user-attachments/assets/638706d7-a0b5-480f-8249-582daeaa9d85)
![Screenshot (3062)](https://github.com/user-attachments/assets/fc104bf6-939b-4f03-bc5b-331e996ad61c)


Food by Coder is a full-featured food delivery application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to browse food items, add them to the cart, place orders, and manage their account. It includes an admin panel for managing products, orders, and users. The application supports authentication and secure transactions through cash on delivery.

## Features

- **User Authentication**: Secure login and registration with JWT tokens for access management.
- **Browse and Add to Cart**: Users can browse food items, view details, and add them to their cart.
- **Order Placement and History**: Place orders with easy access to order history and details.
- **Admin Panel**: 
  - Manage food items (add, update, delete).
  - View and manage orders.
  - Manage user accounts and permissions.
- **Payment Functionality**: Supports cash on delivery for easy payment processing.
- **Responsive Design**: The application is fully responsive, providing an optimal user experience on all devices.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Libraries and Tools**:
  - Redux for state management
  - Axios for API calls
  - JSON Web Tokens (JWT) for authentication
  - Material-UI for UI components
  - Bcrypt for password hashing
- **Deployment**: Deployed on platforms such as Heroku/Vercel (specify if any)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/food-by-coder.git
   cd food-by-coder
   ```

2. **Install Backend Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**:

   Create a `.env` file in the root directory of your server and add the following environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. **Run the Application**:

   - To start the backend server:
     ```bash
     cd backend
     npm run server
     ```
   - To start the frontend client:
     ```bash
     cd ../frontend
     npm run dev
     ```

6. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173` to start using Food by Coder.

## Usage

- **Browse Food Items**: Explore a wide variety of food items available for delivery.
- **Add to Cart and Place Orders**: Add your favorite items to the cart and proceed to checkout.
- **Admin Panel**: Accessible to admin users for managing the application's content and orders.
- **Order History**: View your previous orders and track current orders.


