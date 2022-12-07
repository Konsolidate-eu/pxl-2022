import Attendee from "../components/Attendee";
import Name from "../components/Name";
import { logout } from "@inrupt/solid-client-authn-browser";
import { useQueryClient } from "@tanstack/react-query";

const Home = () => {
  const queryClient = useQueryClient();

  return (
    <div className="flex flex-col items-center p-20">
      <div className="w-full bg-white rounded-lg">
        <div className="flex justify-end p-4">
          <button
            className="rounded-lg bg-purple-500 px-6 py-2 text-white"
            onClick={async () => {
              await logout();
              queryClient.invalidateQueries(["authenticated"]);
            }}
          >
            Afmelden
          </button>
        </div>
        <Name />
        <Attendee />
      </div>
    </div>
  );
};

export default Home;
