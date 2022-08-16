import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul style={{ display: "flex" }}>
                    <li style={{ paddingLeft: "10px", listStyle: "none" }}>
                        <Link to="/">Home</Link>
                    </li>
                    <li style={{ paddingLeft: "10px", listStyle: "none" }}>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li style={{ paddingLeft: "10px", listStyle: "none" }}>
                        <Link to="/contact" style={{ "color": "red" }}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;