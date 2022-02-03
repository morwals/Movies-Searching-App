import React from 'react';

export default function Movies(props) {
  return <div>
      {
          props.movies.map((movie,i)=>
            <div  className='div' key={i}
                onClick={()=>props.setItem(movie)}
            >
                <image src={movie.Poster} alt='image..'></image>
            </div>
      )}
  </div>;
}
