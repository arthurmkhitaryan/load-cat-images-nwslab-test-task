import styled from "styled-components/macro";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const DashboardTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const DashboardImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  height: 100%;
  padding: 20px;
`;
