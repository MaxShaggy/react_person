export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText = '';

  if (isMarried) {
    partnerText = sex === 'm' ? 'wife' : 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${partnerText}` : 'I am not married'}
      </p>
    </section>
  );
};
