import React from "react";
import "../assets/styles/notificationBoard.css"; // Import the CSS file for styling
import { FaStar } from "react-icons/fa"; // Importing a star icon from react-icons

const NotificationBoard = () => {
  return (
    <div className="main-container">
      {/* Notification container */}
      <div className="notification-card">
        <div className="card-header">
          <FaStar className="icon" />
          <h3>Important Notification</h3>
        </div>
        <ul className="card-content">
          <li>Deadline for project submission is October 25th, 2024.</li>
          <li>System maintenance scheduled for November 1st, 2024.</li>
          <li>New policy updates are now available in the resources section.</li>
        </ul>
      </div>

      {/* Important Dates container */}
      <div className="notification-card">
        <div className="card-header">
          <FaStar className="icon" />
          <h3>Important Dates</h3>
        </div>
        <ul className="card-content">
          <li>Registration closes: November 10th, 2024.</li>
          <li>Exam dates: December 1st - December 15th, 2024.</li>
          <li>Results announcement: January 5th, 2025.</li>
        </ul>
      </div>

      {/* Announcements container */}
      <div className="notification-card">
        <div className="card-header">
          <FaStar className="icon" />
          <h3>Announcements</h3>
        </div>
        <ul className="card-content">
          <li>New course materials have been added to the portal.</li>
          <li>Upcoming guest lecture by industry expert on October 30th, 2024.</li>
          <li>Don't miss the annual fest registration starting next week.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationBoard;
