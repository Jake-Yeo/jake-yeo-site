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
                    <Typography textAlign={"center"} fontWeight={200} fontSize={"20px"} fontFamily={"'Poppins', sans-serif"} color={"white"}>
                        {text}
                    </Typography>
                </ListItemButton>
            </ListItem>)
    }

    const DrawerList =
        <>
            <Box sx={{ width: 150 }} role="presentation" onClick={toggleDrawer(false)}>
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
            const offsetPosition = elementTop - boxTop - 80; // Adjust for offset (40px)

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
            }} text={"About Me"} fontSize="20px" minWidth="0px" width="150px" height="35px" boxShadow="none"></CustomButton>
            <CustomButton onClick={() => {
                scrollTo(skillsRef);
            }} text={"My Skills"} fontSize="20px" minWidth="0px" width="150px" height="35px" boxShadow="none"></CustomButton>
            <CustomButton onClick={() => {
                scrollTo(projectsRef);
            }} text={"My Projects"} fontSize="20px" minWidth="0px" width="150px" height="35px" boxShadow="none"></CustomButton>
        </Stack>
        <CustomButton onClick={() => {
            scrollTo(contactRef);
        }} text={"Contact"} marginRight="30px" fontSize="20px" minWidth="0px" width="150px" height="35px" boxShadow="none" backgroundColor="black"></CustomButton>
    </>



    return (<>
        <Stack
            zIndex={1}
            spacing={1}
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
            sx={{
                height: "80px",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
            }}>
            <Box width="180px" paddingLeft={"10px"}>
                <Logo padding={"10px"} height={60}></Logo>
            </Box>
            <Drawer anchor="right" sx={{
                "& .MuiPaper-root": {
                    backgroundColor: "#686868", // Set the background color of the Drawer
                }
            }} open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            {windowWidth < 800
                ?
                <CustomButton onClick={toggleDrawer(true)} text={"Menu"} fontSize="20px" minWidth="0px" width="100px" height="35px" boxShadow="none" backgroundColor="black" marginRight="20px"></CustomButton>
                :
                windowsFormat
            }
        </Stack >
    </>);
}

export default Header