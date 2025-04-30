export const Logo = () => {
  return (
    <>
      <h2
        onClick={() => (window.location.href = "")}
        className="cursor-pointer absolute -top-12 -left-13 bg-primary-1 text-white border-1 border-white text-[40px] p-[15px] w-fit rotate-90"
      >
        기억
      </h2>
    </>
  );
};

// Rajouter les différentes variantes du logo, ici il n'y a seulement la version no-text-lg (page d'accueil), il manque la version noText-md et withText-md (présente sur 'Header').
