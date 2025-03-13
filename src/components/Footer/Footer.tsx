const Footer = () => {
    return (
      <footer className="bg-[#131d2d] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex md:flex-row flex-col md:justify-between md:items-center p-4 xs:gap-3">
            <div>
              <h2 className="text-xl font-semibold">Findric</h2>
              <p className="text-gray-400 mt-2">© 2024 Findric. All rights reserved.</p>
            </div>
  
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </nav>
  
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 5.4 17.52 1 11.36 1H10.64C4.48 1 0 5.4 0 12.07 0 17.62 3.36 22 8.41 23v-7.94H5.93V12h2.47v-2.44C8.4 6.5 9.95 5 12.5 5c1.1 0 2.04.08 2.32.12v2.7H13.9c-1.42 0-1.7.68-1.7 1.68V12h3.18l-.5 3.06H12.2V23C17.24 22 22 17.6 22 12.07z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.004 10.004 0 01-3.127 1.196 4.935 4.935 0 00-8.457 4.49A13.978 13.978 0 011.671 3.15a4.934 4.934 0 001.528 6.573 4.91 4.91 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.926 4.926 0 01-2.224.084 4.936 4.936 0 004.604 3.42A9.88 9.88 0 010 20.09a13.934 13.934 0 007.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.015-.636A10.025 10.025 0 0024 4.59a9.862 9.862 0 01-2.9.795z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  