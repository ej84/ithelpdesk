import React from "react";
import TicketCard from "./(components)/TicketCard";
import ModalUI from "./(components)/Modal";

const getTickets = async () => {
  try {
    const resp = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return resp.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  // if no ticket is found
  if (!tickets) {
    return <p>No tickets.</p>;
  }

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
      <ModalUI />
    </div>
  );
};

export default Dashboard;
