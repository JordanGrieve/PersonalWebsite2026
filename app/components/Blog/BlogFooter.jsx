import React from "react";

function BlogFooter({ content }) {
  return (
    <div>
      <hr className="my-12" />
      <p className="mb-4">{content}</p>
      <span>-- Jordan</span>
    </div>
  );
}

export default BlogFooter;
