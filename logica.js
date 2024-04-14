var altura = 0
var largura = 0
var morte = 0
var chances = 2

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

function clicado(){
	morte = morte + (-1)
}
/*inicio logica de tamanho de mosquitos aleatorios*/
var mosquitao = document.getElementById("mosquitao")
function randomImg(){
	var numero = Math.floor(Math.random() * 3) + 1;
	if (numero == 1){
		mosquitao = document.getElementById("mosquitao").style.width = "50px"
	} else if (numero == 2){
		mosquitao = document.getElementById("mosquitao").style.width = "80px"
	} else if (numero == 3){
		mosquitao = document.getElementById("mosquitao").style.width = "100px"
	}
	ajustaTamanhoPalcoJogo()
	if (chances == morte){
		window.location.href = 'fim_de_jogo.html'
	} else {
		morte = morte + 1
		document.getElementById('v' + morte).src = "imagens/coracao_vazio.png"
	}
}
setInterval(randomImg, criaMosquitoTempo)
/*fim logica de tamanho de mosquitos aleatorios*/
/*inicio logica de lugar do mosquitos aleatorios*/
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	document.getElementById("mosquitao").style.top = posicaoY + 'px'
	document.getElementById("mosquitao").style.left = posicaoX + 'px'
}
/*fim logica de lugar do mosquitos aleatorios*/
function win(){
	window.location.href = 'vitoria.html'
}
setTimeout(win, 10000)