// Simple, centralized data model for your site.
// Update these placeholders with your real information and the UI will update.

export type SocialLinks = {
  github?: string
  linkedin?: string
  twitter?: string
  email?: string // plain email, not mailto
  website?: string
  instagram?: string // add Instagram to social links
}

export type Project = {
  title: string
  description: string
  tags?: string[]
  link?: string // live link
  repo?: string // code repo
}

export type HeroButton = {
  label: string
  href: string
  icon?: "gavel" | "code" | "link"
}

export type SiteData = {
  name: string
  role: string
  tagline: string
  location?: string
  bio: string
  email: string
  socials: SocialLinks
  skills: string[]
  projects: Project[]
  roles?: string[] // optional: e.g., ["Lawyer", "Developer"]
  heroButtons?: HeroButton[] // 2 buttons shown in the intro
  instagramHandle?: string
}

export const siteData: SiteData = {
  name: "B. Harish Raj",
  role: "Student",
  tagline: "Tech | Gamer | Trader | Reel Creator | CA in progress | Big goals, bigger hustle",
  // Note: location optional. Leave undefined if you'd like to hide it.
  location: undefined,
  bio: "I’m B. Harish Raj, a curious and ambitious student who wears many hats — 📚 learner, 🎮 gamer, 📈 trader, 🎬 reel creator, and 💻 aspiring web developer. I love exploring technology, analyzing trading charts, creating fun & engaging Instagram reels, and competing in games that push my limits. Alongside my creative and tech interests, I’m also pursuing CA, balancing academics with my passions. For me, life is all about learning, earning, and enjoying the journey 🚀 — with big goals and an even bigger hustle.",
  email: "harishrajracer@icloud.com",
  instagramHandle: "dhe.mad.biker",
  socials: {
    // Fill more later if you want
    // website: "https://instagram.com/dhe.mad.biker",
    // email: "harishrajracer@icloud.com",
    // instagram: "https://instagram.com/dhe.mad.biker", // store IG handle link
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Trading",
    "Chart Analysis",
    "Gaming",
    "Content Creation",
    "Finance",
    "CA Journey",
  ],
  projects: [
    {
      title: "Trading Journal Tracker (WIP)",
      description: "A simple web app to log trades, P/L, notes, and chart screenshots for better reviews.",
      tags: ["web", "nextjs", "trading"],
      link: "",
      repo: "",
    },
    {
      title: "Gaming Highlights Reel Site (WIP)",
      description: "A minimal video grid to showcase short gameplay highlights and clips.",
      tags: ["frontend", "video", "gaming"],
      link: "",
      repo: "",
    },
    {
      title: "Personal Portfolio (This Site)",
      description: "A clean, dark, mobile-first portfolio highlighting my roles, skills, and projects.",
      tags: ["portfolio", "nextjs", "ui"],
      link: "",
      repo: "",
    },
    {
      title: "Reel Creator Toolkit (WIP)",
      description: "Templates and an upload flow to organize ideas, scripts, and publish-ready reels.",
      tags: ["content", "creator", "tools"],
      link: "",
      repo: "",
    },
    {
      title: "CA Study Planner (WIP)",
      description: "Track subjects, topics, and revision cycles with a simple progress view.",
      tags: ["productivity", "study", "planner"],
      link: "",
      repo: "",
    },
    {
      title: "Weather App",
      description: "Shows current conditions and a short forecast for your location or searched cities.",
      tags: ["weather", "api", "frontend"],
      link: "",
      repo: "",
    },
    {
      title: "Expense Tracker",
      description: "Track daily expenses, categories, and monthly totals with simple summaries.",
      tags: ["finance", "tracking", "web"],
      link: "",
      repo: "",
    },
    {
      title: "Stock Price Tracker",
      description: "View real-time stock quotes and simple charts to follow your watchlist.",
      tags: ["stocks", "charts", "nextjs"],
      link: "",
      repo: "",
    },
  ],
  roles: ["CA Student", "Web Developer"],
  heroButtons: [],
}
