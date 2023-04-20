import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Tab {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface TabMenuProps {
  tabs: Tab[];
}

const TabMenuWrapper = styled.div<{}>`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabMenuContent = styled.div<{}>`
  width: 100%;
  height: calc(100vh - 50px);
`;

interface TabMenuButtonsProps {
  tabCount: number;
}

const TabMenuButtons = styled.div<TabMenuButtonsProps>`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    width: calc(100% / ${(props) => props.tabCount});
    padding: 0.5rem;
    background-color: #f1f1f1;
    border: none;
    border-bottom: 3px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }

    &.active {
      background-color: #fff;
      color: #333;
      border-bottom: 3px solid #333;
    }
  }
`;

function TabMenu({ tabs }: TabMenuProps) {
  const [selectedTab, setSelectedTab] = useState<string>("");

  useEffect(() => {
    setSelectedTab(tabs[0].key);
  }, []);

  const handleClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <TabMenuWrapper>
      <TabMenuButtons tabCount={tabs.length}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleClick(tab.key)}
            className={selectedTab === tab.key ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </TabMenuButtons>
      <TabMenuContent>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            style={{ display: selectedTab === tab.key ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </TabMenuContent>
    </TabMenuWrapper>
  );
}

export default TabMenu;
