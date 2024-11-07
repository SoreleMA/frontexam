import { useState } from 'react';
import Card from './Card'; 

function App() {

  const [bookTitle, setBookTitle] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  
  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setBookDescription(e.target.value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault(); 

   
    if (bookTitle.trim().length < 3 || bookTitle.startsWith(' ')) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }
    if (bookDescription.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      return;
    }

    
    setErrorMessage('');
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Formulario de Libro</h1>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Título del libro:
              <input
                type="text"
                value={bookTitle}
                onChange={handleTitleChange}
                placeholder="Ingrese el título del libro"
              />
            </label>
          </div>
          <div>
            <label>
              Descripción:
              <input
                type="text"
                value={bookDescription}
                onChange={handleDescriptionChange}
                placeholder="Ingrese la descripción del libro"
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <Card title={bookTitle} description={bookDescription} />
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default App;
