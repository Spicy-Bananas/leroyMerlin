import React, { Component } from "react";

import { ReactComponent as Checked } from "./img/checked.svg";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      onclick,
      id,
      image,
      title,
      description,
      checkedImgOnClick,
      filter
    } = this.props;
    return (
      <div className="step-card">
        <div className="container__img" onClick={onclick}>
          <div className={`filter ${filter}`}>
            <Checked className="filter__checked"></Checked>
          </div>
          <img alt="img_alt" src={image} onClick={checkedImgOnClick} />
        </div>

        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    );
  }
}

export default Card;
