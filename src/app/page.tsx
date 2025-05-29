import AboutMe from '../components/About/AboutMe'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'



export default function Home() {
  return (
    <main className="bg-black min-h-screen grid grid-cols-8">        
        {/* Left Column - Personal Info */}
        <div style={{ borderWidth: "0.5px" }}  className="col-span-2 bg-[#1b1b1b] rounded-2xl shadow-xl max-h-screen border-gray-800 stick top-0 flex-shrink-0 flex flex-col justify-evenly items-center mt-5 ml-10">
            <div className="relative w-[225px] h-[325px] rounded-4xl overflow-hidden border-gray-800 border">
                <Image
                src="/img/Pannawat_Chauychoo.JPG"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 192px"
                className="object-cover"
                priority
                />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className="text-2xl font-bold text-white py-5"> Pannawat Chauychoo </h2>
                <div className='bg-[#454545] rounded-lg shadow-md'>
                  <h4 className="text-md text-white mx-3 my-1"> Business Data Scientist </h4>
                </div>
            </div>

            <hr className="w-3/4 border-t border-gray-300 my-2 mx-auto"></hr>

            <div>
              <a href='/Pannawat_Chauychoo_DataScience_v2.pdf' target="_blank" rel="noopener noreferrer" 
              className='bg-red-100 text-black rounded-lg my-5 px-2 py-1 shadow-md hover:bg-red-700 hover:text-white transition-colors'>
                <button className="text-md mx-10 transition-transform duration-300"> View Resume </button>
              </a>

              {/* Social Links */}
              <div className="flex justify-evenly my-5 w-full">
                  <a href="https://github.com/PannawatChauychoo" target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 hover:text-gray-600 transition-colors">
                  <FaGithub size={32}/>
                  </a>
                  <a href="https://www.linkedin.com/in/pan2024/" target="_blank" rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-colors">
                  <FaLinkedin size={32}/>
                  </a>
                  <a href="mailto:billyphu69@gmail.com"
                      className="text-gray-300 hover:text-red-300 transition-colors">
                  <FaEnvelope size={32}/>
                  </a>
              </div>
            </div>


        </div>

        {/* Right Column - About Me, Projects, Contact */}
        <div style={{ borderWidth: "0.5px" }} className="col-span-6 bg-[#1b1b1b] overflow-y-scroll h-screen rounded-2xl shadow-lg max-h-screen border-gray-800 p-6 mt-5 mx-10">
          <AboutMe />
          {/* Projects and Contact sections will go here */}
        </div>
    </main>
  )
}