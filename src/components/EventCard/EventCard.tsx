import classes from "./EventCard.module.scss";
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
  const { displaytitle } = page;

  const color = true ? "white" : "black";
  const getPageMedia = () => {
    function isMobileDevice() {
      return window.innerWidth <= 768;
    }
    const isMobile = isMobileDevice();
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (page.thumbnail?.source) {
        const pageUrl = isMobile
          ? page.content_urls.mobile.page
          : page.content_urls.desktop.page;
        return { thumbnail: page.thumbnail, pageUrl };
      }
    }
    return {};
  };
  const { thumbnail, pageUrl } = getPageMedia();

  const onClickHandler = () => {
    window.open(pageUrl);
  };

  return (
    <Card
      onClick={onClickHandler}
      className={classes.__card}
      sx={{
        width: 300,
        height: 400,
        display: "flex",
        flexDirection: "column",
        transition: "0.5s",
      }}
    >
      <CardMedia
        sx={{ position: "relative", height: 200 }}
        image={thumbnail?.source}
        title={displaytitle}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            padding: "1.5rem 0.5rem",
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
            padding: "0px 5px",
            borderRadius: "0 0 0 8px",
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
