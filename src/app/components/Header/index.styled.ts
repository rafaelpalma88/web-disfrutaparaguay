import styled from "styled-components";

export const HeaderWrapper = styled.header`
  /* background-color: #333; */
  /* color: #fff; */
  padding: 10px 20px;
  border-bottom: 1px solid #333;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.h1`
  margin: 0;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      margin-top: 10px;
    }

    li {
      margin: 0 10px;
    }
  }
`;
