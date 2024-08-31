import { Box, Button, Stack } from "@mui/material";
import Logo from "./Logo";
import CustomButton from "./CustomButton";

interface props {
    aboutRef: React.RefObject<HTMLDivElement>,
    skillsRef: React.RefObject<HTMLDivElement>,
    projectsRef: React.RefObject<HTMLDivElement>,
    contactRef: React.RefObject<HTMLDivElement>
}

const Header = ({ aboutRef, skillsRef, projectsRef, contactRef }: props) => {

    // 427px is the minimum width before the buttons look weird

    function scrollTo(ref: React.RefObject<HTMLDivElement>) {
        if (ref.current) {
            const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - 40; // Adjust for 20px from the top

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    }

    const windowsFormat = <>
        <Stack
            spacing={1}
            alignItems={"center"}
            direction={"row"}>
            <CustomButton onClick={() => {
                scrollTo(aboutRef);
            }} text={"About Me"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
            <CustomButton onClick={() => {
                scrollTo(skillsRef);
            }} text={"My Skills"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
            <CustomButton onClick={() => {
                scrollTo(projectsRef);
            }} text={"My Projects"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
        </Stack>
        <CustomButton onClick={() => {
            scrollTo(contactRef);
        }} text={"Contact"} fontSize="10px" minWidth="0px" width="52.88px" height="20px" boxShadow="none" backgroundColor="black" marginRight="10px"></CustomButton>
    </>



    return (<>
        <Stack
            zIndex={1}
            spacing={1}
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            sx={{
                height: "40px",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
            }}>
            <Logo padding={"10px"} height={30}></Logo>
            {windowsFormat}
        </Stack >
    </>);
}

export default Header