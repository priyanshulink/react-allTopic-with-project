# useState with Context API

This project demonstrates how to use **useState** with **Context API** to manage global state in React without prop drilling.

## Problem Solved

When you need to manage state that affects multiple components across different levels of your app, passing the state and setter through props becomes cumbersome. Using Context API with useState provides a clean solution.

---

## How It Works

### 1. Create Context with useState

In `src/context.jsx/TheamContext.jsx`:

```jsx
import React, { createContext, useState } from 'react'

export const theamContextData = createContext()

const TheamContext = (props) => {
    const [theam, settheam] = useState('light')

  return (
   <theamContextData.Provider value={[theam, settheam]}>
    {props.children}
   </theamContextData.Provider>
  )
}

export default TheamContext
```

**Key Points:**
- `useState('light')` creates state with initial value 'light'
- The Provider passes **both state AND setter** as an array: `[theam, settheam]`
- All child components can now access and modify this state

### 2. Wrap Your App with Provider

In `src/main.jsx`:

```jsx
import TheamContext from './context.jsx/TheamContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TheamContext>
      <App />
    </TheamContext>
  </StrictMode>,
)
```

### 3. Consume Context in Components

In `src/component/Navbar.jsx`:

```jsx
import React, { useContext} from 'react'
import { theamContextData } from '../context.jsx/TheamContext'

const Navbar = () => {
   const [theam, settheam] = useContext(theamContextData)

  return (
    <div>
      <h2>Current Theme: {theam}</h2>
      <button onClick={() => {
        if(theam == 'light') {
            settheam('dark')
        } else {
            settheam('light')
        }
      }}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Navbar
```

**Key Points:**
- `useContext(theamContextData)` retrieves the context value
- Destructure the array to get `[theam, settheam]`
- Call `settheam()` to update the state
- All components using this context stay synchronized

---

## Pattern Comparison

### ❌ Without Context API (Prop Drilling)

```
App (has state)
 ├── Navbar (receives props)
 │    └── Button (receives props just to pass down)
 └── Section (receives props)
      └── Header (actually uses the state)
```

### ✅ With Context API + useState

```
App (Provider wraps everything)
 ├── Navbar (useContext to get state)
 ├── Section (useContext to get state)
 └── Any Component (useContext - direct access!)
```

---

## Use Cases

Context with useState is perfect for managing:

- **Theme** (light/dark mode) - Like this project
- **User Authentication** (logged-in user)
- **Language/Localization** (i18n)
- **App Settings** (notifications, preferences)
- **Modal States** (show/hide dialogs)
- **Notification Messages**
- **Cart Data** (for small shopping carts)

---

## Best Practices

### 1. Create a Custom Provider (Recommended)

Instead of defining context in TheamContext directly, create a separate provider component:

```jsx
// hooks/useTheam.js
import { useContext } from 'react'
import { theamContextData } from '../context/TheamContext'

export const useTheam = () => {
  return useContext(theamContextData)
}
```

Then use in components:

```jsx
const [theam, settheam] = useTheam()
```

### 2. Keep State Logic in Context

Move complex logic to the context provider:

```jsx
const TheamContext = (props) => {
  const [theam, settheam] = useState('light')

  const toggleTheam = () => {
    settheam(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <theamContextData.Provider value={{ theam, toggleTheam }}>
      {props.children}
    </theamContextData.Provider>
  )
}
```

### 3. Use Objects for Better Readability (Alternative to Arrays)

```jsx
// In Provider
const value = { theam, settheam }
<theamContextData.Provider value={value}>

// In Component
const { theam, settheam } = useContext(theamContextData)
```

---

## Performance Considerations

⚠️ **Warning:** Every time the state changes, ALL components using this context re-render.

**Solution:** For large apps, split contexts by concern or use `useMemo`:

```jsx
const value = useMemo(() => [theam, settheam], [theam])

<theamContextData.Provider value={value}>
  {props.children}
</theamContextData.Provider>
```

---

## File Structure in This Project

```
context-api-01/
├── src/
│   ├── context.jsx/
│   │   └── TheamContext.jsx      (Context + Provider with useState)
│   ├── component/
│   │   ├── Navbar.jsx             (Consumes context)
│   │   ├── Section.jsx            (Consumes context)
│   │   └── Footer.jsx             (Consumes context)
│   ├── App.jsx
│   └── main.jsx                   (Wraps App with Provider)
└── README.md
```

---

## Summary

**useState + Context API** allows you to:
- ✅ Share state globally without prop drilling
- ✅ Update state from any component
- ✅ Keep code clean and maintainable
- ✅ Avoid unnecessary re-renders (with proper optimization)

**This is perfect for:** Global state that doesn't change too frequently (theme, user, settings, auth)

**Not ideal for:** Frequently changing data (animations, form inputs, real-time updates)
