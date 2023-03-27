import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
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
