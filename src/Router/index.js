import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../Pages/Login";
import RoomPage from "../Pages/Room";

export const Router = () => (<BrowserRouter>
    <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route path="/room" element={<RoomPage/>}/>
    </Routes>
</BrowserRouter>)