import React from 'react';
import './Notifications.css'
import PropTypes from 'prop-types'

function NotificationItem({ type, html, value }) {
  return (
    value ? 
    <li
    data-notification-type={type}
    >{value}</li> 
    :
    <li
    data-notification-type={type}
    dangerouslySetInnerHTML={{ __html: html }}
    ></li> 
  );
}

NotificationItem.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
};

export default NotificationItem;