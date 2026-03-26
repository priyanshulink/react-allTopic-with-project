# React Router v6 Guide

This project demonstrates essential React Router v6 concepts and hooks for building dynamic, multi-page applications.

---

## 1. `useNavigate()`

**What:** Hook used to **navigate programmatically** (via JavaScript, not clicks).

**Why:** Redirect after login, submit, logout, or any condition.

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // login logic
    navigate("/dashboard"); // redirect
  }

  return <button onClick={handleLogin}>Login</button>;
}
```

**Key Points**

- Replaces `useHistory` (older versions)
- Used **inside components only**
- `navigate(-1)` → go back
- Can pass state: `navigate("/path", { state: { data } })`

---

## 2. `Outlet`

**What:** Placeholder to render **child (nested) routes**.

**Why:** Needed when using **nested routing**.

```jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1>Navbar</h1>
      <Outlet />
    </>
  );
}
```

```jsx
{
  path: "/",
  element: <Layout />,
  children: [
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> }
  ]
}
```

**Key Points**

- Parent component **must** contain `<Outlet />`
- Child routes render **inside Outlet**
- Enables layout persistence across nested pages

---

## 3. `createBrowserRouter`

**What:** Modern way to define routes (v6.4+).

**Why:** Cleaner, object-based routing with nesting.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
```

**Key Points**

- Replaces `<BrowserRouter>` + `<Routes>` (older pattern)
- Supports nested routes naturally
- Used with `<RouterProvider />`
- More scalable for large applications

---

## 4. `NavLink`

**What:** Special version of `Link` that knows **active route state**.

**Why:** To apply styles to the active link.

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavLink
      to="/home"
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      Home
    </NavLink>
  );
}
```

**Key Points**

- `isActive` helps style active links
- Best for navbars and tab navigation
- Use instead of `Link` when active styling is needed
- Supports inline styles or className functions

---

## Project Structure

```
routing/
├── src/
│   ├── App.jsx              # Main app with routes
│   ├── main.jsx             # Entry point with BrowserRouter
│   ├── Component/
│   │   └── Navbar.jsx       # Navigation with NavLink
│   └── pages/
│       ├── Home.jsx         # Home page
│       ├── About.jsx        # About page
│       ├── course.jsx       # Course layout (parent route)
│       ├── Codex.jsx        # Nested child route
│       └── Footer.jsx       # Footer component
├── package.json
└── README.md
```

---

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Nested Routing Example

In this project, we use nested routing for Course → Codex:

**Route Definition** (App.jsx):
```jsx
<Route path='/course' element={<Course/>}>
  <Route path='codex' element={<Codex/>}/>
</Route>
```

**Parent Component** (course.jsx):
```jsx
import { Outlet } from 'react-router-dom';

function Course() {
  return (
    <div>
      <h1>Course Page</h1>
      <Outlet /> {/* Codex renders here */}
    </div>
  );
}
```

**Access nested route:**
- `/course` → shows Course page only
- `/course/codex` → shows Course + Codex inside Outlet

---

## Tips & Best Practices

1. **Always place `<BrowserRouter>` or `<RouterProvider>` at the top level** (in main.jsx)
2. **Use relative paths in nested routes** (`codex` instead of `/course/codex`)
3. **Use `NavLink` for navigation menus**, `Link` for regular links
4. **Use `useNavigate()` inside event handlers**, not at component level
5. **Keep route definitions organized** in a separate file for large apps
6. **Test navigation flow** to ensure nested routes work correctly

---

## Resources

- [React Router Official Docs](https://reactrouter.com/)
- [React Router v6 Migration Guide](https://reactrouter.com/en/main/start/migration-guide)
- [Nested Routes](https://reactrouter.com/en/main/route/nested-routes)
