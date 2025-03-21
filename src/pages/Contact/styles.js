const styles = {
  section: "flex flex-col items-center justify-center bg-white",
  mapContainer: "w-full max-w-7xl mb-10",
  map: "w-full h-72 rounded-lg shadow-lg",

  contactContainer: "w-full max-w-7xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8",
  contactTitle: "text-2xl font-bold text-gray-800 mb-4",
  contactInfo: "flex items-center gap-3 text-gray-700 mb-6",
  contactIcon: "text-[#182451]",

  formContainer: "space-y-4",
  inputGroup: "grid grid-cols-1 md:grid-cols-2 gap-4",

  // Estilos actualizados para los inputs y textarea
  inputField: "w-full p-3 border border-[#172550] rounded-lg focus:border-[#172550] focus:ring-2 focus:ring-[#172550] placeholder-gray-600 transition-all duration-200",
  textArea: "w-full p-3 border border-[#172550] rounded-lg focus:border-[#172550] focus:ring-2 focus:ring-[#172550] placeholder-gray-600 transition-all duration-200",

  submitButton: "w-auto px-6 bg-[#182451] text-white font-semibold py-3 rounded-lg hover:bg-[#172550] transition cursor-pointer",
};

export default styles;
