async function run() {
  const query = `
    {
      posts {
        id
        title
        slug
        date
        excerpt
        content {
          html
        }
        coverImage {
          url
        }
        author {
          ... on Author {
            name
            picture {
              url
            }
          }
        }
      }
    }
  `;
  const res = await fetch('https://us-west-2.cdn.hygraph.com/content/cmng0vdzi00ec07wedv3fyibe/master', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}
run();
