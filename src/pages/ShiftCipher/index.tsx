import { Grid, TextField, Typography, Slider, Tabs, Tab } from "@mui/material"
import { useState } from "react"
import DecodeTab from "./Decode"
import EncodeTab from "./Encode"

const ShiftCipher = () => {
    const [tab, setTab] = useState(0)
    const [shift, setShift] = useState(0)
    const [text, setText] = useState("")
    return (
        <Grid item xs={12}>
            <Typography  variant="h5" sx={{marginBottom: 4}}>
                This is the Shift Cipher encoder tool. Here you'll find a simple way to encode your text using the shift cipher.
            </Typography>
            <Tabs value={tab} onChange={(event: React.SyntheticEvent, newValue: number) => {
                    setTab(newValue)
                    setText('')
                    setShift(0)
                }}>
                <Tab label="Encode"/>
                <Tab label="Decode"/>
            </Tabs>
            <EncodeTab tab={tab} shift={shift} text={text} setShift={setShift} setText={setText}/>
            <DecodeTab tab={tab} shift={shift} text={text} setShift={setShift} setText={setText}/>
        </Grid>
    )
}

export default ShiftCipher