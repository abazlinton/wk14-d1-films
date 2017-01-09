var React = require('react');
var Film = require('./Film.jsx');

var FilmList = React.createClass({

  render: function(){
    return (
      <div className='film-list'>
        <p>I am a film list</p>
        <Film />
      </div>
    )
  }


});

module.exports = FilmList;
