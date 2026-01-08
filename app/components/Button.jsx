function Button({ title, onClick, img, className }) {
  return (
    <button className={className} onClick={onClick}>
      {img && <img src={img} alt={title} />}
      {title}
    </button>
  );
}

export default Button;
