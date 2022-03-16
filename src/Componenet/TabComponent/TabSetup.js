import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

import Skeleton from 'react-loading-skeleton';
const url = 'https://course-api.com/react-tabs-project'

const TabSetup = () => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)

    const fetshJobs = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setJobs(data)
        setLoading(false)
    }
    useEffect(() => {
        fetshJobs()
    }, [])
    if (loading) {
        return (
            <>
                <div className="">
                    <Skeleton height={700} width={1000} />
                </div>
            </>
        )
    }
    const { company, dates, duties, title } = jobs[value]

    return (
        <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-containers">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type="button" className="btns">
        more info
      </button>
    </section>
    );
};

export default TabSetup;