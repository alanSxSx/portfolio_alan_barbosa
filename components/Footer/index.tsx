"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (

    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* <!-- Footer Top --> */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_left relative mx-auto hidden md:block "
        >
          <div className="-mx-4 w-fulll flex justify-between items-center">
            <div className="flex w-full px-4 items-center justify-between">

							<div className='flex flex-col w-full'>
								<p className="flex items-center text-lg font-medium text-body-color gap-3">
								<svg viewBox="0 0 24 24" width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#4a6cf7"></path> </g></svg>
								<Link href="mailto:alan.barbosa97@outlook.com" className="hover:underline">alan.barbosa97@outlook.com</Link>
								</p>
                <p className="flex items-center text-lg font-medium text-body-color gap-3">
								<svg viewBox="0 0 24 24"  width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" stroke="#4a6cf7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
								<Link href="tel:+5537998057781" className="hover:underline">(37) 99805-7781</Link>
								</p>
							</div>

							<div className='hidden lg:flex flex-col items-center justify-center w-full md:hidden'>
								<p className="text-3xl font-bold text-black dark:text-white">Alan Barbosa</p>
                <p className="text-xl font-medium text-body-color">Quality Assurance Engineer</p>
							</div>


              <div className="py-7 flex flex-col items-center text-center w-full">
                <div className="flex justify-center">
                  {/* <a href="https://www.linkedin.com/in/alan-barbosa-4b6987277/" aria-label="social-link" className="mr-6"> */}
                  <a href="https://github.com/alanSxSx" aria-label="social-link" target="_blank" className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4a6cf7" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                  </a>
                  {/* <a href="https://www.linkedin.com/in/alan-barbosa-4b6987277/" aria-label="social-link" className="mr-6"></a> */}
                  <a href="https://www.linkedin.com/in/alan-barbosa-4b6987277/" aria-label="social-link" target="_blank" className="mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#4a6cf7" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  <a href="https://docs.google.com/document/d/1ynMxRR3JAKB6W03ObEpNQAaXyJ1ZQv75/edit?usp=drive_link&ouid=116033998789940486808&rtpof=true&sd=true" target="_blank" aria-label="social-link" className="mr-6 dark:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#FFFFFF" viewBox="-39.25 -39.25 471.03 471.03" xmlSpace="preserve" stroke="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-39.25" y="-39.25" width="471.03" height="471.03" rx="94.20599999999999" fill="#4a6cf7" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M292.396,324.849H99.879c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925h192.582 c6.012,0,10.925-4.849,10.925-10.925C303.321,329.697,298.473,324.849,292.396,324.849z"></path> </g> </g> <g> <g> <path d="M292.396,277.01H99.879c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925h192.582 c6.012,0,10.925-4.849,10.925-10.925C303.321,281.859,298.473,277.01,292.396,277.01z"></path> </g> </g> <g> <g> <path d="M196.137,45.834c-25.859,0-46.998,21.075-46.998,46.998c0,25.859,21.139,46.933,46.998,46.933 s46.998-21.075,46.998-46.998S221.996,45.834,196.137,45.834z M196.137,117.851c-13.77,0-25.083-11.313-25.083-25.083 c0-13.77,11.248-25.083,25.083-25.083s25.083,11.313,25.083,25.083C221.22,106.537,209.907,117.851,196.137,117.851z"></path> </g> </g> <g> <g> <path d="M258.521,163.362c-39.887-15.515-84.752-15.515-124.638,0c-13.059,5.107-21.786,18.101-21.786,32.388v44.347 c-0.065,6.012,4.849,10.925,10.861,10.925h146.424c6.012,0,10.925-4.848,10.925-10.925V195.75 C280.307,181.463,271.58,168.469,258.521,163.362z M258.521,229.236H133.883v-33.422c0-5.301,3.168-10.214,7.887-12.024 c34.844-13.511,74.02-13.511,108.865,0c4.719,1.875,7.887,6.659,7.887,12.024V229.236z"></path> </g> </g> <g> <g> <path d="M313.083,0H131.491c-8.404,0-16.291,3.232-22.238,9.18L57.018,61.414c-5.947,5.948-9.18,13.834-9.18,22.238v277.333 c0,17.39,14.158,31.547,31.547,31.547h233.762c17.39,0,31.547-14.158,31.547-31.547V31.547C344.501,14.158,330.343,0,313.083,0z M112.032,37.236v27.022H85.01L112.032,37.236z M322.715,116.816h-40.598c-6.012,0-10.925,4.849-10.925,10.925 c0,6.012,4.848,10.925,10.925,10.925h40.598v19.394h-14.869c-6.012,0-10.925,4.848-10.925,10.925 c0,6.012,4.849,10.925,10.925,10.925h14.869v181.139c0,5.366-4.331,9.697-9.632,9.697H79.192c-5.301,0-9.632-4.331-9.632-9.632 V86.044h53.398c6.012,0,10.925-4.848,10.925-10.925V21.721h179.2c5.301,0,9.632,4.331,9.632,9.632V116.816z"></path> </g> </g> </g></svg>
                  </a>

                  <a href="https://wa.me/5537998057781" aria-label="social-link" target="_blank" className="dark:hidden">
                    <svg viewBox="-3.2 -3.2 38.40 38.40" fill="none" width="42" height="42" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="7.68" fill="#4a6cf7" strokeWidth="0">
                      </rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round"></g><g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stopColor="#4a6cf7"></stop> <stop offset="1" stopColor="#4a6cf7"></stop> </linearGradient> </defs> </g></svg>
                  </a>

                  <a href="https://docs.google.com/document/d/1-qvCeh3H5G5Xi-Ju47w6gC1RyQ-v14qo/edit?usp=drive_link&ouid=116033998789940486808&rtpof=true&sd=true" aria-label="social-link" className="hidden mr-6 dark:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="#181C31" viewBox="-39.25 -39.25 471.03 471.03" xmlSpace="preserve" stroke="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-39.25" y="-39.25" width="471.03" height="471.03" rx="94.20599999999999" fill="#4a6cf7" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M292.396,324.849H99.879c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925h192.582 c6.012,0,10.925-4.849,10.925-10.925C303.321,329.697,298.473,324.849,292.396,324.849z"></path> </g> </g> <g> <g> <path d="M292.396,277.01H99.879c-6.012,0-10.925,4.848-10.925,10.925c0,6.012,4.849,10.925,10.925,10.925h192.582 c6.012,0,10.925-4.849,10.925-10.925C303.321,281.859,298.473,277.01,292.396,277.01z"></path> </g> </g> <g> <g> <path d="M196.137,45.834c-25.859,0-46.998,21.075-46.998,46.998c0,25.859,21.139,46.933,46.998,46.933 s46.998-21.075,46.998-46.998S221.996,45.834,196.137,45.834z M196.137,117.851c-13.77,0-25.083-11.313-25.083-25.083 c0-13.77,11.248-25.083,25.083-25.083s25.083,11.313,25.083,25.083C221.22,106.537,209.907,117.851,196.137,117.851z"></path> </g> </g> <g> <g> <path d="M258.521,163.362c-39.887-15.515-84.752-15.515-124.638,0c-13.059,5.107-21.786,18.101-21.786,32.388v44.347 c-0.065,6.012,4.849,10.925,10.861,10.925h146.424c6.012,0,10.925-4.848,10.925-10.925V195.75 C280.307,181.463,271.58,168.469,258.521,163.362z M258.521,229.236H133.883v-33.422c0-5.301,3.168-10.214,7.887-12.024 c34.844-13.511,74.02-13.511,108.865,0c4.719,1.875,7.887,6.659,7.887,12.024V229.236z"></path> </g> </g> <g> <g> <path d="M313.083,0H131.491c-8.404,0-16.291,3.232-22.238,9.18L57.018,61.414c-5.947,5.948-9.18,13.834-9.18,22.238v277.333 c0,17.39,14.158,31.547,31.547,31.547h233.762c17.39,0,31.547-14.158,31.547-31.547V31.547C344.501,14.158,330.343,0,313.083,0z M112.032,37.236v27.022H85.01L112.032,37.236z M322.715,116.816h-40.598c-6.012,0-10.925,4.849-10.925,10.925 c0,6.012,4.848,10.925,10.925,10.925h40.598v19.394h-14.869c-6.012,0-10.925,4.848-10.925,10.925 c0,6.012,4.849,10.925,10.925,10.925h14.869v181.139c0,5.366-4.331,9.697-9.632,9.697H79.192c-5.301,0-9.632-4.331-9.632-9.632 V86.044h53.398c6.012,0,10.925-4.848,10.925-10.925V21.721h179.2c5.301,0,9.632,4.331,9.632,9.632V116.816z"></path> </g> </g> </g></svg>
                  </a>

                  <a href="https://wa.me/5537998057781" aria-label="social-link" className="hidden dark:block">
                    <svg viewBox="-3.2 -3.2 38.40 38.40" fill="none" width="42" height="42" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="7.68" fill="#4a6cf7" strokeWidth="0">
                      </rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round"></g><g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#181C31"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="#181C31"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="#181C31"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stopColor="#4a6cf7"></stop> <stop offset="1" stopColor="#4a6cf7"></stop> </linearGradient> </defs> </g></svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* <!-- Footer Top --> */}

        {/* <!-- Footer Bottom --> */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >

          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <p>
              &copy; {new Date().getFullYear()} Todos os direitos Reservados
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >

          </motion.div>
        </div>
        {/* <!-- Footer Bottom --> */}
      </div>
    </footer>

  );
};

export default Footer;
