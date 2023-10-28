import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { GrFormNextLink, GrFormPreviousLink  } from "react-icons/gr";



const products = [
  {
    id: 1,
    description: 'Mochila-viajera negra ',
    image: '/product1.png',
    price: '$99.99',
  },
  {
    id: 2,
    description: 'Mochila-viajera azul',
    image: '/product2.png',
    price: '$79.99',
  },
  {
    id: 3,
    description: 'Mochila-viajera Blanca',
    image: '/product3.png',
    price: '$129.99',
  },
  // Agrega más productos según sea necesario
];

const Portada = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };




  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
        {/*principal contenedor*/}
        <div className="  m-12 rounded-lg  w-full h-full  ">
          <div className="grid grid-cols-3 items-center justify-center p-12 ">
            {/*titulo y precio */}
              <div className="text-white  flex  flex-col  text-left   font-oswald">
                  <h1 className=" text-4xl">FORCE 200px-amp</h1>
                  <h2 className="text-8xl">Bs 700</h2>
                    <button className="text-white bg-blue-800 rounded-md  mr-56 mt-12 text-4xl p-2 hover:bg-blue-700  ">Comprar</button>
              </div>
            {/*fotografia */}
            <div className="relative">
              <div className=" flex   flex-col items-center justify-center   " key={products[currentIndex].id}>
                <img src={products[currentIndex].image} alt=""  className=" " />
              </div>
            </div>

            {/*descripcion*/}
            <div className=" ml-20">
              <div className="text-center text-white">
                <div className=" flex gap-5  font-normal    font-oswald items-center m-5 ">
                  <BsFillCheckCircleFill className=" text-green-600 w-6 h-6 "/>
                  <p className="text-white text-2xl ">Ampers</p>
                </div>
                  <div>
                    <p className=" font-oswald"> 500 Amp of Power</p>
                  </div>
              </div>
                <div className="text-center text-white">
                <div className=" flex gap-5  font-normal   font-oswald items-center m-5 ">
                  <BsFillCheckCircleFill className=" text-green-600 w-6 h-6 "/>
                  <p className="text-white text-2xl ">composicion</p>
                </div>
                  <div>
                    <p className=" font-oswald"> 500 Amp of Power</p>
                  </div>
                </div>
                <div className="text-center text-white">
                <div className=" flex gap-5  font-normal   font-oswald items-center m-5 ">
                  <BsFillCheckCircleFill className=" text-green-600 w-6 h-6 "/>
                  <p className="text-white text-2xl  ">manufactura</p>
                </div>
                  <div>
                    <p className=" font-oswald"> 500 Amp of Power</p>
                  </div>
                </div>
            </div>
          </div>
          <div className=" flex justify-between m-12 ">
            <GrFormPreviousLink onClick={prevSlide} className="  bg-white rounded-full p-1 h-8 w-8"/>
            <div className="flex gap-2 items-center">
              <IoLogoWhatsapp className=" text-green-300 w-8 h-8"/>
              <p className=" text-white  bg-blue-800  p-2 rounded-md font-oswald">Mejor precio</p>
            </div>
              <GrFormNextLink  onClick={nextSlide} className="bg-white rounded-full p-1 h-8 w-8"/>
          </div>
        </div>
    </div>
  )
}

export default Portada;