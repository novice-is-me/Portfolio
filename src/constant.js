import { food, gym, jokes, messenger, qoutes, studentSystem } from "./assets/image"

export const headerData = [
    {
        id: 1,
        name: "About",
        loc: '#about'
    },{
        id: 2,
        name: "Experience",
        loc: '#experience'
    },{
        id: 3,
        name: "Work",
        loc: '#work'
    },{
        id: 4,
        name: "Contact",
        loc: '#contact'
    }
]

export const workExp = [
    {
        name: "Yaramay Computer Service",
        title: 'Front End Developer (Part Time)',
        date: 'September - October 2023',
        role: [
            "Spearheaded the development of the OFW Serbisyo Kooperatiba landing page using a comprehensive skill set encompassing HTML,CSS, Javascript, and Bootstrap.",
            "Orchestrated the layout design for the Mapiya Landing page, employing Figma to ensure a seamless and visually appealing user interface."
        ],
        value: 'default'
    },{
        name: "8box Solutions Inc.",
        title: 'Front End Developer (OJT)',
        date: 'February - May 2024',
        role: [
            "Helps in the creation and customization of sections and pages on client’s website on WordPress by utilizing Vanilla CSS and Javascript.",
            "Helps in development of web application mainly using React JS and Tailwind CSS for the Laro App.",
            "Ensures responsiveness of all pages in various screen sizes. ",
            "Implemented various react concepts to enhance the website performance.",
            "Helps in the integration of API for various pages.",
            "Collaborated with the UI/UX and backend developers for smooth data flow and functionality"
        ],
        value: '8box'
    }
]

export const projectData = [
    {
        image: studentSystem,
        title: "Student System",
        description: "Simple student system consists of create, read, update and delete. Hosted at netlify.",
        tech: "React JS, JSON, Axios, Tailwind",
        link: 'https://react-student-system.netlify.app/',
        value: 1
    },{
        image: messenger,
        title: "Messenger Clone",
        description: "Clone of desktop messenger with the ability to send message on each group chats.",
        tech: "Javascript, React JS, Tailwind, MaterialUI",
        link: 'https://clone-messenger.netlify.app/',
        value: 2
    },{
        image: gym,
        title: "PowerLab Gym",
        description: "A landing page website of PowerLab consists of the services they offer and their specific prices.",
        tech: "React JS, Tailwind",
        link: 'https://powerlab-gym.netlify.app/',
        value: 3
    },{
        image: jokes,
        title: "CompAPI",
        description: "A compilation of jokes and facts from free API's",
        tech: "HTML, CSS, JavaScript, Fetch, JQuery, Bootstrap",
        link: 'https://novice-is-me.github.io/Free-Api/',
        value: 4
    },{
        image: qoutes,
        title: "Qoute Generator",
        description: "A static qoute generator that randomly displays qoutes from famous individual.",
        tech: "HTML, CSS, JavaScript, Bootstrap",
        link: 'https://novice-is-me.github.io/Quote-Generator/',
        value: 5
    },{
        image: food,
        title: "Food Recipe Blog",
        description: "A static landing page website displaying all featured and famous recipe across the Asia.",
        tech: "HTML, CSS, Bootstrap",
        link: 'https://novice-is-me.github.io/Food-Recipe-Blog/' ,
        value: 6
    }   
]

