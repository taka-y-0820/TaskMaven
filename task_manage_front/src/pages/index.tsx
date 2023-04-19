import React, { useState } from "react";
import styled from "styled-components";
import TabMenu from "../components/TabMenu";
import Calendar from "../components/Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTaskMaven = styled.h1`
  margin-left: 20px;
  font-family: "Roboto", sans-serif;
`;

const StyledCurrentTime = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;

const StyledCrockIcon = styled.span`
  margin-right: 10px;
`;

function App() {
  const tabs = [
    { key: "tab1", title: "Schedule", content: <Calendar /> },
    { key: "tab2", title: "Memo", content: <div>Tab 2 Content</div> },
    { key: "tab3", title: "Goal Setting", content: <div>Tab 3 Content</div> },
    {
      key: "tab4",
      title: "Progress",
      content: <div>Tab 3 Content</div>,
    },
  ];

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <StyledHeader>
        <StyledTaskMaven>Task Maven</StyledTaskMaven>
        <StyledCurrentTime>
          <StyledCrockIcon>
            <FontAwesomeIcon icon={faClock} />
          </StyledCrockIcon>
          {currentTime}
        </StyledCurrentTime>
      </StyledHeader>
      <TabMenu tabs={tabs} />
    </div>
  );
}

export default App;
