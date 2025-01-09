# 🌿 The Garden - React Application

## 📖 About
The Garden is a web application for sharing information about fruits and vegetables. Users can browse, add, edit, and comment on different products while learning about organic food production.

## 🚀 Features
- 👥 User Authentication (Register/Login)
- 🔒 Protected Routes
- 📝 CRUD Operations for Products
- 💬 Commenting System
- 📱 Responsive Design
- ✨ Form Validation
- 🎨 Modern UI/UX

## 🛠️ Built With
- React 18
- React Router Dom 6
- Bootstrap 5
- CSS Modules
- Custom Hooks
- Context API

## ⚙️ Prerequisites
- Node.js (version 14.0.0 or higher)
- npm (version 6.0.0 or higher)

## 🔧 Installation and Setup

1. **Clone the repository**
```bash
git clone https://github.com/AtanasVasilev1992/The-Garden.git
cd the-garden
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
cd server
node server
```
The server will run on http://localhost:3030

4. **Start the React application**
```bash
# Navigate back to the main directory
cd ..
npm run dev
```
The application will run on http://localhost:5173

## 🏗️ Project Structure
```
the-garden/
├── src/
│   ├── api/              # API service layer
│   ├── components/       # React components
│   ├── context/         # Context providers
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utility functions
│   └── styles/          # Global styles and CSS modules
├── server/              # Backend server
└── public/              # Static assets
```

## 🔑 Authentication
- Public Access:
  - Home page
  - Browse products
  - View details
  - Login/Register
- Protected Features:
  - Add new products
  - Edit products
  - Delete products
  - Add comments

## 🔄 API Endpoints
- Base URL: `http://localhost:3030`

### Authentication
- POST `/users/register` - Register new user
- POST `/users/login` - Login user
- GET `/users/logout` - Logout user

### Products
- GET `/data/fruits` - Get all fruits
- GET `/data/vegetables` - Get all vegetables
- POST `/data/fruits` - Create new fruit
- POST `/data/vegetables` - Create new vegetable
- PUT `/data/fruits/:id` - Update fruit
- PUT `/data/vegetables/:id` - Update vegetable
- DELETE `/data/fruits/:id` - Delete fruit
- DELETE `/data/vegetables/:id` - Delete vegetable

### Comments
- GET `/data/comments` - Get comments
- POST `/data/comments` - Create comment

## 🎨 Styling
- CSS Modules for component-specific styles
- Global variables for consistent theming
- Responsive design breakpoints
- CSS animations and transitions

## ✅ Form Validation
- Required field validation
- Email format validation
- Password requirements
- Image URL validation
- Length restrictions
- Real-time error feedback

## 🔜 Future Improvements
- [ ] Search functionality
- [ ] Product categories
- [ ] User profiles
- [ ] Rating system
- [ ] Image upload
- [ ] Pagination
- [ ] Unit tests
- [ ] E2E tests

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## 👥 Authors
- [Atanas Vasilev]