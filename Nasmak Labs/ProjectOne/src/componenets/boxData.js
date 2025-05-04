// src/components/data/boxData.js

export const boxData = [
  {
    id: 1,
    title: "Total Pending Orders",
    value: "10",
    subTitle: "Current Daily Order",
    subValue: "10000",
    chartType: "bar",
    chartData: {
      labels: ["T", "W", "T", "F"],
      datasets: [
        {
          label: "Orders",
          data: [0, 0, 0, 10],
          backgroundColor: "#7B61FF",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Best Selling Product\nsales Contribution",
    value: "71%",
    subTitle: "Best selling.",
    chartType: "doughnut",
    chartData: {
      labels: ["Contribution"],
      datasets: [
        {
          data: [71, 29],
          backgroundColor: ["#9F8EFF", "#ECE9FF"],
          cutout: "70%",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Your Rating",
    value: "1.3",
    subTitle: "Score",
    subValue: "1.3",
    chartType: "gauge",
    extraInfo: [
      { text: "Canceling - Seller Related", value: "6%", remark: "Very Poor" },
      { text: "Handling Time With SLA", value: "18%", remark: "Very Poor" },
    ],
  },
  {
    id: 4,
    title: "New Product Creation",
    value: "1549",
    subTitle: "Last 14 Days",
    subValue: "Approved: 3928.",
    chartType: "doughnut",
    chartData: {
      labels: ["Rejected Products", "Missing Image", "Poor Quality"],
      datasets: [
        {
          data: [1299, 949, 227],
          backgroundColor: ["#9F8EFF", "#ECE9FF", "#FFD644"],
          cutout: "70%",
        },
      ],
    },
  },
];
