import React from 'react'

const SeriesCard = () => {
  return (
    <div className="col-3">
        <div className="series-card position-relative">
            <div className='series-card-contain position-absolute'>
                <h5>Big Screen</h5>
                <h4>Smart Watch Series</h4>
                <p>Kids headphones bulk 10 packs multi-color for students</p>
            </div>
            <div>
                <img className="img-fluid" src="images/speaker.jpg" alt="speaker"/>
            </div>
        </div>
    </div>
  )
}

export default SeriesCard;