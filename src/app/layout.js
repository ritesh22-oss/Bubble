import "./globals.css"

export const metadata = {
  title: "Bubble Pop - Fun and Relaxing Stress Relief Game | Pop Bubbles & Relax",
  description:
    "A fun bubble popping game to relieve stress and clear your mind. Tap the bubbles to pop them and enjoy a relaxing experience.",
  keywords:
    "bubble pop game, stress relief game, pop bubbles, relax, fun game, bubble popping, stress relief, pop bubbles to relax, bubble pop game by anujbuilds, bubble pop game anuj chaudhary",
  author: "Anuj Chaudhary",
  robots: "index, follow",
  openGraph: {
    title: "Bubble Pop - Stress Relief Game",
    description:
      "A fun and relaxing bubble popping game to relieve stress. Enjoy popping bubbles and clearing your mind.",
    url: "https://bubblepopgame.vercel.app/", // Live URL
    image: "/bubbles.png", // Image for Open Graph
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // For a larger image in the tweet
    title: "Bubble Pop - Stress Relief Game",
    description:
      "Pop bubbles and relax your mind with this fun and interactive stress-relief game.",
    image: "/bubbles.png", // Image for Twitter Cards
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-fredoka">{children}</body>
    </html>
  )
}
