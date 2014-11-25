Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  afterCreated: function() {
    var now = new Date().getTime()
    var duration = Math.floor((now - this.submitted) / 1000);
    var seconds = duration % 60;
    var minutes = Math.floor(duration / 60) % 60;
    var hours = Math.floor(duration / 3600) % 24;
    var days = Math.floor(duration / 86400);

    if (days)
      return (days === 1) ? days + ' day' : days + ' days';
    else if (hours)
      return (hours === 1) ? hours + ' hour' : hours + ' hours';
    else if (minutes)
      return (minutes === 1) ? minutes + ' minute' : minutes + ' minutes';
    else
      return (seconds === 1) ? seconds + ' second' : seconds + ' seconds';
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  }
});

Template.postItem.events({
  'click .upvotable': function (e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});