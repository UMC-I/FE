import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import IcHome from "@shared/assets/icon/ic-home";
import IcStar from "@shared/assets/icon/ic-star";
import IcRecord from "@shared/assets/icon/ic-record";

enum Tab {
  HOME = 1,
  RECORD = 2,
  MY = 3,
}

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Wrapper>
      <BottomLink
        onClick={() => setActiveTab(1)}
        to="/home"
        $active={activeTab === Tab.HOME}
      >
        <IcHome $active={activeTab === Tab.HOME} />
        HOME
      </BottomLink>
      <BottomLink
        onClick={() => setActiveTab(2)}
        to="/record"
        $active={activeTab === Tab.RECORD}
      >
        <IcRecord $active={activeTab === Tab.RECORD} />
        몽땅기록
      </BottomLink>
      <BottomLink
        onClick={() => setActiveTab(3)}
        to="/my"
        $active={activeTab === Tab.MY}
      >
        <IcStar $active={activeTab === Tab.MY} />
        몽카이브
      </BottomLink>
    </Wrapper>
  );
};

export default BottomNavigation;

const Wrapper = styled.nav`
  bottom: 0;
  height: 100px;
  width: 100%;
  max-width: 440px;
  background: linear-gradient(
    to bottom,
    rgba(242, 242, 242, 1) -600%,
    rgba(242, 242, 242, 0.3) 70%,
    rgba(255, 255, 255, 0.19) 81%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 41px;
  border-radius: 20px;
  border-top: 1px solid #ececec;
`;

const BottomLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#6276D9" : "#61646B")};
  &:hover {
    color: ${({ $active }) => ($active ? "#6276D9" : "#61646B")};
  }
`;
