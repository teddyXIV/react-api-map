import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: { xs: 300, lg: 350 },
            mx: 'auto',
            mb: 6,
            display: 'block'
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    di{bull}nuhr
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    noun
                </Typography>
                <Typography variant="body2">
                    meal had after lunch and before bed
                    <br />
                    {'"Who is cookin what for dinner?"'}
                </Typography>
            </CardContent>
        </Card>
    );
}