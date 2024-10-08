
import { Box, css, keyframes } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

interface ShootingStarsProps {
    headWidthPx: number,
    animationDuratonSecs: number,
    xyDistTravelVh: number,
    topOffsetVh: number,
    leftOffsetVw: number
}

const globalStyleId: string = uuidv4();

const ShootingStarsAnimation = ({ headWidthPx, animationDuratonSecs, xyDistTravelVh, topOffsetVh, leftOffsetVw }: ShootingStarsProps) => {

    const uuid = uuidv4();

    const starHeadCssWidth = headWidthPx;
    const starTailCssHeight = starHeadCssWidth * (4 / 30);
    const starHeadCssHeight = starHeadCssWidth * (4 / 30);
    const starHeadCssTransform = starHeadCssWidth * (84 / 30);
    const starTailCssWidth = starHeadCssWidth * (100 / 30);
    const headWidthAnimeAspect = starHeadCssWidth;
    const headTranslateAnimeAspect = starHeadCssWidth * (84 / 30);
    const tailWidthAnimeAspect = starHeadCssWidth * (100 / 30);

    const starTranslateAnimeAspect = xyDistTravelVh; // does not need to be part of the aspect ratio
    const animationTime = animationDuratonSecs;

    var headNegAnimation = keyframes`
        0% {
            transform: translate(0px) rotate(45deg);
            width: 0px;
            
        }
    
        30% {
            transform: translate(${headTranslateAnimeAspect}px) rotate(45deg);
            width: ${headWidthAnimeAspect}px;
        }

        40% {
            filter: drop-shadow(0 0 2px white);
        }

        60% {
            filter: drop-shadow(0 0 13px white);
        }

        70% {
            filter: drop-shadow(0 0 6px white);
        }

        80% {
            filter: drop-shadow(0 0 3px white);
        }
    
        100% {
            transform: translate(0px) rotate(45deg);
            width: 0px;
            filter: drop-shadow(0 0 20px white);
        }

        id: ${uuid}

        globalId: ${globalStyleId}
        `;

    var headPosAnimation = keyframes`
        0% {
            transform: translate(0px) rotate(-45deg);
            width: 0px;
        }
    
        30% {
            transform: translate(${headTranslateAnimeAspect}px) rotate(-45deg);
            width: ${headWidthAnimeAspect}px;
        }

        40% {
            filter: drop-shadow(0 0 2px white);
        }

        60% {
            filter: drop-shadow(0 0 13px white);
        }

        70% {
            filter: drop-shadow(0 0 6px white);
        }

        80% {
            filter: drop-shadow(0 0 3px white);
        }
    
        100% {
            transform: translate(0px) rotate(-45deg);
            width: 0px;
            filter: drop-shadow(0 0 20px white);
        }

        id: ${uuid}

        globalId: ${globalStyleId}
        `;

    var tailAnimation = keyframes`
        0% {
            width: 0px;
        }
    
        30% {
            width: ${tailWidthAnimeAspect}px;
        }

        40% {
            filter: drop-shadow(0 0 2px white);
        }

        60% {
            filter: drop-shadow(0 0 13px white);
        }

        70% {
            filter: drop-shadow(0 0 6px white);
        }

        80% {
            filter: drop-shadow(0 0 3px white);
        }
    
        100% {
            width: 0px;
            filter: drop-shadow(0 0 20px white);
        }

        id: ${uuid}

        globalId: ${globalStyleId}
      `;

    var starAnimation = keyframes`
      0% {
        transform: translateX(0vh) translateY(0vh) rotate(45deg);
      }
      100% {
        transform: translateX(${starTranslateAnimeAspect}vh) translateY(${starTranslateAnimeAspect}vh) rotate(45deg);
      }

      id: ${uuid}

      globalId: ${globalStyleId}
      `

    const starHeadNegCss = {
        globalId: globalStyleId,
        id: uuid,
        position: 'absolute',
        width: `${starHeadCssWidth}px`,
        height: `${starHeadCssHeight}px`,
        background: 'linear-gradient(-45deg, rgba(0, 0, 255, 0), white, rgba(0, 0, 255, 0))',
        borderRadius: '100px',
        transform: `translate(${starHeadCssTransform}px) rotate(45deg)`,
        filter: 'drop-shadow(0 0 6px white)',
        zIndex: -10,
        animation: `${headNegAnimation} ${animationTime}s ease-in-out infinite`
    }

    const starHeadPosCss = {
        globalId: globalStyleId,
        id: uuid,
        position: 'absolute',
        width: `${starHeadCssWidth}px`,
        height: `${starHeadCssHeight}px`,
        background: 'linear-gradient(-45deg, rgba(0, 0, 255, 0), white, rgba(0, 0, 255, 0))',
        borderRadius: '100px',
        transform: `translate(${starHeadCssTransform}px) rotate(-45deg)`,
        filter: 'drop-shadow(0 0 6px white)',
        zIndex: -10,
        animation: `${headPosAnimation} ${animationTime}s ease-in-out infinite`
    }

    const starTailCss = {
        globalId: globalStyleId,
        id: uuid,
        position: 'absolute',
        width: `${starTailCssWidth}px`,
        height: `${starTailCssHeight}px`,
        background: 'linear-gradient(-45deg, white, rgba(0, 0, 255, 0))',
        borderRadius: '100px',
        filter: 'drop-shadow(0 0 6px white)',
        zIndex: -10,
        animation: `${tailAnimation} ${animationTime}s ease-in-out infinite`
    }

    // Timer to remove element from dom after animation finishes

    const toDelete = useRef<HTMLElement>(null);

    const purgeStyles = () => {
        var styleTags = document.querySelectorAll('style[data-emotion="css"]');
        var styleTagsArray = Array.from(styleTags);
        var numTagsFound = 0;

        for (var i = styleTagsArray.length - 1; i >= 0; i--) {
            var styleTag = styleTags[i];

            if (styleTag.innerHTML.includes(uuid)) {
                numTagsFound++;
               // console.log(`${uuid} removing:", styleTag`);
                styleTag.remove();
            }
            // If both "animationId" and "cssId" are found, break out of the loop
            if (numTagsFound == 12) { // this number is based on me manuallly checking how many style elements are created per shooting star in the dom. (I originally thought it was 8!)
                break;
            }
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {

            purgeStyles(); // delete all styles associated with this animation when it finishes
            toDelete.current?.remove();
        }, (animationDuratonSecs * 1000));

        return () => {

          //  toDelete.current?.remove();

            clearTimeout(timer); // Clear the timer if the component unmounts before 5 seconds
        };
    }, [])

    return (
        <Box
            ref={toDelete}
            sx={{
                globalId: globalStyleId,
                id: uuid,
                top: `${topOffsetVh}%`,
                left: `${leftOffsetVw}%`,
                position: 'absolute',
                animation: `${starAnimation} ${animationTime}s ease-in-out infinite`,
                zIndex: -10,
            }}
        >
            <Box sx={starTailCss} /> {/** NEED REFS TO THIS TOO TO DELETE STYLE */}
            <Box sx={starHeadPosCss} /> {/** NEED REFS TO THIS TOO TO DELETE STYLE */}
            <Box sx={starHeadNegCss} /> {/** NEED REFS TO THIS TOO TO DELETE STYLE */}
        </Box>
    )
}

export default ShootingStarsAnimation;
