export interface WeddingData {
  groom: {
    name: string;
    fullName: string;
    role: string;
    parents: string;
    image: string;
    phone: string;
  };
  bride: {
    name: string;
    fullName: string;
    role: string;
    parents: string;
    image: string;
    phone: string;
  };
  event: {
    title: string;
    subtitle: string;
    date: string; // ISO format: YYYY-MM-DDTHH:mm:ss
    displayDate: string;
    dayOfWeek: string;
    time: string;
    venue: string;
    venueAddress: string;
    googleMapsUrl: string;
    calendarDetails: {
      title: string;
      description: string;
      location: string;
      startDate: string; // YYYYMMDDTHHmmssZ format
      endDate: string;
    };
  };
  loveStoryNote: string;
  dressCode: {
    title: string;
    description: string;
    palette: { name: string; hex: string }[];
  };
  hashtag: string;
  musicUrl: string;
}

export const weddingData: WeddingData = {
  groom: {
    name: "Kasun",
    fullName: "Kasun Shyamal",
    role: "The Groom",
    parents: "Son of Mr. Anura & Mrs. Malkanthi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    phone: "+94 77 123 4567",
  },
  bride: {
    name: "Udara",
    fullName: "Udara Jayamini",
    role: "The Bride",
    parents: "Daughter of Mr. Sugathapala & Mrs. Senarathne",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    phone: "+94 71 987 6543",
  },
  event: {
    title: "Wedding Celebration",
    subtitle: "Two souls, one heart, beginning forever together",
    date: "2027-04-03T10:30:00",
    displayDate: "04th March 2027",
    dayOfWeek: "Thursday",
    time: "10:30 AM Onwards",
    venue: "The Grand Ballroom, Cinnamon Grand Colombo",
    venueAddress: "77 Galle Road, Colombo 03, Sri Lanka",
    googleMapsUrl: "https://maps.google.com/?q=Cinnamon+Grand+Colombo",
    calendarDetails: {
      title: "Kasun & Udara Wedding Celebration",
      description: "Celebrating the union and love of Kasun & Udara. We are delighted to have you celebrate with us!",
      location: "Cinnamon Grand Colombo, 77 Galle Road, Colombo 03",
      startDate: "20270304T183000Z",
      endDate: "20270304T235959Z",
    },
  },
  loveStoryNote:
    "With hearts filled with immense joy and gratitude, we warmly invite you to join us as we celebrate our Wedding & Homecoming. This special milestone marks the beginning of our new chapter together, and sharing this moment with the beloved friends and family who shaped our lives means the world to us. Your presence, love, and blessings will make our celebration truly unforgettable.",
  dressCode: {
    title: "Traditional Elegance / Formal Luxury",
    description: "We invite you to dress in elegant formal or traditional celebratory attire to celebrate this joyous evening.",
    palette: [
      { name: "Royal Gold", hex: "#D4AF37" },
      { name: "Deep Burgundy", hex: "#6B0908" },
      { name: "Midnight Black", hex: "#1A1A1A" },
      { name: "Champagne", hex: "#F3E5AB" },
    ],
  },
  hashtag: "#KasunWedsUdara2026",
  musicUrl: "/music.mp3",
};
