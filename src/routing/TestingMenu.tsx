import { Link } from "react-router-dom";

export const TestingMenu = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/register">Register</Link>
        </li>
        <li>
            <Link to="/authorized/rooms">Rooms</Link>
        </li>
        <li>
            <Link to="/authorized/voting">Voting</Link>
        </li>
    </ul>
);
