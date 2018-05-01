import React from 'react';
import { Spring } from 'react-spring';

const Fade = (fadeIn = true) => ({children}) => (
    <Spring 
        from={{opacity: fadeIn ? 0 : 1}}
        to={{opacity: fadeIn ? 1 : 0}}
    >
    {children}
    </Spring>
);

const FadeText = (fadeIn = true) => ({children}) => (
    <Spring
        from={{color: fadeIn ? '#999' : '#000'}}
        to={{color: fadeIn ? '#000' : '#999'}}
    >
        {children}
    </Spring>
)

export const FadeIn = Fade();
export const FadeOut = Fade(false);

export const Darken = FadeText();
export const Lighten = FadeText(false);