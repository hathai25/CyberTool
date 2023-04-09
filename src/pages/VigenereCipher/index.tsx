import { Grid, TextField, Typography, Slider, Tabs, Tab } from "@mui/material"
import React, { useState } from "react"
import DecodeTab from "./Decode"
import EncodeTab from "./Encode"
import BreakTab from "./Break";

const VigenereCipher = () => {
    const [key, setKey] = useState<string>("");
    const [tab, setTab] = useState<number>(0)
    return (
        <Grid item xs={12}>
            <Typography  variant="h5" sx={{marginBottom: 4}}>
                This is the Vigenere Cipher encoder tool. Here you'll find a simple way to encode your text using the vigenere cipher.
            </Typography>
            <Tabs value={tab} onChange={(event: React.SyntheticEvent, newValue: number) => {
                setTab(newValue)
            }}>
                <Tab label="Encode"/>
                <Tab label="Decode"/>
                <Tab label="Break using Frequency Analysis"/>
            </Tabs>
            <EncodeTab tab={tab} encodeKey={key} setKey={setKey}/>
            <DecodeTab tab={tab} encodeKey={key} setKey={setKey}/>
            <BreakTab tab={tab}/>
        </Grid>
    )
}

export default VigenereCipher