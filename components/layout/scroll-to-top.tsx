'use client'

import {useEffect, useState} from "react";
import {AnimatePresence, m} from "framer-motion";

export default function ScrollToTop() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    const scrollToTopVisible = scrollY > 400;

    return (
        <AnimatePresence>
            {scrollToTopVisible && (
                <m.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0}}
                    className={'fixed bottom-6 right-6 z-50'}
                >
                    <button
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        className={'p-2 rounded-full bg-primary text-accent-foreground shadow-md transition-all duration-300 hover:bg-accent-foreground hover:text-primary'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:h-7 sm:w-7" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M5 15l7-7 7 7"/>
                        </svg>
                    </button>
                </m.div>
            )}
        </AnimatePresence>
    )
}