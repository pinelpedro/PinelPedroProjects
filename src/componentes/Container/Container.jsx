import React from "react";
import './Container.css'
import PropTypes from 'prop-types'


class Container extends React.Component  {
  render() {
    const { titulo, children } = this.props;

    return (
    <div className="centralizer">
      <div className="container">
        <table className="mesa">
          <div className="titulo h3-primary">{titulo}</div>
          <tbody>
            <tr className="children">
              {React.Children.map(children, (child, index) => (
                <td  key={index}>{child}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}
Container.propTypes = {
    name: PropTypes.string.isRequired
  }

export default Container;


