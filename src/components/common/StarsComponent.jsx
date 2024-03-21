import React, { Component } from "react";

export default class StarsComponent extends Component {
  render() {
    const { width, height, numStars } = this.props;
    return (
      <>
        {Array.from({ length: numStars }, (_, i) => (
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${parseInt(width)} ${parseInt(height)}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={i}
          >
            <path
              d="M11.9777 0.488647L14.7898 9.1421H23.89L16.5278 14.4902L19.3399 23.1437L11.9777 17.7955L4.61542 23.1437L7.42755 14.4902L0.0652924 9.1421H9.16554L11.9777 0.488647Z"
              fill="#FEB801"
            />
          </svg>
        ))}
      </>
    );
  }
}
