document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar div');
    const sections = document.querySelectorAll('section');

    // 각 스킬 바가 뷰포트 안에 있는지 확인하는 함수
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // 스크롤할 때마다 스킬 바 애니메이션 실행
    const handleScroll = () => {
        skillBars.forEach((bar) => {
            if (isInViewport(bar)) {
                bar.style.width = bar.getAttribute('data-skill');
            }
        });

        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    };

    // 초기 로딩 시와 스크롤 이벤트에 핸들러를 추가합니다.
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 페이지 로드 시 한 번 실행하여 초기 상태 확인
});
