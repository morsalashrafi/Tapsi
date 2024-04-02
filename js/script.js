const toggler=document.querySelector(".nav__toggler");
const nav=document.querySelector(".nav");
toggler.addEventListener("click,(e)=>");{
    console.log("clicked");
    nav.classList.toggle("expand");
}
