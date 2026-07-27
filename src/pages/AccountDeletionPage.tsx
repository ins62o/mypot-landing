import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { LegalLayout } from './LegalLayout'

const accountDeletionToc = [
  { href: '#in-app', label: '1. 앱에서 직접 삭제' },
  { href: '#web-request', label: '2. 웹에서 삭제 요청' },
  { href: '#deleted-data', label: '3. 삭제되는 정보' },
  { href: '#retained-data', label: '4. 남을 수 있는 정보' },
  { href: '#processing', label: '5. 요청 처리 절차' },
  { href: '#contact', label: '6. 문의처' },
]

export function AccountDeletionPage() {
  return (
    <>
      <PageMeta
        title="계정 삭제 안내 | 마이폿"
        description="마이폿 앱 계정과 관련 데이터의 삭제 방법을 안내합니다."
        canonicalPath="/account-deletion/"
        ogTitle="마이폿 계정 삭제 안내"
        ogDescription="앱 안이나 이메일을 통해 마이폿 계정 삭제를 요청할 수 있습니다."
      />
      <LegalLayout
        eyebrow="MY POT ACCOUNT"
        title="계정 삭제 안내"
        intro="마이폿 계정은 앱에서 직접 삭제하거나, 앱에 접근할 수 없을 때 이메일로 삭제를 요청할 수 있습니다. 처리 전에 삭제되는 정보와 공동 주머니에 남을 수 있는 기록을 꼭 확인해 주세요."
        dateLabel="최종 업데이트: 2026년 7월 18일"
        toc={accountDeletionToc}
        footer="© 2026 MyPot. 계정과 데이터에 대한 이용자의 선택을 존중합니다."
      >
        <section id="in-app">
          <h2>1. 앱에서 직접 계정 삭제</h2>
          <ol>
            <li>마이폿 앱에 삭제할 계정으로 로그인합니다.</li>
            <li><strong>설정 → 계정 관리 → 계정 탈퇴</strong>로 이동합니다.</li>
            <li>삭제 안내를 확인하고 계정 탈퇴를 최종 확인합니다.</li>
          </ol>
          <p>확인이 완료되면 계정 삭제 절차가 즉시 시작되며, 완료된 계정은 복구할 수 없습니다.</p>
        </section>

        <section id="web-request">
          <h2>2. 앱 밖에서 삭제 요청</h2>
          <p>
            앱에 로그인하거나 접근할 수 없다면 이메일로 요청해 주세요. 메일 앱이 열리지 않을 경우
            <a href="mailto:mypot.support@gmail.com">mypot.support@gmail.com</a>으로 직접 보낼 수 있습니다.
          </p>
          <div className="legal-button-row">
            <a
              className="legal-button-link"
              href="mailto:mypot.support@gmail.com?subject=%EB%A7%88%EC%9D%B4%ED%8F%BF%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD"
            >
              이메일로 계정 삭제 요청
            </a>
          </div>
          <div className="legal-notice">
            <p><strong>요청 메일에 포함할 정보</strong></p>
            <ul>
              <li>마이폿 닉네임</li>
              <li>로그인 방식(카카오 또는 Apple)</li>
              <li>본인 확인과 결과 회신을 받을 연락 가능한 이메일</li>
              <li>함께 삭제를 원하는 특정 게시물이나 채팅이 있다면 관련 설명</li>
            </ul>
            <p>비밀번호, 카카오·Apple 액세스 토큰 또는 인증번호는 절대 보내지 마세요.</p>
          </div>
        </section>

        <section id="deleted-data">
          <h2>3. 계정 삭제 시 삭제되는 정보</h2>
          <ul>
            <li>Firebase 인증 계정과 마이폿 사용자 식별자</li>
            <li>개인 프로필, 상태 메시지 및 계정 설정</li>
            <li>주머니 멤버십과 현재 선택한 주머니 정보</li>
            <li>FCM 푸시 토큰, 기기 등록 및 주머니별 알림 설정</li>
            <li>계정 아래에 보관된 개인 작업 처리 정보</li>
          </ul>
        </section>

        <section id="retained-data">
          <h2>4. 삭제 후에도 남을 수 있는 정보</h2>
          <div className="legal-notice">
            <p>
              공동 주머니에 작성한 <strong>피드, 댓글, 채팅과 미디어</strong>는 다른 구성원의 추억과
              대화 흐름을 유지하기 위해 계정 탈퇴 후에도 남을 수 있습니다. 특정 콘텐츠까지 삭제하려면
              계정 탈퇴 전에 직접 삭제하거나 이메일 요청에 해당 내용을 적어 주세요.
            </p>
          </div>
          <ul>
            <li>마지막 구성원이 나간 비어 있는 주머니는 즉시 비활성화되며, 최소 30일의 유예 기간 후 삭제됩니다.</li>
            <li>장애 복구용 보호 백업에는 삭제된 정보가 최대 14주 동안 남을 수 있습니다.</li>
            <li>법령상 보존 의무가 있는 정보는 해당 의무 기간 동안 분리하여 보관할 수 있습니다.</li>
          </ul>
        </section>

        <section id="processing">
          <h2>5. 이메일 요청 처리 절차</h2>
          <ol>
            <li>삭제 요청 메일을 접수합니다.</li>
            <li>다른 사람의 계정을 잘못 삭제하지 않도록 최소한의 계정 정보로 본인 여부를 확인합니다.</li>
            <li>본인 확인이 완료되면 계정 및 요청된 데이터의 삭제를 진행하고 결과를 회신합니다.</li>
          </ol>
          <p>요청 정보가 부족하거나 계정 소유 여부를 확인할 수 없으면 추가 확인을 요청하거나 삭제를 보류할 수 있습니다.</p>
        </section>

        <section id="contact">
          <h2>6. 문의처</h2>
          <div className="legal-contact-box">
            <p><strong>앱 및 데이터 관리자:</strong> 마이폿</p>
            <p><strong>이메일:</strong> <a href="mailto:mypot.support@gmail.com">mypot.support@gmail.com</a></p>
            <p>전체 개인정보 처리 기준은 <Link to="/privacy/">마이폿 개인정보처리방침</Link>에서 확인할 수 있습니다.</p>
          </div>
        </section>
      </LegalLayout>
    </>
  )
}
