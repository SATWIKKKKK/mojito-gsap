import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { SplitText } from 'gsap/all'

gsap.registerPlugin(SplitText);

const Hero = () => {
useGSAP(() => {
	let heroSplit;
	let paragraphSplit;
	let cancelled = false;

	const start = () => {
		if (cancelled) return;
		heroSplit = new SplitText('.title', { type: 'chars, words' });
		paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

		heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

		const tl = gsap.timeline();

		tl.from(heroSplit.chars, {
			opacity: 0,
			yPercent: 100,
			duration: 1,
			ease: 'expo.out',
			stagger: 0.05,
		});

		tl.from(
			paragraphSplit.lines,
			{
				opacity: 0,
				yPercent: 100,
				duration: 1.8,
				ease: 'expo.out',
				stagger: 0.06,
			},
			'-=0.6'
		);

        gsap.timeline({
			scrollTrigger:{
				trigger: "#hero",
				start: "top top",
				end: "bottom top",
				scrub: true,

			}
		})
		.to(".left-leaf", {x: -100, y: 50, rotation: -30, ease: "none"}, 0)
		.to(".right-leaf", {x: 100, y: 50, rotation: 30, ease: "none"}, 0);


	};

	if (document.fonts && document.fonts.ready) {
		document.fonts.ready.then(start);
	} else {
		start();
	}

	return () => {
		cancelled = true;
		if (heroSplit) heroSplit.revert();
		if (paragraphSplit) paragraphSplit.revert();
	};
}, []);


  return (
	<>
	 <section id="hero" className="noisy">
		<h1 className="title uppercase">mojito</h1>
		
		<img
		 src="/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-2 hidden md:block">
			 <p>Cool. Crisp. Classic.</p>
			 <p className="subtitle">
				Sip the Spirit of Summer
					
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 <a href="#cocktails">View cocktails</a>
			</div>
		 </div>
		</div>
	 </section>
	 
	 {/* <div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/videos/output.mp4"
		/>
	 </div> */}
	</>
 );
};

export default Hero;