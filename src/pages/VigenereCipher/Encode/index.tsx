import {Typography, TextField, Button} from "@mui/material";
import TabPanel from "../../../components/TabPanel";
import {Encode} from "../Algorithm";
import React, {useState} from "react";
import MUITable from "../../../components/Table";

interface EncodeTabProps {
    tab: number;
    encodeKey: string;
    setKey: (key: string) => void;
}

const EncodeTab = ({tab, encodeKey, setKey}: EncodeTabProps) => {
    const [text, setText] = useState<string>("");
    return(
        <TabPanel value={tab} index={0}>
            <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                First, you need to define your key.
            </Typography>
            <TextField
                id="outlined-basic"
                label="Your key"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKey(e.target.value)}
            />
            {encodeKey && <>
                <MUITable encodeKey={encodeKey}/>
                <Typography variant="subtitle1" sx={{marginTop: 4, marginBottom: 2}}>
                    Then, you need to enter the text you want to encode below.
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Text to encode"
                    variant="outlined"
                    fullWidth
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                />
                {text.length > 0 && <Typography variant="subtitle1" sx={{marginBottom: 2, marginTop: 2}}>
                    Text encoded: <span style={{color: "#109CF1"}}>{Encode(text, encodeKey)}</span>
                </Typography>}
            </>}
        </TabPanel>
    )
}

export default EncodeTab