import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars(imagePath) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/images/eth.png"
        src={imagePath}
        sx={{ width: 24, height: 24 }}
      />
    </Stack>
  );
}
