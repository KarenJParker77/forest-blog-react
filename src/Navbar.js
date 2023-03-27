import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="forest.png" alt="forest crest" className="crest" />
      <h1>The Nottingham Forest blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#E53233",
            borderRadius: "8px",
          }}
        >
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
