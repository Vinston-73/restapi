const countries = document.querySelector(".countries-container");
const skeletonElement = document.createElement("div");
const Filterbyregion = document.querySelector(".filterbyregion");
const Searchbycountry = document.querySelector(".searchcountry");
const Searchicon = document.querySelector("searchicon");

const flag = document.createElement("img");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((inorder) => {
      console.log(inorder);

      const card = document.createElement("a");
      card.classList.add("countries-content");
      card.href = `/detail.html?name=${inorder.name.common}`;
      card.innerHTML = ` 
    <img src="${inorder.flags.svg}">
               <div class="card">
                
                <h3>${inorder.name.common}</h3>
                <p><b>population:</b>${inorder.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>region:</b>${inorder.region}</p>
                <p><b>capital:</b>${inorder.capital}</p>
               </div>`;
      countries.append(card);
    });
  });

Filterbyregion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${Filterbyregion.value}`)
    .then((res) => res.json())
    .then((data) => {
      countries.innerHTML = "";
      data.forEach((inorder) => {
        console.log(inorder);

        const card = document.createElement("a");
        card.classList.add("countries-content");
        card.href = `/detail.html?name=${inorder.name.common}`;
        card.innerHTML = ` 
    <img src="${inorder.flags.svg}">
               <div class="card">
                
                <h3>${inorder.name.common}</h3>
                <p><b>population:</b>${inorder.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>region:</b>${inorder.region}</p>
                <p><b>capital:</b>${inorder.capital}</p>
               </div>`;
        countries.append(card);
      });
    });
});

Searchbycountry.addEventListener("input", (e) => {
  fetch(`https://restcountries.com/v3.1/name/${Searchbycountry.value}`)
    .then((res) => res.json())
    .then((data) => {
      countries.innerHTML = "";
      data.forEach((inorder) => {
        console.log(inorder);
        const card = document.createElement("a");
        card.classList.add("countries-content");
        card.href = `/detail.html?name=${inorder.name.common}`;
        card.innerHTML = ` 
      <img src="${inorder.flags.svg}">
                 <div class="card">
                  
                  <h3>${inorder.name.common}</h3>
                  <p><b>population:</b>${inorder.population.toLocaleString(
                    "en-IN"
                  )}</p>
                  <p><b>region:</b>${inorder.region}</p>
                  <p><b>capital:</b>${inorder.capital}</p>
                 </div>`;
        countries.append(card);
      });
    });
});

document.getElementById("dark").addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  document.querySelector(".header").classList.toggle("darkmode");
  document.querySelector(".main").classList.toggle("darkmode");
});

document.getElementById("light").addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  document.querySelector(".header").classList.toggle("darkmode");
  document.querySelector(".main").classList.toggle("darkmode");
});
