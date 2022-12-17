import React, { useState } from 'react'
import { useEffect } from 'react'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import styles from "./banner.module.css"

let images=[
    {
        url:"Images/MiddleSection/sale1.webp"
    },
    {
        url:"Images/MiddleSection/ts2.gif"
    },
    {
        url:"Images/MiddleSection/ts3.webp"
    },
    {
        url:"Images/MiddleSection/sale1.webp"
    },
    {
        url:"Images/MiddleSection/ts4.png"
    },
    {
        url:"Images/MiddleSection/ts5.png"
    },
    
       
    ]
const BannerHome = () => {
    const[currentSlide,setCurrentSlide]=useState(0)
    const slideLength = images.length;

    const nextSlide=()=>{
        setCurrentSlide(currentSlide===slideLength-1 ? 0 : currentSlide+1)
    }
    const prevSlide=()=>{
        setCurrentSlide(currentSlide=== 0 ? slideLength-1 : currentSlide-1)
    }

    const autoScroll= true;
    let slideInterval;
    let intervalTime=2000;

    function auto(){
        slideInterval=setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        if(autoScroll){
            auto()
        }
        return ()=>clearInterval(slideInterval)
    },[currentSlide])

    useEffect(()=>{
        setCurrentSlide(0)
    },[])

  return (
    <div>
        <div className={styles.slider}>
            <AiOutlineArrowLeft id={styles.leftArrow} className={styles.arrow} onClick={prevSlide} />
            <AiOutlineArrowRight id={styles.rightArrow} className={styles.arrow} onClick={nextSlide} />
            
            {images.map((slide,index)=>{
                return (
                    <div className={index===currentSlide ? "slide current" : "slide"} 
                    key={Date.now()+index}>
                        
                        {index === currentSlide && (
                            <>
                            <img src={slide.url} alt="slide" 
                             className={styles.slideImage}
                            />
                            </>
                        )}
                        
                    </div>
                )
            }

            )}

        </div>
    </div>
  )
}

export default BannerHome