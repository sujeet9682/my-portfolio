
export const products = [
  {
    href: "https://github.com/ankur1493/clan_chat",
    title: "Clan Chat",
    description:
      "A chat application inspired by discord with chat/audio/video call functionality",
    thumbnail: "/images/clanChat.png",
    images: [
      "/images/clanChat.png",
      "/images/clanChat1.png",
    ],
    stack: ["Nextjs", "Web-sockets", "WebRTC", "Express", "Typescript", "PostgreSQL", "MongoDB", "Redis"],
    slug: "clan_chat",
    label: "github",
    content: (
      <div>
        <p>
          Clan-Chat is a Discord-like application inspired by a YouTube tutorial on
          creating a Discord clone using Next.js.
          Initially, the tutorial utilized Socket.IO and LiveKit
          for core functionalities. However, I decided to challenge myself by
          implementing WebSockets and WebRTC to manage real-time communication and live calls.
        
        </p>
        <p>
          Key aspects of the project include:


          Real-Time Communication: Implemented using WebSockets for chat functionality.
          Live Calls: Exploring WebRTC to handle video and voice communication.
          System Architecture: Designing a multi-server setup to manage different aspects of the application:
          WebRTC Server: For handling live calls.
          WebSockets Server: For managing real-time chat.
          Next.js Application: Handling authentication and user flow.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/ankur1493/calenso",
    title: "Calenso",
    description:
      "A scheduling infrastructure for everyone, because your time matters, so let us handle meetings ",
    thumbnail: "/images/calenso1.png",
    images: [
      "/images/calenso.png",
      "/images/calenso1.png",
    ],
    stack: ["ReactJs", "Tailwindcss", "Redux Toolkit", "Express", "MongoDB"],
    slug: "calenso",

    label: "github",
    content: (
      <div>
        <p>
          is an Indian open-source alternative platform for calendly and cal. It is a scheduling infrastructure,
          which enables you to create bookings and appointments, according to the availability set by the user. You can
          connect your google calendar with calenso and we will take care of everything from creating
          an event in your calendar to sending you reminder emails for the meeting.
        </p>
        <p>
          Calenso is a comprehensive scheduling tool that allows users
          to connect their Google Calendar, set up their availability dynamically,
          and generate a public page for booking appointments.
          This project included a fully functional backend and an intuitive user interface.
        </p>
      </div>
    ),
  },
  {
    href: "https://encrypto-nine.vercel.app/",
    title: "Encrypto",
    description:
      "A dashboard to track your favourite crypto",
    thumbnail: "/images/encrypto.png",
    images: [
      "/images/encrypto.png",
      "/images/encrypto1.png",
    ],
    stack: ["Nextjs", "Tailwindcss", "Auth.js", "React Charts"],
    slug: "encrypto",

    label: "live",
    content: (
      <div>
        <p>
          Encrypto is a platform I build to help
          users who invest in crypto to show them the
          past data of there desired cryptocurrency along with real time updates.
          User is able select different coins as per there want.
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>
      </div>
    ),
  },
];
