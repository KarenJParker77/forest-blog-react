import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // useState example:
  // const [cheer, setCheer] = useState("Come on");
  // const handleClick = () => {
  //   setCheer("You Reds!");
  // };

  const [blogs, setBlogs] = useState([
    {
      title: "An away win...at last!",
      body: "mus mauris vitae ultricies",
      author: "Karen",
      id: 1,
    },
    {
      title: "We don't like to be beside the seaside",
      body: "mus mauris vitae ultricies",
      author: "Karen",
      id: 2,
    },
    {
      title: "Transfer window",
      body: "mus mauris vitae ultricies",
      author: "Karen",
      id: 3,
    },
    {
      title: "Going down to the wire",
      body: "mus mauris vitae ultricies",
      author: "Dan",
      id: 4,
    },
    {
      title: "Keep the faith",
      body: "mus mauris vitae ultricies",
      author: "Dan",
      id: 5,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  // useEffect doesn't need a name as it doesn't return anything. can use to fetch data
  // useEffect causes DOM to rerender anytime data changes - fires on every render
  // empty dependency array runs function only on first render. if we add the variable name into the dependency array the function runs when we change that variable
  useEffect(() => {}, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      {/* filter method returns new array of everything true, then below we pass that array as a prop */}
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Dan")}
        title="Premier League blogs"
      />
    </div>
  );
};

export default Home;
