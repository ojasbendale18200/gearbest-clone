// Delete Functionality
let deleteBtn = document.getElementById("submit");
let deletecount = localStorage.getItem("deletecount") || 0;

deleteBtn.addEventListener("click", async () => {
  try {
    let deleteId = document.getElementById("deleteId").value;
    let res = await fetch(
      `https://63cbafba9b72d2a88e005571.mockapi.io/products/${deleteId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      deletecount++;
      localStorage.setItem("deletecount", deletecount);
      alert("Item Deleted");
      location.reload();
    } else {
      alert("ProductID Not Available❌");
    }
  } catch (error) {
    console.log(error);
  }
});
let displaypostcount = localStorage.getItem("postcount") || 0;
document.querySelector("#added").innerText = displaypostcount;
let displaycount = localStorage.getItem("deletecount");
document.querySelector("#removed").innerText = displaycount;
