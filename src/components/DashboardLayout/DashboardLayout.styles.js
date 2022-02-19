import styled from "styled-components/macro";

export const DashboardLayoutWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const DashboardLayoutSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background: black;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;

  & > a {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    margin: 20px auto;
  }

  @media (max-width: 768px) {
    & > a {
      font-size: 16px;
    }
  }

  @media (max-width: 600px) {
    & > a {
      font-size: 12px;
      margin: 10px auto;
    }
  }
`;

export const DashboardLayoutContent = styled.div`
  width: 80%;
  height: 100%;
`;

export const Line = styled.div`
  height: 2px;
  width: 80%;
  margin: 10px auto;
  background: white;
`;
