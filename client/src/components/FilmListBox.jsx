var React = require('react');
var FilmList = require('./FilmList.jsx');

var FilmListBox = React.createClass({

  render: function(){
    return (
      <div className='film-list-box'>
        <h1>UK Opening This Week</h1>
        <FilmList />
      </div>
    )
  }
});

module.exports = FilmListBox;
