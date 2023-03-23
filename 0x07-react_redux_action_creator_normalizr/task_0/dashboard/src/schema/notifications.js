import * as notificationsData from '../../../../notifications.json';

// Function should return a list containing CONTEXT objects from notifications.json
// data when the author id is same as the userId
export function getAllNotificationsByUser(userId){
    // Filter the notifications data to get only the notifications with matching author id
    const userNotifications = notificationsData.filter(notification => notification.author.id === userId);
    // Return a list containing all the context objects from the filtered notifications data
    return userNotifications.map(notification => notification.context);
}