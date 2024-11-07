
import PropTypes from 'prop-types';

function Card({ title, description }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Detalles del Libro</h2>
      <p><strong>Título:</strong> {title}</p>
      <p><strong>Descripción:</strong> {description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;


