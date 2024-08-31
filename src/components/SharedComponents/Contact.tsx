import { Box, Link, Stack } from "@mui/material"
import { forwardRef } from "react"

interface props {
    ref?: React.RefObject<HTMLDivElement>
}

const Contact = forwardRef<HTMLDivElement, props>((props, ref) => {
    return (<>
        <Stack ref={ref} direction={"row"} spacing={1} width={"fit-content"}>
            <Link
                href="https://github.com/Jake-Yeo/"
                target="_blank"
                rel="noopener noreferrer" // they said to add this for security
            >
                <img width="20px" height="20px" src={"/svgs/github.svg"}></img>
            </Link>
            <Link
                href="https://www.linkedin.com/in/jake-yeo/"
                target="_blank"
                rel="noopener noreferrer" // they said to add this for security
            >
                <img width="20px" height="20px" src={"/svgs/linkedin.svg"}></img>
            </Link>
            <Link
                href="https://www.instagram.com/jake._.yeo/"
                target="_blank"
                rel="noopener noreferrer" // they said to add this for security
            >
                <img width="20px" height="20px" src={"/svgs/instagram.svg"}></img>
            </Link>
            <Link
                href="mailto:jakeyeozh@gmail.com"
                target="_blank"
                rel="noopener noreferrer" // they said to add this for security
            >
                <img width="20px" height="20px" src={"/svgs/gmail.svg"}></img>
            </Link>
        </Stack>
    </>)
})

export default Contact