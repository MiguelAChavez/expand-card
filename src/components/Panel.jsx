const Panel = ({ title, imagenUrl, isActive, onClick }) => {
  return (
    <section
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url('${imagenUrl}')` }}
      onClick={onClick}
    >
      <h3>{title}</h3>
    </section>
  );
};

export default Panel;
