const API_URL = process.env.API_URL

async function fetchAPI(query, { variables } = {}) {
    // Set up some headers to tell the fetch call
    // that this is an application/json type
    const headers = { 'Content-Type': 'application/json' };

    // build out the fetch() call using the API_URL
    // environment variable pulled in at the start
    // Note the merging of the query and variables
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })
    });

    // error handling work
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

// Notice the 'export' keyword here. We'll be calling this function
// directly in our blog/index.js page, so it needs to be exported
export async function getAllPosts() {
const data = await fetchAPI(
    `
    query AllPosts {
        posts {
          edges {
            node {
              date
              databaseId
              id
              slug
              titles {
                titleEn
                titleNl
              }
              previewImage {
                previewImage {
                  databaseId
                  id
                  mediaItemUrl
                }
              }
              contents {
                contentEn
                contentNl
              }
              previewTexts {
                previewTextEn
                previewTextNl
              }
            }
          }
        }
      }
    `
);

return data?.posts;
}
  
export async function getAllPostsWithSlug() {
    const data = await fetchAPI(
        `
        {
            posts(first: 10000) {
                edges {
                    node {
                        slug
                        }
                }
            }
        }
    `)

    return data?.posts;
}

export async function getPost(slug) {
    const data = await fetchAPI(
      `
        fragment PostFields on Post {
            titles {
                titleNl
                titleEn
            }
            slug
            date
            previewImage {
                previewImage {
                    mediaItemUrl
                }
            }
        }
        query PostBySlug($id: ID!, $idType: PostIdType!) {
            post(id: $id, idType: $idType) {
            ...PostFields
                contents {
                    contentNl
                    contentEn
                }
            }
        }
    
    `,
      {
        variables: {
          id: slug,
          idType: 'SLUG'
        }
      }
    )
  
    return data
  }

  export async function getMorePosts() {
    const data = await fetchAPI(
        `
        query MorePosts {
            posts(first: 2, where: { orderby: { field: DATE, order: DESC } }) {
              edges {
                node {
                  date
                  databaseId
                  id
                  slug
                  titles {
                    titleEn
                    titleNl
                  }
                  previewImage {
                    previewImage {
                      databaseId
                      id
                      mediaItemUrl
                    }
                  }
                  previewTexts {
                    previewTextEn
                    previewTextNl
                  }
                }
              }
            }
          }
        `
    );
    
    return data?.posts;
    }
  

export async function getWinkels() {
    const data = await fetchAPI(
        `
        query Myquery {
            winkels {
              edges {
                node {
                  winkelNaam {
                    name
                  }
                }
              }
            }
          }
          
          
        `
    );
    return data?.winkels
}