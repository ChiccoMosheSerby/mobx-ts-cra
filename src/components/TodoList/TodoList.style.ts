import styled, { css } from "styled-components";

export const Main = styled.div`
  margin: auto;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 400px;
  border: solid 1px lightgray;
  padding: 10px;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  border: solid 1px lightgray;
  padding: 10px;
  box-sizing: border-box;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    box-sizing: border-box;
    padding: 5px;
    border-bottom: solid 1px lightgray;
    align-items: center;

    .xBtn {
      margin-right: 8px;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      color: lightgray;
      border: solid lightgray 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover {
        color: #fff;
        background: lightgray;
      }
    }
  }
`;

interface styledProps {
  done: boolean;
}
export const Div = styled.div<styledProps>`
  position: relative;
  text-align: left;
  width: calc(100% - 150px);
  box-sizing: border-box;
  word-wrap: break-word;
  padding-right: 3px;
  ${({ done }: styledProps) =>
    done &&
    css`
      text-decoration: line-through;
      color: gray;
    `}

  :after {
    ${({ done }: styledProps) =>
      done &&
      css`
        position: absolute;
        left: 0;
        top: 50%;
        height: 1px;
        background: #c00;
        content: "";
        width: calc(100% - 60px);
        display: block;
      `}
  }
`;

export const Span = styled.span<styledProps>`
  cursor: pointer;
  border: solid 1px lightgray;
  padding: 5px;
  width: 60px;
  color: green;
  ${({ done }: styledProps) =>
    done &&
    css`
      color: red;
    `}
`;
