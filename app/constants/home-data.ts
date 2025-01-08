export const homePageData = {
  firstPart: [
    {
      id: 1,
      title: "Patient",
      seeDetailPath: "",
      totalCount: 1908,
      increament: 10,
      chartData: {
        type: "line",
        data: {
          labels: ["may", "june", "july", "aug", "sept", "oct", "nov"],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              // fill: false,
              borderColor: "rgb(75, 192, 192)",
              // tension: 0.1
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow resizing
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    },
    {
      id: 2,
      title: "Appointment",
      seeDetailPath: "",
      totalCount: 1908,
      increament: 10,
      chartData: {
        type: "bar",
        data: {
          labels: ["may", "june", "july", "aug", "sept", "oct", "nov"],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow resizing
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    },
    {
      id: 3,
      title: "Bedroom",
      seeDetailPath: "",
      totalCount: 1908,
      increament: 25,
      chartData: {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow resizing
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    },
    {
      id: 4,
      title: "Surgery",
      seeDetailPath: "",
      totalCount: 24,
      increament: 10,
      chartData: {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow resizing
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    },
  ],
  secondPart: {
    id: 2,
    title: "Visitor",
    seeDetailPath: "",
    totalCount: 1908,
    increament: 10,
    chartData: {
      type: "bar",
      data: {
        labels: ["may", "june", "july", "aug", "sept", "oct", "nov"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Allow resizing
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    },
  },
  thirdPart: {
    id: 2,
    title: "Consultation",
    seeDetailPath: "",
    totalCount: 1908,
    increament: 10,
    chartData: {
      type: "radar",
      data: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
        ],
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    },
  },
};
