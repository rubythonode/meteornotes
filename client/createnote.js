Template.createNote.events = {
  'click input[type=submit]': function(event) {
    event.preventDefault();

    var newNote = {
      title: $('#title').val(),
      text: $('#text').val()
    }

    Meteor.call('createNote', newNote, function(error, result){
      if (error)
        return alert(error.reason);

      Router.go('notesList');
    });
  }
}
