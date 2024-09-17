import reactCalculatorImg from '../imgs/projects/react-calculator.png'
import spotifyPlaylistGeneratorImg from '../imgs/projects/spotify-playlist-generator.png'
import wordGuessingGameImg from '../imgs/projects/word-guessing-game.png'
import finalGradeGeneratorImg from '../imgs/projects/final-grade-generator.png'
import exerciseTrackerImg from '../imgs/projects/exercise-tracker.png'

const projects = [ 
  {
    name: 'Exercise Tracker',
    img: exerciseTrackerImg,
    imgClassName: 'vertical-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://github.com/mkydd/exercise-tracker',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB'
    ]
  },
  {
    name: 'Word Guessing Game',
    img: wordGuessingGameImg,
    imgClassName: 'vertical-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://github.com/mkydd/wordle-clone',
    tech: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
  },
  {
    name: 'Spotify Playlist Generator',
    img: spotifyPlaylistGeneratorImg,
    imgClassName: 'horizontal-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://github.com/mkydd/spotify-playlist-generator',
    tech: [
      'ReactJS'
    ]
  },
  {
    name: 'Final Grade Generator',
    img: finalGradeGeneratorImg,
    imgClassName: 'horizontal-img',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa nostrum maxime praesentium! Libero, doloribus deserunt. Praesentium voluptates consectetur aliquam?',
    githubURL: 'https://github.com/mkydd/CP317-Project',
    tech: [
      'Python',
      'Tkinter (Python Package)'
    ]
  },
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

]

export { projects }