import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
}); // fazer com que não seja gerado pelo SSR e somente pelo browser

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-05-18T00:00:00.000Z',
      '2022-05-19T00:00:00.000Z',
      '2022-05-20T00:00:00.000Z',
      '2022-05-21T00:00:00.000Z',
      '2022-05-22T00:00:00.000Z',
      '2022-05-23T00:00:00.000Z',
      '2022-05-24T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const series = [
  { name: 'series1', data: [31, 120, 123, 10, 28, 55, 10] }
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="5" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            padding={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">  Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">  Taxa de Abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

        </SimpleGrid>
      </Flex>


    </Flex>

  );
}