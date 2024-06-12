import { Box, Typography } from "@mui/material"
import Stack from '@mui/material/Stack';

import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import StyledTypography from './StyledTypography';

export default function Navbar() {
  return (
    <>

     <Box component="section" sx={{ p: 2, border: '1px solid #f5f4fe' ,backgroundColor:"#f5f4fe", borderRadius:3,boxShadow:1}} >

      <Stack direction="row" spacing={10}  divider={<Divider orientation="vertical" color="#6229ae" flexItem />} alignContent={"center"} justifyContent={"center"}>
      <StyledTypography>HOME</StyledTypography>
        <StyledTypography>ABOUT</StyledTypography>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <StyledTypography>LOG IN</StyledTypography>
        </Link>

      </Stack>
    </Box>
  

    </>
  )
}
