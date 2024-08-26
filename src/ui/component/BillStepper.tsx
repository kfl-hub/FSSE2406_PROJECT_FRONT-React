import {Step, StepLabel, Stepper} from "@mui/material";
import Box from "@mui/material/Box";

type Props={
    index:number,
}

const steps = [
    'Check out Cart',
    'Creating Transaction',
    'Pay for Transaction',
    'Finish',
];

export default function BillStepper({index}:Props) {
    return (
        <Box sx={{ width: '100%', m:4}}>
            <Stepper activeStep={index} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}