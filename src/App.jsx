import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Arrivals = [{}];

  return (
    <div>
      <div className=" h-[100px] top-0 bg-white flex items-center w-full fixed z-[9999]">
        <header className="fixed left-0 w-full z-[10000] ">
          <nav className="w-[90%] xl:w-[1240px] mx-auto h-[48px] flex justify-between items-center">
            <div className=" flex justify-between items-center w-full ">
              <div className="flex items-center gap-x-3 ">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:hidden"
                >
                  <path
                    d="M19.375 8C19.375 8.29837 19.2565 8.58452 19.0455 8.79549C18.8345 9.00647 18.5484 9.125 18.25 9.125H1.75C1.45163 9.125 1.16548 9.00647 0.954505 8.79549C0.743526 8.58452 0.625 8.29837 0.625 8C0.625 7.70163 0.743526 7.41548 0.954505 7.2045C1.16548 6.99353 1.45163 6.875 1.75 6.875H18.25C18.5484 6.875 18.8345 6.99353 19.0455 7.2045C19.2565 7.41548 19.375 7.70163 19.375 8ZM1.75 3.125H18.25C18.5484 3.125 18.8345 3.00647 19.0455 2.7955C19.2565 2.58452 19.375 2.29837 19.375 2C19.375 1.70163 19.2565 1.41548 19.0455 1.2045C18.8345 0.993526 18.5484 0.875 18.25 0.875H1.75C1.45163 0.875 1.16548 0.993526 0.954505 1.2045C0.743526 1.41548 0.625 1.70163 0.625 2C0.625 2.29837 0.743526 2.58452 0.954505 2.7955C1.16548 3.00647 1.45163 3.125 1.75 3.125ZM18.25 12.875H1.75C1.45163 12.875 1.16548 12.9935 0.954505 13.2045C0.743526 13.4155 0.625 13.7016 0.625 14C0.625 14.2984 0.743526 14.5845 0.954505 14.7955C1.16548 15.0065 1.45163 15.125 1.75 15.125H18.25C18.5484 15.125 18.8345 15.0065 19.0455 14.7955C19.2565 14.5845 19.375 14.2984 19.375 14C19.375 13.7016 19.2565 13.4155 19.0455 13.2045C18.8345 12.9935 18.5484 12.875 18.25 12.875Z"
                    fill="black"
                  />
                </svg>
                <h1 className="font-[700] text-[30px] leading-[38.4px] text-[rgba(0, 0, 0, 1)]">
                  SHOP.CO
                </h1>
              </div>

              <div className="hidden lg:block">
                <ul className="flex gap-[40px] ">
                  <li className="font-[400] text-[16px] leading-[24px] text-[rgba(0, 0, 0, 1)]">
                    Shop{" "}
                  </li>
                  <li className="font-[400] text-[16px] leading-[24px] text-[rgba(0, 0, 0, 1)]">
                    On Sale
                  </li>
                  <li className="font-[400] text-[16px] leading-[24px] text-[rgba(0, 0, 0, 1)]">
                    New Arrival
                  </li>
                  <li className="font-[400] text-[16px] leading-[24px] text-[rgba(0, 0, 0, 1)]">
                    Brands
                  </li>
                </ul>
              </div>
              <div class="flex items-center flex-1 max-w-lg hidden lg:block">
                <div class="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    class="w-full pl-10 py-2  border border-gray-300 rounded-3xl bg-[#F0F0F0] focus:outline-none"
                  />
                  <svg
                    class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="flex gap-x-2">
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.375 19.25C9.375 19.6208 9.26503 19.9834 9.059 20.2917C8.85298 20.6 8.56014 20.8404 8.21753 20.9823C7.87492 21.1242 7.49792 21.1613 7.1342 21.089C6.77049 21.0166 6.4364 20.838 6.17417 20.5758C5.91195 20.3136 5.73337 19.9795 5.66103 19.6158C5.58868 19.2521 5.62581 18.8751 5.76773 18.5325C5.90964 18.1899 6.14996 17.897 6.45831 17.691C6.76665 17.485 7.12916 17.375 7.5 17.375C7.99728 17.375 8.47419 17.5725 8.82582 17.9242C9.17745 18.2758 9.375 18.7527 9.375 19.25ZM17.25 17.375C16.8792 17.375 16.5166 17.485 16.2083 17.691C15.9 17.897 15.6596 18.1899 15.5177 18.5325C15.3758 18.8751 15.3387 19.2521 15.411 19.6158C15.4834 19.9795 15.662 20.3136 15.9242 20.5758C16.1864 20.838 16.5205 21.0166 16.8842 21.089C17.2479 21.1613 17.6249 21.1242 17.9675 20.9823C18.3101 20.8404 18.603 20.6 18.809 20.2917C19.015 19.9834 19.125 19.6208 19.125 19.25C19.125 18.7527 18.9275 18.2758 18.5758 17.9242C18.2242 17.5725 17.7473 17.375 17.25 17.375ZM22.0753 6.08094L19.5169 14.3966C19.3535 14.9343 19.0211 15.4051 18.569 15.739C18.1169 16.0729 17.5692 16.2521 17.0072 16.25H7.77469C7.2046 16.2482 6.65046 16.0616 6.1953 15.7183C5.74015 15.3751 5.40848 14.8936 5.25 14.3459L2.04469 3.125H1.125C0.826631 3.125 0.540483 3.00647 0.329505 2.7955C0.118526 2.58452 0 2.29837 0 2C0 1.70163 0.118526 1.41548 0.329505 1.2045C0.540483 0.993526 0.826631 0.875 1.125 0.875H2.32687C2.73407 0.876258 3.12988 1.00951 3.45493 1.25478C3.77998 1.50004 4.01674 1.84409 4.12969 2.23531L4.81312 4.625H21C21.1761 4.62499 21.3497 4.6663 21.5069 4.74561C21.664 4.82492 21.8004 4.94001 21.905 5.08164C22.0096 5.22326 22.0795 5.38746 22.1091 5.56102C22.1387 5.73458 22.1271 5.91266 22.0753 6.08094ZM19.4766 6.875H5.45531L7.41375 13.7281C7.43617 13.8065 7.48354 13.8755 7.54867 13.9245C7.6138 13.9736 7.69315 14.0001 7.77469 14H17.0072C17.0875 14.0002 17.1656 13.9746 17.2303 13.927C17.2949 13.8794 17.3426 13.8123 17.3662 13.7356L19.4766 6.875Z"
                    fill="black"
                  />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* Hero section */}
      <section className="w-full min-h-[663px] xl:h-[663px] bg-[#f2f0f1] flex justify-center items-center mt-[100px]">
        <div className="w-full max-w-[1470px] px-6 sm:px-12 md:px-16 lg:px-20 xl:px-0 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center">
            {/* Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[72px] leading-[1.2]">
                <span className="block">FIND CLOTHES</span>
                <span className="block">THAT MATCHES</span>
                <span className="block">YOUR STYLE</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-[95%] sm:max-w-[80%] md:max-w-[600px] mx-auto lg:mx-0">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>

              <button className="bg-black w-full sm:w-[70%] md:w-[250px] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300">
                Shop Now
              </button>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mt-12">
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl font-bold">200+</h3>
                  <p className="text-gray-600 mt-2">International Brands</p>
                </div>
                <div className="border-r h-12 hidden sm:block" />
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl font-bold">2,000+</h3>
                  <p className="text-gray-600 mt-2">High-Quality Products</p>
                </div>
                <div className="border-r h-12 hidden sm:block" />
                <div className="text-center ">
                  <h3 className="text-3xl sm:text-4xl font-bold">30,000+</h3>
                  <p className="text-gray-600 mt-2">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="flex justify-center lg:justify-end w-full relative ">
              {/* Background Image */}
              <img
                src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1740937393/4030b61f8ad1ec7b4f5097c21d33ced3_bysadr.png"
                alt="Fashion style"
                className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] ml-[150px]  md:ml-0 h-auto object-cover object-center"
              />

              {/* Main Image */}
              <img
                src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1740937434/9155f5c011607781f48d7346cd7efcdd_ydl2ih.png"
                alt="Fashion style"
                className="w-[280px] sm:w-[350px] md:hidden xl:block md:w-[450px] lg:w-[520px] absolute h-auto lg:h-[727px] top-[50px] left-[100px] right-[5px] sm:right-[40px] lg:left-[10px]"
              />

              {/* Decorative Elements */}
              <svg
                className="absolute top-[40px] right-[10px] sm:right-[30px] w-[32px] sm:w-[48px]"
                viewBox="0 0 104 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                />
              </svg>

              <svg
                className="absolute top-[200px] left-[10px] sm:top-[280px] sm:left-[20px] w-[24px] sm:w-[36px]"
                viewBox="0 0 104 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className=" w-full min-h-[122px] lg:h-[122px] bg-black relative flex justify-evenly items-center z-20 flex-wrap">
        <img
          src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1740942251/Vector_1_gw16my.png"
          alt="not"
        />
        <img
          src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1740942252/Vector_2_e3x4mr.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1740942252/Vector_3_y2sjjg.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1740942252/Vector_4_ovomg5.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dfng3w9jm/image/upload/v1740942252/Vector_5_gi3ds5.png"
          alt=""
        />
      </div>

      <section className="lg:w-[90%] xl:w-[1240px]  mx-auto mt-[70px]">
        <h1 className="font-bold text-[64px]  leading-[64px] text-center ">
          NEW ARRIVALS
        </h1>

        <div className="mt-[70px] w-full flex justify-center gap-5 flex-wrap">
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src=" https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BUa5RUjyLYLApcsfeqLHyl447084xnuQYIGMjfhdWOcl0MOEuQ2MsGrNIt3ypMe3SJBWQkxStXM3Ln3txxcBoI5rt8Wb0imARg9uJTLKniDeisq77eEqDJzwDUQlRss3wi3manSrZ~WgpmwCI1rTg3jby4cDFI5CWFEz0TAQUkHYrA5gDZ-uTUKT5wS6rOcFZH6oypqzuDDGqpjtmkS5dTkIQRoV1IaNKM06Y8q0nLplR7~APegMIzawjqRfEm0LBQGrazl5JNc~gRDuqQziale9sPSgagyehLyQ7PDkdRbNXbC16F2BKUdQg9cny8MEOhyQrH2UINoev6P30hryQQ__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              T-shirt with Tape Details
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">4.5/5</p>
            </div>
            <h1 className="font-[700] text-[24px] leading-[32px] mt-1.5">
              $120
            </h1>
          </div>
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FJJnCd-uvEshRB5VJ3SjNlzS4LfgnLEp8oPKKD5~0DZ2NzyGiU4OAUQyyC62jfK~r8GcOljO2P7bt382B0x68tnBoVYPh-TH3ZWj2SXrEQrGL97QvY0qS6y8P6PujRZPK8CdYJq2Th72ps9txoOU-ZDuUf-i1xnmGdW1bW1FLnhwo9B1ygyXzB5MyDik6gC2lax8vS487SbXARsFCMB-0nqOur5m7BeIFP99Q-jxnbd6JkVYrpxJ-8FOxtpUkbNPiBJYG1AjSAlHHhFpbWhFJVoRz8BxIiSwz8e8jepdz7hBOE21k~J6FVJjEiLHAgTpe~dQrbiC-NlxITy~QYgk4Q__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              Skinny Fit Jeans
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>

              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">3.5/5</p>
            </div>
            <div className="flex gap-x-3 items-center mt-1.5  ">
              <h1 className="font-[700] text-[24px] leading-[32px] ">$240</h1>
              <h1 className="font-[700] text-[24px] leading-[32px] line-through text-[#9c9999]">
                $260
              </h1>
              <p className="w-[58px] h-[28px] bg-[#FF33331A] rounded-3xl font-[500] text-[12px] leading-[16px] text-[#ff3333] flex justify-center items-center">
                -20%
              </p>
            </div>
          </div>
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qFj~KhVo3aBW5UtfofR34GUjKUn8vwgC1AsW0F1DHsRedJ009WqGj5pstQKE~v8ffJUEOIPS8uaVxDLIcDi3Fc02yb3IvrFLp9YuXCkG8nzrn~tWchQ3~e6f7UbLXXaagzK4Eagt4uzo9E5Nd0p8gZl67cVdaCcwTQm6Xy1JCknNBeeGCRQIXVPBkHHGGflH64PIUJgwQQivxuKQ8TlMtEzCLjo0-wurFOL0wj5IbuIyMh7dB--vX-nQdfeWoSJKPuQbuudPCaeHfxfqME-I3L2J-gnTCDoeAy~pYukoZgKua8OPHCLSNf90J8TUUd81wS~gkCSVrV6Y29oYrqSZUw__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              Checkered shirt
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">4.5/5</p>
            </div>
            <h1 className="font-[700] text-[24px] leading-[32px] mt-1.5">
              $180
            </h1>
          </div>
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WROohbM9X9Sn-xbwa6xg1oJL40mBe9Ljz33XuyixA1xwb6Pdwq1E16hcpSMgOj~454Ds~Ns-dPBjMTV0VIrrZDicCxQCuYPpdCZolP0iLbxKBwXfQXH9pWjJ-uMGVj~RsP~HnHFZZmI0jBBQt8S06DWokHCHd7P~nN921wMg-5-A2Dl5aePUeO~H-N~K57ZqDIEDTvotySSssS-uLDBcrFZON8fVkc495qTmOpY9h6DY2~qxkoK4HKh-jhMAR7vMuA5icDP4XKOI7F0OwqgswZoG5a9klxOZA537C1FbUPoaNMy9x0N~kg4fg9vKTwPIbnxxSynn9xONgz6vbv5kIQ__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              Sleeve Striped T-shirt
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">4.5/5</p>
            </div>
            <div className="flex gap-x-3  items-center mt-1.5">
              <h1 className="font-[700] text-[24px] leading-[32px] ">$130</h1>
              <h1 className="font-[700] text-[24px] leading-[32px] line-through text-[#9c9999]">
                $160
              </h1>
              <p className="w-[58px] h-[25px] bg-[#FF33331A] rounded-3xl font-[500] text-[12px] leading-[16px] text-[#ff3333] flex justify-center items-center">
                -30%
              </p>
            </div>
          </div>
        </div>

        <div className="w-full text-center my-[60px]">
          <button className="w-[218px] h-[52px] rounded-3xl border-[#80808065] border font-[500] leading-[21px] cursor-pointer">
            View All
          </button>
        </div>
      </section>

      <section className="lg:w-[90%] xl:w-[1240px] mx-auto border-t border-[#80808070]">
        <h1 className="font-bold text-[64px]  leading-[64px] text-center mt-[70px]">
          TOP SELLING
        </h1>

        <div className="mt-[70px] w-full flex justify-center gap-5 flex-wrap">
          {/* { [1,2,3,4,].map((item,index)=>(
           <div className="w-[295px] ">
           <div className="flex justify-center items-center  w-full h-[298px] ">
             <img
               src=" https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BUa5RUjyLYLApcsfeqLHyl447084xnuQYIGMjfhdWOcl0MOEuQ2MsGrNIt3ypMe3SJBWQkxStXM3Ln3txxcBoI5rt8Wb0imARg9uJTLKniDeisq77eEqDJzwDUQlRss3wi3manSrZ~WgpmwCI1rTg3jby4cDFI5CWFEz0TAQUkHYrA5gDZ-uTUKT5wS6rOcFZH6oypqzuDDGqpjtmkS5dTkIQRoV1IaNKM06Y8q0nLplR7~APegMIzawjqRfEm0LBQGrazl5JNc~gRDuqQziale9sPSgagyehLyQ7PDkdRbNXbC16F2BKUdQg9cny8MEOhyQrH2UINoev6P30hryQQ__"
               alt=""
               className="w-full h-full rounded-2xl object-cover"
             />
           </div>
           <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
             T-shirt with Tape Details
           </h1>
           <div className="mt-1 flex gap-x-[13px]">
             <svg
               width="19"
               height="17"
               viewBox="0 0 19 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                 fill="#FFC633"
               />
             </svg>
             <svg
               width="19"
               height="17"
               viewBox="0 0 19 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                 fill="#FFC633"
               />
             </svg>
             <svg
               width="19"
               height="17"
               viewBox="0 0 19 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                 fill="#FFC633"
               />
             </svg>
             <svg
               width="19"
               height="17"
               viewBox="0 0 19 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                 fill="#FFC633"
               />
             </svg>
             <svg
               width="9"
               height="17"
               viewBox="0 0 9 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                 fill="#FFC633"
               />
             </svg>
             <p className="font-[400] leading-[18px] text-[14px]">4.5/5</p>
           </div>
           <h1 className="font-[700] text-[24px] leading-[32px] mt-1.5">
             $120
           </h1>
         </div>
        ))} */}
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iuFR4gVejHVkn42AtzPfnj0Hf6jK~GvUnFrGzR8Z6f5Lp1oG-MtxT~KYzLM1xuKzp0QOEq4nordXw9StcG--RsQErgdIPnI8jXFOdY2WrpFpuzWhxbVPpTJRB0khNYsq1-oc1iOEanzpWGBVBrJ4U--7oW4-GTfC6uyBvOOCJw4aXlBdV5qWcFcQkgTTTOeetlO8jGnEa9yHb5RGyZHuTGPMIwxS5ZtRYuOPzOvjwS0lUk-BGeZX9GZ5q4CJU8gFKmByND-J~JubUukWaAfaayRi2qXhnMcDk~wsl-c8~bTU7Ffw-mX172gZRZUKhr2T59ce2UKzMM7~POh-Ohoqhg__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              Vertical Striped Shirt
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>

              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">3.5/5</p>
            </div>
            <div className="flex gap-x-3 items-center mt-1.5  ">
              <h1 className="font-[700] text-[24px] leading-[32px] ">212</h1>
              <h1 className="font-[700] text-[24px] leading-[32px] line-through text-[#9c9999]">
                $332
              </h1>
              <p className="w-[58px] h-[28px] bg-[#FF33331A] rounded-3xl font-[500] text-[12px] leading-[16px] text-[#ff3333] flex justify-center items-center">
                -20%
              </p>
            </div>
          </div>
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RQ91fEejaIqgg2wclKZnS2b74PLt9MLT1nfEQ1Kq3hmxcu6Hq7wUsBRhu9GjLNXvLJM2qIVcxa0qwCB7pre89EaxKNbhonHEJAM0kTlV4np6fidW4BaaQ7U7XcGnghxsntIo1XnckOSCZ1kDxf4TsrjeakOgqdW-H2Sl6cINYH3fQpdgLGA4S66SxvaX9t~ynCWVW~Lx5-wYvMDmuiJG-WazVLb6qAD5AlqEo5JTuRhPIIKHBqLAoxTcGDZL3wdEF9XTIA~O8yiHC~S9wA7HETD0I-ElhX91q2j75Tn7Jv3UY-bAGT7UWUMpjc61X2fGoIqGJ6h0qdwa29UpIITu3Q__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              Courage Graphic T-shirt
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">4.5/5</p>
            </div>
            <h1 className="font-[700] text-[24px] leading-[32px] mt-1.5">
              $145
            </h1>
          </div>
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kr-j7M0gBcJ0N2L8dtXSg-ICzck6RW4Ejum4X24iuueD0kfuMOPCWo-M-eD9RlTHH-hFeADYuIQJbkLH3PMNNlpXuhnYaK1dUR2PROf1AidcLQo9l~hjWDVfs31W4O5xBU7KNQ-2l~muw7iQmyGXXlkdVhl3U7jK-ZM4qzpcjsCTd2f7tAmPSibh0Y6UwLESjyZ-fcybXtbNC581JIV4fXsfd7EtN8TJNDdhDMV0R~F3qaSUf5wuJTPtgo3vN1LLV58cfVYwxKyCGUGIEccafT0JyQfxlwe0jUT9koQCFER-0dr2URSJ7lLgVD9abhcbsStTv9DUJjbFH5ILMTtxMQ__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              Loose Fit Bermuda Shorts
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">4.5/5</p>
            </div>
            <div className="flex gap-x-3  items-center mt-1.5">
              <h1 className="font-[700] text-[24px] leading-[32px] ">$80</h1>
            </div>
          </div>
          <div className="w-[295px] ">
            <div className="flex justify-center items-center  w-full h-[298px] ">
              <img
                src="https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OK1d4tboGHF-S7T90dFXa~cRd392zc433Vcz2NXB57KJpHxyJhUjZtMCVGAoj4N1A0fYxqVyHoOn9ZUnbEUPPmm-OZ4DMAFYxNumldK2o2BfKdCxmQqG4u084VU~IrTRjcKDOZqDJvOcLTTCZyrC8bi3e-0qToFyNjkbdo82gxqyB2ayKped-tULJX6mz4BLLvj2cj1oCJO7x~Bk2ndNbQIz1rBYiLAISYLA82ExEEEUW8S7vFvfKOiuYOOVEFVSr7ig1UtJXnU5xFipt6R4DFoCUGNGZB~cC90CgW~53mad5r643VBgxQ~ZQO1~eADDIbBFZO2sv-L6pLvHXg5Syg__"
                alt=""
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <h1 className="mt-3 font-[700] text-[20px] leading-[27px]">
              Sleeve Striped T-shirt
            </h1>
            <div className="mt-1 flex gap-x-[13px]">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
              </svg>
              <svg
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56595 16.9793L8.99999 13.956V0.255005L6.38079 5.89491L0.207535 6.6431L4.76203 10.8769L3.56595 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <p className="font-[400] leading-[18px] text-[14px]">4.5/5</p>
            </div>
            <div className="flex gap-x-3  items-center mt-1.5">
              <h1 className="font-[700] text-[24px] leading-[32px] ">$210</h1>
            </div>
          </div>
        </div>

        <div className="w-full text-center my-[60px]">
          <button className="w-[218px] h-[52px] rounded-3xl border-[#80808065] border font-[500] leading-[21px] cursor-pointer">
            View All
          </button>
        </div>
      </section>

      <section className="w-full max-w-screen-xl min-h-[866px] xl:h-[866px] rounded-3xl bg-[#F0F0F0] mx-auto flex flex-col justify-center items-center py-10">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
          BROWSE BY DRESS STYLE
        </h2>

        {/* Grid Container */}
        <div className="flex flex-wrap justify-center gap-5 mt-3">
          {/* Casual */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md w-[90%] md:w-[407px] xl:w-[284px] h-[289px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/e1b7/74ab/a32d9a769caba77c08e107a9198dcd6d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WzRyf4tXWFQLaL4FwtAIF6TIXsFMGqUUFgHEkhQhG5gi-W7ebeY6twJu~JAx3WJFGcl1Lz6E~2svC5C74MkGezjIlYBWdvuNSwtfl63wDR6~RCAKyubHeHzr-inxCZ0iIqO~8YpqduLGOtvfm6s30KTu1b8DIaE-ZjWhPtmwJSZzIc-NuCU9CXXfPN4yxG8~hgb0F~VjGjKp7QVtuXi68KTvkJdb-ayXvW-x-2mTS96lN0kr5XL-2ea2SZKOdng7JnrAB8tfLkEhwREmCDsyFpdH3KLgTpw-gE0GLtNa1LJ8FyqBsK8XXhq3gNznLobXRJbzcSK8393pSfPnKGDaxA__"
              alt="Casual"
              className="w-full h-full scale-x-[-1]  object-cover scale-110"
            />
            <p className="absolute top-4 left-4 text-black text-lg font-[700] text-[36px] leading-[48px]">
              Casual
            </p>
          </div>
          {/* Formal */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md w-[90%] md:w-[407px] xl:w-[684px] h-[289px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/e46e/d6ac/8bdbe2c750dcc6e834bf1d98a4a73b29?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VTMMHfd9piQxAhGc4Y1TcHuZ0YA9Bq6oKfFj6n8VqaWRE9OMceoGxOMsZzLn8PJcU7G75PCScTkAwrYtgPDO2DF1uYFjjUn4uur1zkZHrRVdYtPltcKpodxYN-65y3NjryZs-dCm6q6~DVUlsbwRdJJKvDTpTZO7kMM0eOwvk5f~uSFw~WqhBcevciK5IpPNPRqpR4dVcBS1FyDlungD~XvDFRb87UBDOf96ywfeKkf5mTnOTjtmcZ7zz6AciCdP7gTVHGRIo6pLv4xAxYf7fDcoTs-olWmWjHbmeUYtvOrvm8meeVbAGHeiucWB7270xXLq7EzbiTubQg1uSFW6mA__"
              alt="Formal"
              className="w-full h-full ml-[100px]  xl:ml-[270px]   object-cover"
            />
            <p className="absolute top-4 left-4 text-black text-lg font-semibold">
              Formal
            </p>
          </div>
          {/* Another Casual */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md w-[90%] md:w-[407px] xl:w-[684px] h-[289px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/8d96/f9a7/9155f5c011607781f48d7346cd7efcdd?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GQyDf2fuqum77Yvnb3RFWNHquPTvWbaog-u3K1dEcpUcYcxkDNZ0WqiuyyNOF95mXedkFULCdoLmBN8MrDEjJ7zSq0gna5cbCT2EZQWE04-CIuYCa4uo0lEURveqv7PEbMrVKr-BPwhLGsDoRxgWpaIjGdrQ3NsNWk3VUWGn4F1FtBnqPQz-rFbOLcN~g8VZC7wvtHgn~qlvzStKcS-82h-o3NKgSJ5H23Q7Qa86V1aE6YSn0F4eT~NdxRMg0X8aAKUoqACCPlRjKlWFBXmH4JMQB5qwi8ZF7sgV7BrSmAhjlgJunjKrngXDs9ECAXKHyUfs-fFrd-LtjGZbWsT3nQ__"
              alt="Formal"
              className="w-[50%]   ml-[100px] xl:ml-[270px] h-full object-cover"
            />
            <p className="absolute top-4 left-4 text-black text-lg font-semibold">
              Formal
            </p>
          </div>
          {/* Another Casual */}
          <div className="relative bg-white rounded-lg overflow-hidden shadow-md w-[90%] md:w-[407px] xl:w-[284px] h-[289px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/fce6/58e0/c17a220fe8bfb1126626f3ab58a761ec?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hMcnJ1HIO8L7GK7yKPMmrsUblpKJD37mmk1WQIaa7YqnN062pjQMH2658M96YUjg0q00~N7VzCavYP5ip8-r1OlaVarzsSx2oL-VFzOm-NkNXRr7l2KYzljT2-KCVp73SnvVweBF8LXhh2-X0izMBDP5A94b5-5OzMGXA3Id~2QpAi7DNn~qqVNIK2M3zjxovDO0QrSv0f8UsxlZ4QE3xon6K47zzMT4z1y2wZdMU2x3pZ-WlgnoumPpb9QQC4HnQT1ZxWImF5EQFfvxxP93EC7FVVU32ObHicvKpFrOoCWMSRewKyjCo~kfQdvRbnB6Be0Brd6NYb5pJ~8ePjEzAA__"
              alt="Casual"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-4 left-4 text-black text-lg font-semibold">
              Casual
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <h2 className=" md:text-4xl font-bold  mb-12  text-[48px] leading-[57px] ">
              OUR HAPPY CUSTOMERS
            </h2>
            <div className=" flex gap-x-1.5 items-center">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.70406 0.454104L0.954061 7.2041C0.849182 7.30862 0.765966 7.43281 0.709186 7.56956C0.652405 7.7063 0.623175 7.85291 0.623175 8.00098C0.623175 8.14904 0.652405 8.29565 0.709186 8.4324C0.765966 8.56915 0.849182 8.69334 0.954061 8.79785L7.70406 15.5479C7.91541 15.7592 8.20205 15.8779 8.50094 15.8779C8.79982 15.8779 9.08647 15.7592 9.29781 15.5479C9.50916 15.3365 9.62789 15.0499 9.62789 14.751C9.62789 14.4521 9.50916 14.1654 9.29781 13.9541L4.46875 9.12504L18.25 9.12504C18.5484 9.12504 18.8345 9.00651 19.0455 8.79554C19.2565 8.58456 19.375 8.29841 19.375 8.00004C19.375 7.70167 19.2565 7.41552 19.0455 7.20455C18.8345 6.99357 18.5484 6.87504 18.25 6.87504L4.46875 6.87504L9.29875 2.04598C9.51009 1.83463 9.62883 1.54799 9.62883 1.2491C9.62883 0.950218 9.51009 0.663574 9.29875 0.45223C9.08741 0.240885 8.80076 0.122151 8.50187 0.122151C8.20299 0.122151 7.91634 0.240885 7.705 0.45223L7.70406 0.454104Z"
                  fill="black"
                />
              </svg>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2959 0.454104L19.0459 7.2041C19.1508 7.30862 19.234 7.43281 19.2908 7.56956C19.3476 7.7063 19.3768 7.85291 19.3768 8.00098C19.3768 8.14904 19.3476 8.29565 19.2908 8.4324C19.234 8.56915 19.1508 8.69334 19.0459 8.79785L12.2959 15.5479C12.0846 15.7592 11.7979 15.8779 11.4991 15.8779C11.2002 15.8779 10.9135 15.7592 10.7022 15.5479C10.4908 15.3365 10.3721 15.0499 10.3721 14.751C10.3721 14.4521 10.4908 14.1654 10.7022 13.9541L15.5313 9.12504L1.75 9.12504C1.45163 9.12504 1.16548 9.00651 0.954505 8.79554C0.743527 8.58456 0.625 8.29841 0.625 8.00004C0.625 7.70167 0.743527 7.41552 0.954505 7.20455C1.16548 6.99357 1.45163 6.87504 1.75 6.87504L15.5313 6.87504L10.7013 2.04598C10.4899 1.83463 10.3712 1.54799 10.3712 1.2491C10.3712 0.950218 10.4899 0.663574 10.7013 0.45223C10.9126 0.240885 11.1992 0.122151 11.4981 0.122151C11.797 0.122151 12.0837 0.240885 12.295 0.45223L12.2959 0.454104Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-[#80808034] border hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex gap-1 text-yellow-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-4 flex items-center gap-x-2.5">
                {" Sarah M."}
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.829102C8.07164 0.829102 6.18657 1.40093 4.58319 2.47227C2.97982 3.54362 1.73013 5.06636 0.992179 6.84794C0.254225 8.62952 0.061142 10.5899 0.437348 12.4812C0.813554 14.3725 1.74215 16.1098 3.10571 17.4734C4.46928 18.837 6.20656 19.7656 8.09787 20.1418C9.98919 20.518 11.9496 20.3249 13.7312 19.5869C15.5127 18.849 17.0355 17.5993 18.1068 15.9959C19.1782 14.3925 19.75 12.5075 19.75 10.5791C19.7473 7.99408 18.7192 5.51571 16.8913 3.68783C15.0634 1.85994 12.585 0.831831 10 0.829102ZM14.2806 8.85973L9.03063 14.1097C8.96097 14.1795 8.87826 14.2348 8.78721 14.2725C8.69616 14.3103 8.59857 14.3297 8.5 14.3297C8.40144 14.3297 8.30385 14.3103 8.2128 14.2725C8.12175 14.2348 8.03903 14.1795 7.96938 14.1097L5.71938 11.8597C5.57865 11.719 5.49959 11.5281 5.49959 11.3291C5.49959 11.1301 5.57865 10.9392 5.71938 10.7985C5.86011 10.6577 6.05098 10.5787 6.25 10.5787C6.44903 10.5787 6.6399 10.6577 6.78063 10.7985L8.5 12.5188L13.2194 7.79848C13.2891 7.72879 13.3718 7.67352 13.4628 7.63581C13.5539 7.59809 13.6515 7.57868 13.75 7.57868C13.8486 7.57868 13.9461 7.59809 14.0372 7.63581C14.1282 7.67352 14.2109 7.72879 14.2806 7.79848C14.3503 7.86816 14.4056 7.95088 14.4433 8.04193C14.481 8.13297 14.5004 8.23056 14.5004 8.3291C14.5004 8.42765 14.481 8.52523 14.4433 8.61627C14.4056 8.70732 14.3503 8.79004 14.2806 8.85973Z"
                      fill="#01AB31"
                    />
                  </svg>
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                "
                {`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`}
                "
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-[#80808034] border hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex gap-1 text-yellow-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-4 flex items-center gap-x-2.5">
                {" Sarah M."}
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.829102C8.07164 0.829102 6.18657 1.40093 4.58319 2.47227C2.97982 3.54362 1.73013 5.06636 0.992179 6.84794C0.254225 8.62952 0.061142 10.5899 0.437348 12.4812C0.813554 14.3725 1.74215 16.1098 3.10571 17.4734C4.46928 18.837 6.20656 19.7656 8.09787 20.1418C9.98919 20.518 11.9496 20.3249 13.7312 19.5869C15.5127 18.849 17.0355 17.5993 18.1068 15.9959C19.1782 14.3925 19.75 12.5075 19.75 10.5791C19.7473 7.99408 18.7192 5.51571 16.8913 3.68783C15.0634 1.85994 12.585 0.831831 10 0.829102ZM14.2806 8.85973L9.03063 14.1097C8.96097 14.1795 8.87826 14.2348 8.78721 14.2725C8.69616 14.3103 8.59857 14.3297 8.5 14.3297C8.40144 14.3297 8.30385 14.3103 8.2128 14.2725C8.12175 14.2348 8.03903 14.1795 7.96938 14.1097L5.71938 11.8597C5.57865 11.719 5.49959 11.5281 5.49959 11.3291C5.49959 11.1301 5.57865 10.9392 5.71938 10.7985C5.86011 10.6577 6.05098 10.5787 6.25 10.5787C6.44903 10.5787 6.6399 10.6577 6.78063 10.7985L8.5 12.5188L13.2194 7.79848C13.2891 7.72879 13.3718 7.67352 13.4628 7.63581C13.5539 7.59809 13.6515 7.57868 13.75 7.57868C13.8486 7.57868 13.9461 7.59809 14.0372 7.63581C14.1282 7.67352 14.2109 7.72879 14.2806 7.79848C14.3503 7.86816 14.4056 7.95088 14.4433 8.04193C14.481 8.13297 14.5004 8.23056 14.5004 8.3291C14.5004 8.42765 14.481 8.52523 14.4433 8.61627C14.4056 8.70732 14.3503 8.79004 14.2806 8.85973Z"
                      fill="#01AB31"
                    />
                  </svg>
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                "
                {`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`}
                "
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#80808034] hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex gap-1 text-yellow-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-4 flex items-center gap-x-2.5">
                {" Sarah M."}
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.829102C8.07164 0.829102 6.18657 1.40093 4.58319 2.47227C2.97982 3.54362 1.73013 5.06636 0.992179 6.84794C0.254225 8.62952 0.061142 10.5899 0.437348 12.4812C0.813554 14.3725 1.74215 16.1098 3.10571 17.4734C4.46928 18.837 6.20656 19.7656 8.09787 20.1418C9.98919 20.518 11.9496 20.3249 13.7312 19.5869C15.5127 18.849 17.0355 17.5993 18.1068 15.9959C19.1782 14.3925 19.75 12.5075 19.75 10.5791C19.7473 7.99408 18.7192 5.51571 16.8913 3.68783C15.0634 1.85994 12.585 0.831831 10 0.829102ZM14.2806 8.85973L9.03063 14.1097C8.96097 14.1795 8.87826 14.2348 8.78721 14.2725C8.69616 14.3103 8.59857 14.3297 8.5 14.3297C8.40144 14.3297 8.30385 14.3103 8.2128 14.2725C8.12175 14.2348 8.03903 14.1795 7.96938 14.1097L5.71938 11.8597C5.57865 11.719 5.49959 11.5281 5.49959 11.3291C5.49959 11.1301 5.57865 10.9392 5.71938 10.7985C5.86011 10.6577 6.05098 10.5787 6.25 10.5787C6.44903 10.5787 6.6399 10.6577 6.78063 10.7985L8.5 12.5188L13.2194 7.79848C13.2891 7.72879 13.3718 7.67352 13.4628 7.63581C13.5539 7.59809 13.6515 7.57868 13.75 7.57868C13.8486 7.57868 13.9461 7.59809 14.0372 7.63581C14.1282 7.67352 14.2109 7.72879 14.2806 7.79848C14.3503 7.86816 14.4056 7.95088 14.4433 8.04193C14.481 8.13297 14.5004 8.23056 14.5004 8.3291C14.5004 8.42765 14.481 8.52523 14.4433 8.61627C14.4056 8.70732 14.3503 8.79004 14.2806 8.85973Z"
                      fill="#01AB31"
                    />
                  </svg>
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                "
                {`I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`}
                "
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className=" relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-[#F0F0F0] mt-[100px]">
        {/* Newsletter Section */}
        <div className="2xl:w-[1240px] w-[90%] min-h-[180px] lg:h-[180px] rounded-3xl mx-auto mb-16 text-center bg-black flex justify-between flex-col lg:flex-row items-center py-5 px-20 absolute -top-[100px] left-[50%]  translate-x-[-50%]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-[45px]">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

          <div className="w-[349px] h-[108px] space-y-[14px] relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white py-3 border pl-13  focus:outline-none  rounded-3xl"
            />
            <button className=" px-8 py-3 text-black bg-white w-full font-[500] leading-[21px]  rounded-3xl">
              Subscribe to Newsletter
            </button>

            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-4 left-5"
            >
              <path
                d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z"
                fill="black"
                fill-opacity="0.4"
              />
            </svg>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="md:col-span-2 lg:col-span-1  lg:hidden mt-[250px] sm:mt-[200px]  lg:mt-0 w-[336px]">
          <h3 className="text-2xl font-bold mb-4 text-[33px] leading-[40px]">
            SHOP.CO
          </h3>
          <p className="text-gray-600">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="flex gap-x-3 items-center mt-5">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="white" />
              <circle
                cx="14"
                cy="14"
                r="13.5"
                stroke="black"
                stroke-opacity="0.2"
              />
              <path
                d="M20.2071 10.9831C19.7881 11.1693 19.3458 11.2857 18.8802 11.3556C19.3458 11.0762 19.7183 10.6339 19.8812 10.0985C19.4389 10.3546 18.9501 10.5408 18.4146 10.6572C17.9956 10.2149 17.3904 9.93555 16.7386 9.93555C15.4815 9.93555 14.4572 10.9598 14.4572 12.2169C14.4572 12.4031 14.4805 12.5661 14.5271 12.729C12.6415 12.6359 10.9421 11.728 9.80141 10.3313C9.61518 10.6805 9.49878 11.0529 9.49878 11.472C9.49878 12.2634 9.89453 12.9618 10.5231 13.3808C10.1506 13.3576 9.80141 13.2644 9.4755 13.1015V13.1248C9.4755 14.2422 10.267 15.1733 11.3145 15.3828C11.1283 15.4294 10.9188 15.4527 10.7093 15.4527C10.5696 15.4527 10.4067 15.4294 10.267 15.4061C10.5696 16.314 11.4077 16.9891 12.4087 16.9891C11.6172 17.5943 10.6395 17.9668 9.56862 17.9668C9.38239 17.9668 9.19616 17.9668 9.0332 17.9435C10.0575 18.5953 11.2447 18.9678 12.5483 18.9678C16.7618 18.9678 19.0665 15.476 19.0665 12.4497C19.0665 12.3566 19.0665 12.2402 19.0665 12.1471C19.5088 11.8444 19.9045 11.4487 20.2071 10.9831Z"
                fill="black"
              />
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="black" />
              <path
                d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
                fill="white"
              />
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="white" />
              <circle
                cx="14"
                cy="14"
                r="13.5"
                stroke="black"
                stroke-opacity="0.2"
              />
              <path
                d="M14.0008 8.44721C15.8095 8.44721 16.0237 8.45398 16.7382 8.48656C17.1678 8.49182 17.5933 8.5707 17.9962 8.71979C18.2884 8.83248 18.5538 9.00511 18.7753 9.22656C18.9967 9.44802 19.1694 9.71339 19.282 10.0056C19.4311 10.4085 19.51 10.8341 19.5153 11.2637C19.5475 11.9782 19.5546 12.1924 19.5546 14.0011C19.5546 15.8098 19.5479 16.024 19.5153 16.7385C19.51 17.1681 19.4311 17.5936 19.282 17.9966C19.1694 18.2888 18.9967 18.5541 18.7753 18.7756C18.5538 18.997 18.2884 19.1697 17.9962 19.2824C17.5933 19.4315 17.1678 19.5103 16.7382 19.5156C16.024 19.5479 15.8098 19.5549 14.0008 19.5549C12.1917 19.5549 11.9775 19.5482 11.2633 19.5156C10.8337 19.5103 10.4082 19.4315 10.0053 19.2824C9.71307 19.1697 9.44769 18.997 9.22624 18.7756C9.00479 18.5541 8.83216 18.2888 8.71947 17.9966C8.57038 17.5936 8.4915 17.1681 8.48624 16.7385C8.45398 16.024 8.44689 15.8098 8.44689 14.0011C8.44689 12.1924 8.45366 11.9782 8.48624 11.2637C8.4915 10.8341 8.57038 10.4085 8.71947 10.0056C8.83216 9.71339 9.00479 9.44802 9.22624 9.22656C9.44769 9.00511 9.71307 8.83248 10.0053 8.71979C10.4082 8.5707 10.8337 8.49182 11.2633 8.48656C11.9779 8.4543 12.192 8.44721 14.0008 8.44721ZM14.0008 7.22656C12.162 7.22656 11.9304 7.2343 11.2079 7.26721C10.6456 7.27839 10.0893 7.38485 9.56269 7.58205C9.11092 7.75226 8.70172 8.019 8.36366 8.36366C8.01869 8.70184 7.75172 9.11127 7.5814 9.56334C7.3842 10.09 7.27775 10.6463 7.26656 11.2085C7.2343 11.9304 7.22656 12.162 7.22656 14.0008C7.22656 15.8395 7.2343 16.0711 7.26721 16.7937C7.27839 17.3559 7.38485 17.9122 7.58205 18.4388C7.75218 18.8908 8.01892 19.3002 8.36366 19.6385C8.70191 19.9832 9.11133 20.25 9.56334 20.4201C10.09 20.6173 10.6463 20.7238 11.2085 20.7349C11.9311 20.7672 12.1617 20.7756 14.0014 20.7756C15.8411 20.7756 16.0717 20.7679 16.7943 20.7349C17.3565 20.7238 17.9128 20.6173 18.4395 20.4201C18.8893 20.2457 19.2978 19.9794 19.6389 19.6381C19.98 19.2968 20.246 18.8882 20.4201 18.4382C20.6173 17.9115 20.7238 17.3553 20.735 16.793C20.7672 16.0711 20.775 15.8395 20.775 14.0008C20.775 12.162 20.7672 11.9304 20.7343 11.2079C20.7231 10.6456 20.6167 10.0893 20.4195 9.56269C20.2493 9.11068 19.9826 8.70126 19.6379 8.36301C19.2996 8.01828 18.8902 7.75153 18.4382 7.5814C17.9115 7.3842 17.3553 7.27775 16.793 7.26656C16.0711 7.2343 15.8395 7.22656 14.0008 7.22656Z"
                fill="black"
              />
              <path
                d="M14.0021 10.5234C13.3141 10.5234 12.6416 10.7275 12.0695 11.1097C11.4974 11.492 11.0515 12.0353 10.7882 12.6709C10.5249 13.3066 10.4561 14.006 10.5903 14.6808C10.7245 15.3556 11.0558 15.9755 11.5423 16.462C12.0288 16.9485 12.6487 17.2798 13.3235 17.414C13.9983 17.5482 14.6977 17.4794 15.3334 17.2161C15.969 16.9528 16.5123 16.5069 16.8946 15.9348C17.2768 15.3627 17.4809 14.6902 17.4809 14.0021C17.4809 13.0795 17.1144 12.1947 16.462 11.5423C15.8096 10.8899 14.9248 10.5234 14.0021 10.5234ZM14.0021 16.2602C13.5555 16.2602 13.119 16.1278 12.7476 15.8797C12.3763 15.6315 12.0869 15.2789 11.916 14.8663C11.7451 14.4537 11.7003 13.9996 11.7875 13.5616C11.8746 13.1236 12.0897 12.7213 12.4055 12.4055C12.7213 12.0897 13.1236 11.8746 13.5616 11.7875C13.9996 11.7003 14.4537 11.7451 14.8663 11.916C15.2789 12.0869 15.6315 12.3763 15.8797 12.7476C16.1278 13.119 16.2602 13.5555 16.2602 14.0021C16.2602 14.601 16.0223 15.1754 15.5988 15.5988C15.1754 16.0223 14.601 16.2602 14.0021 16.2602Z"
                fill="black"
              />
              <path
                d="M17.6176 11.1981C18.0665 11.1981 18.4305 10.8341 18.4305 10.3852C18.4305 9.93621 18.0665 9.57227 17.6176 9.57227C17.1686 9.57227 16.8047 9.93621 16.8047 10.3852C16.8047 10.8341 17.1686 11.1981 17.6176 11.1981Z"
                fill="black"
              />
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="white" />
              <circle
                cx="14"
                cy="14"
                r="13.5"
                stroke="black"
                stroke-opacity="0.2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6068 7.22656C11.0159 7.22656 8.12695 10.1155 8.12695 13.7065C8.12695 16.5684 9.98992 18.9984 12.5549 19.8624C12.8789 19.9164 12.9869 19.7274 12.9869 19.5384C12.9869 19.3764 12.9869 18.9714 12.9869 18.4314C11.1779 18.8364 10.7999 17.5674 10.7999 17.5674C10.5029 16.8114 10.0709 16.6224 10.0709 16.6224C9.47693 16.2174 10.1249 16.2174 10.1249 16.2174C10.7729 16.2714 11.1239 16.8924 11.1239 16.8924C11.6909 17.8914 12.6359 17.5944 13.0139 17.4324C13.0679 17.0004 13.2299 16.7304 13.4189 16.5684C11.9879 16.4064 10.4759 15.8394 10.4759 13.3555C10.4759 12.6535 10.7189 12.0595 11.1509 11.6275C11.0969 11.4655 10.8539 10.8175 11.2049 9.89952C11.2049 9.89952 11.7449 9.73752 12.9869 10.5745C13.4999 10.4395 14.0669 10.3585 14.6068 10.3585C15.1468 10.3585 15.7138 10.4395 16.2268 10.5745C17.4688 9.73752 18.0088 9.89952 18.0088 9.89952C18.3598 10.7905 18.1438 11.4385 18.0628 11.6275C18.4678 12.0865 18.7378 12.6535 18.7378 13.3555C18.7378 15.8394 17.2258 16.3794 15.7678 16.5414C16.0108 16.7304 16.1998 17.1354 16.1998 17.7294C16.1998 18.5934 16.1998 19.2954 16.1998 19.5114C16.1998 19.6734 16.3078 19.8894 16.6588 19.8354C19.2238 18.9984 21.0867 16.5684 21.0867 13.7065C21.0867 10.1155 18.1978 7.22656 14.6068 7.22656Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:mt-[100px] justify-items-center mt-[50px]">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1 hidden lg:block">
            <h3 className="text-2xl font-bold mb-4 text-[33px] leading-[40px]">
              SHOP.CO
            </h3>
            <p className="text-gray-600">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

            <div className="flex gap-x-3 items-center mt-5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="white" />
                <circle
                  cx="14"
                  cy="14"
                  r="13.5"
                  stroke="black"
                  stroke-opacity="0.2"
                />
                <path
                  d="M20.2071 10.9831C19.7881 11.1693 19.3458 11.2857 18.8802 11.3556C19.3458 11.0762 19.7183 10.6339 19.8812 10.0985C19.4389 10.3546 18.9501 10.5408 18.4146 10.6572C17.9956 10.2149 17.3904 9.93555 16.7386 9.93555C15.4815 9.93555 14.4572 10.9598 14.4572 12.2169C14.4572 12.4031 14.4805 12.5661 14.5271 12.729C12.6415 12.6359 10.9421 11.728 9.80141 10.3313C9.61518 10.6805 9.49878 11.0529 9.49878 11.472C9.49878 12.2634 9.89453 12.9618 10.5231 13.3808C10.1506 13.3576 9.80141 13.2644 9.4755 13.1015V13.1248C9.4755 14.2422 10.267 15.1733 11.3145 15.3828C11.1283 15.4294 10.9188 15.4527 10.7093 15.4527C10.5696 15.4527 10.4067 15.4294 10.267 15.4061C10.5696 16.314 11.4077 16.9891 12.4087 16.9891C11.6172 17.5943 10.6395 17.9668 9.56862 17.9668C9.38239 17.9668 9.19616 17.9668 9.0332 17.9435C10.0575 18.5953 11.2447 18.9678 12.5483 18.9678C16.7618 18.9678 19.0665 15.476 19.0665 12.4497C19.0665 12.3566 19.0665 12.2402 19.0665 12.1471C19.5088 11.8444 19.9045 11.4487 20.2071 10.9831Z"
                  fill="black"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="black" />
                <path
                  d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
                  fill="white"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="white" />
                <circle
                  cx="14"
                  cy="14"
                  r="13.5"
                  stroke="black"
                  stroke-opacity="0.2"
                />
                <path
                  d="M14.0008 8.44721C15.8095 8.44721 16.0237 8.45398 16.7382 8.48656C17.1678 8.49182 17.5933 8.5707 17.9962 8.71979C18.2884 8.83248 18.5538 9.00511 18.7753 9.22656C18.9967 9.44802 19.1694 9.71339 19.282 10.0056C19.4311 10.4085 19.51 10.8341 19.5153 11.2637C19.5475 11.9782 19.5546 12.1924 19.5546 14.0011C19.5546 15.8098 19.5479 16.024 19.5153 16.7385C19.51 17.1681 19.4311 17.5936 19.282 17.9966C19.1694 18.2888 18.9967 18.5541 18.7753 18.7756C18.5538 18.997 18.2884 19.1697 17.9962 19.2824C17.5933 19.4315 17.1678 19.5103 16.7382 19.5156C16.024 19.5479 15.8098 19.5549 14.0008 19.5549C12.1917 19.5549 11.9775 19.5482 11.2633 19.5156C10.8337 19.5103 10.4082 19.4315 10.0053 19.2824C9.71307 19.1697 9.44769 18.997 9.22624 18.7756C9.00479 18.5541 8.83216 18.2888 8.71947 17.9966C8.57038 17.5936 8.4915 17.1681 8.48624 16.7385C8.45398 16.024 8.44689 15.8098 8.44689 14.0011C8.44689 12.1924 8.45366 11.9782 8.48624 11.2637C8.4915 10.8341 8.57038 10.4085 8.71947 10.0056C8.83216 9.71339 9.00479 9.44802 9.22624 9.22656C9.44769 9.00511 9.71307 8.83248 10.0053 8.71979C10.4082 8.5707 10.8337 8.49182 11.2633 8.48656C11.9779 8.4543 12.192 8.44721 14.0008 8.44721ZM14.0008 7.22656C12.162 7.22656 11.9304 7.2343 11.2079 7.26721C10.6456 7.27839 10.0893 7.38485 9.56269 7.58205C9.11092 7.75226 8.70172 8.019 8.36366 8.36366C8.01869 8.70184 7.75172 9.11127 7.5814 9.56334C7.3842 10.09 7.27775 10.6463 7.26656 11.2085C7.2343 11.9304 7.22656 12.162 7.22656 14.0008C7.22656 15.8395 7.2343 16.0711 7.26721 16.7937C7.27839 17.3559 7.38485 17.9122 7.58205 18.4388C7.75218 18.8908 8.01892 19.3002 8.36366 19.6385C8.70191 19.9832 9.11133 20.25 9.56334 20.4201C10.09 20.6173 10.6463 20.7238 11.2085 20.7349C11.9311 20.7672 12.1617 20.7756 14.0014 20.7756C15.8411 20.7756 16.0717 20.7679 16.7943 20.7349C17.3565 20.7238 17.9128 20.6173 18.4395 20.4201C18.8893 20.2457 19.2978 19.9794 19.6389 19.6381C19.98 19.2968 20.246 18.8882 20.4201 18.4382C20.6173 17.9115 20.7238 17.3553 20.735 16.793C20.7672 16.0711 20.775 15.8395 20.775 14.0008C20.775 12.162 20.7672 11.9304 20.7343 11.2079C20.7231 10.6456 20.6167 10.0893 20.4195 9.56269C20.2493 9.11068 19.9826 8.70126 19.6379 8.36301C19.2996 8.01828 18.8902 7.75153 18.4382 7.5814C17.9115 7.3842 17.3553 7.27775 16.793 7.26656C16.0711 7.2343 15.8395 7.22656 14.0008 7.22656Z"
                  fill="black"
                />
                <path
                  d="M14.0021 10.5234C13.3141 10.5234 12.6416 10.7275 12.0695 11.1097C11.4974 11.492 11.0515 12.0353 10.7882 12.6709C10.5249 13.3066 10.4561 14.006 10.5903 14.6808C10.7245 15.3556 11.0558 15.9755 11.5423 16.462C12.0288 16.9485 12.6487 17.2798 13.3235 17.414C13.9983 17.5482 14.6977 17.4794 15.3334 17.2161C15.969 16.9528 16.5123 16.5069 16.8946 15.9348C17.2768 15.3627 17.4809 14.6902 17.4809 14.0021C17.4809 13.0795 17.1144 12.1947 16.462 11.5423C15.8096 10.8899 14.9248 10.5234 14.0021 10.5234ZM14.0021 16.2602C13.5555 16.2602 13.119 16.1278 12.7476 15.8797C12.3763 15.6315 12.0869 15.2789 11.916 14.8663C11.7451 14.4537 11.7003 13.9996 11.7875 13.5616C11.8746 13.1236 12.0897 12.7213 12.4055 12.4055C12.7213 12.0897 13.1236 11.8746 13.5616 11.7875C13.9996 11.7003 14.4537 11.7451 14.8663 11.916C15.2789 12.0869 15.6315 12.3763 15.8797 12.7476C16.1278 13.119 16.2602 13.5555 16.2602 14.0021C16.2602 14.601 16.0223 15.1754 15.5988 15.5988C15.1754 16.0223 14.601 16.2602 14.0021 16.2602Z"
                  fill="black"
                />
                <path
                  d="M17.6176 11.1981C18.0665 11.1981 18.4305 10.8341 18.4305 10.3852C18.4305 9.93621 18.0665 9.57227 17.6176 9.57227C17.1686 9.57227 16.8047 9.93621 16.8047 10.3852C16.8047 10.8341 17.1686 11.1981 17.6176 11.1981Z"
                  fill="black"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="white" />
                <circle
                  cx="14"
                  cy="14"
                  r="13.5"
                  stroke="black"
                  stroke-opacity="0.2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6068 7.22656C11.0159 7.22656 8.12695 10.1155 8.12695 13.7065C8.12695 16.5684 9.98992 18.9984 12.5549 19.8624C12.8789 19.9164 12.9869 19.7274 12.9869 19.5384C12.9869 19.3764 12.9869 18.9714 12.9869 18.4314C11.1779 18.8364 10.7999 17.5674 10.7999 17.5674C10.5029 16.8114 10.0709 16.6224 10.0709 16.6224C9.47693 16.2174 10.1249 16.2174 10.1249 16.2174C10.7729 16.2714 11.1239 16.8924 11.1239 16.8924C11.6909 17.8914 12.6359 17.5944 13.0139 17.4324C13.0679 17.0004 13.2299 16.7304 13.4189 16.5684C11.9879 16.4064 10.4759 15.8394 10.4759 13.3555C10.4759 12.6535 10.7189 12.0595 11.1509 11.6275C11.0969 11.4655 10.8539 10.8175 11.2049 9.89952C11.2049 9.89952 11.7449 9.73752 12.9869 10.5745C13.4999 10.4395 14.0669 10.3585 14.6068 10.3585C15.1468 10.3585 15.7138 10.4395 16.2268 10.5745C17.4688 9.73752 18.0088 9.89952 18.0088 9.89952C18.3598 10.7905 18.1438 11.4385 18.0628 11.6275C18.4678 12.0865 18.7378 12.6535 18.7378 13.3555C18.7378 15.8394 17.2258 16.3794 15.7678 16.5414C16.0108 16.7304 16.1998 17.1354 16.1998 17.7294C16.1998 18.5934 16.1998 19.2954 16.1998 19.5114C16.1998 19.6734 16.3078 19.8894 16.6588 19.8354C19.2238 18.9984 21.0867 16.5684 21.0867 13.7065C21.0867 10.1155 18.1978 7.22656 14.6068 7.22656Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          {/* Footer Links */}
          <div className="w-[136px] min-h-[133px]">
            <h4 className="text-lg font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[136px] min-h-[133px]">
            <h4 className="text-lg font-semibold mb-4">HELP</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[136px] min-h-[133px]">
            <h4 className="text-lg font-semibold mb-4">FAQ</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Payments
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[136px] min-h-[133px]">
            <h4 className="text-lg font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Free eBooks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Development Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  How to - Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-center">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex items-center w-[281px]">
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_320)">
                  <rect
                    x="10"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.88795"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    stroke-width="0.224107"
                  />
                  <path
                    d="M33.0221 15.121L30.8479 25.2845H28.2188L30.3933 15.121H33.0221ZM44.0838 21.6836L45.468 17.8669L46.2645 21.6836H44.0838ZM47.0172 25.2845H49.4491L47.327 15.121H45.0823C44.5779 15.121 44.1523 15.4144 43.9628 15.8667L40.0184 25.2845H42.7794L43.3275 23.7668H46.7007L47.0172 25.2845ZM40.1554 21.9661C40.1667 19.2836 36.4458 19.1359 36.4715 17.9376C36.4792 17.5725 36.827 17.1852 37.5865 17.0858C37.9638 17.0366 39.0012 16.999 40.1792 17.541L40.6405 15.3857C40.0078 15.1561 39.1936 14.9351 38.1809 14.9351C35.5824 14.9351 33.7533 16.3167 33.7379 18.295C33.7215 19.758 35.0436 20.5745 36.0398 21.0609C37.0641 21.5591 37.4083 21.8782 37.4038 22.3238C37.397 23.0061 36.5867 23.3065 35.8307 23.3184C34.5086 23.3393 33.7414 22.9617 33.1299 22.6767L32.6535 24.9037C33.2676 25.1858 34.4015 25.4309 35.5779 25.4435C38.3395 25.4435 40.1464 24.0789 40.1554 21.9661ZM29.2652 15.121L25.0055 25.2845H22.2258L20.1298 17.1733C20.0024 16.6738 19.8917 16.491 19.5047 16.2803C18.8733 15.9377 17.8294 15.6157 16.911 15.4163L16.9737 15.121H21.4474C22.0174 15.121 22.5305 15.5006 22.6598 16.1571L23.767 22.0388L26.5029 15.121H29.2652Z"
                    fill="#1434CB"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_320"
                    x="0.811593"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_320"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_320"
                      result="effect2_dropShadow_20_320"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_320"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_322)">
                  <rect
                    x="9.61426"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.5022"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    stroke-width="0.224107"
                  />
                  <path
                    d="M36.2699 13.8484H29.4066V26.1819H36.2699V13.8484Z"
                    fill="#FF5F00"
                  />
                  <path
                    d="M29.8425 20.0151C29.8414 18.8273 30.1105 17.6548 30.6296 16.5864C31.1486 15.518 31.9039 14.5817 32.8383 13.8484C31.6812 12.9389 30.2915 12.3732 28.8282 12.2162C27.3648 12.0591 25.8867 12.3169 24.563 12.9602C23.2392 13.6034 22.1231 14.6061 21.3423 15.8537C20.5614 17.1013 20.1473 18.5434 20.1473 20.0151C20.1473 21.4869 20.5614 22.929 21.3423 24.1766C22.1231 25.4241 23.2392 26.4269 24.563 27.0701C25.8867 27.7133 27.3648 27.9712 28.8282 27.8141C30.2915 27.657 31.6812 27.0914 32.8383 26.1819C31.9039 25.4485 31.1486 24.5122 30.6296 23.4438C30.1105 22.3754 29.8414 21.2029 29.8425 20.0151Z"
                    fill="#EB001B"
                  />
                  <path
                    d="M45.5289 20.0151C45.5289 21.4869 45.1149 22.929 44.3341 24.1765C43.5533 25.4241 42.4372 26.4268 41.1135 27.0701C39.7897 27.7133 38.3117 27.9712 36.8484 27.8141C35.385 27.657 33.9954 27.0914 32.8383 26.1819C33.7719 25.4478 34.5266 24.5113 35.0455 23.4431C35.5645 22.3749 35.8341 21.2028 35.8341 20.0151C35.8341 18.8275 35.5645 17.6554 35.0455 16.5872C34.5266 15.5189 33.7719 14.5825 32.8383 13.8484C33.9954 12.9389 35.385 12.3732 36.8484 12.2162C38.3117 12.0591 39.7897 12.3169 41.1135 12.9602C42.4372 13.6034 43.5533 14.6062 44.3341 15.8537C45.1149 17.1013 45.5289 18.5434 45.5289 20.0151Z"
                    fill="#F79E1B"
                  />
                  <path
                    d="M44.7805 24.8756V24.6231H44.8824V24.5716H44.6231V24.6231H44.7249V24.8756H44.7805ZM45.284 24.8756V24.5711H45.2045L45.1131 24.7805L45.0216 24.5711H44.9421V24.8756H44.9982V24.6459L45.0839 24.8439H45.1421L45.2279 24.6454V24.8756H45.284Z"
                    fill="#F79E1B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_322"
                    x="0.425851"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_322"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_322"
                      result="effect2_dropShadow_20_322"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_322"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_324)">
                  <rect
                    x="9.22852"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.11646"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    stroke-width="0.224107"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4257 15.646H16.7382C16.5543 15.646 16.3979 15.7796 16.3692 15.9611L15.2822 22.8518C15.2606 22.9879 15.3659 23.1104 15.5039 23.1104H16.7869C16.9708 23.1104 17.1272 22.9768 17.1559 22.7949L17.4491 20.9364C17.4774 20.7544 17.6342 20.6209 17.8177 20.6209H18.6685C20.4388 20.6209 21.4605 19.7643 21.7274 18.0669C21.8476 17.3243 21.7325 16.7408 21.3846 16.332C21.0027 15.8835 20.3251 15.646 19.4257 15.646ZM19.7358 18.1627C19.5888 19.127 18.852 19.127 18.1395 19.127H17.734L18.0185 17.3261C18.0354 17.2174 18.1297 17.1372 18.2397 17.1372H18.4256C18.9109 17.1372 19.3688 17.1372 19.6054 17.4138C19.7463 17.5789 19.7896 17.824 19.7358 18.1627ZM27.4593 18.1318H26.1723C26.0626 18.1318 25.9679 18.212 25.951 18.3209L25.8941 18.6808L25.804 18.5504C25.5254 18.146 24.9042 18.0109 24.2841 18.0109C22.8618 18.0109 21.6472 19.0879 21.4106 20.5988C21.2877 21.3523 21.4625 22.0729 21.89 22.5755C22.2823 23.0375 22.8435 23.2301 23.511 23.2301C24.6569 23.2301 25.2925 22.4933 25.2925 22.4933L25.235 22.8509C25.2134 22.9877 25.3187 23.1102 25.4558 23.1102H26.6151C26.7995 23.1102 26.955 22.9766 26.9841 22.7948L27.6797 18.3904C27.7017 18.2549 27.5968 18.1318 27.4593 18.1318ZM25.6653 20.6364C25.5411 21.3715 24.9575 21.865 24.2134 21.865C23.8397 21.865 23.5409 21.7452 23.3492 21.5181C23.159 21.2926 23.0866 20.9715 23.1472 20.614C23.2632 19.8851 23.8566 19.3756 24.5894 19.3756C24.9548 19.3756 25.2519 19.4968 25.4476 19.726C25.6436 19.9574 25.7215 20.2804 25.6653 20.6364ZM33.0202 18.1317H34.3135C34.4947 18.1317 34.6003 18.3348 34.4974 18.4833L30.196 24.6914C30.1263 24.792 30.0116 24.8518 29.889 24.8518H28.5973C28.4155 24.8518 28.3093 24.6471 28.4146 24.4982L29.7539 22.6078L28.3294 18.4279C28.2802 18.2826 28.3875 18.1317 28.542 18.1317H29.8128C29.978 18.1317 30.1236 18.24 30.1713 18.398L30.9272 20.9226L32.711 18.2955C32.7809 18.1929 32.8969 18.1317 33.0202 18.1317Z"
                    fill="#253B80"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.0427 22.8512L48.1457 15.8345C48.1626 15.7256 48.257 15.6454 48.3666 15.645H49.6083C49.7455 15.645 49.8507 15.7679 49.8291 15.9039L48.7414 22.7943C48.7131 22.9762 48.5567 23.1098 48.3725 23.1098H47.2635C47.1264 23.1098 47.0211 22.9872 47.0427 22.8512ZM38.5958 15.6454H35.9078C35.7243 15.6454 35.5679 15.779 35.5392 15.9605L34.4523 22.8512C34.4306 22.9872 34.5359 23.1098 34.6732 23.1098H36.0524C36.1806 23.1098 36.2903 23.0163 36.3103 22.8891L36.6187 20.9358C36.6471 20.7538 36.8038 20.6203 36.9873 20.6203H37.8377C39.6084 20.6203 40.6298 19.7637 40.897 18.0663C41.0176 17.3237 40.9017 16.7402 40.554 16.3314C40.1723 15.8829 39.4953 15.6454 38.5958 15.6454ZM38.9059 18.1621C38.7593 19.1264 38.0224 19.1264 37.3096 19.1264H36.9044L37.1893 17.3255C37.2063 17.2168 37.2997 17.1366 37.4101 17.1366H37.596C38.081 17.1366 38.5393 17.1366 38.7757 17.4132C38.9168 17.5783 38.9597 17.8234 38.9059 18.1621ZM46.6287 18.1312H45.3426C45.232 18.1312 45.1382 18.2114 45.1216 18.3203L45.0647 18.6802L44.9743 18.5498C44.6957 18.1454 44.0749 18.0103 43.4548 18.0103C42.0325 18.0103 40.8182 19.0873 40.5817 20.5981C40.4591 21.3517 40.6331 22.0723 41.0607 22.5748C41.4536 23.0369 42.0141 23.2294 42.6817 23.2294C43.8276 23.2294 44.463 22.4927 44.463 22.4927L44.4057 22.8503C44.384 22.9871 44.4893 23.1096 44.6274 23.1096H45.7861C45.9696 23.1096 46.126 22.976 46.1548 22.7941L46.8507 18.3898C46.872 18.2543 46.7667 18.1312 46.6287 18.1312ZM44.8349 20.6358C44.7114 21.3709 44.1271 21.8644 43.3828 21.8644C43.0098 21.8644 42.7104 21.7446 42.5186 21.5175C42.3284 21.292 42.2569 20.9709 42.3167 20.6134C42.4333 19.8845 43.026 19.375 43.7588 19.375C44.1243 19.375 44.4213 19.4962 44.6172 19.7253C44.8139 19.9568 44.8918 20.2798 44.8349 20.6358Z"
                    fill="#179BD7"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_324"
                    x="0.0401087"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_324"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_324"
                      result="effect2_dropShadow_20_324"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_324"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_326)">
                  <rect
                    x="9.8429"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.73084"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    stroke-width="0.224107"
                  />
                  <path
                    d="M24.9199 16.0817C25.2309 15.6927 25.4419 15.1704 25.3863 14.6367C24.931 14.6594 24.3755 14.9371 24.0538 15.3264C23.7651 15.6597 23.5095 16.2039 23.5761 16.7152C24.0871 16.7595 24.5977 16.4598 24.9199 16.0817Z"
                    fill="#000008"
                  />
                  <path
                    d="M25.3805 16.8151C24.6383 16.7709 24.0073 17.2363 23.6529 17.2363C23.2983 17.2363 22.7556 16.8373 22.1686 16.8481C21.4045 16.8593 20.6956 17.2913 20.3079 17.9784C19.5105 19.3528 20.0975 21.3916 20.8729 22.511C21.2495 23.0648 21.7034 23.6746 22.3014 23.6527C22.8664 23.6305 23.0879 23.2868 23.7747 23.2868C24.461 23.2868 24.6605 23.6527 25.2587 23.6416C25.8789 23.6305 26.2667 23.0875 26.6433 22.5332C27.0753 21.9019 27.2522 21.2923 27.2633 21.2588C27.2522 21.2477 26.0672 20.7932 26.0562 19.4302C26.0451 18.2889 26.9865 17.746 27.0309 17.7123C26.4992 16.926 25.6685 16.8373 25.3805 16.8151Z"
                    fill="#000008"
                  />
                  <path
                    d="M31.8425 15.2705C33.4556 15.2705 34.5788 16.3824 34.5788 18.0013C34.5788 19.6259 33.4325 20.7435 31.8021 20.7435H30.0161V23.5837H28.7258V15.2705L31.8425 15.2705ZM30.0161 19.6604H31.4967C32.6202 19.6604 33.2596 19.0556 33.2596 18.007C33.2596 16.9586 32.6202 16.3594 31.5025 16.3594H30.0161V19.6604Z"
                    fill="#000008"
                  />
                  <path
                    d="M34.9159 21.8612C34.9159 20.8011 35.7283 20.1501 37.1686 20.0695L38.8277 19.9716V19.505C38.8277 18.8309 38.3725 18.4276 37.6122 18.4276C36.8919 18.4276 36.4426 18.7732 36.3332 19.3148H35.158C35.2271 18.2201 36.1603 17.4136 37.6582 17.4136C39.1273 17.4136 40.0663 18.1914 40.0663 19.4069V23.5837H38.8737V22.5871H38.845C38.4937 23.2611 37.7274 23.6874 36.9324 23.6874C35.7456 23.6874 34.9159 22.95 34.9159 21.8612ZM38.8277 21.3139V20.8358L37.3355 20.9279C36.5923 20.9798 36.1719 21.3081 36.1719 21.8266C36.1719 22.3566 36.6097 22.7023 37.278 22.7023C38.1478 22.7023 38.8277 22.1031 38.8277 21.3139Z"
                    fill="#000008"
                  />
                  <path
                    d="M41.1922 25.8133V24.8051C41.2842 24.8281 41.4915 24.8281 41.5953 24.8281C42.1714 24.8281 42.4825 24.5861 42.6725 23.964C42.6725 23.9524 42.7821 23.5953 42.7821 23.5895L40.593 17.5231H41.9409L43.4735 22.4546H43.4964L45.029 17.5231H46.3425L44.0724 23.9005C43.5542 25.3697 42.955 25.8421 41.6991 25.8421C41.5953 25.8421 41.2842 25.8305 41.1922 25.8133Z"
                    fill="#000008"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_326"
                    x="0.654489"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_326"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_326"
                      result="effect2_dropShadow_20_326"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_326"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="66"
                height="49"
                viewBox="0 0 66 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_20_328)">
                  <rect
                    x="9.45715"
                    y="5"
                    width="46.6143"
                    height="30.0304"
                    rx="5.37857"
                    fill="white"
                  />
                  <rect
                    x="9.3451"
                    y="4.88795"
                    width="46.8384"
                    height="30.2545"
                    rx="5.49062"
                    stroke="#D6DCE5"
                    stroke-width="0.224107"
                  />
                  <path
                    d="M31.751 23.6143H30.7025V15.4561H33.482C34.1864 15.4561 34.7871 15.6909 35.2785 16.1605C35.7809 16.6301 36.0321 17.2035 36.0321 17.8806C36.0321 18.5741 35.7809 19.1475 35.2785 19.6116C34.7925 20.0758 34.1919 20.3051 33.482 20.3051H31.751V23.6143ZM31.751 16.4608V19.3058H33.5038C33.9188 19.3058 34.2683 19.1639 34.5414 18.8854C34.8198 18.6069 34.9618 18.2683 34.9618 17.8861C34.9618 17.5093 34.8198 17.1762 34.5414 16.8977C34.2683 16.6083 33.9243 16.4663 33.5038 16.4663H31.751V16.4608Z"
                    fill="#3C4043"
                  />
                  <path
                    d="M38.7732 17.8478C39.5487 17.8478 40.1603 18.0553 40.608 18.4703C41.0558 18.8854 41.2797 19.4533 41.2797 20.1741V23.6143H40.2804V22.8389H40.2367C39.8053 23.4778 39.2265 23.7945 38.5057 23.7945C37.8886 23.7945 37.3753 23.6143 36.9603 23.2484C36.5453 22.8826 36.3378 22.4293 36.3378 21.8833C36.3378 21.3044 36.5562 20.8457 36.9931 20.5072C37.4299 20.1632 38.0142 19.9939 38.7405 19.9939C39.363 19.9939 39.8763 20.1085 40.2749 20.3379V20.0976C40.2749 19.7318 40.1329 19.426 39.8435 19.1693C39.5541 18.9127 39.2156 18.7871 38.8279 18.7871C38.2436 18.7871 37.7794 19.0328 37.4408 19.5297L36.518 18.9509C37.0258 18.2137 37.7794 17.8478 38.7732 17.8478ZM37.419 21.8996C37.419 22.1727 37.5337 22.402 37.7685 22.5822C37.9978 22.7624 38.2709 22.8553 38.5821 22.8553C39.0244 22.8553 39.4176 22.6914 39.7616 22.3638C40.1056 22.0362 40.2804 21.6539 40.2804 21.2116C39.9527 20.955 39.4995 20.8239 38.9152 20.8239C38.4893 20.8239 38.1343 20.9276 37.8504 21.1297C37.561 21.3427 37.419 21.5993 37.419 21.8996Z"
                    fill="#3C4043"
                  />
                  <path
                    d="M46.9807 18.0281L43.4858 26.0662H42.4046L43.7043 23.2539L41.3999 18.0281H42.5412L44.2012 22.0362H44.223L45.8394 18.0281H46.9807Z"
                    fill="#3C4043"
                  />
                  <path
                    d="M27.5806 19.6444C27.5806 19.3026 27.55 18.9755 27.4932 18.6609H23.0985V20.4629L25.6295 20.4635C25.5268 21.0631 25.1965 21.5742 24.6903 21.9149V23.0841H26.1969C27.0766 22.2699 27.5806 21.0664 27.5806 19.6444Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.6908 21.915C24.2714 22.1979 23.7314 22.3633 23.0996 22.3633C21.8791 22.3633 20.8438 21.5409 20.473 20.4324H18.9189V21.6381C19.6888 23.166 21.2713 24.2145 23.0996 24.2145C24.3632 24.2145 25.4247 23.7989 26.1974 23.0836L24.6908 21.915Z"
                    fill="#34A853"
                  />
                  <path
                    d="M20.3266 19.5379C20.3266 19.2266 20.3785 18.9258 20.473 18.6429V17.4372H18.9189C18.6005 18.069 18.4214 18.7821 18.4214 19.5379C18.4214 20.2937 18.601 21.0068 18.9189 21.6386L20.473 20.4329C20.3785 20.15 20.3266 19.8492 20.3266 19.5379Z"
                    fill="#FABB05"
                  />
                  <path
                    d="M23.0996 16.712C23.7892 16.712 24.4068 16.9495 24.8945 17.4137L26.2296 16.0797C25.4187 15.3245 24.3615 14.8608 23.0996 14.8608C21.2719 14.8608 19.6888 15.9093 18.9189 17.4372L20.473 18.6429C20.8437 17.5344 21.8791 16.712 23.0996 16.712Z"
                    fill="#E94235"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_20_328"
                    x="0.268746"
                    y="0.293736"
                    width="64.9911"
                    height="48.4071"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.448214" />
                    <feGaussianBlur stdDeviation="2.24107" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_20_328"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4.48214" />
                    <feGaussianBlur stdDeviation="4.48214" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_20_328"
                      result="effect2_dropShadow_20_328"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_20_328"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
