import React from 'react';
import Tour from './Tour';

const Tours = ({ tours,removeTour }) => {

    return (
        <div className='container'>
            <div className="row">
                {
                    tours.map(tour => <Tour
                        tour={tour}
                        removeTour={removeTour}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;