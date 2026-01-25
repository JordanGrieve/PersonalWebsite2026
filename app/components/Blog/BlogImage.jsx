import PropTypes from "prop-types";

function BlogImage({ imgSrc, alt = "Blog Image" }) {
  return (
    <>
      <img src={imgSrc} alt={alt} className="rounded-xl h-auto w-full mt-10" />
    </>
  );
}

BlogImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default BlogImage;
