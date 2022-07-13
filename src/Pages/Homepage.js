import React from 'react'
import { Link } from 'react-router-dom'
import { COLOR } from '../Color'

function Homepage() {
  return (
    <div style={{zIndex:"99"}}>   
       
   <div style={{zIndex:"99",justifyContent:"space-between"}}  class="relative pt-[100px] lg:pt-[120px] pb-[110px]">
     <div class="container">
       <div class="flex flex-wrap -mx-4">
         <div class="w-full lg:w-5/12 px-4">
           <div class="hero-content">
             <h1
               class="
                 text-dark
                 font-bold
                 text-4xl
                 sm:text-[42px]
                 lg:text-[40px]
                 xl:text-[42px]
                 leading-snug
                 mb-3
                 px-3
               "
             >
               Start <br />
               Managing <br />
               Your Queue With Us
             </h1>
             <p class="text-base mb-8 text-body-color max-w-[480px] px-3">
             Quantum tree provides the best technology that ensures a perfect queue management in Africa.
             </p>
            <ul class="flex px-6 flex-wrap items-center">
               <li>
                 <Link to="/queue/join">
                 <a
                    
                   class="
                     py-3
                     px-6
                     sm:px-10
                     lg:px-8
                     xl:px-10
                     inline-flex
                     items-center
                     justify-center
                     text-center text-white text-base
                     bg-[#ffba44]
                     hover:bg-opacity-90
                     font-normal
                     rounded-lg
                     mr-4
                   "
                 >
                  Join Queue
                 </a></Link>
               </li>
               <li>
                 <Link to='/getstarted'>
                 <a
                 
                   class="
                     py-3
                     px-6
                     sm:px-10
                     lg:px-8
                     xl:px-10
                     inline-flex
                     items-center
                     justify-center
                     text-center text-white text-base
                     bg-[#ffba44]
                     hover:bg-opacity-90
                     font-normal
                     rounded-lg
                   "
                 >
                  
                   Quick Guide
                 </a></Link>
               </li>
             </ul>
             
           </div>
         </div>
         <div class="hidden lg:block lg:w-1/12 px-4"></div>
         <div class="w-full lg:w-6/12 px-4">
           <div class="lg:text-right lg:ml-auto">
             <div class="relative inline-block z-10 pt-11 lg:pt-0">
               <img src="img/10.svg"
                 alt="hero"
                 class="max-w-full lg:ml-auto"
               />
               
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   
   <section  class="py-20 lg:py-[120px]">
    <div class="container">
       <div class="flex flex-wrap justify-center mx-2">
          <div class="w-full lg:w-10/12 px-5">
             <div
                class="
                h-[240px]
                md:h-[450px]
                rounded-lg
                overflow-hidden
                relative
                z-20
                "
                >
                <div class="w-full h-full absolute top-0 left-0">
                    <img
                     
                       src="img/5.svg"
                       alt="image"
                       class="w-full h-full object-center object-cover"
                       />
                 </div>
                 <div
                 class="
                 absolute
                 top-0
                 left-0
                 w-full
                 h-full
                 flex
                 items-center
                 justify-center
                 bg-primary bg-opacity-90
                 z-10
                 "
                 >
                 <a
                    href="javascript:void(0)"
                    class="
                    flex
                    items-center
                    justify-center
                    w-20
                    md:w-[100px]
                    h-20
                    md:h-[100px]
                    rounded-full
                    bg-white
                    text-primary
                    absolute
                    z-20
                    "
                    >
                    <span
                       class="
                       absolute
                       w-full
                       h-full
                       rounded-full
                       top-0
                       right-0
                       bg-white bg-opacity-20
                       z-[-1]
                       animate-ping
                       delay-300
                       duration-1000
                       "
                       ></span>
                    <svg
                       width="23"
                       height="27"
                       viewBox="0 0 23 27"
                       class="fill-current"
                       >
                       <path
                          d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z"
                          />
                    </svg>
                 </a>
              </div>
                <div>
                   <span class="absolute top-4 left-4 z-40">
                      <svg
                         width="50"
                         height="79"
                         viewBox="0 0 50 79"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle
                            cx="47.7119"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 47.7119 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="61.6385"
                            r="1.74121"
                            transform="rotate(180 47.7119 61.6385)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="46.3163"
                            r="1.74121"
                            transform="rotate(180 47.7119 46.3163)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="16.7159"
                            r="1.74121"
                            transform="rotate(180 47.7119 16.7159)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="31.3421"
                            r="1.74121"
                            transform="rotate(180 47.7119 31.3421)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="1.74121"
                            r="1.74121"
                            transform="rotate(180 47.7119 1.74121)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 32.3916 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3877"
                            cy="61.6384"
                            r="1.74121"
                            transform="rotate(180 32.3877 61.6384)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="46.3162"
                            r="1.74121"
                            transform="rotate(180 32.3916 46.3162)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="16.7161"
                            r="1.74121"
                            transform="rotate(180 32.3916 16.7161)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3877"
                            cy="31.342"
                            r="1.74121"
                            transform="rotate(180 32.3877 31.342)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="1.74145"
                            r="1.74121"
                            transform="rotate(180 32.3916 1.74145)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 17.0674 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="61.6384"
                            r="1.74121"
                            transform="rotate(180 17.0674 61.6384)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="46.3162"
                            r="1.74121"
                            transform="rotate(180 17.0674 46.3162)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="16.7161"
                            r="1.74121"
                            transform="rotate(180 17.0674 16.7161)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="31.342"
                            r="1.74121"
                            transform="rotate(180 17.0674 31.342)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="1.74145"
                            r="1.74121"
                            transform="rotate(180 17.0674 1.74145)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 1.74316 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="61.6384"
                            r="1.74121"
                            transform="rotate(180 1.74316 61.6384)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="46.3162"
                            r="1.74121"
                            transform="rotate(180 1.74316 46.3162)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="16.7161"
                            r="1.74121"
                            transform="rotate(180 1.74316 16.7161)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="31.342"
                            r="1.74121"
                            transform="rotate(180 1.74316 31.342)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="1.74145"
                            r="1.74121"
                            transform="rotate(180 1.74316 1.74145)"
                            fill="#ffba44"
                            />
                      </svg>
                   </span>
                   <span class="absolute bottom-4 right-4 z-40">
                      <svg
                         width="50"
                         height="79"
                         viewBox="0 0 50 79"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle
                            cx="47.7119"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 47.7119 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="61.6385"
                            r="1.74121"
                            transform="rotate(180 47.7119 61.6385)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="46.3163"
                            r="1.74121"
                            transform="rotate(180 47.7119 46.3163)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="16.7159"
                            r="1.74121"
                            transform="rotate(180 47.7119 16.7159)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="31.3421"
                            r="1.74121"
                            transform="rotate(180 47.7119 31.3421)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="47.7119"
                            cy="1.74121"
                            r="1.74121"
                            transform="rotate(180 47.7119 1.74121)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 32.3916 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3877"
                            cy="61.6384"
                            r="1.74121"
                            transform="rotate(180 32.3877 61.6384)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="46.3162"
                            r="1.74121"
                            transform="rotate(180 32.3916 46.3162)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="16.7161"
                            r="1.74121"
                            transform="rotate(180 32.3916 16.7161)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3877"
                            cy="31.342"
                            r="1.74121"
                            transform="rotate(180 32.3877 31.342)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="32.3916"
                            cy="1.74145"
                            r="1.74121"
                            transform="rotate(180 32.3916 1.74145)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 17.0674 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="61.6384"
                            r="1.74121"
                            transform="rotate(180 17.0674 61.6384)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="46.3162"
                            r="1.74121"
                            transform="rotate(180 17.0674 46.3162)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="16.7161"
                            r="1.74121"
                            transform="rotate(180 17.0674 16.7161)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="31.342"
                            r="1.74121"
                            transform="rotate(180 17.0674 31.342)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="17.0674"
                            cy="1.74145"
                            r="1.74121"
                            transform="rotate(180 17.0674 1.74145)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="76.9617"
                            r="1.74121"
                            transform="rotate(180 1.74316 76.9617)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="61.6384"
                            r="1.74121"
                            transform="rotate(180 1.74316 61.6384)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="46.3162"
                            r="1.74121"
                            transform="rotate(180 1.74316 46.3162)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="16.7161"
                            r="1.74121"
                            transform="rotate(180 1.74316 16.7161)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="31.342"
                            r="1.74121"
                            transform="rotate(180 1.74316 31.342)"
                            fill="#ffba44"
                            />
                         <circle
                            cx="1.74316"
                            cy="1.74145"
                            r="1.74121"
                            transform="rotate(180 1.74316 1.74145)"
                            fill="#ffba44"
                            />
                      </svg>
                   </span>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div
       x-show="videoOpen"
       x-transition
       class="
       fixed
       top-0
       left-0
       w-full
       h-screen
       flex
       items-center
       justify-center
       z-50"
       >

    </div>
 </section>
 <section   class="pt-20 lg:pt-[110px] pb-12 lg:pb-[80px]">
    <div class="container">
       <div class="flex flex-wrap mx-1">
          <div class="w-full px-4">
             <div class="text-center mx-auto mb- lg:mb-10 max-w-[500px]">
                <span class="font-semibold text-lg text-primary mb-2 block">
                Features
                </span>
                <h2
                   class="
                   font-bold
                   text-3xl
                   sm:text-4xl
                   md:text-[40px]
                   text-dark
                   mb-4
                   "
                   >
                   What We Offer
                </h2>
                <p style={{color:"#ffba44"}} class="text-base  text-body-color">
                   ...</p>
             </div>
          </div>
       </div>
       <div   class="flex flex-wrap ">
          <div class="w-full md:w-1/2 lg:w-1/3 px-3">
             <div
                class="
                p-6
                px-4
                mx-4

                md:px-7
                xl:px-10
                rounded-[20px]
                shadow-lg
                hover:shadow-lg
                mb-8
                "
                >
                <div
                   class="
                   w-[49px]
                   h-[40px]
                   flex
                   items-center
                   justify-center
                   bg-[#ffba44]
                   rounded-lg
                   mb-8
                   "
                   >
                <i class="fa fa-paper-plane text-white"></i>
                </div>
                <h4 class="font-semibold text-xl text-dark mb-3">
                Fast queue management
                </h4>
                <p class="text-body-color">
                With qtree we provide organisations and small businesses with good tools in managing queue. 
                </p>
             </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
             <div
                class="
                p-6
                px-4
                mx-4

                md:px-7
                xl:px-10
                rounded-[20px]
                shadow-lg
                hover:shadow-lg
                mb-8
                "
                >
                <div
                    class="
                    w-[49px]
                    h-[40px]
                    flex
                    items-center
                    justify-center
                    bg-[#ffba44]
                    rounded-lg
                    mb-8
                    "
                   >
                  <i class="fa fa-balance-scale text-white"></i>
                </div>
                <h4 class="font-semibold text-xl text-dark mb-3">
                Reneging management
                </h4>
                <p class="text-body-color">
                We provide separate queue for customers who decides to come back later after waiting for so long. 
                </p>
             </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
             <div
                class="
                p-6
                px-4
                mx-4

                md:px-7
                xl:px-10
                rounded-[20px]
                shadow-lg
                hover:shadow-lg
                mb-8
                "
                >
                <div
                   class="
                   w-[49px]
                   h-[40px]
                   flex
                   items-center
                   justify-center
                   bg-[#ffba44]
                   rounded-lg
                   mb-8
                   "
                   >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
</svg>
                </div>
                <h4 class="font-semibold text-xl text-dark mb-3">
                Location Enabled
                </h4>
                <p class="text-body-color">
                With your automatic Location tracker we find user near queue, for better queuing system.
                </p>
             </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4">
             <div
               class="
               p-6
               px-4
               mx-4

               md:px-7
               xl:px-10
               rounded-[20px]
               shadow-lg
               hover:shadow-lg
               mb-8
               "
                >
                <div
                    class="
                    w-[49px]
                    h-[40px]
                    flex
                    items-center
                    justify-center
                    bg-[#ffba44]
                    rounded-lg
                    mb-8
                    "
                   >
                  <i className='fa fa-globe text-white'></i>
                </div>
                <h4 class="font-semibold text-xl text-dark mb-3">
                Accessibility 
                </h4>
                <p class="text-body-color">
                Qtree is applicable for organisations and companies that don't require a mobile phone.                </p>
             </div>
          </div>
       </div>
    </div>
 </section>

 <div class="mt-8 relative opacity-75 py-2 px-4 flex flex-wrap  lg:py-[120px]" style={{textAlign:"center",justifyContent:"center",zIndex:"99"}}>
   <img src="img/7.svg" class="h-[100%] lg:h-[350px] w-full"/>
                </div>
                <div style={{zIndex:"99",position:"relative"}} >
                    <div class="mx-auto text-center px-4 mt-12 text-2xl text-[#333131] font-semibold">Frequently Asked Questions</div>
                    <dl class="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-row lg:flex-wrap">
                        <div class="lg:w-1/2 z-100" >
                            <div class="  cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm ">
                                <div class="question">
                                    <div class="flex justify-between">
                                        <div class="text=[#333131] font-semibold group">
                                        <details>
                                        <summary>What is qtree?</summary>
                                        <div><p>Qtree also known as quantum tree we organise 
                                            manage queues for company, small businesses, organisations,
                                            and community that requires lots of member compliance. </p></div>
                                        </details>
                                        </div>
                                        <div>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/2">
                            <div class="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
                            <div class="question">
                                    <div class="flex justify-between">
                                        <div class="text=[#333131] font-semibold group">
                                        <details>
                                        <summary>What problem are we solving?</summary>
                                        <div><p>Qtree provides queue discipline in disorganised or bulk queue. In Africa waiting for services is part of our every day live. We wait  to eat in restaurants, we "queue-up" for services, we 
                                          "queue-up" at the check out counter in grocery stores, and we also "line-up" for services in post offices. This often leads to bulk queue due to wrong compliance and bad queue system. But with qtree we eliminate jockeying,
                                           balking and organise reneging.</p></div>
                                        </details>
                                        </div>
                                        <div>
                                         
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                       
                    </dl>
                </div>
              
    </div>
  )
}

export default Homepage