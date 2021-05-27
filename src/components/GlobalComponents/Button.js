/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Button = ({ text }) => (
  <a css={styles} href="#/" className="btn">
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  background: #00FF00;
  color: #fff;
  font-size: 14px;
  padding: 12px 14px;
  transition: background 500ms ease-in-out;
  &:hover {
    background: #00FF00;
  }
`;

export default Button;
