export interface Testimonial {
    id: string;
    name: string;
    title: string;
    company: string;
    photo: string;
    quote: string;
}

export const partnerTestimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Faith Dimaano',
        title: 'Marketing & Communications Manager',
        company: 'Dusit Hotel & Resort',
        photo: '/images/Female3.jpg', // Reusing available images from old component
        quote: "We didn't just build a network, we built a game changer, disrupting the status quo to bring the future of connectivity to everyone."
    },
    {
        id: '2',
        name: 'Kenneth Canlas',
        title: 'President & CEO',
        company: 'Increment Technologies',
        photo: '/images/Female2.jpg',
        quote: "Fiber is not just the future of connectivity, it's the right choice for the demands of today, delivering superior speed, reliability, and low latency."
    },
    {
        id: '3',
        name: 'Nayer Raymundo-Lagmay',
        title: 'ICT Manager',
        company: 'Kubota Philippines',
        photo: '/images/Male2.png',
        quote: 'Internet connectivity has a big role in our operations because most of our communications and program applications are cloud-based platforms. Because of Converge, our communication with our branches, satellite offices, and customers has become more effective and easier.'
    },
    {
        id: '4',
        name: 'Alexander Francis "Alfie" Deato',
        title: 'SVP and Head of IT',
        company: 'LBC Express',
        photo: '/images/Male1.jpg',
        quote: 'Converge has helped us expand our fiber connectivity all the way to our remote branches in Visayas and Mindanao which gave us the ability to offer more online services to our customers.'
    },
    {
        id: '5',
        name: 'Mikel Arriet',
        title: 'General Manager',
        company: 'Anya Resort Tagaytay',
        photo: '/images/Male3.png',
        quote: 'By partnering with Converge, we sent a clear message to our guests that we acknowledged and quickly addressed their essential need for fast and dependable internet connectivity.'
    }
];
