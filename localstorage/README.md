# LocalStorage React Project

This folder is for practicing LocalStorage in React.

## Goal

Build a simple app (like notes or todo) that:
- saves data in LocalStorage
- loads saved data on refresh
- updates data after add/edit/delete

## Suggested Features

- Add item
- Delete item
- Mark item as complete
- Clear all items
- Persist all items in LocalStorage

## Basic Flow

1. Create state for items.
2. On first load, read old data from LocalStorage.
3. When state changes, save it back to LocalStorage.

## Example LocalStorage Helpers

```js
const KEY = 'todo_items';

export const loadItems = () => {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
};

export const saveItems = (items) => {
  localStorage.setItem(KEY, JSON.stringify(items));
};
```

## Example React Pattern

```jsx
import { useEffect, useState } from 'react';

const KEY = 'todo_items';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  return <div>Your UI here</div>;
}
```

## Notes

- Always use `JSON.stringify` while saving arrays/objects.
- Always use `JSON.parse` while reading arrays/objects.
- Use `try/catch` if you want safer parsing.
