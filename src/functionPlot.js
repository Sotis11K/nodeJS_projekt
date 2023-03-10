
import functionPlot from 'function-plot'


window.onload = (event) => {
    const options = {
      target: '#root',
      title: 'Graf',
      width: 740,
      height: 500,
      xAxis: { domain: [-10, 10] },
      yAxis: { domain: [-10, 10] },
      grid: true,
      data: [
        // {
        //   fn: 'x + 8', color: 'hotpink', opcaity: 1
        // },
        // {
        //   fn: 'x + 6', color: 'blue', opcaity: 1
        // },
        // {
        //   fn: 'x + 4', color: 'red', opcaity: 1
        // },
        // {
        //   fn: 'x + 2', color: '#2DF165', opcaity: 1
        // },
        // {
        //   fn: 'x', color: '#2DA4F1', opcaity: 1
        // },
        // {
        //   fn: 'x - 2', color: '#F1F12D', opcaity: 1
        // },
        // {
        //   fn: 'x - 4', color: '#C42DF1', opcaity: 1
        // },
        // {
        //   fn: 'x - 6', color: '#F1AA2D', opcaity: 1
        // },
        // {
        //   fn: 'x - 8 ', color: 'white', opcaity: 1
        // }
        {
          fn: 'x * x', color: 'blue', opacity: 1
        }
        
        

      ]
      
    }
  
  functionPlot(options)
};

