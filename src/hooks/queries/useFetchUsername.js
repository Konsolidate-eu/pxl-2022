import { useQuery } from "@tanstack/react-query";
import { fetchUsername } from "../../service/solidService";

const useFetchUsername = () => {
  return useQuery(["username"], fetchUsername, { retry: 0 });
};

export default useFetchUsername;
