"use client";
import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "@/context/theme";
// import { mockBarData as data } from "@/data/mockData";
// import dynamic from "next/dynamic";

// const ResponsiveBar = dynamic(
//   () => import("@nivo/bar").then((m) => m.ResponsiveBar),
//   { ssr: false }
// );

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    country: "AD",
    "hot dog": 106,
    "hot dogColor": "hsl(358, 70%, 50%)",
    burger: 182,
    burgerColor: "hsl(259, 70%, 50%)",
    sandwich: 102,
    sandwichColor: "hsl(103, 70%, 50%)",
    kebab: 88,
    kebabColor: "hsl(208, 70%, 50%)",
    fries: 164,
    friesColor: "hsl(192, 70%, 50%)",
    donut: 41,
    donutColor: "hsl(322, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 93,
    "hot dogColor": "hsl(149, 70%, 50%)",
    burger: 162,
    burgerColor: "hsl(344, 70%, 50%)",
    sandwich: 42,
    sandwichColor: "hsl(66, 70%, 50%)",
    kebab: 126,
    kebabColor: "hsl(257, 70%, 50%)",
    fries: 180,
    friesColor: "hsl(204, 70%, 50%)",
    donut: 106,
    donutColor: "hsl(136, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 183,
    "hot dogColor": "hsl(358, 70%, 50%)",
    burger: 200,
    burgerColor: "hsl(247, 70%, 50%)",
    sandwich: 72,
    sandwichColor: "hsl(62, 70%, 50%)",
    kebab: 18,
    kebabColor: "hsl(302, 70%, 50%)",
    fries: 114,
    friesColor: "hsl(139, 70%, 50%)",
    donut: 117,
    donutColor: "hsl(224, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 153,
    "hot dogColor": "hsl(354, 70%, 50%)",
    burger: 22,
    burgerColor: "hsl(117, 70%, 50%)",
    sandwich: 61,
    sandwichColor: "hsl(277, 70%, 50%)",
    kebab: 143,
    kebabColor: "hsl(28, 70%, 50%)",
    fries: 33,
    friesColor: "hsl(126, 70%, 50%)",
    donut: 50,
    donutColor: "hsl(246, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 4,
    "hot dogColor": "hsl(85, 70%, 50%)",
    burger: 176,
    burgerColor: "hsl(199, 70%, 50%)",
    sandwich: 28,
    sandwichColor: "hsl(37, 70%, 50%)",
    kebab: 100,
    kebabColor: "hsl(329, 70%, 50%)",
    fries: 112,
    friesColor: "hsl(99, 70%, 50%)",
    donut: 177,
    donutColor: "hsl(95, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 161,
    "hot dogColor": "hsl(174, 70%, 50%)",
    burger: 41,
    burgerColor: "hsl(339, 70%, 50%)",
    sandwich: 119,
    sandwichColor: "hsl(151, 70%, 50%)",
    kebab: 63,
    kebabColor: "hsl(135, 70%, 50%)",
    fries: 189,
    friesColor: "hsl(25, 70%, 50%)",
    donut: 121,
    donutColor: "hsl(210, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 101,
    "hot dogColor": "hsl(338, 70%, 50%)",
    burger: 90,
    burgerColor: "hsl(275, 70%, 50%)",
    sandwich: 48,
    sandwichColor: "hsl(304, 70%, 50%)",
    kebab: 127,
    kebabColor: "hsl(5, 70%, 50%)",
    fries: 2,
    friesColor: "hsl(151, 70%, 50%)",
    donut: 103,
    donutColor: "hsl(102, 70%, 50%)",
  },
];

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //   return (
  //     <ResponsiveBar
  //       data={data}
  //       theme={{
  //         axis: {
  //           domain: {
  //             line: {
  //               stroke: colors.grey[100],
  //             },
  //           },
  //           legend: {
  //             text: { fill: colors.grey[100] },
  //           },
  //           ticks: {
  //             line: { stroke: colors.grey[100], strokeWidth: 1 },
  //             text: { fill: colors.grey[100] },
  //           },
  //         },
  //         legends: { text: { fill: colors.grey[100] } },
  //       }}
  //       keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
  //       indexBy="country"
  //       margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  //       padding={0.3}
  //       valueScale={{ type: "linear" }}
  //       indexScale={{ type: "band", round: true }}
  //       colors={{ scheme: "nivo" }}
  //       defs={[
  //         {
  //           id: "dots",
  //           type: "patternDots",
  //           background: "inherit",
  //           color: "#38bcb2",
  //           size: 4,
  //           padding: 1,
  //           stagger: true,
  //         },
  //         {
  //           id: "lines",
  //           type: "patternLines",
  //           background: "inherit",
  //           color: "#eed312",
  //           rotation: -45,
  //           lineWidth: 6,
  //           spacing: 10,
  //         },
  //       ]}
  //       fill={[
  //         {
  //           match: {
  //             id: "fries",
  //           },
  //           id: "dots",
  //         },
  //         {
  //           match: {
  //             id: "sandwich",
  //           },
  //           id: "lines",
  //         },
  //       ]}
  //       borderColor={{
  //         from: "color",
  //         modifiers: [["darker", 1.6]],
  //       }}
  //       //   axisTop={null}
  //       //   axisRight={null}
  //       axisBottom={{
  //         tickSize: 5,
  //         tickPadding: 5,
  //         tickRotation: 0,
  //         legend: isDashboard ? undefined : "country",
  //         legendPosition: "middle",
  //         legendOffset: 32,
  //         truncateTickAt: 0,
  //       }}
  //       axisLeft={{
  //         tickSize: 5,
  //         tickPadding: 5,
  //         tickRotation: 0,
  //         legend: isDashboard ? undefined : "food",
  //         legendPosition: "middle",
  //         legendOffset: -40,
  //         truncateTickAt: 0,
  //       }}
  //       labelSkipWidth={12}
  //       labelSkipHeight={12}
  //       labelTextColor={{
  //         from: "color",
  //         modifiers: [["darker", 1.6]],
  //       }}
  //       legends={[
  //         {
  //           dataFrom: "keys",
  //           anchor: "bottom-right",
  //           direction: "column",
  //           justify: false,
  //           translateX: 120,
  //           translateY: 0,
  //           itemsSpacing: 2,
  //           itemWidth: 100,
  //           itemHeight: 20,
  //           itemDirection: "left-to-right",
  //           itemOpacity: 0.85,
  //           symbolSize: 20,
  //           effects: [
  //             {
  //               on: "hover",
  //               style: {
  //                 itemOpacity: 1,
  //               },
  //             },
  //           ],
  //         },
  //       ]}
  //       role="application"
  //       ariaLabel="Nivo bar chart demo"
  //       barAriaLabel={(e) =>
  //         e.id + ": " + e.formattedValue + " in country: " + e.indexValue
  //       }
  //     />
  //   );
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
