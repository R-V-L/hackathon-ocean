import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="py-1 px-6 bg-black text-white bg-opacity-60 backdrop-blur fixed min-w-full z-50 ">
      <div className="container flex justify-between h-16 mx-auto">
        <Link href="/">
          <a className="flex items-center p-2">
            <svg
              width="38"
              height="24"
              viewBox="0 0 38 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14.688C10.4746 14.6116 13.7824 4.75276 14.8653 0.358307V14.688C24.001 14.688 28.5164 5.13488 29.6321 0.358307V14.688C33.4912 14.9173 36.8187 13.064 38 12.1087V21.5663C36.7399 23.0184 31.8964 23.5725 29.6321 23.668V14.688C25.3005 22.407 17.9827 23.8909 14.8653 23.668V14.688C10.8487 22.3306 3.28152 23.8591 0 23.668V14.688Z"
                fill="white"
              />
            </svg>
          </a>
        </Link>

        <div className="flex items-center justify-center space-x-6">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
