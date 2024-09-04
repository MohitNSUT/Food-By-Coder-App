<h1 align="center">Food By Coder App</h1>

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


![Screenshot (3055)](https://github.com/user-attachments/assets/4410c0f9-dd1c-4dbb-a83f-cedf6d61bdbf)


  ![Screenshot (3056)](https://github.com/user-attachments/assets/65e007c9-e941-450e-9c8e-8f9866ff3016)

  
![Screenshot (3057)](https://github.com/user-attachments/assets/78da8a8b-f25e-4ec8-95b9-f69f9d16cb1f)
![Screenshot (3058)](https://github.com/user-attachments/assets/64c11d04-a210-41de-88f5-f72142cd0ca4)
![Screenshot (3059)](https://github.com/user-attachments/assets/cdd6f425-f975-4514-9e7d-17b665130fc9)
![Screenshot (3060)](https://github.com/user-attachments/assets/6cd8cb8f-9695-4857-91d4-9bcfd6402e2c)
![Screenshot (3061)](https://github.com/user-attachments/assets/eec08929-f325-4091-a342-4119a74c493b)
![Screenshot (3062)](https://github.com/user-attachments/assets/12357187-74be-48cf-aa80-ebb4b4a7a47b)
