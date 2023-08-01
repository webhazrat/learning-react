// useState hook is a private storage for a component
const [name, setName] = useState("");

// to set value to name
setName("Mr. X");

// to store a array to state
const [users, setUsers] = useState([
  { name: "Mr. X", age: 25 },
  { name: "Mr. Y", age: 28 },
]);

// to set array value with previous values
setUsers((prev) => [...users, { name: "Mr. Z", age: 30 }]);
