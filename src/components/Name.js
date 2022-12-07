import useFetchUsername from "../hooks/queries/useFetchUsername";
import Spinner from "./Spinner";

const Name = () => {
  const { data, isLoading, isError } = useFetchUsername();

  if (isLoading) {
    <div className="p-20">
      <Spinner />
    </div>;
  }

  return (
    <div className="p-20 text-center">
      <div className="font-bold text-lg italic text-blue-400">
        {data ? (
          <>
            OEFENING 1 <span className="text-green-500">(voltooid)</span>
          </>
        ) : (
          "OEFENING 1"
        )}
      </div>

      <div className="w-full flex justify-center">
        {isError ? (
          <div className="text-center">
            <div className="text-lg font-bold text-red-500">
              Er is en <span className="">fout</span> opgetreden !
            </div>
            <div>Bekijk de console voor meer info.</div>
          </div>
        ) : (
          <div className="text-4xl">Hallo {data ? <span className="text-blue-400 underline font-bold">{data}</span> : "..."} !</div>
        )}
      </div>
    </div>
  );
};

export default Name;
