export async function getLang(): Promise<string> {
  let lang = 'en';
  await fetch('https://api.ipregistry.co/?key=0nxj6f90k9nup0j3')
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      lang = payload.location.country.code;
    });
  return lang;
}
