const usersContainer = document.querySelector("#users-Container")
console.log(usersContainer);

async function getAllUsers() {
    try {
        let resp = await fetch("https://permium-js.onrender.com/users");
        let data = await resp.json();
        //console.log(data);
        displayUsers(data)
        
    } catch (error) {
        console.log(error);
        
    }
    
}
getAllUsers()

function displayUsers(users) {
    console.log(users);
    users.forEach((user) => {
        let {fullname, email, password, id} = user
        const userDiv = document.createElement("div")
        userDiv.className = "user-card"
        userDiv.id = `user-${id}`;
        
        userDiv.innerHTML = `
        <figure class='user-avatar'>${fullname[0].toUpperCase()}</figure>
        <h3 >${fullname}</h3>
        <p>${email}</p>
        <P>${password}</P>
        <button class = 'edit-btn' onclick ='editUser(${id})'>Edit</button>
        <button class= 'delete-btn' onclick = 'deleteUser(${id})'>Delete</button>
        `

        usersContainer.append(userDiv);

    });
    
    
}

async function deleteUser(id) {
    

    fetch(`https://permium-js.onrender.com/users/${id}`,{
        method :"DELETE",
    
        
    })
    alert("User Deleted")
    
    
}

function editUser(id) {
    console.log(id);
    window.location.href = `EditUser.html?id=${id}`;

    
    
}