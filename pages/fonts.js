import * as React from 'react';
import Box from '@mui/material/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faBtc } from '@fortawesome/free-brands-svg-icons'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp'

export default function FontAwesomeIcons() {
  return (
    <Box>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faThumbsUp} />
      <FontAwesomeIcon icon={faCoffee} size="4x" color="'blue'" />
      <FontAwesomeIcon icon={faBtc} size="4x" color="'blue'" />
      <FontAwesomeIcon icon={faCoffee} color="secondary" />

      <br /> <hr />

      <ArrowDownwardOutlinedIcon fontSize="large" />
      <ArrowDownwardIcon fontSize="large" />
      <ArrowRightAltSharpIcon fontSize="large" sx={{rotate: '90deg'}} />

    </Box>
  );
}


// <FontAwesomeIcon icon="fa-brands fa-btc" color="primary" size="4x" />
// <FontAwesomeIcon icon="fab fa-btc" size="4x" />
