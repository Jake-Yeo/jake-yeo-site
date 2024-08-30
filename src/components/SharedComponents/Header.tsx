import { Box, Button, Stack } from "@mui/material";
import Logo from "./Logo";
import CustomButton from "./CustomButton";

const Header = () => {

    // 464px is the minimum width before the buttons look weird

    return (<>
        <Stack
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
            <Stack
                spacing={1}
                alignItems={"center"}
                direction={"row"}>
                <CustomButton text={"About Me"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
                <CustomButton text={"My Skills"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
                <CustomButton text={"My Projects"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
            </Stack>

                <CustomButton text={"Contact"} fontSize="10px" minWidth="0px" width="52.88px" height="20px" boxShadow="none" backgroundColor="black" marginRight="10px"></CustomButton>
         
        </Stack >
    </>);
}

export default Header