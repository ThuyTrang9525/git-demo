
async function getFilmDetail(slug) {
    const url = ` https://phimapi.com/phim/${slug}`;
    // Gửi yêu cầu fetch để lấy dữ liệu
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json)
    return json
  }
  
  async function clickFilm(urlName) {
    const film = await getFilmDetail(urlName)
    document.getElementById('html').innerHTML = `<div class = "film"> ${film.movie.content}</div> `;
    console.log(film)
  }
  
  async function fetchImages() {
    try {
      const url = ' https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1';
      // Gửi yêu cầu fetch để lấy dữ liệu
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      //10 ảnh đầu tiên
      // const itemToDisplay = json.slice(0, 10);
      const html = json?.items.map(item => {
        // console.log(item)
        return `
                <div class="item-container" onclick="clickFilm('${item.slug}')">
                    <h2>${item.name}</h2>
                    <img src = "${item.poster_url}"/>
                </div>
            `;
      }).join('');
      document.getElementById('html').innerHTML = html;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  




























// async function postNew(){
//     const url = `http://localhost:3000/posts`
//     const newPost = {
//         title: "New Title",
//         views: 123
//     }
//     const request = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPost),
//       }
//      const newNote = new Request("http://localhost:3000/posts", request);
//     try {
//         const response = await fetch(newNote);
//         const result = await response.json();
//         console.log("Success:", result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
      
      
// }
