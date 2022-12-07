import ReactEcharts from "echarts-for-react"; 


const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '1%',
      bottom: 'bottom'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1148, name: 'France 4260 Sales' },
          { value: 735, name: 'Italy 3970 Sales' },
          { value: 580, name: 'Japan 4260 Sales' },
          { value: 884, name: 'Canada 3970 Sales' },
          
        ]
      }
    ]
  };

const LineChart = ()=>{
return (
  <div>
      <ReactEcharts option={option} />
    </div>)
}
export default LineChart;