import React, {useEffect} from 'react';
import background from './Assets/headerbg.jpg'
import Profile from './Assets/CEO.jpeg'
import Typewriter from './Component/Typewriter';
import {FaFacebookF , FaInstagram, FaTwitter, FaLinkedinIn, FaAngleDoubleRight} from 'react-icons/fa'
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])

  const style = `font-bold hover:text-mobicom-red transition-all text-md duration-300 text-white`

  return (
    <div className='w-full overflow-x-hidden'>
      {/* Start Header */}
      <div className="h-screen w-full bg-fixed relative" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>  
        <div className='absolute top-[50%] sm:top-[30%] left-[5%]'>
          <h1 className='text-lg sm:text-6xl italic font-bold text-white'><Typewriter text={'Коожи Курушима'} /></h1>
          <p className=' text-sm sm:text-xl italic font-bold text-white mt-2'> Гүйцэтгэх захирал </p>
          <p className=' text-sm sm:text-xl italic font-bold text-white mt-2 w-full sm:w-[60%]'><Typewriter text={'Behind the word mountains, far from the countries Vokalia and Conson antia, there seedBehind the word mountains, far from the countries Vokalia and Conson antia, there seed'} /></p>
        </div>
      </div>
      {/* Section 2 */}
      <div id='about' className='w-full h-screen justify-center space-x-0 sm:space-x-32 items-center flex flex-col sm:flex-row px-2 sm:px-0'>
        <div className='w-full justify-end flex'>
          <img data-aos="zoom-out-right" className='w-full sm:w-[398px] h-full sm:h-[530px] object-cover rounded-lg shadow-lg' src={Profile} />
        </div>
        <div className='justify-center flex flex-col w-full'>
          <h1 data-aos="zoom-out-left" className='text-lg sm:text-4xl italic font-bold'>Миний <span className='text-mobicom-red'>тухай</span></h1>
          <div className=''>
            <p data-aos="zoom-out-left" className='w-full sm:w-[60%] text-sm sm:text-lg mt-5 text-gray-500 font-semibold sm:text-justify'>Кожи Курушима нь 2017 оноос Мобиком Корпорацийн Маркетингийн газрын Захирлаар ажиллаж байгаад 2018 оны 4 дүгээр сараас Маркетингийн Асуудал Эрхэлсэн Дэд Захирлаар томилогдон ажилласан. 2022 оны 04 сарын 01-ний өдрөөс эхлэн Мобиком Корпорацийн Гүйцэтгэх захирлын албан тушаалд томилогдон ажиллаж байна.</p>
            <p data-aos="zoom-out-left" className='w-full sm:w-[60%] text-sm sm:text-lg mt-5 text-gray-500 font-semibold text-justify'>Курушима нь их сургуулиа төгсөөд KDDI Корпорациас ажлын гараагаа эхэлсэн. Тэрбээр KDDI Корпорацид 20 гаруй жил ажиллахдаа Корпорацийн стратеги, Шинэ бизнесийн хөгжүүлэлт, Төслийн менежмент, Маркетинг, охин компаниудын менежмент зэрэг олон салбарт ажиллаж туршлага хуримтлуулсан. Курушима нь Мобиком Корпорацид ажиллахаас өмнө олон улс оронд бизнесийн томоохон төслүүд дээр ажиллаж байсан арвин туршлагатай удирдлагын багийн гишүүн юм.</p>
          </div>
          <div data-aos="zoom-out-left" className=' flex-wrap mt-5 flex justify-between w-1/2'>
            <h1 className='font-bold italic flex items-center '><FaAngleDoubleRight /> Гүйцэтгэх захирал</h1>
          </div>
        </div>
      </div>
      {/* Section 2 end */}
      {/*  */}
      <div className='w-full h-screen py-32'>
        <div className='container mx-auto px-2 sm:px-0'>
          <h1 className='text-lg sm:text-4xl  font-bold italic'>Миний <span className='text-mobicom-red'>замнал</span></h1>
          <div className='container py-20 ml-[0%] sm:ml-[12%]'>
            <div data-aos="fade-up" className='flex flex-wrap w-full min-h-[120px]'>
              <div className='FLEX max-w-[20%] relative pr-[20px] leading-none'>
                <div className='Color w-5 h-5 rounded-full'></div>
                <p className=' text-[16px] text-mobicom-red'>January</p>
                <p className='sm:text-[42px] text-lg font-semibold'>2018</p>
                <div className='Colors w-5 h-5'></div>
              </div>
              <div className='content'>
                The origin of STMX platform idea. Development of the concept and business plan.
              </div>
            </div>
            <div data-aos="fade-up" className='flex flex-wrap w-full min-h-[120px]'>
              <div className='FLEX max-w-[20%] relative pr-[20px] leading-none'>
                <div className='Color w-5 h-5 rounded-full'></div>
                <p className=' text-[16px] text-mobicom-red'>January</p>
                <p className='sm:text-[42px] text-lg font-semibold'>2018</p>
                <div className='Colors w-5 h-5'></div>
              </div>
              <div className='content'>
                The origin of STMX platform idea. Development of the concept and business plan.
              </div>
            </div>
            <div data-aos="fade-up" className='flex flex-wrap w-full min-h-[120px]'>
              <div className='FLEX max-w-[20%] relative pr-[20px] leading-none'>
                <div className='Color w-5 h-5 rounded-full'></div>
                <p className=' text-[16px] text-mobicom-red'>January</p>
                <p className='sm:text-[42px] text-lg font-semibold'>2018</p>
                <div className='Colors w-5 h-5'></div>
              </div>
              <div className='content'>
                The origin of STMX platform idea. Development of the concept and business plan.
              </div>
            </div>
            <div data-aos="fade-up" className='flex flex-wrap w-full min-h-[120px]'>
              <div className='FLEX max-w-[20%] relative pr-[20px] leading-none'>
                <div className='Color w-5 h-5 rounded-full'></div>
                <p className=' text-[16px] text-mobicom-red'>January</p>
                <p className='sm:text-[42px] text-lg font-semibold'>2018</p>
                <div className='Colors w-5 h-5'></div>
              </div>
              <div className='content'>
                The origin of STMX platform idea. Development of the concept and business plan.
              </div>
            </div>
            <div data-aos="fade-up" className='flex flex-wrap w-full min-h-[120px]'>
              <div className='FLEX max-w-[20%] relative pr-[20px] leading-none'>
                <div className='Color w-5 h-5 rounded-full'></div>
                <p className=' text-[16px] text-mobicom-red'>January</p>
                <p className='sm:text-[42px] text-lg font-semibold'>2020</p>
                <div className='Colors w-5 h-5'></div>
              </div>
              <div className='content'>
                The origin of STMX platform idea. Development of the concept and business plan.
              </div>
            </div>
            <div data-aos="fade-up" className='flex flex-wrap w-full min-h-[120px]'>
              <div className='FLEX max-w-[20%] relative pr-[20px] leading-none'>
                <div className='Color w-5 h-5 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Section 3 */}
      <div className='w-full mt-36'>
        <div className='container mx-auto px-2 sm:px-0'>
        <h1 className='sm:text-4xl text-lg font-bold italic'>Social <span className='text-mobicom-red'>хуудас</span></h1>
        <div className='flex justify-center items-center w-full'>
          <ul className='flex justify-evenly items-center py-20 w-full'>
            <li className='hover:bg-mobicom-red hover:rounded-full p-10 hover:text-white transition-all duration-300'>
              <FaFacebookF className=' text-xl sm:text-5xl' />
            </li>
            <li className='hover:bg-mobicom-red hover:rounded-full p-10 hover:text-white transition-all duration-300'>
              <FaInstagram className=' text-xl sm:text-5xl' />
            </li>
            <li className='hover:bg-mobicom-red hover:rounded-full p-10 hover:text-white transition-all duration-300'>
              <FaTwitter className=' text-xl sm:text-5xl' />
            </li>
            <li className='hover:bg-mobicom-red hover:rounded-full p-10 hover:text-white transition-all duration-300'>
              <FaLinkedinIn className=' text-xl sm:text-5xl' />
            </li>
          </ul>
        </div>
        </div>
      </div>
      {/* Section 3 end */}
    </div>
  );
}

export default App;
