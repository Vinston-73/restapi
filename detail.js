


const countryname=new URLSearchParams(location.search).get('name');
const Flagincontainer=document.querySelector('.flaginfocontainer img')
const Flagname=document.querySelector(' .flaginfo-container h1')
const nativeName=document.querySelector('.native-name')
const Population=document.querySelector('.population')
const Region=document.querySelector('.region')
const SubRegion=document.querySelector('.Sub-Region')
const Capital=document.querySelector('.Capital')
const toplevel=document.querySelector('.Top-leveldomain')
const Currency=document.querySelector('.Currency')
const Language=document.querySelector('.Language')
const bordercountries=document.querySelector('.bordercountries p')

fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`).then((res)=>res.json())
.then(([country])=>{
console.log([country])

Flagincontainer.src=country.flags.svg
Flagname.innerText=country.name.common
Population.innerText=country.population
Region.innerText=country.region
SubRegion.innerText=country.subregion
Capital.innerText=country.capital
toplevel.innerText=country.tld.join(',')
Currency.innerText=country.currencies
Language.innerText=country.languages





if(country.name.nativeName){
  nativeName.innerText=Object.values(country.name.nativeName)[0].common
}else{
  nativeName.innerText=country.name.common
}

if(country.currencies){
  Currency.innerText=Object.values(country.currencies).map((Currency)=>Currency.name).join(',')
}
if(country.languages){
  Language.innerText=Object.values(country.languages).join(',')
}

if(country.borders){
  country.borders.forEach( (bor)=> { 
    fetch(`https://restcountries.com/v3.1/alpha/${bor}`).then((res)=>res.json())
    .then(([bordercountry])=>{
      const bordercountrytag=document.createElement('a')
      bordercountrytag.innerText=bordercountry.name.common
      bordercountrytag.href=`detail.html?name=${bordercountry.name.common}`
      bordercountries.append(bordercountrytag)

    })
  console.log(bor)
  
 });
}

})





document.getElementById('dark').addEventListener('click',()=>{
    document.body.classList.toggle('darkmode')
    document.querySelector('.header').classList.toggle('darkmode')
    document.querySelector('.main').classList.toggle('darkmode')
  })
  
  document.getElementById('light').addEventListener('click',()=>{
    document.body.classList.toggle('darkmode')
    document.querySelector('.header').classList.toggle('darkmode')
    document.querySelector('.main').classList.toggle('darkmode')
  })