const url = location.search;
const id = new URLSearchParams(url).get("card-id");

// Selectorlarni to'g'ri nuqtalar bilan yozib chiqamiz
const img = document.querySelector(".single_img");
const title = document.querySelector(".single_title");
const price = document.querySelector(".single_pri");
const desc = document.querySelector(".single_text"); // Nuqta qo'shildi
const update = document.querySelector(".updateBtn")
const modal = document.querySelector(".close-modal")
const inpName = document.querySelector(".modalName")
const inpImg = document.querySelector(".modalImage")
const inpPri = document.querySelector(".modalPrice")
const inpDesc = document.querySelector(".modalDesc")
const updateProduct = document.querySelector(".updateProduct")

update.addEventListener("click",updatePro)
function updatePro(){
    modal.className = ".open-modal"    
    updateProduct.addEventListener("click",()=>{
``
        let getValue = {
        title:inpName.value.toLowerCase(),
        thumbnail:inpImg.value.toLowerCase(),
        price:inpPri.value.toLowerCase(),
        description:inpDesc.value.toLowerCase()
    }

    fetch(`https://dummyjson.com/products/${id}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(getValue)
    }) // 1${id} xato edi, ${id} to'g'ri
    .then(res => res.json())
    .then(data => getSingle(data))
    .catch(err => console.error("Xatolik yuz berdi:", err));
    
    
    })
   
}

    fetch(`https://dummyjson.com/products/${id}`) 
    .then(res => res.json())
    .then(data => getSingle(data))
    .catch(err => console.error("Xatolik yuz berdi:", err));
    



function getSingle(one) {
    console.log(one);
    
    // Ma'lumotlarni HTML ga joylaymiz
    img.src = one.thumbnail;
    img.alt = one.title;
    title.innerHTML = one.title;
    price.innerHTML = one.price;
    desc.innerHTML = one.description;
}