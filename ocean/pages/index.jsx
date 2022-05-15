import Head from "next/head";

import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { SaveParagraph } from "../components/SaveParagraph";

const index = () => {
  return (
    <>
      <Head>
        <title>HACK THE OCEAN | Nombre del equipo</title>
      </Head>

      <Navbar />

      <Hero />

      {/* Descubre como salvarlos Section */}
      <div className=" bg-gradient-to-b from-primary-400 to-primary-500 rounded-br-[4rem] pb-10">
        <h2 className="text-primary-900 font-semibold text-lg p-6">
          Descubre como salvarlos
        </h2>
        <div className="space-y-6 px-3">
          <SaveParagraph />
          <SaveParagraph />
          <SaveParagraph />
          <SaveParagraph />
        </div>
      </div>

      {/* En peligro Section */}
      <div className="bg-primary-500">
        <div className="rounded-tl-[4rem] bg-white">
          <h2 className="text-primary-900 font-semibold text-lg px-6 py-9">
            ¡En peligro!
          </h2>

          <div className="flex px-4 py-10 items-center justify-center tex">
            <Card />
          </div>
        </div>
      </div>

      {/* En peligro Section */}
      <div className="">
        <h2 className="text-primary-900 font-semibold text-lg px-6 py-9 text-center">
          Consulta a cualquier animal y conoce su peligro de Extinción
        </h2>

        {/* Search Input */}
        <div className="px-4">
          <div class="relative w-full">
            <svg
              class="pointer-events-none absolute inset-y-0 left-0 h-full w-8 stroke-gray-400 pl-2.5"
              viewBox="0 0 256 256"
              aria-hidden="true"
            >
              <circle
                cx="116"
                cy="116"
                r="84"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></circle>
              <line
                x1="175.4"
                y1="175.4"
                x2="224"
                y2="224"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></line>
            </svg>
            <input
              id="search"
              type="search"
              placeholder="Buscar..."
              class="block w-full rounded-md border-gray-300 pl-10 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
            />
          </div>
        </div>

        <div className=" mt-12">
          <div className="relative h-[36rem]">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1601734242093-757698a2e61b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWpvbG90ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className=" absolute bg-black bg-opacity-40 backdrop-blur bottom-0 rounded-t-2xl">
              <h4 className=" p-6 text-lg font-semibold text-white">
                Lorem ipsum dolor sit amet!
              </h4>
              <hr className="bg-white" />
              <p className="p-6 text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem illum inventore officia repudiandae beatae nemo
                voluptates eos pariatur fuga voluptatem?
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default index;
