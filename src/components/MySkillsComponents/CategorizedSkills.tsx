import { Box, Divider, Typography } from "@mui/material";
import { ReactElement } from "react";
import FontStyles from "../SharedComponents/FontStyles";

interface props {
    skillCategory: string,
    skills: string[]
}

const CategorizedSkills = ({ skillCategory, skills }: props) => {

    var key = 0;

    const skillsDisplay: ReactElement[] = [];

    skillsDisplay.push(
        <>
            <FontStyles></FontStyles>
            <Typography textAlign={"center"} fontWeight={600} fontSize={"20px"} fontFamily={"'Poppins', sans-serif"} color={"white"} key={key}>{skillCategory}</Typography>
        </>)

    for (const skill of skills) {
        key++;
        skillsDisplay.push(<Divider key={key}></Divider>);
        key++;
        skillsDisplay.push(
            <>
                <Typography textAlign={"center"} fontWeight={200} fontSize={"15px"} fontFamily={"'Poppins', sans-serif"} color={"white"} key={key}>{skill}</Typography>
            </>);
    }

    return (<>
        <Box padding={"5px"}
            sx={{
                backdropFilter: 'blur(10px)',
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.7)",
                borderRadius: "1em",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                marginLeft: '10px',
                marginRight: '10px',
                marginBottom: '10px',
            }}
        >
            <FontStyles ></FontStyles>
            {skillsDisplay}
        </Box>
    </>)
}

export default CategorizedSkills;