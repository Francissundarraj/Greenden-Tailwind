var search = document.getElementById("search")
var productcontainer = document.getElementById("products-container")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var givenValue = event.target.value.toUpperCase()

    for(lamb=0;lamb<productlist.length;lamb=lamb+1) {

        var productname = productlist[lamb].querySelector("h3").textContent

        if(productname.toUpperCase().indexOf(givenValue)<0){
            productlist[lamb].style.display="none"
        }

        else {
            productlist[lamb].style.display="block" 
        }
    }
})