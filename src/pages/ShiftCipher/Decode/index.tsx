import { Typography, TextField } from "@mui/material";
import TabPanel from "../../../components/TabPanel";
import { Decode } from "../Algorithm";

interface DecodeTabProps {
    tab: number;
    shift: number;
    text: string;
    setShift: (shift: number) => void;
    setText: (text: string) => void;
}

const DecodeTab = ({tab, shift, text, setShift, setText}: DecodeTabProps) => {
    return(
        <TabPanel value={tab} index={1}>
        <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                First, you need to choose the shift value. This value is the number of letters you want to shift.
            </Typography>
            <TextField 
                id="outlined-basic" 
                label="Shift value" 
                variant="outlined" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setShift(parseInt(e.target.value))}
            />
            {
                shift > 0 && (
                    <>
                        <Typography variant="subtitle1" sx={{marginTop: 4, marginBottom: 2}}>
                            Then, you need to enter the text you want to decode below.
                        </Typography>
                        <TextField 
                            id="outlined-basic" 
                            label="Text to encode" 
                            variant="outlined" 
                            fullWidth
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                        />
                    </>
                )

            }
            {
                text.length > 0 && (
                    <Typography variant="subtitle1" sx={{marginBottom: 2, marginTop: 2}}>
                        Text decoded: <span style={{color: "#109CF1"}}>{Decode(text, shift)}</span>
                    </Typography>
                )
            }
    </TabPanel>
    )
}

export default DecodeTab