import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './MainBody.css'
import zakat from '../assets/zakat.svg'
import fasting from '../assets/fasting-tracker.svg'
import prayerIcon from '../assets/Prayers.svg'
import pilarIcon from '../assets/pilar-of-islam.svg'
import firstIcon from '../assets/gravity-ui_arrows-opposite-to-dots.svg'
import SecondIcon from '../assets/Group.svg'
import ThirdIcon from '../assets/iconamoon_trend-up-light.svg'
import fourthIcon from '../assets/solar_history-bold.svg'
import eyeIcon from '../assets/eyeIcon.svg'
import commentIcon from '../assets/comment.svg'





const MainBody = () => {
    const [fields, setFields] = useState([
        'اللہ کے 99 ناموں کو کیا کہتے ہیں؟',
        'اسلام کے پانچ ارکان کون سے ہیں؟',
        'نماز کا پہلا رکن کیا ہے؟',
        'قرآن پاک کی کل کتنی سورتیں ہیں؟',
        'کلمہ طیبہ کے الفاظ کیا ہیں؟',
        'روزہ کس مہینے میں فرض کیا گیا؟',
        'حج کس شہر میں ادا کیا جاتا ہے؟',
        'زکوٰۃ کن لوگوں پر فرض ہے؟',

    ]);


    return (

        <div>
            <div className='responsive-container max-w-[901px] max-h-[872px] bg-[#FFFDF6] border-[0.2px] border-black p-4'>
                <div className='responsive-heading Noto-Nastaliq-Urdu text-[18px] font-medium  '>
                    سب سے اہم موضوع
                </div>

                <div className='min-w-full max-h-[113px] flex justify-evenly my-5 Noto-Nastaliq-Urdu' >
                    <div className='responsive-item w-[23%] max-h-[100%]  bg-[#FBF8EF] border-[0.2px] border-black flex justify-center items-center flex-col py-5'>
                        <img className='h-[40px] w-[40px]' src={fasting} alt="" />
                        <p className='text-[15px]' >روزے کے احکام</p>
                    </div>
                    <div className='responsive-item w-[23%] max-h-[100%] bg-[#FBF8EF] border-[0.2px] border-black flex justify-center items-center flex-col py-5 '>
                        <img className='h-[40px] w-[40px]' src={pilarIcon} alt="" />
                        <p className='text-[15px]'>اسلام کے ارکان</p>
                    </div>
                    <div className='responsive-item w-[23%] max-h-[100%] bg-[#FBF8EF] border-[0.2px] border-black flex justify-center items-center flex-col py-5'>
                        <img className='h-[40px] w-[40px]' src={prayerIcon} alt="" />
                        <p className='text-[15px]'>نماز کا طریقہ</p>
                    </div>
                    <div className='responsive-item w-[23%] max-h-[100%] bg-[#FBF8EF] border-[0.2px] border-black flex justify-center items-center flex-col py-5'>
                        <img className='h-[40px] w-[40px]' src={zakat} alt="" />
                        <p className='text-[15px]'>زکوٰۃ کی اہمیت</p>
                    </div>
                </div>

                <div className='responsive-heading Noto-Nastaliq-Urdu text-[18px] font-medium  '>
                    تمام سوالات
                </div>
                {/* tab section */}
                {/* <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}

                {/* <Box> */}
                    <div className='margin-bottom min-w-full max-h-[32px] flex justify-evenly  my-7 Noto-Nastaliq-Urdu'>
                        {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"> */}

                            {/* <Tab label="Item One"   {...a11yProps(0)} />  */}
                            <div className='responsive-item2 w-[23%] h-[100%]  bg-[#F7E7C9] border-[0.2px] border-black flex justify-center items-center py-1 gap-2'>
                                <p className='text-[15px]'>فالو اپ سوال</p>
                                <img className='h-[20px] w-[20px]' src={fourthIcon} alt="" />
                            </div>
                            <div className='responsive-item2 w-[23%] h-[100%]  bg-[#F1D9D8] border-[0.2px] border-black flex justify-center items-center py-1 gap-2'>
                                <p className='text-[15px]'>متضاد سوالات</p>
                                <img className='h-[20px] w-[20px]' src={firstIcon} alt="" />
                            </div>
                            <div className='responsive-item2 w-[23%] h-[100%]  bg-[#F1D9D8] border-[0.2px] border-black flex justify-center items-center py-1 gap-2'>
                                <p className='text-[15px]'>ٹرینڈنگ سوالات</p>
                                <img className='h-[20px] w-[20px]' src={ThirdIcon} alt="" />
                            </div>
                            <div className='responsive-item2 w-[23%] h-[100%]  bg-[#F1D9D8] border-[0.2px] border-black flex justify-center items-center py-1 gap-2'>
                                <p className='text-[15px]'>اسلام کو جانیں</p>
                                <img className='h-[20px] w-[20px]' src={SecondIcon} alt="" />
                            </div>
                        {/* </Tabs> */}
                    </div>
                {/* </Box> */}
                {/*  ------------------------------------------------------------- */}
                <div className='responsive-question-list max-w-[860px] max-h-[515px] overflow-y-auto bg-[#FBF8EF] border-[0.2px] border-black p-1'>
                    <div>
                        <ul className="Noto-Nastaliq-Urdu">
                            {fields.map((question, index) => (
                                <li key={index} className="responsive-question-item bg-[#FFFDF6] w-[97%] max-h-[53px] border-[0.2px] border-black m-2 p-2 text-[14px] text-right flex justify-between">
                                    <div className='max-w-118 max-h-20px text-[14px] flex'>
                                        <button className='mx-3' >
                                            <img src={eyeIcon} alt="" className='h-[20px] w-[20px] ' />
                                        </button>
                                        <span> 104</span>

                                        <button className='mx-3'>
                                            <img src={commentIcon} alt="" className='h-[20px] w-[20px] ' />
                                        </button>
                                        <span> 104</span>

                                    </div>
                                    {question}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainBody
