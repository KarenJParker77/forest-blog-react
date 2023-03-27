// destructure the props below so we can access in this component
const BlogList = ({ blogs, title }) => {
  // to access the props:
  //   const blogs = props.blogs;
  return (
    <>
      <h1>{title}</h1>
      {/* // note below, list items always need a key attribute! */}
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {/* pass id into function so we know which blog to delete */}
            {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
