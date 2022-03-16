import React from 'react';
import { useState } from 'react';
import data from './qusotonData';

import SingleQusiton from './SingleQusiton';
const QusitionSetup = () => {
    const [questions, setQuestions] = useState(data);

    return (
        <div className='mainbg'>
            <main className=''>
                <div className='containers'>
                    <h3>questions and answers about login</h3>
                    <section className='info'>
                        {questions.map((question) => {
                            return (
                                <SingleQusiton key={question.id} {...question}></SingleQusiton>
                            );
                        })}
                    </section>
                </div>
            </main>
        </div>
    );
};

export default QusitionSetup;