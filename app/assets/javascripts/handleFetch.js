window.addEventListener("load", () => {

  let chart = Chartkick.charts["chart-1"];

  const links = document.querySelectorAll(
    "a[data-chart-type]"
  );

  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

    let type = element.dataset.chartType;

    $.ajax({
        type:"GET",
        url:"chart_data/fetchInfo",
        dataType:"json",
        data: {type: type},
        success: function(data) {
          chart.updateData(data) 
        }  
        })     
    });
  });
}); 

