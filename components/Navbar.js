import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Student Info App</a>
        </Link>
        <Link href="/new">
            <a className="create container">Add Favourite Subject</a>
        </Link>
    </nav>
)

export default Navbar;