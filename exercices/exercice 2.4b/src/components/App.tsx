import UserCard from "./UserCard";
import { User } from "../types";

const users: User[] = [
    {name: "John Doe", age: 25, isOnline: true},
    {name: "Jana Doe", age: 22, isOnline: false},
    {name: "Foo Bar", age: 30, isOnline: true},
];

const App = () => (
    <>
    <h1>Users</h1>
    {users.map((user, index) => (
        <UserCard key={index} user={user} />
    ))}
    </>
);

export default App;