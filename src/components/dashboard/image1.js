import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import img1 from '/public/images/Bg.png';

export default function ImageCard() {
  return (
    <Card sx={{ p: 0, margin: "0rem 0rem 0.5rem 0rem" }}>
      <CardMedia
        component="img"
        image="/images/Bg.png"
        height="70"
        alt=""
        sx={{ p: 0, m: 0 }}
      />
    </Card>
  );
}
