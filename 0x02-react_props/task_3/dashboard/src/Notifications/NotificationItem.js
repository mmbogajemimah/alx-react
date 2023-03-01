import React from 'react';
import './Notifications.css'

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

export default NotificationItem;