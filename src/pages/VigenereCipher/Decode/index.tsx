import {Typography, TextField} from "@mui/material";
import TabPanel from "../../../components/TabPanel";
import {Decode, Encode} from "../Algorithm";
import React, {useState} from "react";
import MUITable from "../../../components/Table";

interface DecodeTabProps {
    tab: number;
    encodeKey: string;
    setKey: (encodeKey: string) => void;
}

const DecodeTab = ({tab, encodeKey, setKey}: DecodeTabProps) => {
    const [text, setText] = useState<string>("");
    return (
        <TabPanel value={tab} index={1}>
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
                Then, you need to enter the text you want to decode below.
              </Typography>
              <TextField
                id="outlined-basic"
                label="Text to decode"
                variant="outlined"
                fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
              />
                {text.length > 0 && <Typography variant="subtitle1" sx={{marginBottom: 2, marginTop: 2}}>
                  Text decoded: <span style={{color: "#109CF1"}}>{Decode(text, encodeKey)}</span>
                </Typography>}
            </>}
        </TabPanel>
    )
}

export default DecodeTab