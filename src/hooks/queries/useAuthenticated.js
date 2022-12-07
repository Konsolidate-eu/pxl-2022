import { useQuery } from "@tanstack/react-query";
import { handleIncomingRedirect } from "@inrupt/solid-client-authn-browser";

const useAuthenticated = () => {
  return useQuery(["authenticated"], async () => {
    const info = await handleIncomingRedirect({ restorePreviousSession: true });
    return info.isLoggedIn;
  });
};

export default useAuthenticated;
