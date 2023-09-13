'use strict'

const contatos = [
    {
        nome: 'Stef',
        mensagem: 'eu quero só os manos comigo',
        notificacoes: '4',
        tempo: 'agora',
        foto: 'stef.jpg',
        contato: 'Guigui'
    },
    {
        nome: 'yunk vino',
        mensagem: 'contar animais já virou normal',
        notificacoes: '23',
        tempo: 'Há 9 minutos',
        foto: 'vino.jpg',
        contato: 'Guigui'
    },
    {
        nome: 'derek',
        mensagem: 'essa eu trouxe de LA',
        notificacoes: '9',
        tempo: 'Há 16 minutos',
        foto: 'derek.jpg',
        contato: 'Guigui'
    },
    {
        nome: 'Japa',
        mensagem: 'tá tudo tão lindo em 2036',
        notificacoes: '1',
        tempo: 'Há 1 hora',
        foto: 'japa.jfif',
        contato: 'Guigui'
    },
    {
        nome: 'Rudies flacko',
        mensagem: 'como q vou ficar broke???',
        notificacoes: '6',
        tempo: 'Há 2 horas',
        foto: 'rudies.jfif',
        contato: 'Guigui'
    }
]

function mostrarCards(contatos){

    const container = document.getElementById('card-container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${contatos.foto}`
    img.alt = contatos.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('info')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCt = document.createElement('h3')
    nomeCt.classList.add('nomeCtt')
    nomeCt.textContent = contatos.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('notificacoes')
    qtdMensagem.textContent = contatos.notificacoes

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = contatos.mensagem

    nomeContato.replaceChildren(nomeCt, qtdMensagem)

    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = contatos.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = contatos.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

contatos.forEach(mostrarCards)