import ReactEcharts from "echarts-for-react"; 


const option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

const PieChart = ()=>{
return (
  <div>
      <ReactEcharts option={option} />
    </div>)
}
export default PieChart;