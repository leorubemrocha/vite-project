/* eslint-disable react/jsx-key */

function Skills() {
  const habilidades = ['Guia de Rafting', 'Confeiteiro', 'Jogo Futebol'];

  return (
    <section>
      <p>Habilidades</p>
      <ul>
        As Habilidades vão vir aqui!
        {habilidades.map((habilidade) => (
          <li>{habilidade}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
