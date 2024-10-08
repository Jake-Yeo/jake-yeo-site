import { Box, Button } from "@mui/material"
import FontStyles from "./FontStyles"

interface props {
    text: string,
    content?: string,
    height?: string,
    fontSize?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    width?: string,
    minWidth?: string,
    margin?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
    borderTopRightRadius?: string,
    borderTopLeftRadius?: string,
    borderBottomRightRadius?: string,
    borderBottomLeftRadius?: string,
    padding?: string,
    boxShadow?: string,
    rotate?: string,
    backgroundColor?: string,
}

//https://stackoverflow.com/questions/32805670/what-does-before-and-after-do-in-css very useful for me when I made this button
const CustomButton = ({
    text,
    backgroundColor = "transparent",
    content,
    fontSize = "14px",
    onClick = () => { },
    width = '50%',
    minWidth = "100px",
    margin = "10px", // This does not work since margin Top, bottom, left, right all overide it!
    marginTop = "0px",
    marginBottom = "0px",
    marginRight = "0px",
    marginLeft = "0px",
    borderTopRightRadius = "5em",
    borderTopLeftRadius = "5em",
    borderBottomRightRadius = "5em",
    borderBottomLeftRadius = "5em",
    padding = "10px",
    height = "auto",
    boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.7)",
    rotate = 'rotate(0deg)'
}: props) => {

    return (<>

        <Box> {/** If button is not wrapped in a box then margin will literally not work */}
            <FontStyles />
            <Button

                sx={{
                    fontWeight: 200,
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: 'none',
                    fontSize: fontSize,
                    borderTopRightRadius: borderTopRightRadius,
                    borderTopLeftRadius: borderTopLeftRadius,
                    borderBottomRightRadius: borderBottomRightRadius,
                    borderBottomLeftRadius: borderBottomLeftRadius,
                    transition: 'background-color 0.6s ease', // Transition for background color
                    backgroundColor: backgroundColor,
                    boxShadow: boxShadow,
                    overflow: 'hidden',
                    height: height,
                    color: 'white',
                    width: width,
                    minWidth: minWidth,
                    padding: padding,
                    margin: margin,
                    marginTop: marginTop,
                    marginBottom: marginBottom,
                    marginLeft: marginLeft,
                    marginRight: marginRight,
                    '&:hover': {
                        //  backgroundColor: 'rgba(144, 52, 135, 0.5)', // Semi-transparent background color
                        backgroundColor: '#686868', // Semi-transparent background color
                        transition: 'background-color 0.6s ease', // Transition for background color
                    },
                    '&:hover .MuiTouchRipple-root': {
                        color: 'White', // Change the ripple in color when clicked
                    },
                    '& .MuiTouchRipple-root': {
                        color: 'White', // Change fade-out ripple color
                    },
                }}
                onClick={onClick}>
                {content ?
                    <Box sx={{
                        transform: rotate,
                        backgroundImage: content,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        width: '100%', // Adjust to match your design
                        height: '100%', // Adjust to match your design
                    }}>

                    </Box>
                    : text}
                {/** Here we put invisible text identical to the text in content, this is because text here will actually resize the button when the words wrap around, whereas for the text in the ::after context, it will not tell the button to expand vertically to allocate space to show its content*/}
            </Button>
        </Box>
    </>)
}

export default CustomButton