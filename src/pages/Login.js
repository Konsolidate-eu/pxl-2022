import { login } from "@inrupt/solid-client-authn-browser";

const Login = () => {
  const handleLogin = (idp) => {
    login({
      redirectUrl: "http://localhost:3000",
      oidcIssuer: idp,
      clientName: "Konsolidate Leden App"
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white w-[400px] h-[500px] p-4 flex flex-col rounded-xl">
        <div className="flex-1 flex flex-col justify-between items-center py-6">
          <img src="solidcommunity.png" alt="solidcommunity logo" />
          <div className="text-center">
            <div className="mt-4 font-bold text-lg text-gray-700">Account gemaakt?</div>
            <div className="mt-2 text-gray-700">Klik op de knop hieronder om in te loggen met jouw account.</div>
          </div>
          <button
            className="py-3 px-6 rounded-lg text-lg text-white bg-blue-400 hover:bg-blue-500"
            onClick={() => handleLogin("https://solidcommunity.net")}
          >
            Solidcommunity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
