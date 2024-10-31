"use client"

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const Modal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado', { email, firstName, password });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-md mx-auto my-8">
        <div className="relative">
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
          <div className="w-full h-40 relative">
            <Image
              src="/placeholder.svg"
              alt="Taza de café con arte latte"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 overflow-y-auto max-h-[60vh]">
            <h2 className="text-lg font-semibold mb-2">Regístrate para acceder a todos los recursos</h2>
            <p className="text-sm text-gray-600 mb-4">
              Todos nuestros equipos e instrumentos están activos. El cielo estaba despejado y de un azul profundo.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-sm"
              >
                Registrarse
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">
              Al registrarte, aceptas nuestra Política de Privacidad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// Ejemplo de uso del modal
// const ExampleComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="p-4">
//       <button
//         onClick={openModal}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//       >
//         Abrir Modal
//       </button>

//       {isModalOpen && <Modal onClose={closeModal} />}
//     </div>
//   );
// };
