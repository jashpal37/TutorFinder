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
      <Row>
        {
          data.map((detail) => {
            return (
              <Card
                sx={{ maxWidth: 350, maxHeight: 350, border: 1, margin: 5,}}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title={detail.tutorName}
                  sx={{ border: 1 }}
                />
                <CardContent>
                  <Typography>{detail.subjectCode}</Typography>
                  <Typography letterSpacing={2}>
                    <MailOutlined />
                    {detail.tutorEmail}
                  </Typography>
                  <Typography letterSpacing={2}>
                    <ChromeReaderMode />
                    {detail.subjectName}
                  </Typography>
                  <Typography>Description:</Typography>
                  <Typography paragraph>
                    {detail.subjectDescription}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        }
      </Row>
    </>
  );
}

export default TutorCard;
