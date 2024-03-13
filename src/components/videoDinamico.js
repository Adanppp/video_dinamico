class videoDinamico extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())

    }

    build() {

        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "conteiner")

        const low = document.createElement("div")
        low.setAttribute("class", "low")

        const videoTitle = document.createElement("h1")
        videoTitle.textContent = this.getAttribute("title")

        const channelName = document.createElement("span")
        channelName.textContent = this.getAttribute("name")

        low.appendChild(videoTitle)
        low.appendChild(channelName)

        const details = document.createElement("ol")
        details.setAttribute("class", "detail")

        const view = document.createElement("li")
        const time = document.createElement("li")

        view.textContent = this.getAttribute("view")
        time.textContent = this.getAttribute("time")

        details.appendChild(view)
        details.appendChild(time)

        low.appendChild(details)

        const top = document.createElement("div")
        top.setAttribute("class", "top")

        const photo = document.createElement("img")
        photo.src = this.getAttribute("photo")

        top.appendChild(photo)

        componentRoot.appendChild(top)
        componentRoot.appendChild(low)

        return componentRoot
    }

    style() {
        const style = document.createElement("style")
        style.textContent = `
    .conteiner {
        margin: 1rem;
        padding: 1rem;
        width: 400px;
    }
    
    
    .top>img {
        height: 200px;
        border-radius: 1rem;
        display: grid;
    }
    
    
    .low>h1 {
        color: aliceblue;
        font-size: 27px;
        display: grid;
    }
    
    .name {
        color: aliceblue;
        padding: 1rem;
    }
    
    .detail {
        color: aliceblue;
        font-size: 15px;
        padding-left: 1rem;
        display: flex;
        flex-direction: row;
        width: 300px;
        list-style: none;
    }
    
    .time {
        padding-left: 10px;
        list-style: circle;
    }
    
    `

        return style
    }

}


customElements.define("box-model", videoDinamico)