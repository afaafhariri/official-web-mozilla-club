import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample upcoming events
const events = [
  {
    title: "Web Development Workshop",
    date: "June 15, 2024",
    description: "Learn modern web development techniques with React and Next.js",
    location: "SLIIT - Main Auditorium",
    time: "9:00 AM - 12:00 PM",
  },
  {
    title: "Open Source Contribution Day",
    date: "July 1, 2024",
    description: "Join us for a day of contributing to open source projects",
    location: "SLIIT - Computer Labs",
    time: "10:00 AM - 4:00 PM",
  },
  {
    title: "Tech Talk: Future of Web",
    date: "July 15, 2024",
    description: "Industry experts discuss the future of web technologies",
    location: "SLIIT - Conference Hall",
    time: "2:00 PM - 4:00 PM",
  },
]

// Sample past events data
const pastEvents = [
  {
    title: "Mozilla Meetup",
    image: "/assets/past-event-1.jpg",
    description:
      "A friendly meetup where members showcased their open source contributions and participated in a live Q&A session.",
  },
  {
    title: "Hackathon 2023",
    image: "/assets/past-event-2.jpg",
    description:
      "Intense 24-hour coding event where teams built innovative solutions for real-world challenges.",
  },
  {
    title: "Tech Webinar Series",
    image: "/assets/past-event-3.jpg",
    description:
      "A series of online webinars covering emerging technologies like WebXR, PWAs, and Rust.",
  },
]

export default function Events() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Upcoming Events Section */}
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>📍 {event.location}</p>
                  <p>🕒 {event.time}</p>
                </div>
                <Button className="w-full mt-4">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Events Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((pastEvent, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* Event Image */}
                <img
                  src={pastEvent.image}
                  alt={pastEvent.title}
                  className="w-full h-48 object-cover"
                />
                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pastEvent.title}</h3>
                  <p className="text-gray-600">{pastEvent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
