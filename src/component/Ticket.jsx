import "./ticket.css";
const Ticket = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="top">
          <h1>
            Love<span>Pontoon</span>
          </h1>
          <p>Olusegun Obasanjo Presidential Library (OOPL)</p>
        </div>
        <div className="ticket">
          <h1 className="ht">E-TICKET</h1>
          <div className="tick">
            <div className="ticktop">
              <div className="ttop">
                <h3>Morning Pool Experience</h3>
                <p>Transaction ID : 351511859256378</p>
              </div>
              <h2>12430 - OOPL PUN AC SF</h2>
              <div className="date">
                <div>
                  <h2>Date:</h2>
                  <h1>October 10</h1>
                </div>
                <div>
                  <h2>Time:</h2>
                  <p>7am - 9am</p>
                </div>
              </div>
            </div>
            <div className="book">
              <h1 className="bd">Booker Details</h1>
              <h2>Adepegba David</h2>
              <div className="bk">
                <div>
                  <p>Age : 24 Yrs</p>
                  <p>Gender : Male</p>
                </div>
                <h3>
                  Booking Status : <span>Confirmed</span> (CNF)
                </h3>
              </div>
              <div className="gues">
                <h3>Number of Guests:</h3>
                <h3>20 (including yourself)</h3>
              </div>
            </div>
            <div className="total">
              <h2>Total Booking Payment:</h2>
              <h3>N10,500.00</h3>
            </div>
          </div>
          <div className="notice">
            <h2>Important Information:</h2>
            <p>
              Please bring this e-ticket along with a valid ID proof for
              verification at the entrance.
            </p>
            <p>
              Entry Time: 06:45 am (15 minutes before the event start time).
            </p>
            <p>No re-entry allowed after exit.</p>
            <div className="bp">
              <p>We look forward to welcoming you and your guests!</p>
              <p>Lovepontoon, OOPL</p>
            </div>
          </div>
          <div className="dbtn">
            <button className="btn">Download E-Ticket </button>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2024. All Rights Reserved.</p>
          <h5>
            Love<span>Pontoon</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
