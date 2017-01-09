var React = require('react');

var Film = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    showTimesURL: React.PropTypes.string.isRequired,
  },

  render: function(){
    return (
      <table className='film'>
      <tbody>
      <tr>
        <td><a href={this.props.url}>{this.props.name}</a></td>
        <td><a href={this.props.showTimesURL}>Showtimes</a></td>
      </tr>
      </tbody>
      </table>
    )
  }


});


module.exports = Film;
