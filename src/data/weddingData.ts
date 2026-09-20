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
    venue: "The Grand Ballroom, Ramira Reception Hall",
    venueAddress: "Ramira Receptionhall, No 148 Yatiyana, Agalawatta.",
    googleMapsUrl: "https://maps.app.goo.gl/ohQwSWyzsXkeAKyb7?g_st=awo",
    calendarDetails: {
      title: "Kasun & Udara Wedding Celebration",
      description: "Celebrating the union and love of Kasun & Udara. We are delighted to have you celebrate with us!",
      location: "Ramira Reception Hall",
      startDate: "20270304T183000Z",
      endDate: "20270304T235959Z",
    },
  },
  loveStoryNote:
    "With hearts filled with immense joy and gratitude, we warmly invite you to join us as we celebrate our Wedding & Homecoming. This special milestone marks the beginning of our new chapter together, and sharing this moment with the beloved friends and family who shaped our lives means the world to us. Your presence, love, and blessings will make our celebration truly unforgettable.",
  dressCode: {
    title: "Traditional Elegance / Formal Luxury",
    description: "We invite you to dress in elegant formal or celebratory traditional attire in soft warm pastels, ivory, and champagne tones.",
    palette: [
      { name: "Champagne Gold", hex: "#D4AF37" },
      { name: "Soft Ivory", hex: "#FAF7F2" },
      { name: "Warm Taupe", hex: "#9C8979" },
      { name: "Blush Rose", hex: "#EAD7CE" },
    ],
  },
  hashtag: "#KasunWedsUdara2026",
  musicUrl: "/music.mp3",
};
