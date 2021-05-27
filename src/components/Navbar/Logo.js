/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Logo = () => (
  <h2 css={styles}>
    ATHLETE <span>FIT</span>
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  span {
    color: #00FF00;
  }
`;

export default Logo;
