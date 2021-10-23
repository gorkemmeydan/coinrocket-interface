import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100vw;
  margin-top: 20px;
  height: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface LogoAndNameWrapperProps {
  homePageHover: boolean;
}

export const LogoAndNameWrapper = styled.div<LogoAndNameWrapperProps>`
  margin-left: 10vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  &:hover {
    cursor: ${(p: LogoAndNameWrapperProps) =>
      p.homePageHover ? 'pointer' : null};
  }
`;

export const LogoContainer = styled.div`
  transform: rotate(20deg);
  height: 80px;
  width: 80px;
  fill: white;
`;

export const CompanyName = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2rem;
`;

export const LaunchAppButton = styled.div`
  margin-right: 10vw;
  height: 60px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    cursor: pointer;
    border: 3px solid white;
    transition: linear 50ms;
  }
`;
