import { useQuery } from "@tanstack/react-query";
import { fetchCourse } from "../../service/solidService";

const useFetchCourse = () => {
  return useQuery(["course"], fetchCourse, { retry: 0 });
};

export default useFetchCourse;
