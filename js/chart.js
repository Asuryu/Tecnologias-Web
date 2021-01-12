google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart6);

$(window).resize(function(){
    drawChart1();
    drawChart2();
    drawChart3();
    drawChart4();
    drawChart5();
    drawChart6();
});

function drawChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.backgroundColor
    data.addRows([
    ['0-14', 1778],
    ['15-64', 10417],
    ['≥ 65', 3666]
    ]);
    var options = {
        backgroundColor: 'transparent',
        titleTextStyle: { 
            color: "white",
            fontSize: "18"
        },
        legend: {
            textStyle: {color: "white"}
        },
        title: 'Distribuição dos utentes inscritos por grupos etários',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        legend: {
            position: "bottom",
            textStyle: {color: "white"}
        },
        
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('graph1'));
    chart.draw(data, options);

}
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ["Países", "Nacionalidades", { role: "style" } ],
        ["Brasil", 132, "#F8B384"],
        ["Angola", 71, "#D98E73"],
        ["Espanha", 37, "#F0978C"],
        ["Cabo Verde", 32, "color: #D9737D"],
        ["Ucrânia", 24, "color: #F884CA"],
        ["Roménia", 20, "color: #BD8AFA"],
        ["Guiné-Bissau", 17, "color: #8B86D9"],
        ["Itália", 17, "color: #93B6FA"],
        ["Alemanha", 11, "color: #82BAD9"],
        ["Índia", 10, "color: #e5e4e2"],
    ]);
  
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, { 
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation" 
    }, 2]);
  
    var options = {
        backgroundColor: "transparent",
        title: "10 principais nacionalidades dos utentes da USF",
        bar: {groupWidth: "95%"},
        hAxis: {
            textStyle: {color: "white"}
        },
        titleTextStyle: { 
            color: "white",
            fontSize: "18"
        },
        animation:{
            duration: 500,
            easing: 'out',
        },
        legend: {
            position: "none",
            textStyle: {color: "white"}
        },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("graph2"));
    chart.draw(view, options);
}
function drawChart3() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Medicamentos', 'MCDT'],
        ['2010', 260.52, 78.14],
        ['2011', 155.61, 52.69],
        ['2012', 142.69, 48.32],
        ['2013', 133.71, 50.48],
        ['2014', 144.67, 64.07],
        ['2015', 133.40, 49.11],
        ['2016', 125.74, 49.46],
        ['2017', 124.678, 54.678],
      ]);

      var options = {
        backgroundColor: 'transparent',
        title: 'Indicadores de eficiência',
        legend: {
            position: "bottom",
            textStyle: {color: "white"}
        },
        hAxis: {textStyle: {color: "white"}},
        titleTextStyle: { 
            color: "white",
            fontSize: "18"
        },
      };

      var chart = new google.visualization.LineChart(document.getElementById('graph3'));

      chart.draw(data, options);

}
function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['Ano', 'Metas', 'Resultados'],
        ['2014', 63.00, 64.07],
        ['2015', 46.67, 61.32],
        ['2016', 55.8, 53.0],
        ['2017', 35.5, 63.607]
      ]);
  
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1, { 
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation" 
    }, 2]);
  
    var options = {
        backgroundColor: "transparent",
        title: "Despesa MCDT’s prescritos, por utilizador",
        bar: {groupWidth: "95%"},
        hAxis: {
            textStyle: {color: "white"}
        },
        titleTextStyle: { 
            color: "white",
            fontSize: "18"
        },
        animation:{
            duration: 500,
            easing: 'out',
        },
        legend: {
            position: "bottom",
            textStyle: {color: "white"}
        },
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("graph4"));
    chart.draw(view, options);
}
function drawChart5() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.backgroundColor
    data.addRows([
    ['Sem Médico', 0.10],
    ['Emília Nina', 0.114],
    ['Olga Soares', 0.10],
    ['Teresa Tomé', 0.133],
    ['Rosa Lima', 0.099],
    ['Lurdes Silva', 0.11],
    ['Joaquim Monteiro', 0.138],
    ['Otília Santos', 0.102],
    ['Cristina Fagulha', 0.102],
    ['Luís Pinto', 0.102],

    ]);
    var options = {
        backgroundColor: 'transparent',
        titleTextStyle: { 
            color: "white",
            fontSize: "18"
        },
        legend: {
            position: "left",
            textStyle: {color: "white"}
        },
        title: 'Percentagem de doentes por médico',
        colors: [
            '#FF9E70', 
            '#E0816E', 
            '#F57A78', 
            '#E06EA3',
            '#BF7DFF', 
            '#9179E0', 
            '#848AF6', 
            '#799AE0', 
            '#6BC0FA', 
            '#00caff', 
        ],
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('graph5'));
    chart.draw(data, options);

}
function drawChart6() {
    var data = google.visualization.arrayToDataTable([
        ['Gang', 'Sim', 'Não', { role: 'annotation' } ],
        ['Nrº Utente', 756, 0, ''],
        ['Morada', 699, 40, ''],
        ['Fixo', 383, 370, ''],
        ['Telmóvel', 566, 717, ''],
        ['E-mail', 158, 364, ''],
        ['Sist. Saúde', 575, 278, ''],
        ['Nº Seg. Social', 663, 94, ''],
        ['NIF', 739, 18, '']
      ]);

      var options = {
        bar: { groupWidth: '75%' },
        isStacked: true,
        colors: ['#beff69','#ff637d'],
        backgroundColor: 'transparent',
        titleTextStyle: { 
            color: "white",
            fontSize: "18"
        },
        hAxis: {
            textStyle: {color: "white"}
        },
        legend: {
            position: "bottom",
            textStyle: {color: "white"}
        },
        title: 'Registo dos utentes na USF',
      };

      var chart = new google.visualization.ColumnChart(document.getElementById("graph6"));
      chart.draw(data, options);
}