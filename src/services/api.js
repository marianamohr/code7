const axios = require('axios').default;

export const apiUserRequest = async () => {
  const fetchApi = await fetch(
    `https://jsonplaceholder.typicode.com/users`,
  );
  const data = await fetchApi.json();
  return data;
};

export const apiDebitSave = async ({ client, motivo, valor }) => {
  axios.post(`https://provadev.xlab.digital/api/v1/divida?uuid=744770d9-45e1-40b2-853a-041d50aa18a7`,
    {
      idUsuario: client,
      motivo: motivo,
      valor: valor,
    }
  )
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
    })
};

export const apiUpdateDebit = async ({ idUsuario, motivo, valor, id }) => {
  axios.patch(`https://provadev.xlab.digital/api/v1/divida/${id}?uuid=744770d9-45e1-40b2-853a-041d50aa18a7`,
    {
      idUsuario: idUsuario,
      motivo: motivo,
      valor: valor,
    }
  )
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
    })
};

export const apiDeleteDebit = async (id) => {
  axios.delete(`https://provadev.xlab.digital/api/v1/divida/${id}?uuid=744770d9-45e1-40b2-853a-041d50aa18a7`)
  .then(function (response) {
    console.log(response);
    return response
  })
  .catch(function (error) {
  })
}

export const apiGetDebits = async () => {
  const fetchApi = await fetch(
    `https://provadev.xlab.digital/api/v1/divida?uuid=744770d9-45e1-40b2-853a-041d50aa18a7`,
  );
  const data = await fetchApi.json();
  return data.result
};