const ism = document.querySelector(".inpName")
const parol = document.querySelector(".inpPass")
const btn = document.getElementById("sendForm")

// savedUser o'zgaruvchisi bor deb hisoblaymiz (sizning kodingizdagidek)
    btn.addEventListener("click", register)

    function register(e){
        e.preventDefault()
        let user = {
            username: ism.value.toLowerCase().trim(),
            password: parol.value.trim()
        }
        let {username,password} = user
        fetch('https://dummyjson.com/auth/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })    
        .then(res => res.json())
        .then(data => {
            
            if(data.accessToken){
                alert("Siz muvaffaqiyatli kirdingiz")
                // Saqlash uchun setItem ishlatiladi
                localStorage.setItem("token", JSON.stringify(data.accessToken))
                setTimeout(() => {
                    window.location.href = "./index.html"
                }, 500)
            }
            else if (username == "Bobur".toLowerCase() && password == "Bobur55"){
            alert("Siz admin panelga kirdingiz")
            localStorage.setItem("tokenAdmin",JSON.stringify(user))
            setTimeout(()=>{
                window.location.href = "./admin.html"
            },500)
                
            }
        })
    }
