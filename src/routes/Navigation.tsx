import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom'

import logo from '../logo.svg'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            {routes.map((route) => (
              <li key={route.to}>
                <NavLink
                  to={route.to}
                  className={({ isActive }) =>
                    isActive ? 'nav-active' : ''
                  }
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={<Component />}
              />
            ))}

            <Route
              path="*"
              element={<Navigate to={routes[0].to} replace />}
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}