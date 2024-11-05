import React from 'react';
import Header from '../Header';
import '../../assets/styles/IPRStyle/ManagePatents.css'; // Import the CSS file

function ManagePatents() {
  return (
    <div>
      <Header />
      <div className="container-fluid"> {/* Use container-fluid for full width */}
        <h1 className="mt-5">Manage Patents</h1>
        <p>
          Effective patent management involves using the right tools and strategies to protect, monitor, and commercialize your intellectual property. Below are some leading tools that can help you manage your patent portfolio efficiently.
        </p>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">Innography</h5>
                <p className="card-text">
                  Innography provides advanced patent analysis and portfolio management tools, helping you assess the commercial value of patents and track IP trends.
                </p>
                <ul>
                  <li>Patent Analytics</li>
                  <li>Portfolio Management</li>
                  <li>Competitive Analysis</li>
                  <li>Technology Landscape</li>
                </ul>
                <a href="https://innography.com" className="btn btn-primary mt-auto">Visit Innography</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">Anaqua</h5>
                <p className="card-text">
                  Anaqua offers solutions for managing patents, trademarks, and other IP rights, including docketing, maintenance, and portfolio analytics.
                </p>
                <ul>
                  <li>IP Portfolio Management</li>
                  <li>Renewal Services</li>
                  <li>Document Management</li>
                  <li>Patent Filing Support</li>
                </ul>
                <a href="https://anaqua.com" className="btn btn-primary mt-auto">Visit Anaqua</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">PatSnap</h5>
                <p className="card-text">
                  PatSnap provides a platform to manage patents, analyze IP landscapes, and track innovation trends across various industries.
                </p>
                <ul>
                  <li>Patent Search</li>
                  <li>IP Analytics</li>
                  <li>Innovation Insights</li>
                  <li>Patent Licensing Support</li>
                  <li>Patent Filing Support</li>
                </ul>
                <a href="https://patsnap.com" className="btn btn-primary mt-auto">Visit PatSnap</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">CPA Global</h5>
                <p className="card-text">
                  CPA Global helps manage your IP portfolio by providing tools for patent renewals, monitoring, and strategic planning.
                </p>
                <ul>
                  <li>Patent Renewals</li>
                  <li>Portfolio Management</li>
                  <li>Patent Docketing</li>
                  <li>Litigation Support</li>
                  <li>Patent Filing Support</li>
                </ul>
                <a href="https://cpaglobal.com" className="btn btn-primary mt-auto">Visit CPA Global</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

          {/* Additional Dummy Data Cards */}
          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">PatentPal</h5>
                <p className="card-text">
                  PatentPal offers a user-friendly interface for managing patents, tracking deadlines, and ensuring compliance with patent laws.
                </p>
                <ul>
                  <li>Deadline Tracking</li>
                  <li>Compliance Management</li>
                  <li>Reporting Tools</li>
                  <li>Integration with Legal Systems</li>
                </ul>
                <a href="https://patentpal.com" className="btn btn-primary mt-auto">Visit PatentPal</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">IPfolio</h5>
                <p className="card-text">
                  IPfolio is an IP management solution that offers comprehensive tools for managing your IP assets and portfolios effectively.
                </p>
                <ul>
                  <li>Asset Management</li>
                  <li>Collaboration Tools</li>
                  <li>Financial Tracking</li>
                  <li>Analytics and Reporting</li>
                </ul>
                <a href="https://ipfolio.com" className="btn btn-primary mt-auto">Visit IPfolio</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">Think IP</h5>
                <p className="card-text">
                  Think IP provides solutions for managing IP portfolios with a focus on innovation and strategic growth.
                </p>
                <ul>
                  <li>IP Strategy Consulting</li>
                  <li>Portfolio Analysis</li>
                  <li>Market Insights</li>
                  <li>Licensing Support</li>
                </ul>
                <a href="https://thinkip.com" className="btn btn-primary mt-auto">Visit Think IP</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column"> {/* Add d-flex and flex-column */}
                <h5 className="card-title">PatentVision</h5>
                <p className="card-text">
                  PatentVision offers tools for visualizing patent data, making it easier to understand and analyze IP trends and landscapes.
                </p>
                <ul>
                  <li>Data Visualization</li>
                  <li>Patent Mapping</li>
                  <li>Trend Analysis</li>
                  <li>Competitive Intelligence</li>
                </ul>
                <a href="https://patentvision.com" className="btn btn-primary mt-auto">Visit PatentVision</a> {/* mt-auto to push the button to the bottom */}
              </div>
            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        .card {
          transition: transform 0.2s, background-color 0.2s, color 0.2s;
        }
        .card:hover {
          transform: scale(1.02);
          background-color: #e7f1ff; /* Change this to your desired hover background color */
          color: #000; /* Change this to your desired hover text color */
        }
        .card-header:hover {
          background-color: #0056b3; /* Change this to your desired hover header color */
        }
      `}</style>
    </div>
  );
}

export default ManagePatents;
