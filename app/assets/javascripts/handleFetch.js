// at page load
window.addEventListener("load", () => {

  let chart = Chartkick.charts["chart-1"];

  // find all tags with data-chart-type
  const links = document.querySelectorAll(
    "a[data-chart-type]"
  );

  links.forEach((element) => {
    // add click ajax request using jquery on to tags with data-chart-type
    element.addEventListener("click", (event) => {
      event.preventDefault();

    let type = element.dataset.chartType;
    document.getElementById("chart-title").innerHTML = titles[type]; //dynamically update chart title

    $.ajax({
        type:"GET",
        url:"chart_data/fetchInfo",
        dataType:"json",
        data: {type: type},
        success: function(data) {
          let chosenColors = []
          
          //set colors to pie chart slices as chartkick is limited to 20 colors by default
          for (let i = 0; i < Object.values(data).length; i++) {
            let rgbVal = i * 30;
            chosenColors.push(`rgb(${(rgbVal * 3) % 255}, ${(rgbVal) % 255}, 90)`)
          }

          let options = {colors: chosenColors, legend: false, dataset: {borderWidth: 0.25}}

          chart.updateData(data, options)
        }  
        })     
    });
  });
}); 

//convert names for chart title
const titles = {"fname": "First Name", 
                "mname": "Middle Initial",
                "lname": "Last Name",
                "prefix": "Prefix",
                "address1": "Address 1",
                "address2": "Address 2",
                "city": "City",
                "state": "State",
                "zip": "Zip",
                "education": "Education",
                "income": "Income"
              };
