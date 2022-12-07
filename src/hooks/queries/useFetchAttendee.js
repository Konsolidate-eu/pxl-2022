import { useQuery } from "@tanstack/react-query";
import { fetchAttendee } from "../../service/solidService";

const useFetchAttendee = () => {
  return useQuery(["attendee"], fetchAttendee, { retry: 0 });
};

export default useFetchAttendee;
