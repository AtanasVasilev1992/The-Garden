# The-Garden 
SoftUni React Course Project

## 1. Initialize Project
- [x] Initialize git repo
- [x] Add softuni practice server
- [x] Add base vite react project as client
- [x] CleanUp client
- [x] Add project resources
- [x] Convert html to jsx
- [x] Separate html into components
## 2. React Router
- [x] Install react-router-dom
- [x] Setup react-router-dom
- [x] Add routes in App.jsx
- [x] Add links in the navigation
## 3. Create Service Layer
- [x] Service layer architecture disccusion
- [x] Abstract requester
- [x] Add produces api
- [x] Preseed practice server
## 4. Page Implementations
- [x] Garden list
- [x] Details
  - [x] Details link
  - [x] Details route
  - [x] Api function - getOne
- [x] Home
## 5. Comments (Advanced)?
- [ ] Create service for nested resource `comments`?
- [ ] Post comment to server
- [ ] Read comments from server
- [ ] Add comments in the component
- [ ] Clear form
## 6. API Hooks
- [x] Form Hook
- [x] GardenAPI Hooks
- [ ] Comment Hooks?
## 7. Authentication
- [x] Auth API
  - [x] Login
  - [x] Register
  - [x] Logout
- [x] Auth API hook
  - [x] Login
  - [x] Register
  - [x] Logout
- [x] Auth state & context
- [x] Token management
- [x] Login
- [x] Register
  - [ ] Add form validation
- [x] Logout
- [x] Authorized Requests
## 8. UI Implementation 
- [x] Dynamic navigation
- [x] Create produce
  - [x] API function
  - [x] Hook
- [x] Delete produce
- [x] Edit produce
- [x] Latest produce
## 9. Refactoring
- [ ] Extract auth state from App component
- [x] Persist auth state
- [ ] Comments
- [ ] Refactored comments with useReducer
- [ ] Edit and delete ownership rendering
- [x] Add route guards

## Notes
  1. Latest Produce(vegetables and fruits)
     2. URL `http://localhost:3030/data/produce?sortBy=_createdOn%20desc&pageSize=3`
     3. USE URLSearchParams
  2. seedData - line 1341 in server.js
