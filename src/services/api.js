
export const apiUserRequest = async () => {
  const fetchApi = await fetch(
    `https://jsonplaceholder.typicode.com/users`,
  );
  const data = await fetchApi.json();
  console.log(data);
  return data;
};

export const apiDebitSave = async (debit) => {

  const fetchApi = await fetch(
    `https://provadev.xlab.digital/api/v1/divida?uuid=744770d9-45e1-40b2-853a-041d50aa18a7`,
    {
      // method: 'POST',
      body: {
        idUsuario: 1, // (plaaceholder id)
        motivo: 'Parcela 3 carro',
        valor: 199,
      }
    });
  const data = await fetchApi.json();
  console.log(data.result);
  return data;
};