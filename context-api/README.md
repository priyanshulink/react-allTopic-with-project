# React: Child to Parent Data Flow Example

##  Overview

This project demonstrates how to pass data from a **child component to a parent component** in React using **callback functions**.

---

## Concept

React follows **unidirectional data flow (Parent → Child)**.
To send data **Child → Parent**, we:

1. Create a function in the parent
2. Pass it as a prop to the child
3. Call that function from the child with data

---

##  Project Structure

```
src/
│
├── App.jsx        (Parent Component)
└── component/
    └── Navbar.jsx (Child Component)
```

---

##  Parent Component (App.jsx)

```jsx
import React, { useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')

  // Function to receive data from child
  const changeTheme = (u) => {
    setTheme(u)
  }

  return (
    <div>
      <h1>Theme is {theme}</h1>

      {/* Passing function to child */}
      <Navbar changeTheme={changeTheme} />
      
    </div>
  )
}

export default App
```

---

##  Child Component (Navbar.jsx)

```jsx
import React, { useState } from 'react'

const Navbar = (props) => {

  const [newTheme, setNewTheme] = useState('')

  return (
    <div className='nav'>
      <form onSubmit={(e) => {
        e.preventDefault()

        // Sending data to parent
        props.changeTheme(newTheme)

        setNewTheme('')
      }}>
        <input 
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value)
          }}
          type="text" 
          placeholder='Enter theme' 
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Navbar
```

---

##  How It Works

1. Parent (`App.jsx`) creates `changeTheme` function
2. Parent passes it to `Navbar` as a prop
3. User types in input (child state updates)
4. On submit → child calls `props.changeTheme(newTheme)`
5. Parent receives data → updates `theme`
6. UI re-renders 

---

##  Flow Summary

```
Parent → passes function → Child → calls function → Parent updates state
```

---

##  Features

*  Child → Parent communication
*  React Hooks (`useState`)
*  Form handling
*  Dynamic UI update

---

##  Use Cases

* Form inputs
* Theme switcher
* User data submission
* Cart updates in e-commerce apps

---

##  Important Notes

* You cannot directly send data from child to parent
* Always use **callback functions**
* This pattern is called **"Lifting State Up"**

---

## 🧪 Example Usage

Type something like:

```
dark
```

Click **Submit** → Output:

```
Theme is dark
```

---

##  Learnings

* Props can pass **functions**
* State lives in the **closest common parent**
* React re-renders on state change

---

##  Conclusion

This is one of the most important React patterns.
Mastering this helps in building scalable and maintainable apps.

---
