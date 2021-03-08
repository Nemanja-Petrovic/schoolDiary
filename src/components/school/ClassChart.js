import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";

const ChartWrapper = styled.div`
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 2rem auto 0;
  }
`;

const ClassChart = ({ studentList }) => {
  const classAverages = studentList.reduce((acc, currentVal, i, { length }) => {
    return acc + currentVal.average / length;
  }, 0);
  const studentAverages = studentList.map((student) =>
    parseInt(student.average)
  );

  const options = {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: `Class average: ${classAverages.toFixed(2)}`,
      fontSize: 20,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            min: 1,
            max: 5,
            stepSize: 0.5,
          },
        },
      ],
    },
  };

  const data = {
    labels: studentList.map((student) => student.firstName),
    datasets: [
      {
        label: `Average mark`,
        data: studentAverages,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <ChartWrapper>
      <Bar data={data} options={options} />;
    </ChartWrapper>
  );
};

export default ClassChart;
