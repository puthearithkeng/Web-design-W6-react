export default function Place({key,into}) {
    return (
      <li key={key} className="place-item">
        <button>
          <img src={into.image.src} alt={into.image.alt} />
          <h3>{into.title}</h3>
        </button>
      </li>
    );
  }