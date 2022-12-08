import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Depot Rato Events
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/calendar">Calendar</CustomLink>
        <CustomLink to="/gallery">Gallery</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
