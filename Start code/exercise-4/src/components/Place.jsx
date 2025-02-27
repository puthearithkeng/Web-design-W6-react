export default function Place({id ,className , image , title}) {
  return (
    <li key={id} className={className}>
      <button>
        <img src={image.src} alt={image.alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
