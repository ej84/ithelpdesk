import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  const resp = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!resp.ok) {
    throw new Error("Failed to get the ticket.");
  }

  return resp.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData} />; // Takes the params' id from the url to display in browser.
};

export default TicketPage;
