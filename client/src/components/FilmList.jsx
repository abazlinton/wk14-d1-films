var React = require('react');
var Film = require('./Film.jsx');
var filmsComponents;

var FilmList = React.createClass({

  populateFilmList: function(){
    console.log(this);
    filmsComponents = this.props.films.map(function(filmObject){
      return (
        <Film key={filmObject.id} name={filmObject.name} url={filmObject.url} showTimesURL={filmObject.showTimesURL} />
      )
    });
  },

  render: function(){
    this.populateFilmList();
    return (
      <div className='film-list'>
        {filmsComponents}
      </div>
    )
  }
});

module.exports = FilmList;
