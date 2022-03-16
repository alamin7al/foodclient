import React, { useState } from 'react';
import data from './wordData';

const WordSetUp = (e) => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)
        console.log(amount);
        if (count <= 0) {
            amount = 1
        }
        if (count > 8) {
            amount = 8
        }
        setText(data.slice(0,amount))

    }
    return (
        <div  className='mx-5 my-5'>
            <h3>Tired Of Boring Lorem Ipusum ?</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount"> Paragraph   </label>
                <input
                className='inputsss'
                    type='number'
                    name='amount'
                    id='amount'
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button type='submit' className=' button-1 ms-3'>Generate</button>
            </form>
            <article className=''>
                {
                    text.map((item, index) => {
                        return <p className='text-start fs-5 my-3' key={index}>{item}</p>
                    })
                }
            </article>
        </div>
    );
};

export default WordSetUp;