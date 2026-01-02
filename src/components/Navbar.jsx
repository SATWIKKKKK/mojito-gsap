import {navLinks} from '../../constants/index.js'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Navbar = () => {
useGSAP(()=> {
  const navTween = gsap.timeline({
    scrollTrigger: {
      scroll: "body",
      trigger: "nav",
      start: "bottom top",
      scrub: true,
      
    }
  });



  navTween.fromTo("nav", 
    { backgroundColor: "#00000000",},
    { backgroundColor: "#00000050",
      duration: 1,
      backdropFilter: "blur(15px)",
      ease: "power1.inOut"
     });
})





  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" />
             <p>Velvet Pour</p>   
            </a>

            <ul>
              {navLinks.map((link)=>(
                <li key = {link.id}>
                  <a href = {`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
