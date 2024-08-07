import "./App.css";
import AddBook from "./components/AddBook";
import AddUser from "./components/addUser";
import DisplayBooks from "./components/DisplayBooks";
import ErrorPage from "./components/ErrorPage";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AddBook />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/users" element={<AddUser />} />
        <Route path="/books" element={<DisplayBooks />} />
        {/* TODO: Add user path*/}

        {/* 
          Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for.
        */}
        <Route path="*" element={<ErrorPage />} />//is used when the path is not defined.
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="container">
      {/* Divide screen horizontally into 2 parts: sidebar and main content */}
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "80%" }} className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
