// Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

useEffect(() => {
  // do something

  // If require to cleanup or unmount operation
  return () => { 
    //cleanup
  }
}, [dependencies])

// When we use useEffect
// 1. If require to load component when mount and unmount
// 2. When call dom method
// 3. External request and response handle

