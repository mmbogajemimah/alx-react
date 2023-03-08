//import React, { Component } from 'react';
import React, { Component } from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'


class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }
  
  render() {
    const { displayDrawer, listNotifications } = this.props

    return(
      <>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        { displayDrawer ? 
          <div className="Notifications">
          <button style={{
            color: '#3a3a3a',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            fontSize: '15px',
            position: 'absolute',
            right: '3px',
            top: '3px',
            cursor: 'pointer',
            outline: 'none',
          }}
          aria-label="Close"
          onClick={(e) => {
            console.log('Close button has been clicked');
          }}
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          {
            listNotifications.length !== 0 ?
            <p>Here is the list of notifications</p>
            : null
          }
          
          <ul>
            {
              listNotifications.length === 0 ?
              <NotificationItem type='default' value='No new notification for now' />
              : null
            }
            {
              listNotifications.map((val, idx) => {
                return <NotificationItem
                type={val.type}
                value={val.value}
                html={val.html}
                markAsRead = {this.markAsRead}
                key = {val.id}
                />
              })
            }
            
          </ul>
        </div>
      :
        null
      }
      </>
    )
  }
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propType = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications;
