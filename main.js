const container = document.getElementById("message__container");
const inputNumber = document.getElementById("input__number");
const inputButtom = document.getElementById("input__button");
const form = document.getElementById("form");

const fetchPokemons = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputNumber.value}`
    );
    const data = await res.json();
    console.log(data);
    const pokemon = {
      img: data.sprites.front_default,
      nombre: data.name,
      altura: data.height / 10,
      peso: data.weight / 10,
      tipos: data.types.map((types) => types.type.name).join(" "),
    };
    pintarCard(pokemon);
  } catch (error) {
    container.innerHTML = `<h1> Pokemon no encontrado </h1>
    <img src="/poke-shadow.png" alt="" />`;
  }
};
const pintarCard = (pokemon) => {
  container.innerHTML = `<img src=${pokemon.img} alt="" class="poke-img" />
        <h2 class="poke-name">${pokemon.nombre}</h2>
        <h3 class="poke-types border-dashed">${pokemon.tipos}</h3>
        <p class="poke-weight-height">Altura: ${pokemon.altura}m  Peso: ${pokemon.peso}Kg </p>`;
};

const init = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!inputNumber.value) {
      container.innerHTML = `<h2> Se necesita un numero </h2>`;
    } else {
      fetchPokemons();
    }
  });
};

init();
