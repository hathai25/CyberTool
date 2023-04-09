import { Grid, TextField, Typography, Slider, Tabs, Tab } from "@mui/material"
import React, { useState } from "react"
import DecodeTab from "./Decode"
import EncodeTab from "./Encode"
import BreakTab from "./Break";

const MonoAlphabeticalSubstitutionCipher = () => {
    const [alphabet, setAlphabet] = useState<string>("")
    const [tab, setTab] = useState<number>(0)
    const [text, setText] = useState<string>("")
    return (
        <Grid item xs={12}>
            <Typography  variant="h5" sx={{marginBottom: 4}}>
                This is the Mono-alphabetical Substitution Cipher encoder tool. Here you'll find a simple way to encode your text using the mono-alphabetical substitution cipher.
            </Typography>
            <Tabs value={tab} onChange={(event: React.SyntheticEvent, newValue: number) => {
                setTab(newValue)
                setText('')
            }}>
                <Tab label="Encode"/>
                <Tab label="Decode"/>
                <Tab label="Break using Frequency Analysis"/>
            </Tabs>
            <EncodeTab tab={tab} text={text} setText={setText} alphabet={alphabet} setAlphabet={setAlphabet}/>
            <DecodeTab tab={tab} alphabet={alphabet} setAlphabet={setAlphabet}/>
            <BreakTab tab={tab}/>
        </Grid>
    )
}

export default MonoAlphabeticalSubstitutionCipher