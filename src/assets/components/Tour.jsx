import './tour.css';

const Tour = () => {
    const tourDates = [
  {
    date: "JUL 16",
    city: "Detroit, MI",
    venue: "DTE Energy Music Theatre"
  },
  {
    date: "JUL 19",
    city: "Toronto, ON",
    venue: "Budweiser Stage"
  },
  {
    date: "JUL 22",
    city: "Bristow, VA",
    venue: "Jiffy Lube Live"
  },
  {
    date: "JUL 29",
    city: "Phoenix, AZ",
    venue: "Ak-Chin Pavilion"
  },
  {
    date: "AUG 2",
    city: "Las Vegas, NV",
    venue: "T-Mobile Arena"
  },
  {
    date: "AUG 7",
    city: "Concord, CA",
    venue: "Concord Pavilion"
  }
];


    return (
        <div className="tour">
            <div className="tour-title">
                <h2>𝓣𝓞𝓤𝓡𝓢</h2>
            </div>
            <div>
                {tourDates.map((tour,index) => (
                    <div className = 'tour-card' key={index}>
                        <p>{tour.date}</p>
                        <p>{tour.city}</p>
                        <p>{tour.venue}</p>
                        <button>BUY TICKETS</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tour;