var car = document.getElementById("car")
var bike = document.getElementById("bike")
var health = document.getElementById("health")
var life = document.getElementById("life")
var travel = document.getElementById("travel")

//banners
var carBanner = document.querySelector("._car_service_banner")
var bikeBanner = document.querySelector("._bike_service_banner")
var healthBanner = document.querySelector("._health_service_banner")
var lifeBanner = document.querySelector("._life_service_banner")
var travelBanner = document.querySelector("._travel_service_banner")


window.onload = function () {
    car.classList.add("active")
    //banner
    carBanner.classList.remove("d-none")
}

bike.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.add("active")
    //banner
    carBanner.classList.add("d-none")
    bikeBanner.classList.remove("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")

})
car.addEventListener("click", function (event) {
    health.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    car.classList.add("active")
    //banner
    carBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
health.addEventListener("click", function (event) {
    car.classList.remove("active")
    life.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    health.classList.add("active")

    //banner
    healthBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
life.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.add("active")

    //banner
    lifeBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    travelBanner.classList.add("d-none")
})
travel.addEventListener("click", function (event) {
    car.classList.remove("active")
    health.classList.remove("active")
    travel.classList.remove("active")
    bike.classList.remove("active")
    life.classList.remove("active")
    travel.classList.add("active")

    //banner
    travelBanner.classList.remove("d-none")
    bikeBanner.classList.add("d-none")
    carBanner.classList.add("d-none")
    healthBanner.classList.add("d-none")
    lifeBanner.classList.add("d-none")
})

//video section
const crrentVideo = document.getElementById("_current_video")
const currentTitle = document.getElementById("title")
const videoList = document.getElementsByClassName("_video")

for (let i = 0; i < videoList.length; i++) {
    const listSrc = videoList[i].children.item("div").children.item("div").children.item("video").src
    const text = videoList[i].children[1].children[0].innerText

    videoList[i].addEventListener("click", () => {
        crrentVideo.src = listSrc
        currentTitle.innerText = text
        crrentVideo.play()
    })
}