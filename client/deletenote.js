Template.deleteNote.events({
  'click .deleteConfirm': function(e){
    e.preventDefault();

    Meteor.call('deleteNote', this._id, function(error, result){
      if (error)
        return alert(error.reason);

      Router.go('notesList');
    });
  }
});
