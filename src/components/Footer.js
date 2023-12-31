import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} px="40px" pt="40px">
        <img src={Logo} alt="logo" width="300px" height="100px" />
        <Typography pb="10px" variant="h5">
          Made By Eduardo Melo
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
