var favChannels = [
    {img_url: "/Images/014.jpg"},
    {img_url: "/Images/015.jpg"},
    {img_url: "/Images/016.jpg"},
    {img_url: "/Images/017.jpg"},
    {img_url: "/Images/018.jpg"},
    {img_url: "/Images/019.png"},
    {img_url: "/Images/020.png"},
    {img_url: "/Images/021.jpg"},
    {img_url: "/Images/022.jpg"},
    {img_url: "/Images/023.png"},
    {img_url: "/Images/024.png"},
    {img_url: "/Images/025.jpg"}
]

favChannels.map(function(elem) {
    var div = document.createElement("div");
    div.setAttribute("src", elem.img_url);

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
});

localStorage.setItem("favChannels", JSON.stringify(favChannels));