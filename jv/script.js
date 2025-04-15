const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// prendo l'elemento che mi serve

const cardContainer = document.getElementById("card-container");
const nameHtml = document.getElementById("new-name");
const roleHtml = document.getElementById("new-role");
const emailHtml = document.getElementById("new-email");
const imgHtml = document.getElementById("new-img");
const newMemebersFrom = document.getElementById("new-membersforms");

// ciclo per immettere l'html

// let card = ``;
// for (const Members of teamMembers) {
//   const { name, role, email, img } = Members;

//   card += `<div class="col-4">
//           <div class="card mb-3" style="max-width: 540px">
//             <div class="row g-0">
//               <div class="col-md-4">
//                 <img
//                   src="./${img}"
//                   class="img-fluid rounded-start"
//                   alt="${name}"
//                 />
//               </div>
//               <div class="col-md-8">
//                 <div class="card-body text-bg-dark">
//                   <h5 class="card-title">${name}</h5>
//                   <p class="card-text">${role}</p>
//                   <p class="card-text">
//                     <small class="link-primary">${email}</small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>`;
// }

// cardContainer.innerHTML = card;

// form per inserire nuova card

const addMember = (name, role, email, img) => {
  return `<div class="col-4">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="./${img}"
                  class="img-fluid rounded-start"
                  alt="${name}"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-bg-dark">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${role}</p>
                  <p class="card-text">
                    <small class="link-primary">${email}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
};

let card = ``;
for (const Members of teamMembers) {
  const { name, role, email, img } = Members;

  card += addMember(name, role, email, img);
}

cardContainer.innerHTML = card;

newMemebersFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameHtml.value;
  const role = roleHtml.value;
  const email = emailHtml.value;
  const img = imgHtml.value;

  // const newMember = { name, role, email, img };
  // teamMembers.push(newMember);

  cardContainer.innerHTML += addMember(name, role, email, img);
});
