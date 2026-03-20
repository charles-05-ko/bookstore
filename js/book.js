async function bookData() {
    const REST_API_KEY = 'e0363994a1904a334af085cb39f9f060'
    const params = new URLSearchParams({
        target: 'title',
        query: '자바스크립트',
        size: 50
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });
        

        if (!response.ok) {
            throw new Error('HTTP오류 - 상태코드 : ' + response.status)
        }

        const jsonData = await response.json();
        console.log(jsonData)

        const bookElement = document.querySelectorAll('#morebook_slider .swiper-slide');

        boxElements.forEach(swiper-slide, i) => {
                    const doc = data.documents[i];

                    if (!doc) return; // 데이터가 부족할 경우 생략

                    // 요소 생성 및 추가
                    box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].contents.substring(0, 60)}</p>
                    <button>click</button>
                    `
                });
        
        const imgElement = document.createElement('img')
        imgElement.src = jsonData.documents[0].thumbnail
        bookElement.appendChild(imgElement)
        
        const titleElement = document.createElement('h3')
        titleElement.textContent = jsonData.documents[0].title
        bookElement.appendChild(titleElement)

    } catch(error) {
        console.log('에러 발생', error)
    }
}

bookData();