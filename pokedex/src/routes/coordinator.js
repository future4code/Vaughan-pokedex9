export const goToHomePage = navigate => { navigate("/") };

export const goToPoxedexPage = navigate => { navigate(`/pokedex`) };

export const goToPokemonDetailsPage = (navigate, name) => { navigate(`/pokemon/${name}`) };

