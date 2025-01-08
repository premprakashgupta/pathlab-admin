// components/BarChart.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


type ChartProps = {
  data: any;
};

const CustomChart: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Initialize Chart.js
      chartInstance.current = new Chart(chartRef.current, {
        type: data.type, // Bar chart type
        data: data.data,
        options: data.options,
      });
    }

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default CustomChart;
