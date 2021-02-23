ReactDOM.render(React.createElement(Resultado, null), document.getElementsByTagName('Resultado')[0]);
ReactDOM.render(React.createElement(Grafico, null), document.getElementsByTagName('Grafico')[0]);
document.getElementById('dia').innerHTML = '';
for (let i = 1; i <= 31; i++) {
    document.getElementById('dia').innerHTML += '<option>' + i + '</option>';
}
