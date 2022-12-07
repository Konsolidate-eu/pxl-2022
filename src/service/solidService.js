/**
 * OEFENING 1: Haal jouw naam uit jouw pod. Gebruik hiervoor de solid libraries van Inrupt:
 *
 * @inrupt/solid-client
 *    - deze library gebruik je om de dataset op te halen en daaruit de juiste data te trekken
 * @inrupt/solid-client-authn-browser
 *    - deze library zorgt ervoor dat je authenticated calls kan maken (door middel van de "fetch" functie)
 *
 * Bekijk ook zeker de documentatie:
 *    - Gebruik van de libraries: https://docs.inrupt.com/developer-tools/javascript/client-libraries/using-libraries/
 *    - API reference: https://docs.inrupt.com/developer-tools/javascript/client-libraries/api/
 *
 * DEZE FUNCTIE MOET EEN "STRING" TYPE TERUGGEVEN
 */
const fetchUsername = async () => {
  return "";
};

/**
 * OEFENING 2: Je maakte daarnet een turtle file aan in je eigen pod.
 * In deze turtle staat beschreven dat je de les van vandaag hebt gevolgd. (verwijzing naar jouw WebId)
 *
 * Vergelijk de WebId van de huidige gebruiker met de WebId die jouw turtle staat beschreven.
 * TIP: je kan de huidige sessie ophalen met: getDefaultSession(). Het resultaat hiervan bevat info met daarin de WebId.
 * Referentie: https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/functions.html#getdefaultsession
 *
 * DEZE FUNCTIE MOET EEN "BOOLEAN" TYPE TERUGGEVEN (vergelijk de huidige WebId met de WebId uit de pod)
 */
const fetchAttendee = async () => {
  const myWebId = "HAAL DEZE WEBID UIT DE SESSIE";
  const webIdFromPod = "HAAL DEZE WEBID UIT DE TURTLE FILE IN JOUW POD";

  return myWebId === webIdFromPod;
};

/**
 * OEFENING 3: Haal de turtle van de les uit de pod van Konsolidate. (gebruik de courseUrl die staat gedefinieerd)
 *
 * Probeer volgende data uit de dataset te halen:
 *    - courseName  (naam van de les)
 *    - organizer   (WebId van de organisator)
 *    - startDate   (startdatum + startuur van de les)
 *    - endDate     (einddatum + einduur van de les)
 *        => LET OP : datums moeten opgehaald worden MET HET TIJDSTIP
 *
 * DEZE FUNCTIE MOET EEN OBJECT MET BOVENSTAANDE PROPERTIES TERUGGEVEN.
 *
 * == UITBEREIDING ==
 * Haal de naam van de organisator op, in plaats van de WebId (je zal hiervoor een extra dataset moeten ophalen)
 */
const fetchCourse = async () => {
  // const courseUrl = "https://konsolidate.solidcommunity.net/public/Courses/PXL%20Solid%20Seminarie.ttl";

  return {
    courseName: "",
    organizer: "",
    startDate: new Date(),
    endDate: new Date()
  };
};

export { fetchUsername, fetchAttendee, fetchCourse };
