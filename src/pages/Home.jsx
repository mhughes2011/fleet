import React from 'react'

function Home() {
  return (
    <>
      <div className='my-16'>
        <h1 className='text-5xl font-bold '>So you want to reduce your Fleet Emissions...</h1>
      </div>
    

      <div>
        <div className="col1">
          <h2 className='text-3xl font-semibold my-4'>Every gallon of gasoline burned produces 19 lbs of CO<sub>2</sub></h2>
        </div>
        <div className="text-3xl font-semibold my-4">
          <h2>Every gallon of diesel burned produces  22.38 lbs of CO<sub>2</sub></h2>
        </div>
      </div>

      <div>
        <h1>One therm of natural gas burned produces 11.7 lbs of CO<sub>2</sub></h1>
      </div>
    </>
  )
}

export default Home