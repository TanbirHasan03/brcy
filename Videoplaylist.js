

const vidlist = [
    {
        video: './videos/01.mp4',
        title: '01. Next Capture take your mind'
    },
    {
        video: './videos/02.mp4',
        title: '02. Nature left here'
    },
    {
        video: './videos/03.mp4',
        title: '03. Back to Green nature'
    },
    {
        video: './videos/04.mp4',
        title: '04. Full option to visit best view in canada'
    },
    {
        video: './videos/05.mp4',
        title: '01. Next Capture take your mind'
    },
    {
        video: './videos/06.mp4',
        title: '02. Nature left here'
    },
    {
        video: './videos/07.mp4',
        title: '03. Back to Green nature'
    },
    {
        video: './videos/08.mp4',
        title: '04. Full option to visit best view in canada'
    },
    {
        video: './videos/05.mp4',
        title: '01. Next Capture take your mind'
    },
    {
        video: './videos/06.mp4',
        title: '02. Nature left here'
    },
    {
        video: './videos/07.mp4',
        title: '03. Back to Green nature'
    },
    {
        video: './videos/08.mp4',
        title: '04. Full option to visit best view in canada'
    },
]

const playlist = [...new Set(vidlist.map((item) => {
    return item
}))]


document.getElementById('list-play').innerHTML = playlist.map((item) => {
    var { video, title } = item

    return (
        " <div class='list'>" +
        " <video class='list-video' src='" + video + "'>" + " </video>" +
        " <h5 class='list-title'>" + title + " </h5>" +
        "</div>"
    )
}).join('')


let listPlay = document.querySelectorAll('.list-play .list')

console.log(listPlay.length + ' count')



listPlay.forEach(playl => {
    playl.onclick = () => {
        listPlay.forEach(remove => {
            remove.classList.remove('active')
        })
        playl.classList.add('active')
        let playL_src = playl.querySelector('.list-video').src
        console.log('playL_src'+playL_src)
        document.querySelector('.main-video').src = playL_src
        document.querySelector('.main-video').play()


        let playL_title = playl.querySelector('.list-title').innerText
        console.log('playL_title'+playL_title)
        document.querySelector('.main-title').innerText = playL_title

    }
})

