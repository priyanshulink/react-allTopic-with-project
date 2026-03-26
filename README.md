# React All Topics with Projects

A comprehensive collection of React learning projects covering essential concepts and features. Each folder contains practical examples and implementations of key React topics.

---

## 📚 Topics Covered

### 1. **Props** 📦
**Location:** `./props/`

Learn how to pass data from parent to child components using props.

- **What are Props?**
  - Props are read-only data passed from a parent component to a child component
  - Props flow in one direction (unidirectional data flow)
  - Used to make components reusable and customizable

- **Key Concepts:**
  - Passing props to components
  - Accessing props inside components
  - Default props
  - Prop validation (PropTypes)
  - Destructuring props

- **Project Structure:**
  - `navbarUsingProps/` - Navbar component built with props
  - `props/` - Component examples with Card, Image, Name, Position, Profile, and Social components

**Use Case:** Building reusable UI components with dynamic data

---

### 2. **Context API** 🌍
**Location:** `./context-api/`

Master state management using React's built-in Context API.

- **What is Context API?**
  - Provides a way to pass data through the component tree without passing props at every level
  - Solves the "prop drilling" problem
  - Built into React, no external libraries needed

- **Key Concepts:**
  - Creating context with `createContext()`
  - Providing context with `Provider`
  - Consuming context with `useContext()` hook
  - Global state management
  - Theme switching examples

- **Project Structure:**
  - Navbar component with theme switching
  - Global state management setup

**Use Case:** Managing global state like themes, user authentication, or language settings

---

### 3. **Local Storage** 💾
**Location:** `./localstorage/`

Learn to persist data in the browser using Local Storage.

- **What is Local Storage?**
  - Browser API for storing data locally on the user's device
  - Data persists even after browser is closed
  - Limited to ~5-10MB per domain
  - Stores data as strings

- **Key Concepts:**
  - Setting items with `localStorage.setItem()`
  - Getting items with `localStorage.getItem()`
  - Removing items with `localStorage.removeItem()`
  - Clearing all data with `localStorage.clear()`
  - Syncing state with Local Storage

- **Project Structure:**
  - Card component with Local Storage integration
  - Saving and retrieving form data
  - Persisting user preferences

**Use Case:** Saving form data, user preferences, shopping cart items, or theme preferences

---

### 4. **Two-Way Binding** 🔄
**Location:** `./two-way/`

Implement two-way data binding using controlled components.

- **What is Two-Way Binding?**
  - Means data flows in both directions: UI → State and State → UI
  - User types → state changes → UI updates automatically
  - React achieves this through controlled components

- **Key Concepts:**
  - `useState` hook for state management
  - `value` attribute binding
  - `onChange` event handlers
  - Controlled components
  - Form handling and validation

- **Project Structure:**
  - Form component with input fields
  - User data submission
  - Real-time input synchronization

**Example:**
```jsx
const [name, setName] = useState('');

<input 
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

**Use Case:** Form handling, real-time search, dynamic data updates

---

### 5. **Axios** 🌐
**Location:** `./Axios/`

Make HTTP requests using Axios library.

- **What is Axios?**
  - Promise-based HTTP client for JavaScript
  - Works in both browser and Node.js
  - Simpler than Fetch API with better error handling
  - Supports request/response interceptors
  - Automatic JSON transformation

- **Key Concepts:**
  - GET requests to fetch data
  - POST requests to send data
  - Error handling
  - Request/response interceptors
  - Timeout configuration
  - Base URL setup

- **Project Structure:**
  - Card component displaying API data
  - API integration with Axios
  - Error handling and loading states

**Use Case:** Fetching data from APIs, submitting forms to servers, real-time data updates

---

### 6. **React Router** 🛣️
**Location:** `./routing/`

Build multi-page applications with React Router.

- **What is React Router?**
  - Library for handling navigation in React applications
  - Creates single-page applications (SPA) with multiple views
  - Provides client-side routing without page refreshes
  - Maintains browser history and URLs

- **Key Concepts:**
  - `BrowserRouter` component
  - `Route` component for mapping URLs to components
  - `Link` for navigation
  - `useNavigate()` hook for programmatic navigation
  - Dynamic route parameters
  - Nested routing

- **Project Structure:**
  - Navbar component with navigation links
  - Pages: Home, About, Course, Codex
  - Footer component
  - URL-based navigation

**Use Case:** Building multi-page applications, creating navigation menus, dynamic page routing

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Basic knowledge of React

### Installation

1. Clone the repository:
```bash
git clone https://github.com/priyanshulink/react-allTopic-with-project.git
cd react-allTopic-with-project
```

2. Navigate to any topic folder:
```bash
cd props
# or
cd context-api
# or
cd localstorage
# etc.
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (default Vite port)

---

## 📂 Project Structure

```
react-topic-project/
├── Axios/                    # HTTP requests with Axios
├── context-api/              # Global state with Context API
├── localstorage/             # Browser storage
├── props/                    # Component props
│   ├── navbarUsingProps/    # Navbar with props
│   └── props/               # Props examples
├── routing/                  # React Router navigation
├── two-way/                  # Controlled components
└── README.md                 # This file
```

---

## 🎯 Learning Path

**Beginner → Intermediate → Advanced**

1. **Start here:** Props (`props/`)
2. **Then:** Two-Way Binding (`two-way/`)
3. **Next:** Local Storage (`localstorage/`)
4. **Continue:** Axios (`Axios/`)
5. **Advanced:** Context API (`context-api/`)
6. **Senior:** React Router (`routing/`)

---

## 📝 Key React Patterns Used

- **Functional Components** - Modern React components using hooks
- **Controlled Components** - Form inputs controlled by state
- **Custom Hooks** - Reusable logic extracted into hooks
- **Props Drilling** - Then solving it with Context API
- **State Management** - Local and global state handling
- **Async Operations** - API calls and data fetching
- **Conditional Rendering** - Displaying UI based on conditions
- **List Rendering** - Rendering lists with `.map()`

---

## 🔧 Technologies Used

- **React** - JavaScript library for building UIs
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client library
- **React Router** - Client-side routing
- **CSS** - Styling
- **JavaScript ES6+** - Modern JavaScript features

---

## 💡 Best Practices Demonstrated

✅ Component composition and reusability
✅ Proper state management
✅ Error handling in API calls
✅ Form validation
✅ Unidirectional data flow
✅ Clean code structure
✅ Proper prop naming conventions
✅ Accessibility considerations

---

## 📚 Resources & Documentation

- [React Official Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Axios Documentation](https://axios-http.com)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs - Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 🎓 Learning Tips

1. **Understand the "why"** - Don't just copy code, understand why each pattern exists
2. **Experiment** - Modify examples and see what breaks
3. **Build projects** - Apply concepts by creating your own projects
4. **Read documentation** - Get comfortable with official React docs
5. **Practice regularly** - Consistency is key to mastery

---

## 🤝 Contributing

Feel free to fork this repository and create your own projects using these concepts!

---

## 📄 License

This project is open source and available for learning purposes.

---

## 👨‍💻 Author

**Priyanshu**

---

## 🔗 Related Repositories

- [React Router DOM](https://github.com/priyanshulink/react-router-dom)
- [Two-Way Binding](https://github.com/priyanshulink/two-way-binding)

---

**Happy Learning! 🎉**

If you find this helpful, please give it a ⭐ on GitHub!