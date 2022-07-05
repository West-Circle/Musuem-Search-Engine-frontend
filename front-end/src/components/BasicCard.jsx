import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
const cardStyles = {
    width: '1000px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '8px',
};
const BasicCard = ({ header, content }) => {
    
    return (
        <Card sx={cardStyles}>
            {header}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
};

export default BasicCard;