import { Button, Stack } from "@mui/material";
import Logo from "./Logo";
import CustomButton from "./CustomButton";

const Header = () => {

// 400px is the minimum width before the buttons look weird

    return (<>
        <Stack
            spacing={1}
            alignItems={"center"}
            sx={{
                height: "40px",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
            }} direction={"row"}>
            <Logo padding={"10px"} height={30}></Logo>
            <CustomButton text={"About Me"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
            <CustomButton text={"My Skills"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
            <CustomButton text={"My Projects"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
            <CustomButton text={"Contact Me"} fontSize="10px" minWidth="0px" width="90px" height="20px" boxShadow="none"></CustomButton>
        </Stack >
    </>);
}

export default Header