import React from 'react'
import headshot from '../imgs/headshot.png'
import reactCalculatorImg from '../imgs/projects/react-calculator.png'
import spotifyPlaylistGeneratorImg from '../imgs/projects/spotify-playlist-generator.png'
import wordGuessingGameImg from '../imgs/projects/word-guessing-game.png'
import finalGradeGeneratorImg from '../imgs/projects/final-grade-generator.png'

function Images() {
  const images = [
    headshot,
    reactCalculatorImg,
    spotifyPlaylistGeneratorImg,
    wordGuessingGameImg,
    finalGradeGeneratorImg
  ]
  return (
    <div className='load-images'>
      {images.map((image) => {
        return <img srcSet={image} key={image} alt=''/>
      })}
    </div>
  )
}

export default Images