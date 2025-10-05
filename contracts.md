# API Contracts & Integration Plan

## Overview
This document outlines the API contracts and integration points between frontend and backend for Albin's portfolio website.

## Current Mock Data (mock.js)
1. **Projects** - 8 sample projects with categories
2. **Testimonials** - 3 client testimonials
3. **Services** - 4 service offerings with pricing
4. **Analytics** - Basic stats (visitors, submissions, most viewed)
5. **Contact Submissions** - Sample form submissions

## Backend Models

### 1. Contact Submission
```
{
  id: ObjectId (auto),
  name: String (required),
  email: String (required),
  message: String (required),
  date: DateTime (auto),
  status: String (default: "new")
}
```

### 2. Admin User
```
{
  id: ObjectId (auto),
  username: String (required, unique),
  password: String (hashed with bcrypt),
  created_at: DateTime (auto)
}
```

### 3. Analytics
```
{
  id: ObjectId (auto),
  date: DateTime,
  page_views: Number,
  visitors: Number,
  project_views: Object (project_id: count)
}
```

### 4. Project (Optional - for now use mock)
```
{
  id: ObjectId,
  title: String,
  category: String,
  image: String (URL),
  description: String,
  featured: Boolean
}
```

## API Endpoints to Implement

### Contact Form
- **POST /api/contact**
  - Body: { name, email, message }
  - Response: { success: true, message: "Submission received" }
  - Action: Save to MongoDB

### Admin Authentication
- **POST /api/admin/login**
  - Body: { username, password }
  - Response: { token: JWT, username }
  - Action: Verify credentials, return JWT

- **POST /api/admin/verify**
  - Headers: Authorization: Bearer <token>
  - Response: { valid: true, username }
  - Action: Verify JWT

### Admin Dashboard
- **GET /api/admin/submissions**
  - Headers: Authorization: Bearer <token>
  - Response: [{ id, name, email, message, date, status }]
  - Action: Fetch all contact submissions

- **GET /api/admin/analytics**
  - Headers: Authorization: Bearer <token>
  - Response: { totalVisitors, formSubmissions, mostViewedProject, avgTimeOnPage }
  - Action: Fetch analytics data

### Analytics Tracking
- **POST /api/track/page-view**
  - Body: { page: String }
  - Response: { success: true }
  - Action: Increment page view counter

## Frontend Integration Points

### Contact.jsx
- Replace localStorage mock with API call to POST /api/contact
- Remove: `localStorage.setItem('contactSubmissions', ...)`
- Add: `axios.post(API/contact, formData)`

### AdminLogin.jsx
- Replace mock auth with POST /api/admin/login
- Store JWT token in localStorage
- Remove: hardcoded username/password check

### AdminDashboard.jsx
- Fetch submissions: GET /api/admin/submissions
- Fetch analytics: GET /api/admin/analytics
- Add JWT verification on mount
- Remove: mock data from imports

## Security Considerations
1. Hash passwords using bcrypt (10 rounds)
2. JWT expiry: 24 hours
3. Validate JWT on protected routes
4. CORS: Already configured in backend
5. Input validation on all endpoints

## Initial Admin Setup
Create default admin user on first backend startup:
- Username: admin
- Password: admin123 (hashed)

## Testing Checklist
- [ ] Contact form submission saves to DB
- [ ] Admin login with valid credentials
- [ ] Admin login with invalid credentials fails
- [ ] JWT token verification works
- [ ] Dashboard displays real submissions
- [ ] Dashboard displays analytics
- [ ] Logout clears token
- [ ] Protected routes require authentication
