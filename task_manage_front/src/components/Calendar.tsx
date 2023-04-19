import React, { useState } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .buttons button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
  }

  th {
    padding: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
  }

  td {
    padding: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    text-align: center;
  }
`;

function Calendar() {
  const weeks = ["日", "月", "火", "水", "木", "金", "土"];
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const startDate = new Date(year, month - 1, 1); // 月の最初の日を取得
  const endDate = new Date(year, month, 0); // 月の最後の日を取得
  const endDayCount = endDate.getDate(); // 月の末日
  const startDay = startDate.getDay(); // 月の最初の日の曜日を取得
  let dayCount = 1; // 日にちのカウント
  const calendarRows = [];

  // 日付セルを生成する
  for (let w = 0; w < 6; w++) {
    const calendarCells = [];

    for (let d = 0; d < 7; d++) {
      if (w === 0 && d < startDay) {
        // 1行目で1日の曜日の前
        calendarCells.push(<td key={d}></td>);
      } else if (dayCount > endDayCount) {
        // 末尾の日数を超えた
        calendarCells.push(<td key={d}></td>);
      } else {
        const isFistDay = dayCount === 1;
        const className = isFistDay ? "first-day" : "";
        calendarCells.push(
          <td key={d} className={className}>
            {dayCount}
          </td>
        );
        dayCount++;
      }
    }
    calendarRows.push(<tr key={w}>{calendarCells}</tr>);
    if (dayCount > endDayCount) {
      break;
    }
  }

  // 前月、次月のカレンダーを表示する関数
  const handlePrevMonth = () => {
    setDate(new Date(year, month - 2, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(year, month, 1));
  };

  return (
    <CalendarContainer>
      <div
        className="
    buttons"
      >
        <button onClick={handlePrevMonth}>{"<"}</button>
        <h2>
          {year}年{month}月
        </h2>
        <button onClick={handleNextMonth}>{">"}</button>
      </div>
      <table>
        <thead>
          <tr>
            {weeks.map((week, index) => (
              <th key={index}>{week}</th>
            ))}
          </tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
    </CalendarContainer>
  );
}

export default Calendar;
