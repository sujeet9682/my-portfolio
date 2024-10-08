import React from 'react'
import { useState,useEffect } from 'react';
import { quotes } from '../constants/quotes';


const Quotes = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isErasing, setIsErasing] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const quote = quotes[quoteIndex];
        let timeoutId;

        if (isErasing) {
            if (charIndex > 0) {
                timeoutId = window.setTimeout(() => {
                    setDisplayedText((text) => text.slice(0, -1));
                    setCharIndex((index) => index - 1);
                }, 50);
            } else {
                setIsErasing(false);
                setQuoteIndex((index) => (index + 1) % quotes.length);
            }
        } else {
            if (charIndex < quote.length) {
                // Type character
                timeoutId = window.setTimeout(() => {
                    setDisplayedText((text) => text + quote[charIndex]);
                    setCharIndex((index) => index + 1);
                }, 100);
            } else {
                timeoutId = window.setTimeout(() => setIsErasing(true), 2000);
            }
        }

        return () => window.clearTimeout(timeoutId);
    }, [quoteIndex, charIndex, isErasing]);


    return (
        <div>
            <p className="text-primary text-[20px] h-[24px]">{displayedText}<span className='text-yellow-200'>|</span></p>
        </div>
    )
}

export default Quotes
