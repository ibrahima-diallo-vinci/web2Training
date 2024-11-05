import { User } from "../types";
import "./UserCard.css";

interface UserCardProps {
    user: User;
};

const UserCard = (props: UserCardProps) => {
    return (
    <div className="user-card">
        <h2>Name: {props.user.name}</h2>
        <p>Age: {props.user.age}</p>
        <p className={props.user.isOnline ? "user-card--online" : "user-card--offline"}>{props.user.isOnline ? "Online" : "Offline"}</p>

    </div>
    )
};

export default UserCard;