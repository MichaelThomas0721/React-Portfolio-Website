import logo from "/public/MTLogo.png"

export default function Navbar() {
  const openMenu = () => {
      const menu = document.querySelector(".mobile-menu");
      menu.classList.toggle("hidden");
  };
  return (
<nav className="bg-darkishGrey w-full h-fit">
  <div className="px-4">
    <div className="flex justify-between w-full">

        <div>
          <a href="#" className="flex items-center py-1 ml-5 text-white hover:text-zinc-400">
              <logo className="w-fit h-fit"/>
              <svg className="h-14 w-14 mr-1 invert hover:invert-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 989 989"><defs></defs><g id="Layer_2" data-name="Layer 2"><line className="cls-1" x1="53.5" y1="877.5" x2="943.5" y2="103.5"/><path d="M293.18,569.28,261.68,567q-14-1.8-20-9.23T234.23,536l-.9-21.6V304.23H236l109.8,272.25h13L380,558.22l73.43-215.74,18.45-58.05h2.7q-1.35,16.65-2.47,35.77t-1.13,33.08V479.63L581.63,384V306l.9-20.7q1.35-14.4,6.75-20.25t19.58-7.65q14.17-1.8,18.67-1.8h10.35v-7.2H475.77l-68,195.3-75.67-195.3H165.38v7.2q4.55.45,13.61.9c6,.3,12.16.9,18.37,1.8a26.07,26.07,0,0,1,15.87,8.55,45.15,45.15,0,0,1,9.75,18l.9,20.7v208.8L223,536q-1.35,13.95-7.87,21.6t-17.78,9.22a173.06,173.06,0,0,1-19.12,1.8q-7.87.24-14.63.68v7.2h129.6Z" transform="translate(-5.5 -5.5)"/><path d="M612.62,451.26V710.05l-.9,20.7q-1.35,14.85-6.3,20.25T587,757.75l-29.7,1.35v7.2H777.32v-7.2q-6.3-.44-14.4-.9t-18-1.57q-9.9-1.12-14.62-6.75t-6.08-20l-.9-20.7V446.8l18,.9q13.95,0,32.4,22.95a367,367,0,0,1,35.33,53.78q16.88,30.83,29,58.27h7.65V438.25H627.82Z" transform="translate(-5.5 -5.5)"/><path d="M490.22,556.07V582.7h7.65q11.86-26.36,29.11-58.11Z" transform="translate(-5.5 -5.5)"/><path d="M109.34,791.66A485.33,485.33,0,0,1,12.5,500C12.5,230.76,230.76,12.5,500,12.5A486,486,0,0,1,845.33,155.9l5.3-4.58A493,493,0,0,0,500,5.5C226.9,5.5,5.5,226.9,5.5,500A492.27,492.27,0,0,0,104,796.25Z" transform="translate(-5.5 -5.5)"/><path d="M898.19,206.75l-5.33,4.57A485.25,485.25,0,0,1,987.5,500c0,269.24-218.26,487.5-487.5,487.5A486,486,0,0,1,154.28,843.7L149,848.27A493,493,0,0,0,500,994.5c273.1,0,494.5-221.4,494.5-494.5A492.26,492.26,0,0,0,898.19,206.75Z" transform="translate(-5.5 -5.5)"/></g></svg>
          </a>
        </div>


        <div className="hidden md:flex items-center w-fit mr-0">
          <a href="#" className="px-3 text-white hover:text-zinc-400">Home</a>
          <a href="#about" className="px-3 text-white hover:text-zinc-400">About</a>
          <a href="#education" className="px-3 text-white hover:text-zinc-400">Education</a>
          <a href="#experience" className="px-3 text-white hover:text-zinc-400">Experience</a>
          <a href="#projects" className="px-3 text-white hover:text-zinc-400">Projects</a>
          <a href="#contact" className="px-3 text-white hover:text-zinc-400">Contact</a>
          <a href="/MichaelThomasResume.pdf" className="text-white border-2 p-3 px-6 rounded-xl hover:bg-zinc-700">Resume</a>
        </div>

      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button" onClick={openMenu}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>


  <div className="mobile-menu hidden md:hidden">
    <a href="#" className="block py-2 px-4 text-sm text-white  hover:bg-zinc-700">Home</a>
    <a href="#about" className="block py-2 px-4 text-sm text-white  hover:bg-zinc-700">About</a>
    <a href="#education" className="block py-2 px-4 text-sm text-white  hover:bg-zinc-700">Education</a>
    <a href="#experience" className="block py-2 px-4 text-sm text-white  hover:bg-zinc-700">Experience</a>
    <a href="#projects" className="block py-2 px-4 text-sm text-white  hover:bg-zinc-700">Projects</a>
    <a href="#contact" className="block py-2 px-4 text-sm text-white  hover:bg-zinc-700">Contact</a>
    <a href="/Resume.pdf" className="block py-2 px-4 text-sm text-white hover:bg-zinc-700">Resume</a>
  </div>
</nav>
  );
}
