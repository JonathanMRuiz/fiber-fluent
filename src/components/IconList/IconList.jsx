import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const items = [
  { name: 'OpenTrench', video: 'x37WYXknY6A', videoUrl: 'https://youtu.be/x37WYXknY6A?t=26' },  
  { name: 'MissileBore', video: '0u0pO1evsSc', videoUrl: 'https://youtu.be/0u0pO1evsSc?t=403' },
  { name: 'Directional & Drill', video: 'H0Qm7f-JN2U', videoUrl: 'https://www.youtube.com/watch?v=H0Qm7f-JN2U' },
  { name: 'MicroTrench', video: 'tmTltXThGI4', videoUrl: 'https://www.youtube.com/watch?v=tmTltXThGI4' },
];

export default function IconList() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [startTime, setStartTime] = useState(0);

  // Esta función extrae el tiempo desde la URL con el formato t=xx
  const extractTimeFromURL = (url) => {
    const match = url.match(/[?&]t=(\d+)s?/); // Regex para extraer el parámetro t
    return match ? parseInt(match[1], 10) : 0; // Retorna el tiempo en segundos o 0 si no se encuentra
  };

  const openPopup = (videoId, videoUrl = "") => {
    setVideoId(videoId);
    setStartTime(extractTimeFromURL(videoUrl)); // Extrae el tiempo de inicio si está en la URL
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setVideoId(""); // Limpia el ID del video al cerrar
    setStartTime(0); // Resetea el tiempo de inicio
  };

  return (
    <div className='container mx-auto flex-grow p-4'>
      <div className="p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[#17254E]">Installation Methods:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center cursor-pointer"
              onClick={() => openPopup(item.video, item.videoUrl)} // Abre el popup con el video y la URL
            >
              <span className="text-green-500 mr-3">
                <CheckCircle size={24} />
              </span>
              <span className="text-[#17254E] font-medium transform hover:scale-110 transition-transform duration-300">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePopup} // Cierra el popup al hacer clic afuera
        >
          <div
            className="bg-white relative p-6 rounded-lg" // Añadí padding y bordes redondeados
            onClick={(e) => e.stopPropagation()} // Previene que el popup se cierre al hacer clic adentro
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-xl text-gray-500 z-50"
            >
              X
            </button>
            <iframe
              width="800" // Puedes ajustar el tamaño según lo que necesites
              height="450" // Puedes ajustar el tamaño según lo que necesites
              src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1&mute=1&start=${startTime}`} // Aquí usamos start para especificar el tiempo
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            />
          </div>
        </div>
      )}
    </div>
  );
}
