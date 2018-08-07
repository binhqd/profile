import React, { Component } from 'react';
import style from './experience.css';

let ListItem = function(props) {
  let ListType = "ul";
  if (props.item.gui && props.item.gui.type) {
    ListType = props.item.gui.type;
  }

  return (
    <li>
      {props.item.key &&
        <p>{props.item.key}:</p>
      }
      <ListType className={props.item.gui.className}>
        {
          props.item.values.map((item, index) => {
            if (item.values) {
              return (
                <ListItem
                  item = {item}
                />
              )
            } else {
              return (
                <li key={index}>{item}</li>
              )
            }
          })
        }
      </ListType>
    </li>
  )
}

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Experience::render()');

    const positions = this.props.positions;

    const experience = positions.map((position, index) => {
      const details = position.description.map((item, j) => {

        if (item.values) {
          return (
            <ListItem
              item = {item}
            />
          )
        } else {
          return (
            <p key={j}>{ item }</p>
          )
        }
      });

      return (
        <div className="item" key={index}>
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{ position.title }</h3>
              <div className="time">{ position.period.from } - { position.period.to ? position.period.to : 'Present' }</div>
            </div>
            <div className="company">{ position.company } - { position.location }</div>
          </div>
          <div className="details">
            <ul className='top-list'>
              { details }
            </ul>

          </div>
        </div>
      );
    });

    return (
      <section className="section experiences-section">

        <h2 className="section-title">
          <i className="fa fa-briefcase" />
          Experience
        </h2>

        { experience }

      </section>
    );
  }
}

export default Experience;
