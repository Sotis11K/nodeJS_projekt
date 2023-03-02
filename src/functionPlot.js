

import functionPlot from 'function-plot'

window.onload = (event) => {
    const options = {
      target: '#root',
      title: 'Graf',
      width: 1000,
      height: 500,
      xAxis: { domain: [-5, 5] },
      yAxis: { domain: [-5, 5] },
    
      data: [
        {
          fn: 'x * x', color: 'blue'
        }
      ]
    }
  
  functionPlot(options)
};