import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem, in, amet nemo culpa totam laborum aliquid neque repellendus nam fuga ullam, nostrum id ut temporibus unde magnam voluptates! Perferendis!</p>
        </div>
    )
}

export default Rainbow(About);