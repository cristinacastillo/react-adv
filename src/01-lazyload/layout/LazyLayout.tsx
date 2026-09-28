import { Navigate, NavLink, Route, Routes } from "react-router-dom";

export const LazyLayout = () => {

    return (
        <div>
            <h1>Layout Page</h1>

            <ul>
                <li>
                    <NavLink to="/lazyload/lazy1">Lazy1</NavLink>
                </li>
                <li>
                    <NavLink to="/lazyload/lazy2">Lazy2</NavLink>
                </li>
                <li>
                    <NavLink to="/lazyload/lazy3">Lazy3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<div>Lazy Page 1</div>} />
                <Route path="lazy2" element={<div>Lazy Page 2</div>} />
                <Route path="lazy3" element={<div>Lazy Page 3</div>} />

                <Route path="*" element={<Navigate replace to="/lazyload/lazy1" />} />
            </Routes>

        </div>
    )
}

export default LazyLayout;