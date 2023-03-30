export const sleep = (ms: number) => {
  console.log(`\nSleeping... ${ms}ms\n`);
  return new Promise((r) => setTimeout(r, ms));
};

export async function getLocation(): Promise<object> {
  let location = {};
  await fetch('https://api.ipregistry.co/?key=0nxj6f90k9nup0j3')
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      location = {
        setIp: payload.ip,
        setFlag: payload.location.country.flag.emoji,
        setCountry: payload.location.country.code,
        setCity: payload.location.city,
      };
    });
  return location;
}

export const getTime = (): string => {
  const date = new Date();
  const hours = formatTime(date.getUTCHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
};

export const getDate = (): string => {
  const date = new Date();
  const year = formatTime(date.getUTCFullYear());
  const month = formatTime(date.getUTCMonth() + 1);
  const day = formatTime(date.getUTCDate());
  return `${year}-${month}-${day}`;
};

export const formatTime = (num: number): string => {
  if (String(num).length < 2) return '0' + String(num);
  else if (String(num).length < 1) return '00';
  return String(num);
};

export const sqlFilter = (text: string): string => {
  const regex = new RegExp(
    /(\s*([\0\b\'\"\n\r\t\%\_\\]*\s*(((select\s*.+\s*from\s*.+)|(insert\s*.+\s*into\s*.+)|(update\s*.+\s*set\s*.+)|(delete\s*.+\s*from\s*.+)|(drop\s*.+)|(truncate\s*.+)|(alter\s*.+)|(exec\s*.+)|(\s*(all|any|not|and|between|in|like|or|some|contains|containsall|containskey)\s*.+[\=\>\<=\!\~]+.+)|(let\s+.+[\=]\s*.*)|(begin\s*.*\s*end)|(\s*[\/\*]+\s*.*\s*[\*\/]+)|(\s*(\-\-)\s*.*\s+)|(\s*(contains|containsall|containskey)\s+.*)))(\s*[\;]\s*)*)+)/i
  );
  if (!text.match(regex)) {
    return text.replace(/ /g, '');
  }
  return '';
};

export const concatPubKeys = (pubkey: string, pubkey2: string): string => {
  const a = pubkey.slice(0, 1);
  const b = pubkey2.slice(0, 1);
  if (a > b) {
    return '_' + pubkey + '_' + pubkey2 + '_';
  } else if (a < b) {
    return '_' + pubkey2 + '_' + pubkey + '_';
  } else {
    const aa = pubkey.slice(0, 3);
    const bb = pubkey2.slice(0, 3);
    if (aa > bb) {
      return '_' + pubkey + '_' + pubkey2 + '_';
    } else if (aa < bb) {
      return '_' + pubkey2 + '_' + pubkey + '_';
    } else {
      console.log('utils/concatPubKeys failed!');
      return 'ERROR';
    }
  }
};

export const randomString = (length: number): string => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getSeconds = (audio: AudioBuffer | HTMLAudioElement): number => {
  return Math.floor(audio.duration);
};
