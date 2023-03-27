import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // useState example:
  // const [cheer, setCheer] = useState("Come on");
  // const handleClick = () => {
  //   setCheer("You Reds!");
  // };

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect doesn't need a name as it doesn't return anything. can use to fetch data
  // useEffect causes DOM to rerender anytime data changes - fires on every render
  // empty dependency array runs function only on first render. if we add the variable name into the dependency array the function runs when we change that variable
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading && <div className="loading">Loading ...</div>}
      {/* logical & to conditionally output ONLY if blog data has loaded */}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* filter method returns new array of everything true, then below we pass that array as a prop */}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Dan")}
          title="Premier League blogs"
        />
      )}
    </div>
  );
};

export default Home;
