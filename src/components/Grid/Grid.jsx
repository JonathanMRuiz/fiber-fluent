import React from "react";
import styles from "./styles";

// Componente de grilla reutilizable
export default function Grid({ children, columns = 4 }) {
  // Definir las clases de la grilla según el número de columnas
  const gridClasses = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-6 p-6`;

  return <div className={gridClasses}>{children}</div>;
}
