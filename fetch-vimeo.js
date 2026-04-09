const fs = require('fs');
const https = require('https');

async function getVimeoData(id) {
  return new Promise((resolve) => {
    https.get('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + id, (res) => {
      let data = '';
      res.on('data', (d) => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ id, title: json.title, description: json.description ? json.description.replace(/<[^>]+>/g, '').substring(0, 150) : '' });
        } catch(e) {
          resolve({ id, title: 'Video ' + id, description: '' });
        }
      });
    }).on('error', () => resolve({ id, title: 'Video ' + id, description: '' }));
  });
}

async function main() {
  const ids = [
    '1021479637', '1131310388', '1131305270', '1131319486', '1131319400', '1131319578', '1131320700', '1131320755', '1021468009', '1021466720', '1021463525', '1021463433', '1021463571', '1021463466', '1021463501', '1021463311', '1021463389', '1021463623', '1021486218', '1021485735', '1021485764', '1021485785', '1026056750', '890946553', '738471829', '1020466051', '1026056303', '1026056187', '1026058372', '1026056384', '1026058040', '1021483731', '1021483755', '1021483780', '1131313558', '1131313814', '1021467097', '1021467186', '1021467300'
  ];

  let results = [];
  for (let id of ids) {
    results.push(await getVimeoData(id));
  }
  
  fs.writeFileSync('out.json', JSON.stringify(results, null, 2));
}

main();
