import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('root').classList.add('loaded');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const photos = [
    { url: '/DSC03941.jpg', title: 'Photo Title 1', description: 'Example text for photo 1' },
    { url: 'path/to/your/image2.jpg', title: 'Photo Title 2', description: 'Example text for photo 2' },
    { url: 'path/to/your/image3.jpg', title: 'Photo Title 3', description: 'Example text for photo 3' },
    // Add more photo objects here
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseClick = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={`App ${selectedPhoto ? 'blurred' : ''}`}>
      <header className="App-header">
        <h1>Aidan Murray</h1>
      </header>
      <main className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo"
            style={{ backgroundImage: `url(${photo.url})` }}
            onClick={() => handlePhotoClick(photo)}
          ></div>
        ))}
      </main>
      {selectedPhoto && (
        <div className="lightbox" onClick={handleCloseClick}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.url} alt="Enlarged" />
            <div className="photo-info">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
