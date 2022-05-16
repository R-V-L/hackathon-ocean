import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="bottom-0 bg-primary-900 py-6 flex w-full  flex-col items-center justify-between space-y-6 px-4 pt-10 text-sm text-gray-400 md:flex-row md:items-start">
        <div className="space-y-3">
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
            <p className="text-gray-600 font-medium text-sm sm:text-left text-center">
              Launch X - Innovacción Virtual.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
