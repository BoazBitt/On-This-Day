import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getOnThisDayEvents } from "../utilis/actions.api";
import EventCard from "../EventCard/EventCard";
import Grid from "@mui/material/Grid";

interface EventListProps {
  monthNumber: number;
  dayOfMonth: number;
}

const EventList = ({ monthNumber, dayOfMonth }: EventListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["On This Day", monthNumber, dayOfMonth],
    queryFn: () => getOnThisDayEvents(monthNumber, dayOfMonth),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Error!</div>;
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {data.selected.map((event) => (
            <Grid key={event.pages[0].pageid} item>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventList;
