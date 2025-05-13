"use client"

import { useState } from "react"
import GameScreen from "@/components/GameScreen"
import StartScreen from "@/components/StartScreen"
import GameOverScreen from "@/components/GameOverScreen"
import Footer from "@/components/Footer"

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  const handleGameOver = (score) => {
    setFinalScore(score)
    setGameOver(true)
    setGameStarted(false)
  }

  const handlePlayAgain = () => {
    setGameOver(false)
    setGameStarted(true)
  }

  const handleExit = () => {
    setGameStarted(false)
    setGameOver(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-purple-100 to-blue-200 p-4">
      <div className="flex-grow flex items-center justify-center w-full">
        {!gameStarted && !gameOver && <StartScreen onStart={() => setGameStarted(true)} />}
        {gameStarted && <GameScreen onGameOver={handleGameOver} onExit={handleExit} />}
        {/* {gameOver && <GameOverScreen score={finalScore} onPlayAgain={handlePlayAgain} onExit={handleExit} />} */}
      </div>
      <Footer />
    </main>
  )
}
