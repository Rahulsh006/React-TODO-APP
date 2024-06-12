import React from 'react';
import { Typography } from '@mui/material';

const StyledTypography = ({ children, ...props }) => {
  return (
    <Typography
      color="#6229ae"
      sx={{
        cursor: 'pointer',
        '&:hover': {
          color: '#51238f',
        },
      
      }}
      {...props} // Spread other props
    >
      {children}
    </Typography>
  );
};

export default StyledTypography;
