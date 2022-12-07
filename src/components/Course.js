import useFetchCourse from "../hooks/queries/useFetchCourse";
import Spinner from "./Spinner";

const Course = () => {
  const { data, isLoading, isError } = useFetchCourse();

  if (isLoading) {
    return (
      <div className="px-20 pb-20">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return getTemplate(null, null, null, null);
  }

  return getTemplate(data.courseName, data.organizer, data.startDate, data.endDate);
};

export default Course;

const getTemplate = (courseName, organizer, startDate, endDate) => {
  return (
    <>
      <div className="px-20 font-bold text-lg italic text-blue-400">
        {courseName === "PXL Solid seminarie" ? (
          <>
            OEFENING 3 <span className="text-green-500">(voltooid)</span>
          </>
        ) : (
          "OEFENING 3"
        )}
      </div>

      {courseName === null && <div className="px-20 font-bold text-red-500">Er ging iets fout ... (bekijk de console voor meer info)</div>}

      <div className="w-full flex px-20 pb-20 text-lg gap-4">
        <div className="flex-1">
          <div>
            Naam: <span className="font-bold">{courseName}</span>
          </div>
          <div>
            Organisator: <span className="font-bold break-all">{organizer}</span>
          </div>
        </div>
        <div className="flex-1">
          <div>
            Startdatum: <span className="font-bold">{formatDate(startDate)}</span>
          </div>
          <div>
            Einddatum: <span className="font-bold">{formatDate(endDate)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const formatDate = (date) => {
  if (date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${day}/${month}/${year} - ${hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }

  return "";
};
