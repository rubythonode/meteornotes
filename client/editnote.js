Template.editNote.events = {
  'click input[type=submit]': function(event) {
    event.preventDefault();

    var noteTmp = {
      title: $('#title').val(),
      text: $('#text').val()
    }

    Meteor.call('updateNote', this._id, noteTmp, function(error, result){
      if (error)
        return alert(error.reason);

      Router.go('notesList');
    });
  }
}
