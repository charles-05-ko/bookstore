async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "KakaoAK e0363994a1904a334af085cb39f9f060"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function bookData() {
    try {
        // query와 section ID를 매핑
        const queries = [
            { query: "자바스크립트", sectionId: "morebook_slider" },
            { query: "정원", sectionId: "mdpick_slider" },
            { query: "블리치", sectionId: "today_pick_sub1" },
            { query: "블리치", sectionId: "today_pick_sub2" },
        ];

        for (const { query, sectionId } of queries) {
            const data = await fetchBooks(query);

            // 해당 섹션 내의 .box 요소 8개 선택
            const section = document.querySelector(`#${sectionId}`);
            const boxElements = section.querySelectorAll(".swiper-slide");

            boxElements.forEach((box, i) => {
                const doc = data.documents[i];
                if (!doc) return;

                // 요소 생성 및 추가
                box.innerHTML = `<img src="${doc.thumbnail}">
                        <h3>${doc.title}</h3>
                        <h6>${doc.authors}</h6>
                        <p>${doc.contents.substring(0, 60)}</p>
                        <button>click</button>
                        `
            });
        }
    } catch (error) {
        console.error('에러 발생:', error);
    }
}

bookData();