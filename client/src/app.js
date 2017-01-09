var React = require('react');
var ReactDOM = require('react-dom');
var FilmListBox = require('./components/FilmListBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <FilmListBox />,
    document.getElementById('app')
  );
}
