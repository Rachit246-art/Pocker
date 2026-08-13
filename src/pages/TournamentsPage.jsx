import React from 'react';
import PageHeader from '../components/PageHeader';
import './TournamentsPage.css';

const TournamentsPage = () => {
  return (
    <>
      <PageHeader title="Tournaments" subtitle="Compete for Glory" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="tournaments-page-details">
          
          <section className="major-championships">
            <h2>Upcoming Major Event</h2>
            <div className="championship-card">
              <div className="champ-info">
                <div className="champ-date">November 15 - 18, 2026</div>
                <h3 className="champ-title">The Grand Diamond Classic</h3>
                <p className="champ-desc">Our flagship annual tournament attracting the best players from around the globe. Featuring a deep stack structure, 60-minute blinds, and live streamed final table action.</p>
              </div>
              <div className="champ-prize">
                <p>Guaranteed Prize Pool</p>
                <h3>$1,000,000</h3>
                <button className="champ-btn">Register Now</button>
              </div>
            </div>
          </section>

          <section className="weekly-schedule">
            <h2>Weekly Tournament Schedule</h2>
            <div className="schedule-table-wrapper">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Buy-In</th>
                    <th>Guarantee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monday</td>
                    <td>19:00</td>
                    <td>No Limit Hold'em Bounty</td>
                    <td>$200 + $50</td>
                    <td>$10,000</td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>19:00</td>
                    <td>Pot Limit Omaha (6-Max)</td>
                    <td>$300</td>
                    <td>$15,000</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td>20:00</td>
                    <td>Friday Night High Roller</td>
                    <td>$1,000</td>
                    <td>$50,000</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>14:00</td>
                    <td>The Sunday Major Deepstack</td>
                    <td>$500</td>
                    <td>$100,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default TournamentsPage;
