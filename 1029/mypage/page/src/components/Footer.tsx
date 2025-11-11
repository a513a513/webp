const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">고객센터</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>공지사항</li>
              <li>자주 묻는 질문</li>
              <li>1:1 문의</li>
              <li>배송 조회</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">쇼핑 정보</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>브랜드</li>
              <li>세일</li>
              <li>이벤트</li>
              <li>기획전</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>회사 소개</li>
              <li>채용 정보</li>
              <li>입점 문의</li>
              <li>제휴 문의</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SNS</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground mb-2">
            (주)케이스타일 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            통신판매업신고: 2024-서울강남-12345 | 개인정보보호책임자: 김철수
          </p>
          <p className="text-sm text-muted-foreground">
            서울특별시 강남구 테헤란로 123 | 고객센터: 1234-5678
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2024 KSTYLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
