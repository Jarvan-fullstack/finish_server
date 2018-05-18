const Notifications = require('../models/notifications');

const getNotifications = (req, res) => {
  Notifications.find(null, null, (err, notifications) => {
    if (err) {
      res.send(err);
    }

    res.json(notifications);
  });
}

const createNotification = (req, res) => {
  let newNotification = Object.assign(new Notifications(), req.body);

  newNotification.save((err, notification) => {
    if (err) {
      res.send(err);
    }

    res.json({ message: 'Notification created successfully' });
  });
}

module.exports = {
  getNotifications,
  createNotification,
};