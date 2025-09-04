// import {
//   useState,
//   useEffect,
//   useRef,
//   createContext,
//   useReducer,
//   useContext,
// } from "react";
// import "./App.css";
// import PlatformContent from "./components/navbarLinksContent/PlatformContent";
// import SolutionContent from "./components/navbarLinksContent/SolutionContent";
// import ResourcesContent from "./components/navbarLinksContent/ResourcesContent";
// import OpenSourceContent from "./components/navbarLinksContent/OpenSourceContent";
// import EnterpriseContent from "./components/navbarLinksContent/EnterpriseContent";
// import SearchResults from "./components/header/SearchResults";

// const disc = "I'am FrontEnd Developer";

// function App() {
//   const [discription, setDiscription] = useState("");
//   const [counter, setCounter] = useState(0);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [background, setBackground] = useState(null);

//   useEffect(() => {
//     if(counter < disc.length){
//       const interval = setInterval(() => {
//         setDiscription((prev) => {return prev + disc[counter]});
//         setCounter(prev => prev + 1);
//       }, 200);
      
//       return (() => {
//         clearInterval(interval);
//       });
//     }

//     else{
//       setTimeout(() => {
//         setCounter(0);
//         setDiscription("");
//       },5000);
//     }

//   }, [counter]);

//   return (
//     <>
//       <div className="main-container py-5 px-10">
//         <div className="main-header mb-30 flex justify-between items-start">
//           <nav>
//             <div className="links">
//               <ul className="links-container flex gap-5 items-center">
//                 <li className="link">
//                   <div className="border-2 border-gray-50 rounded-full p-1 hover:border-gray-400">
//                      <a href="https://github.com/">git</a>
//                   </div>
//                 </li>
//                 <li className="link" onMouseOver={() => setActiveMenu("platform")} onMouseLeave={() => setActiveMenu(null)}>Platform</li>
//                 <li className="link" onMouseOver={() => setActiveMenu("solution")} onMouseLeave={() => setActiveMenu(null)}>Solution</li>
//                 <li className="link" onMouseOver={() => setActiveMenu("resources")} onMouseLeave={() => setActiveMenu(null)}>Resources</li>
//                 <li className="link" onMouseOver={() => setActiveMenu("opensource")} onMouseLeave={() => setActiveMenu(null)}>Open Source</li>
//                 <li className="link" onMouseOver={() => setActiveMenu("enterprise")} onMouseLeave={() => setActiveMenu(null)}>Enterprise</li>
//                 <li className="link">
//                   <a href="https://github.com/pricing">Pricing</a>
//                 </li>
//               </ul>
//               <PlatformContent display={activeMenu === "platform"} onHover={() => setActiveMenu("platform")} onLeave={() => setActiveMenu(null)}/>
//               <SolutionContent display={activeMenu === "solution"} onHover={() => setActiveMenu("solution")} onLeave={() => setActiveMenu(null)}/>
//               <ResourcesContent display={activeMenu === "resources"} onHover={() => setActiveMenu("resources")} onLeave={() => setActiveMenu(null)}/>
//               <OpenSourceContent display={activeMenu === "opensource"} onHover={() => setActiveMenu("opensource")} onLeave={() => setActiveMenu(null)}/>
//               <EnterpriseContent display={activeMenu === "enterprise"} onHover={() => setActiveMenu("enterprise")} onLeave={() => setActiveMenu(null)}/>
//             </div>
//           </nav>
//           <header className="flex gap-5 items-center">
//             <div className={`search`}>
//               <i></i>
//               <input
//                 className="w-100 p-1.5 bg-gray-800/30 border-2 border-gray-50 rounded-md"
//                 type="text"
//                 placeholder="Search or jump to..."
//                 onClick={() => (setActiveMenu("search"), setBackground("search"))}
//               />

//               <SearchResults display={activeMenu === "search"}/>
//             </div>
//             <div className="sign flex gap-5">
//               <button className="hover:text-gray-400 cursor-pointer">
//                  <a href="https://github.com/login">sign in</a>
//               </button>
//               <button className="hover:text-gray-400 hover:border-gray-400 border-gray-50 border-2 rounded-xl px-3 pb-0.5 cursor-pointer">
//                  <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">sign up</a>
//               </button>
//             </div>
//           </header>
//         </div>

//         <div className="main-content flex justify-center items-center">
//           <main className="max-w-200">
//             <div className="text-center">
//               <h1 className="text-6xl mb-5">
//                 Build and ship software on a single, collaborative platform
//               </h1>
//               <p className="text-xl mb-5">
//                 Join the world’s most widely adopted AI-powered developer
//                 platform.
//               </p>
//             </div>
//             <div className="flex gap-5 justify-center items-center mb-5">
//               <div className="flex justify-between gap-2 p-1 bg-gray-50 w-120 h-15 rounded-xl">
//                 <input
//                   className="grow text-gray-700 p-2 rounded-xl border-2 border-blue-600"
//                   type="text"
//                   placeholder="Enter your email"
//                 />
//                 <button className="bg-green-700 w-50 rounded-xl hover:bg-green-800 cursor-pointer">
//                   Sign up for Github
//                 </button>
//               </div>
//               <button className="border-2 border-gray-50 h-15 w-50 px-5 py-3 rounded-xl bg-gray-900/50 hover:border-gray-400 cursor-pointer">
//                  <a href="https://github.com/github-copilot/pro">Try Github Copilot</a>
//               </button>
//             </div>
//             <p className="text-center">{discription}|</p>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
