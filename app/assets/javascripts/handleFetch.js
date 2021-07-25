window.addEventListener("load", () => {

  let chart = Chartkick.charts["chart-1"];

  const colors = ["red", "blue", "green", "yellow", "purple"]
  const titles = {"fname": "First Name", 
                "mname": "Middle Name",
                "lname": "Last Name",
                "prefix": "Prefix",
                "address1": "Address 1",
                "address2": "Address 2",
                "city": "City",
                "state": "State",
                "zip": "Zip",
                "education": "Education",
                "income": "Income"
              }

  const links = document.querySelectorAll(
    "a[data-chart-type]"
  );

  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

    let type = element.dataset.chartType;
    document.getElementById("chart-title").innerHTML = titles[type];

    $.ajax({
        type:"GET",
        url:"chart_data/fetchInfo",
        dataType:"json",
        data: {type: type},
        success: function(data) {
          let chosenColors = []
          
          for (let i = 0; i < Object.values(data).length; i++) {
            chosenColors.push(colors[Math.floor(Math.random() * colors.length)])
          }
          let options = {colors: chosenColors, legend: false, dataset: {borderWidth: 1}}

          chart.updateData(data, options)
        }  
        })     
    });
  });
}); 

