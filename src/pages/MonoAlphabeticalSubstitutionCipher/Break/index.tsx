import {Typography, TextField} from "@mui/material";
import TabPanel from "../../../components/TabPanel";
import {frequencyAnalysis} from "../Algorithm";
import React, {useState} from "react";

interface BreakTabProps {
    tab: number;
}

const BreakTab = ({tab}: BreakTabProps) => {
    const [text, setText] = useState<string>("");
    return (
        <TabPanel value={tab} index={2}>
            <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                Enter the text that you want to break here
            </Typography>
            <TextField
                id="outlined-basic"
                label="Your encoded text"
                variant="outlined"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
            {text.length > 0 && (
                <Typography variant="subtitle1" sx={{marginBottom: 2, marginTop: 2}}>
                    Text decoded: <span style={{color: "#109CF1"}}>{frequencyAnalysis(text)}</span>
                </Typography>
            )}
        </TabPanel>
    )
}

export default BreakTab