import PropTypes from 'prop-types'
export const ChosenGenres = (props) => {
  
  const htmlifyGenre = genre => (
    <>
      <div>{genre}<button onClick={()=>props.setChosenGenres(props.chosenGenres.filter(g=>g !== genre))}>x</button></div>
    </>
  )

  return (
    <>
      <h3>Chosen genres component</h3>
    
      {props.chosenGenres.map(htmlifyGenre)}
    </>
  ) 
  
};

ChosenGenres.propTypes = {
  chosenGenres: PropTypes.array
};
