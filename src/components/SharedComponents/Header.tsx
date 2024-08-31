import { Box, Button, Drawer, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import Logo from "./Logo";
import CustomButton from "./CustomButton";
import React, { useEffect, useState } from "react";
import FontStyles from "./FontStyles";

interface props {
    aboutRef: React.RefObject<HTMLDivElement>,
    skillsRef: React.RefObject<HTMLDivElement>,
    projectsRef: React.RefObject<HTMLDivElement>,
    contactRef: React.RefObject<HTMLDivElement>,
    scrollBoxRef: React.RefObject<HTMLDivElement>,
}

const Header = ({ aboutRef, skillsRef, projectsRef, contactRef, scrollBoxRef }: props) => {

    // 430px is the minimum width before the buttons look weird

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener to update width on window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    function getDrawerItem(text: string, onClick: () => void) {
        return (
            <ListItem disablePadding>
                <ListItemButton onClick={onClick}>
                    <FontStyles></FontStyles>
                    <Typography textAlign={"center"} fontWeight={200} fontSize={"10px"} fontFamily={"'Poppins', sans-serif"} color={"white"}>
                        {text}
                    </Typography>
                </ListItemButton>
            </ListItem>)
    }

    const DrawerList =
        <>
            <Box sx={{ width: 100 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    {getDrawerItem("About Me", () => { scrollTo(aboutRef) })}
                    {getDrawerItem("My Skills", () => { scrollTo(skillsRef) })}
                    {getDrawerItem("My Projects", () => { scrollTo(projectsRef) })}
                    {getDrawerItem("Contact", () => { scrollTo(contactRef) })}
                </List>
            </Box>
        </>

    function scrollTo(ref: React.RefObject<HTMLDivElement>) {
        if (ref.current && scrollBoxRef.current) {
            const boxTop = scrollBoxRef.current.getBoundingClientRect().top;
            const elementTop = ref.current.getBoundingClientRect().top;

            // Calculate the element's position relative to the scrollBoxRef
            const offsetPosition = elementTop - boxTop - 40; // Adjust for offset (40px)

            scrollBoxRef.current.scrollTo({
                top: scrollBoxRef.current.scrollTop + offsetPosition,
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
            <Drawer anchor="right" sx={{
                "& .MuiPaper-root": {
                    backgroundColor: "#686868", // Set the background color of the Drawer
                }
            }} open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            {windowWidth < 430
                ?
                <CustomButton onClick={toggleDrawer(true)} text={"Menu"} fontSize="10px" minWidth="0px" width="52.88px" height="20px" boxShadow="none" backgroundColor="black" marginRight="10px"></CustomButton>
                :
                windowsFormat
            }
        </Stack >
    </>);
}

export default Header