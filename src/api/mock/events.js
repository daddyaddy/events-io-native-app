export const events = [
  {
    id: "1",
    name: "Test",
    description: "123",
    date: "2023-01-23T17:40:19.336Z",
    is_published: true,
    is_private: true,
    image_url:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    organizer: {
      id: 0,
      email: "maciej@gmail.com",
    },
    location: {
      longitude: 51.246452,
      latitude: 22.568445,
      place: "Lublin",
    },

    participants: [
      {
        status: 10,
        user: { id: 1, email: "maciej@gmail.com" },
        is_organizer: true,
        was_accepted: true,
        was_rejected: false,
      },
      {
        status: 10,
        user: { id: 2, email: "maciej@gmail.com" },
        is_organizer: true,
        was_accepted: true,
        was_rejected: false,
      },

      {
        status: 10,
        user: { id: 3, email: "maciej@gmail.com" },
        is_organizer: true,
        was_accepted: true,
        was_rejected: false,
      },
    ],
  },
];
