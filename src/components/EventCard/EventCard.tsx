import React from "react";
import { EventData } from "../utilis/response.interface";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  const { text, year, pages } = event;
  const page = pages[0];
  const { displaytitle, thumbnail } = page;
  const color = true ? "white" : "black";
  return (
    <Card
      sx={{ width: 300, height: 400, display: "flex", flexDirection: "column" }}
    >
      <CardMedia
        sx={{ position: "relative", height: 200 }}
        image={thumbnail.source}
        title={displaytitle}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            padding: "1rem",
            color: { color },
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
          dangerouslySetInnerHTML={{
            __html: displaytitle,
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: { color },
            backgroundColor: "#FFA500",
          }}
        >
          {year}
        </Typography>
      </CardMedia>
      <CardContent sx={{ padding: "7px", flex: 1 }}>{text}</CardContent>
      <CardActions>
        <Button sx={{ marginLeft: "auto" }} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
