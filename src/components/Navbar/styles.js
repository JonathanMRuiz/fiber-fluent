const styles = {
  navbar: "bg-white p-4 shadow-md relative z-50 flex items-center justify-between", // Fondo oscuro para navbar
  logo: "w-[150px] h-auto relative z-50", // Asegura que el logo esté encima
  navContainer: "container mx-auto flex justify-between items-center w-full",
  navList: "hidden md:flex space-x-6 text-[#172550] font-bold", // Espaciado más amplio y color blanco
  navLink: "relative inline-block group text-[#172550]", // Añadido el contenedor relativo para el hover
  navLinkHover: "group-hover:text-[#04B1E3] transition-all duration-300",  // Hover color animado
  activeNavLink: "text-[#4CC9F0] font-bold",  // Color del texto activo
  activeNavLinkBg: "bg-[#4CC9F0] text-white px-2 py-1 rounded-lg", // Fondo del enlace activo
  menuButton: "md:hidden block text-[#172550] cursor-pointer z-50", // Asegura que el botón esté encima del menú
  mobileMenu: "absolute top-full left-0 w-full bg-white p-6 shadow-md flex flex-col items-center gap-4 transition-all duration-300 z-40 md:hidden", // Fondo móvil actualizado
  hiddenMobileMenu: "translate-y-[-100%] opacity-0 pointer-events-none",
  visibleMobileMenu: "translate-y-0 opacity-100",  // Transición suave para el menú móvil
};

export default styles;
