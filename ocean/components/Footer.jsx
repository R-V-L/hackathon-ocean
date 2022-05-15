import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-primary-900 mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-6 px-4 py-10 text-sm text-gray-400 md:flex-row md:items-start md:space-y-0">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <p className="text-white font-semibold">
              HACK THE OCEAN - Nombre del Equipo
            </p>
          </Link>
        </div>
        <div className="flex flex-col flex-wrap items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <p>Jorge Ignacio Vazquez Lizarraga</p>
          <p>Luis Miguel Intzin</p>
          <p>Rosibel Morales</p>
          <p>Victor Manuel Nuñez</p>
          <p>David Mapilca</p>
          <p>Héctor Federico Cadena López</p>
        </div>

        <div>
          <p className="text-gray-600 font-medium text-sm text-center">Launch X - Innovacción Virtual.</p>
      </div>
      </div>
      
    </footer>
  );
};
