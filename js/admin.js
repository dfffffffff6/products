const savedAdmin = JSON.parse(localStorage.getItem("tokenAdmin"))
const div = document.getElementById("container");

const out = document.querySelector("#SignOut")

if(savedAdmin){
    const signOut = function(){
        localStorage.removeItem("tokenAdmin")
    window.location.href = "./login.html"
    }
        out.addEventListener("click",signOut)
    fetch("https://dummyjson.com/users")

    .then(res=>res.json())
    .then(data=>getUsers(data.users)
        
    )
}
function getUsers(users){
    users.map(user=>{
        const $newDiv = document.createElement("div")
        $newDiv.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col"
        $newDiv.innerHTML = `
         <div class="relative h-48 overflow-hidden">
             <img class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="${user.image}" alt="${user.firstName}">
          </div>
          <div class="p-5 flex flex-col flex-grow">
              <h2 class="text-lg font-bold text-gray-800 truncate mb-2">${user.firstName}</h2>
              <p class="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">${user.email}</p>
              <div class="flex justify-between items-center mt-auto">
                  <span class="text-l font-extrabold text-blue-600">$${user.phone}</span>
                  <a href="./singleAdmin.html?card-id=${user.id}"> <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      Batafsil
                  </button></a>
              </div>
          </div>   
        `
        
        div.appendChild($newDiv)
    })
}