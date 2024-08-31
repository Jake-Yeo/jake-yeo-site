import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ShootingStarsAnimation from "./ShootingStarsAnimation";

interface Props {
    shootingStarInterval?: number
}

 const getRandomNumber = (minRand: number, maxRand: number): number => {
    const range = maxRand - minRand + 1; // Add 1 to include the upper limit

    return Math.floor(Math.random() * range) + minRand;
};

 const getRandomShootingStar = (): JSX.Element => {

    const topOffset = getRandomNumber(-20, 90);
    const leftOffset = getRandomNumber(-30, 95);
    const randomDuration = getRandomNumber(2, 4);

    const randomXyDistTravelVh = getRandomNumber(40, 80); // might get rid of this (original value: 50)

    const randomHeadWidthPx = getRandomNumber(15, 30);


    return (<ShootingStarsAnimation headWidthPx={randomHeadWidthPx} animationDuratonSecs={randomDuration} xyDistTravelVh={randomXyDistTravelVh} topOffsetVh={topOffset} leftOffsetVw={leftOffset} />);
}

const MeteorShowerAnimation = ({shootingStarInterval = 300}: Props) => { // sets the default value to 300

    const [starArray, setStarArray] = useState<JSX.Element[]>([]);

    const getMeteorShower = () => {
        return (<>
            <Box sx={{
                position: 'absolute', // means that it will stay put in its parents component
                width: '100%', // alter if don't work
                height: '100%', // alter if don't work
            }}>
                {starArray}
            </Box>
        </>)
    }

    useEffect(() => {
        setTimeout(() => {
            setStarArray([...starArray, getRandomShootingStar()]);
        }, shootingStarInterval)
    }, [starArray]);

    return (<>
        <Grid item sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
            margin: 0, // Set margin to 0 to remove any default spacing
            padding: 0, // Set padding to 0 to remove any default padding
        }}>{getMeteorShower()}</Grid>
    </>)
}

export default MeteorShowerAnimation