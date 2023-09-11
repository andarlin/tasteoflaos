// if screen size is less than 786px stop the scroll trigger and gsap animation 
if (window.matchMedia("(max-width: 786px)").matches) {
//  stop the scroll trigger and gsap animation
ScrollTrigger.getAll().forEach(function (st) {st.kill();});
gsap.killTweensOf("*");
gsap.set("*", {clearProps: "all"});
}else{
  



  const locoScroll =  new LocomotiveScroll({
      el: document.querySelector(".scroll-container"), smooth:true,
      multiplier:.5
    });
    
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".scroll-container", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
    });
    
  
  
  
    //gsap tween on load for hero-header
    let tl = gsap.timeline();
    
    tl.from(".hero-header", { x: -200, opacity: 0, duration: 1, ease: "ease" });
    tl.from(".header1", { x: 200, opacity: 0, duration: 1, ease: "ease" });
    tl.from(".header2", { x: 200, opacity: 0, duration: 1, ease: "ease" });
  
  
    gsap.timeline().from(".section6-text", {
      scrollTrigger:{
        trigger:".section6",
        toggleActions:"play complete complete complete",
        scroller:".scroll-container",
        scrub: true,
        start: "top 20%",
        end: "center center",
        },
        yPercent:200,
        opacity:0,
        ease:"ease"
      });
    gsap.timeline().from(".section6-image1", {
      scrollTrigger:{
        trigger:".section6",
        toggleActions:"play complete complete complete",
        scroller:".scroll-container",
        scrub: true,
        start: "top 20%",
        end: "center center",
        duration:1,
        },
        yPercent:100,
        ease:"ease"
      });
  
  
    gsap.from(".section2-image1", {
      scrollTrigger:{
      trigger:".section2",
      toggleActions:"play complete complete complete",
      scroller:".scroll-container",
      start:"top center",
      end:"bottom center",
      },
      x:-200,
      opacity:0,
      ease: "ease"
      });
    
    gsap.from(".section2-image2", {
        scrollTrigger:{
        trigger:".section2",
        toggleActions:"play complete complete complete",
        scroller:".scroll-container",
        start:"top center",
        end:"bottom center",
        },
        x:200,
        opacity:0,
        stagger:0.2,
        ease: "ease"
        });
          gsap.from(".section2-image3", {
              scrollTrigger:{
              trigger:".section2-container2",
              toggleActions:"play complete complete complete",
              scroller:".scroll-container",
              start:"top center",
              end:"bottom center",
              },
              x:-200,
              opacity:0,
              ease: "ease"
              });
          gsap.from(".section2-image4", {
              scrollTrigger:{
              trigger:".section2-container2",
              toggleActions:"play complete complete complete",
              scroller:".scroll-container",
              start:"top center",
              end:"bottom center",
              },
              x:200,
              opacity:0,
              stagger:0.2,
              ease: "ease"
              });
          
  
    gsap.from(".laos-special-menu-card", {
      scrollTrigger:{
      trigger:".section4",
      toggleActions:"play complete complete complete",
      scroller:".scroll-container",
      start:"top center",
      end:"bottom center",
      },
      x:-200,
      opacity:0,
      ease: "ease"
      });
  gsap.from(".beef-noddle-soup-menu-card", {
      scrollTrigger:{
      trigger:".beef-noddle-soup-menu-card",
      toggleActions:"play complete complete complete",
      scroller:".scroll-container",
      start:"top center",
      end:"bottom center",
      },
      x:200,
      opacity:0,
      stagger:0.2,
      ease: "ease"
      });

}  

  




      //swiper carousel
  const swiper = new Swiper(".mySwiper", {
    speed: 800,
    parallax: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // modal popup function
  const modalThankYou = document.querySelector(".modal-thank-you");
  const modalClose = document.querySelector(".modal-close");
  const emailBtn = document.querySelector(".email-btn");
  function openModal() {
    emailBtn.addEventListener("click", function() {
      modalThankYou.classList.add("open-modal");
    });
  }
  openModal();



   