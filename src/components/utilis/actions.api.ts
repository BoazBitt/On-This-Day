import axios from "axios";
import { EventData } from "./response.interface";

type EVENT_TYPE = "selected" | "births" | "deaths" | "events" | "holidays";
const REQUEST_TYPE: EVENT_TYPE = "selected";

const API_BASE_URL = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/${REQUEST_TYPE}`;
const HEADERS = {
  "Content-Type": "application/json",
};
type ResponseType = {
  [key in EVENT_TYPE]: EventData[];
};
export const getOnThisDayEvents = async (
  monthNumber: number,
  dayOfMonth?: number
): Promise<ResponseType> => {
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/${monthNumber}/${dayOfMonth}`,
      {
        headers: { ...HEADERS },
      }
    );

    return data;
  } catch (error: any) {
    throw error;
  }
};
