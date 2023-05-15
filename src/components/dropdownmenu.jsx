import React, { useState } from "react";

const jaren = [
  { name: "Jaar 1", klassen: [{ klas: "1A" }, { klas: "1B" }, { klas: "1C" }] },
  { name: "Jaar 2", klassen: [{ klas: "2A" }, { klas: "2B" }, { klas: "2C" }] },
  { name: "Jaar 3", klassen: [{ klas: "3A" }, { klas: "3B" }, { klas: "3C" }] },
  { name: "Jaar 4", klassen: [{ klas: "4A" }, { klas: "4B" }, { klas: "4C" }] },
  { name: "Jaar 5", klassen: [{ klas: "5A" }, { klas: "5B" }, { klas: "5C" }] },
  { name: "Jaar 6", klassen: [{ klas: "6A" }, { klas: "6B" }, { klas: "6C" }] },
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
  };

  const [selectedJaar, setSelectedJaar] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedKlas, setSelectedKlas] = useState(null);

  const handleJaarClick = (jaar) => {
    setSelectedJaar(jaar);
    setIsOpen1(!isOpen1);
  };

  const handleKlasClick = (klas) => {
    setSelectedKlas(klas);
    setIsOpen(false);
    setIsOpen1(false);
  };

  const klassen =
    selectedJaar && selectedJaar.klassen ? selectedJaar.klassen : [];

  const klasButtonText = selectedKlas ? selectedKlas.klas : "Klas";

  return (
    <div className="relative">
      <button
        className="w-16 rounded-md z-20 bg-slate-800 px-3 py-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-gray-200"
        onClick={toggleDropdown}
      >
        {klasButtonText}
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 bg-slate-800 mt-10 py-2 w-48 shadow-lg rounded-lg z-20">
          {jaren.map((jaar) => (
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
              key={jaar.name}
              onClick={() => handleJaarClick(jaar)}
            >
              {jaar.name}
            </button>
          ))}
        </div>
      )}

      {isOpen1 && (
        <div className="absolute mt-10 top-0 left-0 ml-52 bg-slate-800 py-2 w-48 shadow-lg rounded-lg z-30">
          {klassen.map((klas) => (
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 w-full text-left"
              key={klas.klas}
              selectedKlas={klas}
              onClick={() => handleKlasClick(klas)}
            >
              {klas.klas}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
