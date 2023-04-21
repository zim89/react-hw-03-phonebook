import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;

  li {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    color: #5c6bc0;
  }

  button {
    padding: 4px 8px;
    border-radius: 4px;
    color: white;
    background-color: #2979ff;
    transition: all 250ms linear;

    :hover {
      background-color: #e53935;
    }
  }
`;

export { List };
