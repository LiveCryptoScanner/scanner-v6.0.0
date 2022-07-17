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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBtc } from '@fortawesome/free-brands-svg-icons';
import StarRate from '@mui/icons-material/StarRate';
import { InsertLink } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { Info } from '@mui/icons-material';


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#0A131E",
    },
    avatar:{width:"60px",height:"60px", backgroundColor: "#ffffff",fontSize: "35px"},
    cardheader:{fontSize:"10px"},
    heading:{paddingBottom:"10px",borderBottom:"1px solid #fff", fontSize:"20px"},
    subheading:{paddingTop:"10px", fontSize:"16px"},
    media: {
      height: 300,
    },
    likecount: {
      position: "absolute",top: "-6px", left: "21px", zIndex: "21",background: "#90caf9",
      padding: "5px", borderRadius: "50%",fontSize: "12px",color:"#000", fontWeight:"600"
  }
  });

export default function Allprofile() {
    const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500],fontSize:"30px" }} aria-label="recipe"  className={classes.avatar}>
             <FontAwesomeIcon icon={faBtc} />
          </Avatar>
        }
        title="Mr. Andreson"
        subheader="@truecrypto28"
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h4" color="text.secondary" className={classes.heading}>
         Stretegy !
        </Typography>
        <Typography variant="h5" color="text.secondary"className={classes.subheading}>
         Moving Average Cross
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: "space-around"}}>
      <IconButton aria-label="rating">
            <InsertLink sx={{fontSize:"25px"}} />
        </IconButton>
        <IconButton aria-label="rating">
            <StarRate  sx={{fontSize:"25px"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  sx={{fontSize:"25px"}}/>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  sx={{fontSize:"25px"}}/>
          <div className={classes.likecount}>10</div>
        </IconButton>
      </CardActions>
      <CardActions sx={{justifyContent: "space-evenly",background: "#203144",padding:"5px", marginTop:"20px"}}>
          <Button sx={{fontSize:"13px",background: "#203144",width:"100%", borderRadius:"0px"}}><Info sx={{fontSize: "16px",marginRight: "6px"}}/> Details</Button>
          <Button sx={{fontSize:"13px",background: "#203144",borderLeft: "1px solid #fff",marginRight: "0px",width: "100%", 
          borderRadius:"0px"}}>Apply Scan</Button>
      </CardActions>
    </Card>
  );
}
