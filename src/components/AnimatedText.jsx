import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

// gsap plugin initialize
gsap.registerPlugin(ScrollTrigger, SplitText)

export default function AnimatedText({ as: Tag = "h2", children, className }) {
  // refs
  const el = useRef(null)

  useEffect(() => {
    let split
    // wait for fonts load
    const animate = async () => {
      await document.fonts.ready
      // split text animation type: words + char
      split = new SplitText(el.current, { type: "words,chars" })
      gsap.fromTo(
        split.chars,
        // initial state
        {
          opacity: 0.5
        },
        // final state
        {
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      )
    }
    animate()

    // cleanup scrollTrigger and split instance
    return () => {
      if (split) split.revert()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    // react props forwarding for reusability
    <Tag ref={el} className={className}>
      {children}
    </Tag>
  )
}

/*
Uses example:
<AnimatedText className="md:text-7xl text-4xl">
  The Most Asked Questions
 </AnimatedText>
*/