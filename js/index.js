const div = document.getElementById("container");
const savedUser = JSON.parse(localStorage.getItem("token"))
console.log(savedUser);
if(savedUser){

  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      getdata(data.products);
    });
  
  function getdata(items) {
    for (let i = 0; i < items.length; i++) {
      let all = items[i];
      const newDiv = document.createElement("div");    
      newDiv.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col";
  
      newDiv.innerHTML = `
          <div class="relative h-48 overflow-hidden">
              <a href="../single.html?card-id=${all.id}"><img class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="${all.thumbnail}" alt="${items.title}"></a>
          </div>
          <div class="p-5 flex flex-col flex-grow">
              <h2 class="text-lg font-bold text-gray-800 truncate mb-2">${all.title}</h2>
              <p class="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">${all.description}</p>
              <div class="flex justify-between items-center mt-auto">
                  <span class="text-xl font-extrabold text-blue-600">$${all.price}</span>
                  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Sotib olish
                  </button>
              </div>
          </div>
      `;
  
      div.appendChild(newDiv);
    }
  }
}
else{
  alert("siz royxatdan otishingiz kerak")
  window.location.href = "./login.html"
}