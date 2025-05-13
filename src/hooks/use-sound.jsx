"use client"

import { useRef, useCallback } from "react"

export function useSound() {
  const audioCache = useRef({})

  const playSound = useCallback((soundUrl) => {
    try {
      // Use cached audio if available
      if (!audioCache.current[soundUrl]) {
        audioCache.current[soundUrl] = new Audio(soundUrl)
        audioCache.current[soundUrl].volume = 0.8
      }

      // Clone the audio for overlapping sounds
      const sound = audioCache.current[soundUrl].cloneNode()

      // Play the sound
      sound.play().catch((err) => {
        // Handle autoplay restrictions
        console.log("Audio playback failed:", err)
      })
    } catch (error) {
      console.error("Error playing sound:", error)
    }
  }, [])

  return { playSound }
}
