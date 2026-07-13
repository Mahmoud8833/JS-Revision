// async function getUserData() {
//     try {
//         const userRes = await fetch("/api/user/");

//         if (!userRes.ok) {
//             throw new Error(`HTTP Error: ${userRes.status}`);
//         }

//         const userData = await userRes.json();

//         const lessonsRes = await fetch(`/api/lessons/${userData.id}`);

//         if (!lessonsRes.ok) {
//             throw new Error(`HTTP Error: ${lessonsRes.status}`);
//         }

//         const lessons = await lessonsRes.json();

//         const progressRes = await fetch(`/api/progress/${lessons[0].id}`);

//         if (!progressRes.ok) {
//             throw new Error(`HTTP Error: ${progressRes.status}`);
//         }

//         const progress = await progressRes.json();

//         console.log(progress);

//     } catch (error) {
//         console.error("There is an error:", error);
//     }
// }

// async function getUserData() {
//   try {
//     const response = await fetch('/api/user');
//     if(!response.ok){
//         throw new Error(`Server Error: ${response.status}`)
//     }

//     const data = await response.json();
//     return data;
//   } catch(error) {
//     console.error(error);
//   }
// }

// async function getLessonById(id){
//     try{
//         const res = await fetch(`/api/lessons/${id}`)
//         if(!res.ok){
//             throw new Error(`Error: ${res.status}`)
//         }
//         const data = await res.json()
//         return data
//     } catch(error){
//         console.error(error)
//     }
// }

// async function loadProfile(){
//     try{
//         const useRes = await fetch('/api/user')
//         if(!useRes.ok){
//             throw new Error(`Server Error: ${useRes.status}`)
//         }
//         const user = await useRes.json()

//         const lessonsRes = await fetch(`/api/lessons/user/${user.id}`)
//         if(!lessonsRes.ok){
//             throw new Error(`Error: ${lessonsRes.status}`)
//         }
//         const lessons = await lessonsRes.json()

//         return{user, lessons}
//     } catch(error){
//         console.error(error)
//     }
// }

// const titles = ["التجويد", "التفسير", "الفقه"];
// const list = document.querySelector("#lessons-list");
// titles.forEach(title => {
//     const item =document.createElement("li")
//     item.classList.add("lesson-item")
//     item.textContent = title
//     list.appendChild(item)
// });

// const button = document.querySelector("#add-btn");
// const list = document.querySelector("#lessons-list");
// const input = document.querySelector("#lesson-input");

// button.addEventListener("click", function() {
//   if (input.value.trim() === "") return;
//   const item = document.createElement("li");
//   item.textContent = input.value;
//   item.classList.add("lesson-item");
//   list.appendChild(item);
//   input.value = "";
// });
