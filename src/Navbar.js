const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="forest.png" alt="forest crest" className="crest" />
      <h1>The Nottingham Forest blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#E53233",
            borderRadius: "8px",
          }}
        >
          New blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
