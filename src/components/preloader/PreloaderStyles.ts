import styled from '@emotion/styled';

export const Loader = styled.div`
  & {
    height: 60px;
    display: flex;
    position: relative;
  }
  &:before {
    content: '';
    position: absolute;
  }
  &::before,
  span {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #3b3b3b;
    animation-name: to-right;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  span:nth-child(even) {
    visibility: hidden;
  }

  span:first-child {
    animation-name: scale-up;
  }

  span:last-child {
    animation-name: scale-up;
    animation-direction: reverse;
  }

  @keyframes to-right {
    to {
      transform: translateX(200%);
    }
  }

  @keyframes scale-up {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
