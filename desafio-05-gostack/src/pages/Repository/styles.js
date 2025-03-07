import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const Div = styled.div`
  padding: 20px;
  margin-top: 30px;
  border: 1px solid #eee;
  text-align: center;
`;

export const ButtonOpen = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const ButtonClosed = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const ButtonAll = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const DivPage = styled.div`
  padding: 20px;
  margin-top: 30px;
  border: 1px solid #eee;
  text-align: center;

  button {
    padding: 5px 15px;
    margin-right: 10px;
    border: none;
    border-radius: 10px;
    background: #7159c1;
    color: #fff;
    font-size: 12px;
    font-weight: bold;

    &:disabled {
      opacity: 0.3;
      cursor: no-drop;
    }
  }
`;

export const IssueList = styled.ul`
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
