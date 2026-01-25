function BlogImage({ imgSrc }) {
  return (
    <>
      <img
        src={imgSrc}
        alt="Blog Image"
        className="rounded-xl h-auto w-full mt-10"
      />
    </>
  );
}

export default BlogImage;
