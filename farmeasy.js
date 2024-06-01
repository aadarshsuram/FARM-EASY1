let con1 = document.getElementById("con1");
let head1 = document.getElementById("head1");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let para5 = document.getElementById("para5");
let para6 = document.getElementById("para6");
let para7 = document.getElementById("para7");
let image1 = document.getElementById("image1");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");


let product=[
     {
        productname : "Liquid Waste Decomposer (Developed By Dr. Krishan Chandra), Control All Types Of Soil-Borne, Foliar Diseases, Insects, And Pests.",
        productimage: "image/Liquid Waste Decomposer.jpg",
        productprice:" 750"
    },

     {
        productname : "NETSURF Biofit Stim Rich Promoter for Plant Growth And Helps To Increase Yield.",
        productimage: "image/NETSURF Biofit Stim.jpg",
        productprice:" 1150"
    }
]



function products(todo){
image1.src=todo.productimage
image1.classList.add("shop_product_image");
head1.textContent=todo.productname;
icon1.classList.add("fa","fa-star");
icon2.classList.add("fa","fa-star");
icon3.classList.add("fa","fa-star");
icon4.classList.add("fa","fa-star") ; 
icon5.classList.add("fa","fa-star") ;
para1.textContent=" 2 ratings View Similar Products";
para2.textContent="Company / Manufacture Jagannath Bio Tech Pvt. Ltd.";
para3.classList.add("fa","fa-inr");
para3.textContent=todo.productprice+"free delivery";
para4.textContent="pin code";
para5.textContent="order quantity";
}

function d(){
for(let todo of product){
    products(todo)
}
}
function dd(){
let link1 = document.createElement("a")
link
}




// let con1 = document.getElementById("con1");

// let div1 = document.createElement("div");
// div1.classList.add("d-flex","flex-row")
// con1.appendChild(div1);

// let div2=document.createElement("div")
// div1.appendChild(div2)

// let image1 = document.createElement("img");
// image1.src="image/Liquid Waste Decomposer.jpg";
// image1.classList.add("jsimage")
// div2.appendChild(image1);

// let div3=document.createElement("div")
// div1.appendChild(div3)

// let head1 = document.createElement("h1");
// head1.textContent="Liquid Waste Decomposer (Developed By Dr. Krishan Chandra), Control All Types Of Soil-Borne, Foliar Diseases, Insects, And Pests.";
// head1.classList.add("jsheading")
// div3.appendChild(head1)

// let rating1 = document.createElement("i")
// rating1.classList.add("fa","fa-star")
// div3.appendChild(rating1)
// let rating2 = document.createElement("i")
// rating2.classList.add("fa","fa-star")
// div3.appendChild(rating2)
// let rating3 = document.createElement("i")
// rating3.classList.add("fa","fa-star")
// div3.appendChild(rating3)
// let rating4 = document.createElement("i")
// rating4.classList.add("fa","fa-star")
// div3.appendChild(rating4)
// let rating5 = document.createElement("i")
// rating5.classList.add("fa","fa-star")
// div3.appendChild(rating5)







   
