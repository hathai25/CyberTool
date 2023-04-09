import {Typography, TextField} from "@mui/material";
import TabPanel from "../../../components/TabPanel";
import {Decode} from "../Algorithm";
import React, {useState} from "react";
import MUITable from "../../../components/Table";

interface DecodeTabProps {
    tab: number;
    alphabet: string;
    setAlphabet: (alphabet: string) => void;
}

const DecodeTab = ({tab, alphabet, setAlphabet}: DecodeTabProps) => {
    const [text, setText] = useState<string>("");
    return (
        <TabPanel value={tab} index={1}>
            <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                First, you need to paste the pre-defined alphabet here.
            </Typography>
            <TextField
                id="outlined-basic"
                label="Your alphabet"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAlphabet(e.target.value.replace(/\s/g, ""))}
            />
            {alphabet.length > 0 && <>
                <MUITable alphabet={alphabet.replace(/\s/g, "")}/>
                <Typography variant="subtitle1" sx={{marginBottom: 2, marginTop: 2}}>
                    Next, you need to enter the text you want to decode below.
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Encoded text"
                    variant="outlined"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                />
                {text.length > 0 && <Typography variant="subtitle1" sx={{marginBottom: 2, marginTop: 2}}>
                    Text decoded: <span style={{color: "#109CF1"}}>{Decode(text, alphabet)}</span>
                </Typography>}
            </>}
        </TabPanel>
    )
}

export default DecodeTab