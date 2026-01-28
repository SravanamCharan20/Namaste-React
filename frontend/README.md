## React Class Component Lifecycle (with API Example)

### Lifecycle Execution Order

1. constructor()
2. render() → renders UI with initial / dummy (shimmer) state
3. componentDidMount()
4. setState() inside componentDidMount → triggers re-render
5. DOM updates with real API data
6. componentDidUpdate() (runs only on subsequent updates)
7. componentWillUnmount() (runs when component is removed or When we moved into another component)

---

### Detailed Explanation

### 1️⃣ constructor()
- Initializes state
- Used to set dummy / placeholder data
- Runs only once

Example:
userInfo = {
  username: "default user",
  blog: "",
}

---

### 2️⃣ render()
- Executes immediately after constructor
- Renders UI using initial state
- Shows loading / shimmer / dummy content

⚠️ render() must be pure (no side-effects)

---

### 3️⃣ componentDidMount()
- Runs once after the first render
- Best place for API calls
- Component is now mounted in the DOM

Example use cases:
- Fetch data
- Start timers
- Add event listeners

---

### 4️⃣ setState() inside componentDidMount
- Triggers re-render
- React updates the DOM with real API data
- UI replaces dummy content automatically

---

### 5️⃣ componentDidUpdate()
- Runs AFTER the DOM is updated
- Triggered only when props or state change
- Used for side-effects (NOT rendering)

⚠️ componentDidUpdate does NOT update the DOM directly (as it sets the State Variable that will enables the re-render)

---

### 6️⃣ componentWillUnmount()
- Runs when component is removed from the DOM
- Used for cleanup logic

Why cleanup is required?
- Timers and subscriptions persist in browser memory
- Without cleanup, they stack on re-entry
- Causes memory leaks and performance issues

Things to clean up:
- setInterval
- setTimeout
- Event listeners
- Subscriptions

---

### Hooks Equivalent (useEffect)

useEffect(() => {
  // componentDidMount logic
  const id = setInterval(() => {
    console.log("running");
  }, 1000);

  // componentWillUnmount cleanup
  return () => {
    clearInterval(id);
  };
}, []);

return cleanup function === componentWillUnmount

---

### Interview One-Liners

- API calls belong in componentDidMount
- componentDidUpdate runs AFTER DOM update
- Cleanup prevents memory leaks
- useEffect cleanup = componentWillUnmount