import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
  
} from "@mui/material";
import { MailOutlined, ChromeReaderMode } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import React from "react";
import data from '../data/CourseData';
import { Row } from "react-bootstrap";

function TutorCard() {
  return (
    <>
      <Card sx={{ maxWidth: 350, maxHeight: 350,border:1,margin:5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Rahul"
          sx={{border:1}}
        />
        <CardContent>
          <Typography>Code</Typography>
          <Typography letterSpacing={2}>
            <MailOutlined />
            rahul12@gmail.com
          </Typography>
          <Typography letterSpacing={2}>
            <ChromeReaderMode />
            Subject Name
          </Typography>
          <Typography>Description:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            dolore itaque, eius libero atque voluptatibus minus. Impedit aut
            consectetur libero hic ratione recusandae distinctio sed ut omnis.
            Nam, delectus ipsum?
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default TutorCard;
