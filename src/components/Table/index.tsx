import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ALPHABET} from "../../constants";
import {NextAlphabet} from "../../pages/VigenereCipher/Algorithm";

interface MUITableProps {
    alphabet?: string;
    encodeKey?: string;
}

export default function MUITable({alphabet = ALPHABET, encodeKey}: MUITableProps) {
    console.log(encodeKey);
    return (
        <TableContainer sx={{marginTop: 2}} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow hover>
                        <TableCell>Default Alphabet</TableCell>
                        {ALPHABET.split('').map((letter, index) => (
                            <TableCell sx={{textTransform: 'uppercase'}} align="right" key={index}>{letter}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!encodeKey ? (
                        <TableRow
                            hover
                            key={alphabet}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>Your Alphabet</TableCell>
                            {alphabet.split('').map((letter, index) => (
                                <TableCell sx={{textTransform: 'uppercase'}} align="right" key={index}>{letter}</TableCell>
                            ))}
                        </TableRow>
                    ) : (
                        encodeKey.split('').map((letter) =>
                            <TableRow
                                hover
                                key={letter}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{textTransform: 'uppercase'}} align="center">{letter}</TableCell>
                                {NextAlphabet(letter).split('').map((letter, index) => (
                                    <TableCell sx={{textTransform: 'uppercase'}} align="right" key={index}>{letter}</TableCell>
                                ))}
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}