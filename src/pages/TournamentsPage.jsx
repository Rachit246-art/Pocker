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
            <h2>Future Plans: Texas Hold'em</h2>
            <div className="championship-card">
              <div className="champ-info">
                <div className="champ-date">Coming Soon</div>
                <h3 className="champ-title">Royal Flush Texas Hold’em Events</h3>
                <p className="champ-desc">Our next key focus is to build a strong and consistent Texas Hold’em quorum. We will be launching exciting events and tournaments supported by attractive bonuses and regular player engagement.</p>
              </div>
              <div className="champ-prize">
                <p>Status</p>
                <h3>In Development</h3>
                <button className="champ-btn">Register Interest</button>
              </div>
            </div>
          </section>

          <section className="weekly-schedule">
            <h2>Current Action Schedule</h2>
            <div className="schedule-table-wrapper">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Game Focus</th>
                    <th>Stakes</th>
                    <th>Environment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Daily</td>
                    <td>24/7</td>
                    <td>ROE Action</td>
                    <td>₹5K & ₹10K</td>
                    <td>Welcoming</td>
                  </tr>
                  <tr>
                    <td>Daily</td>
                    <td>24/7</td>
                    <td>PLO5 Action</td>
                    <td>₹20K, ₹25K</td>
                    <td>High Stakes</td>
                  </tr>
                  <tr>
                    <td>Weekends</td>
                    <td>Peak Hours</td>
                    <td>High-Stakes PLO5</td>
                    <td>₹50K</td>
                    <td>Exciting Action</td>
                  </tr>
                  <tr>
                    <td>Upcoming</td>
                    <td>TBA</td>
                    <td>Texas Hold'em Tournaments</td>
                    <td>TBA</td>
                    <td>Competitive</td>
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
