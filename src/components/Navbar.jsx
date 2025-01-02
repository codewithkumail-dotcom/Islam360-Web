import React from 'react';
import './Navbar.css'
import vector from '../assets/Vector.png';
import micIcon from '../assets/mic.svg'
import searchIcon from '../assets/search.svg'
import acountIcon from '../assets/account.svg'
import usageIcon from '../assets/usage.svg'
import languageIcon from '../assets/language.svg'
import firqaIcon from '../assets/Frame 55.svg'



const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    return (
        <>
            <nav className="custom-gradient min-h-[98px]   max-w-[1440px] flex  items-center  ">
                {/* Logo */}
                <div className="inter-font  sm:text-2xl sm:p-4 ml-2 sm:mx-2">
                    <a href="">Islam360.ai</a>
                </div>

                {/* Search Bar */}
                <div className='flex justify-center'>
                    <div className="search-bar mx-5  sm:w-[500px] h-[40px] sm:h-[50px] bg-white bg-opacity-15 flex items-center justify-evenly  border-[0.5px] border-[#3B3B3B] ">
                        <div className='flex w-[50px]'>
                            <button >
                                <img src={searchIcon} alt="" className="h-6 w-6 " />

                            </button>
                            <button  >
                                <img src={micIcon} alt="" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="vertical-line"></div>
                        <input
                            type="text"
                            className="w-[150px] sm:w-[400px] h-[50px] bg-transparent Noto-Nastaliq-Urdu focus:outline-none border-none text-[15px] z-10"
                            placeholder=" کچھ لکھیں"
                        />
                    </div>

                    {/* Single Button Positioned Normally on Desktop */}
                    <div className="  h-12 w-12 bg-white bg-opacity-15 border-[0.5px] border-[#3B3B3B] hidden sm:flex  justify-center items-center">
                        <img src={vector} alt="vector" className="h-[27.9px] w-[29px]" />
                    </div>
                </div>

                {/* Date Section */}
                <div className="date-section h-12 min-w-[266px] mx-9 ml-9 bg-white bg-opacity-15 border-[0.5px] border-[#3B3B3B] hidden  sm:flex justify-center items-center Noto-Nastaliq-Urdu text-xl ">
                    14 جمادی الثانی 1446 ہجری
                </div>

                {/* Buttons Section */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        className="h-10 w-10 bg-gray-200 rounded-full"
                    >
                        ☰
                    </button>
                </div>
                {/* ----------------Tester code--------- */}
                {/* {isDrawerOpen && (
        <div className="fixed top-0 bottom-0 left-0 w-64 h-screen bg-white flex flex-col p-4">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="self-end mb-4 text-black"
          >
            ✖
          </button>

          <div className="mb-6">
            <img src={logo} alt="Logo" className="h-12 w-18 mr-4" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center my-2">
              <img src={home} alt="Home" className="h-7 w-7 mr-4" />
              <span className="text-sm font-medium">Home</span>
            </div>
            <div className="flex items-center my-2">
              <img src={login} alt="Login" className="h-7 w-7 mr-4" />
              <span className="text-sm font-medium">Login</span>
            </div>
            <div className="flex items-center my-2">
              <img src={add} alt="Add Tools" className="h-7 w-7 mr-4" />
              <span className="text-sm font-medium">Add Tools</span>
            </div>
          
          </div>
        </div>
      )} */}


                {/* ----------------------------------------- */}
                <div className="buttons-section h-16 w-96 mx-5 flex items-center justify-around gap-4">
                    <button className="flex flex-col items-center">
                        <img src={acountIcon} alt="" className="h-9 w-9" />
                        <p className="Noto-Nastaliq-Urdu text-[12px]">اکاؤنٹ</p>
                    </button>
                    <button className="flex flex-col items-center">
                        <img src={languageIcon} alt="" className="h-9 w-9" />
                        <p className="Noto-Nastaliq-Urdu text-[12px]">زبان</p>
                    </button>
                    <button className="flex flex-col items-center">
                        <img src={firqaIcon} alt="" className="h-9 w-9" />
                        <p className="Noto-Nastaliq-Urdu text-[12px]">فرقہ</p>
                    </button>
                    <button className="flex flex-col items-center ">
                        <img src={usageIcon} alt="" className="h-9 w-9 border-black " />
                        <p className="Noto-Nastaliq-Urdu text-[12px]">استعمال کا طریقہ</p>
                    </button>
                </div>


            </nav>
        </>
    );
};

export default Navbar;
