async function bookData() {
    const REST_API_KEY = 'e0363994a1904a334af085cb39f9f060';
    const params = new URLSearchParams({
        target: 'title',
        query: "함께 추락하러 왔어요"
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();

        // .box 요소 선택
        const boxElement = document.querySelector(".bookcover");
        const titleElement = document.querySelector(".booktitle");

        // 요소 생성 및 추가
        boxElement.innerHTML = `<img src="${data.documents[0].thumbnail}">`
        titleElement.textContent = data.documents[0].title;

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();