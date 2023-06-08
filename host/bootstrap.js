import("remote/addList").then(({ addList }) => {
  console.log(addList);
  let app = document.querySelector("#app");
  app.innerHTML = `<h2>host</h2>`
  addList()
})
