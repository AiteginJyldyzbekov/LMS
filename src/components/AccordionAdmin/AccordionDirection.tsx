import * as React from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface props {
    title: string;
    text: string;
}

const AccordionDirection: React.FC<props> = ({ title, text }) => {
    return (
        <Accordion sx={{margin:'10px 0'}}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionDirection;
