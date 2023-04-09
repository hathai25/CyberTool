import {Typography, TextField, Button} from "@mui/material";
import TabPanel from "../../../components/TabPanel";
import {Encode, RandomizeAlphabet} from "../Algorithm";
import {useState} from "react";
import MUITable from "../../../components/Table";

interface EncodeTabProps {
    tab: number;
    text: string;
    setText: (text: string) => void;
    alphabet: string;
    setAlphabet: (alphabet: string) => void;
}

const EncodeTab = ({tab, text, setText, alphabet, setAlphabet}: EncodeTabProps) => {
    const [isRandom, setIsRandom] = useState<Boolean>(false);
    return(
        <TabPanel value={tab} index={0}>
            <Typography variant="subtitle1" sx={{marginBottom: 2}}>
                First, you need to define your alphabet. Click <i>Generate alphabet</i> to generate one.
            </Typography>
            <Button variant="contained" onClick={() => {
                setIsRandom(true)
                setAlphabet(RandomizeAlphabet())
            }}>Generate alphabet</Button>
            {isRandom && <MUITable alphabet={alphabet}/>}
            {
                alphabet && (
                    <>
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
                    </>
                )

            }
            {
                text.length > 0 && (
                    <Typography variant="subtitle1" sx={{marginBottom: 2, marginTop: 2}}>
                        Text encoded: <span style={{color: "#109CF1"}}>{Encode(text, alphabet)}</span>
                    </Typography>
                )
            }
        </TabPanel>
    )
}

export default EncodeTab