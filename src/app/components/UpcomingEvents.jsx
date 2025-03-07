import Link from 'next/link';

export default function UpcomingEvents() {
  // Sample data - in a real app, this would come from an API or CMS
  const events = [
    {
      id: 1,
      title: "Alumni Meet 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "KMIT Campus Auditorium",
      description: "Annual alumni gathering to reconnect and network with graduates across different batches."
    },
    {
      id: 2,
      title: "Industry-Academia Conclave",
      date: "March 22, 2025",
      time: "9:30 AM - 5:30 PM",
      location: "KMIT Conference Hall",
      description: "Bridging the gap between industry requirements and academic curriculum."
    },
    {
      id: 3,
      title: "Cultural Fest 'Rhythms 2025'",
      date: "April 5-7, 2025",
      time: "All Day",
      location: "KMIT Campus",
      description: "Three-day cultural extravaganza featuring performances, competitions, and celebrity guest appearances."
    }
  ];

  return (
    <section className="my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Link href="/events" className="text-blue-600 hover:text-blue-800">
          View All Events →
        </Link>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 md:text-right">
                <p className="text-sm font-medium text-gray-900">{event.date}</p>
                <p className="text-sm text-gray-500">{event.time}</p>
                <p className="text-sm text-gray-500">{event.location}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/events/${event.id}`} className="text-blue-600 hover:text-blue-800">
                Event Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}