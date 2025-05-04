// src/components/Box.jsx

import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Box1({ box }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md lg:w-[143.75px] h-[248px]  w-[178.5px] md:w-[141px] flex flex-col items-center">
      <h2 className="text-gray-700 text-sm font-semibold text-center">{box.title}</h2>
      <div className="flex justify-center items-center w-full h-24 mt-2">
        {box.chartType === "bar" && (
          <Bar data={box.chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        )}
        {box.chartType === "doughnut" && (
          <Doughnut data={box.chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        )}
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl font-bold">{box.value}</p>
        <p className="text-xs text-gray-500 mt-1 whitespace-pre-line">{box.subTitle}</p>
        <p className="text-xs font-semibold text-gray-800 whitespace-pre-line">{box.subValue}</p>
      </div>
      {box.extraInfo && (
        <div className="mt-4 text-xs text-red-500">
          {box.extraInfo.map((info, idx) => (
            <p key={idx}>{info.text} {info.value} - {info.remark}</p>
          ))}
        </div>
      )}
    </div>
  );
}
