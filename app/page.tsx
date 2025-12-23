import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constant";

// const events = [
//   {
//     image: "/images/event1.png",
//     title: "Event 1",
//     slug: "event-1",
//     location: "location-1",
//     date: "date-1",
//     time: "time-1",
//   },
// ];

export default function Home() {
  return (
    <section>
      <h1 className="text-center mt-5">WELCOME TO NASH APP</h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Feature Events</h3>
        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
