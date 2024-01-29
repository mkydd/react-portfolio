import reactCalculatorImg from '../imgs/projects/react-calculator.png'
import spotifyPlaylistGeneratorImg from '../imgs/projects/spotify-playlist-generator.png'
import wordGuessingGameImg from '../imgs/projects/word-guessing-game.png'
import finalGradeGeneratorImg from '../imgs/projects/final-grade-generator.png'

const projects = [
  {
    name: 'React Calculator',
    img: reactCalculatorImg,
    imgClassName: 'vertical-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://github.com/mkydd/react-calculator',
    tech: [
      'ReactJS'
    ]
  }, 
  {
    name: 'Spotify Playlist Generator',
    img: spotifyPlaylistGeneratorImg,
    imgClassName: 'horizontal-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://',
    tech: [
      'ReactJS'
    ]
  }, 
  {
    name: 'Word Guessing Game',
    img: wordGuessingGameImg,
    imgClassName: 'vertical-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://',
    tech: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
  }, 
  {
    name: 'Final Grade Generator',
    img: finalGradeGeneratorImg,
    imgClassName: 'horizontal-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://',
    tech: [
      'Python',
      'Tkinter (Python Package)'
    ]
  }

]

export { projects }