import useFetchAttendee from "../hooks/queries/useFetchAttendee";
import Course from "./Course";
import Spinner from "./Spinner";

const Attendee = () => {
  const { data, isLoading, isError } = useFetchAttendee();

  if (isLoading) {
    return (
      <div className="px-20 pb-20">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-20 pb-20">
        <div className="font-bold text-lg italic text-blue-400">OEFENING 2</div>
        <div className="text-red-500">Er ging iets fout ... (bekijk de console voor meer info)</div>
        <div>
          Zorg ervoor dat er een turtle file is aangemaakt in jouw pod, op het pad{" "}
          <span className="font-bold text-blue-400">/courses/pxl.ttl</span>
        </div>
      </div>
    );
  }

  if (data === false) {
    return (
      <div className="px-20 pb-20">
        <div className="font-bold text-lg italic text-blue-400">OEFENING 2</div>
        <div className="text-red-500">WebId's komen niet overeen.</div>
      </div>
    );
  }

  return (
    <div>
      <div className="font-bold text-lg italic text-blue-400 px-20 mb-20">
        OEFENING 2 <span className="text-green-500">(voltooid)</span>
      </div>
      <Course />
    </div>
  );
};

export default Attendee;
