import {useEffect, useState} from "react";
import NewsFeed from "../newsFeed/NewsFeed";
import Login from "../login/Login";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import {fetchData, fetchUsers} from "../../API/API";
import InfoCart from "../infoCart/InfoCart";
import UsersContext from "../context/UserContext";

export default function HomeWindow() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const handleLogin = (username) => {
        setLoggedInUser(username);
        localStorage.setItem('loggedInUser', username);
    };
    const handleLogout = () => {
        setLoggedInUser(null);
        localStorage.removeItem('loggedInUser');
    };
    useEffect(() => {
        const savedUser = localStorage.getItem('loggedInUser');
        if (savedUser) {
            setLoggedInUser(savedUser);
        }

        async function getData() {
            const posts = await fetchData();
            setPosts(posts)
        }

        getData()

        async function getUsers() {
            const posts = await fetchUsers();
            setUsers(posts)
        }
        getUsers()
    }, [])
    return (
        <UsersContext.Provider value={users}>
            <Router>
                <Routes>
                    <Route path="/login"
                           element={loggedInUser ? <Navigate to="/news-feed"/> : <Login onLogin={handleLogin}/>}/>
                    <Route
                        path="/news-feed" element={loggedInUser ? (
                                <NewsFeed loggedInUser={loggedInUser} users={users} logOut={handleLogout}
                                          postsData={posts}/>) : (<Navigate to="/login"/>)}/>
                    <Route index element={<Navigate to="/login"/>}/>
                    <Route path="/post/:id/info" element={<InfoCart/>}/>
                </Routes>
            </Router>
        </UsersContext.Provider>
    );
};
