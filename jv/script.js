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

const card = `<div class="col-4">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="./img/male1.png"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-bg-dark">
                  <h5 class="card-title">nome e cognome</h5>
                  <p class="card-text">designer</p>
                  <p class="card-text">
                    <small class="text-body-dark">email</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
let membersInfo;
for (const Members of teamMembers) {
  const name = name.value;
  const role = role.value;
  const email = email.value;
  const img = img.value;

  const membersInfo = { name, role, email, img };

  cardContainer.innerHTML(cardInfo);
}

console.log(cardContainer);

// funzione per inner da inserire

const cardInfo = () => {
  const card = `<div class="col-4">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src=".${img}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body text-bg-dark">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${role}</p>
                  <p class="card-text">
                    <small class="text-body-dark">${email}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`;

  return card;
};

console.log(card);
