import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { LegalLayout } from './LegalLayout'

const privacyToc = [
  { href: '#scope', label: '1. 적용 범위' },
  { href: '#data', label: '2. 처리하는 정보' },
  { href: '#purpose', label: '3. 이용 목적' },
  { href: '#sharing', label: '4. 공유와 외부 서비스' },
  { href: '#retention', label: '5. 보관과 삭제' },
  { href: '#rights', label: '6. 이용자의 권리' },
  { href: '#permissions', label: '7. 앱 권한' },
  { href: '#security', label: '8. 보호 조치' },
  { href: '#children', label: '9. 아동의 개인정보' },
  { href: '#changes', label: '10. 방침 변경' },
  { href: '#contact', label: '11. 문의처' },
]

export function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="개인정보처리방침 | 마이폿"
        description="마이폿 앱의 개인정보 수집, 이용, 보관, 삭제 기준을 안내합니다."
        canonicalPath="/privacy/"
        ogTitle="마이폿 개인정보처리방침"
        ogDescription="마이폿이 개인정보를 처리하고 보호하는 기준을 확인하세요."
      />
      <LegalLayout
        eyebrow="MY POT PRIVACY"
        title="개인정보처리방침"
        intro="마이폿은 함께 남긴 추억만큼 개인정보도 소중하게 다룹니다. 이 방침은 마이폿 모바일 앱과 연결된 공개 웹페이지에서 어떤 정보를 처리하고, 언제 삭제하는지 설명합니다."
        dateLabel="시행일: 2026년 7월 18일"
        toc={privacyToc}
        footer="© 2026 마이폿. 개인정보와 함께한 추억을 소중하게 보호합니다."
      >
        <section id="scope">
          <h2>1. 적용 범위</h2>
          <p>
            본 개인정보처리방침은 운영자 <strong>마이폿</strong>이 제공하는 마이폿 앱과 연결된 공개
            웹페이지에 적용됩니다. 이용자가 카카오 또는 Apple 계정으로 로그인하거나 주머니, 피드, 채팅
            및 알림 기능을 사용할 때 필요한 범위에서 개인정보를 처리합니다.
          </p>
          <p>카카오, Apple 등 외부 서비스에서 직접 처리하는 정보에는 해당 서비스의 개인정보처리방침이 함께 적용됩니다.</p>
        </section>

        <section id="data">
          <h2>2. 처리하는 개인정보</h2>
          <p>마이폿은 서비스 제공에 필요한 정보만 이용자의 입력, 외부 로그인 제공자의 응답, 이용자가 선택한 미디어 및 서비스 이용 과정에서 수집합니다.</p>
          <ul className="legal-detail-list">
            <li>
              <strong>계정 및 로그인 정보</strong>
              Firebase 사용자 식별자, 로그인 제공자, 제공자 계정 식별자, 닉네임, 표시 이름, 프로필 사진,
              상태 메시지, Apple이 제공하는 경우 이름과 이메일 주소
            </li>
            <li>
              <strong>주머니 및 관계 정보</strong>
              참여 주머니, 주머니 멤버십, 초대 코드 이용 기록, 현재 선택한 주머니, 가입·참여 및 활동 시각
            </li>
            <li>
              <strong>피드와 채팅 콘텐츠</strong>
              피드 글·사진·영상·음성, 댓글과 좋아요, 채팅 글·사진·음성·감정 이미지, 작성자 정보의 스냅샷 및 작성 시각
            </li>
            <li>
              <strong>미디어 메타데이터</strong>
              이용자가 선택하거나 녹음한 파일, 파일 종류, 크기, 재생 시간, 저장 객체 키와 전송 URL
            </li>
            <li>
              <strong>알림 및 기기 정보</strong>
              FCM 푸시 토큰, 앱이 생성한 기기 식별자, 플랫폼, 시간대, 주머니별 알림 설정 및 알림 처리 기록
            </li>
            <li>
              <strong>자동 생성될 수 있는 운영 정보</strong>
              접속 IP, 요청 시각, 오류·보안·기능 실행 기록, 앱 및 운영체제 정보가 서비스 안정성과 보안을 위해 처리될 수 있습니다.
            </li>
          </ul>
          <div className="legal-notice">
            <p>마이폿은 광고 식별자를 이용한 맞춤형 광고를 제공하지 않으며, 개인정보를 판매하지 않습니다.</p>
          </div>
        </section>

        <section id="purpose">
          <h2>3. 개인정보 이용 목적</h2>
          <ul>
            <li>카카오·Apple 로그인 확인, 계정 생성 및 로그인 상태 복원</li>
            <li>주머니 생성·참여·전환과 멤버 프로필 표시</li>
            <li>피드, 댓글, 좋아요, 채팅 및 미디어 공유 기능 제공</li>
            <li>주머니별 알림 설정에 따른 푸시 알림 전송과 중복 방지</li>
            <li>서비스 오류 대응, 보안, 부정 이용 방지 및 데이터 복구</li>
            <li>계정·콘텐츠 삭제 요청 처리와 이용자 문의 응대</li>
          </ul>
        </section>

        <section id="sharing">
          <h2>4. 다른 이용자와의 공유 및 외부 서비스</h2>
          <h3>주머니 구성원에게 보이는 정보</h3>
          <p>
            이용자가 참여한 주머니 안에서는 닉네임, 프로필 사진, 상태 메시지, 참여 시각과 이용자가 작성한
            피드·댓글·채팅 등이 같은 주머니의 구성원에게 표시됩니다. 서로 다른 주머니의 구성원에게 해당
            주머니의 콘텐츠를 공개하지 않습니다.
          </p>
          <p>이용자의 지시, 법령상 의무 또는 적법한 기관의 요청이 있는 경우를 제외하고 개인정보를 광고 목적으로 제공하지 않습니다.</p>

          <h3>서비스 제공을 위한 외부 처리</h3>
          <div className="legal-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">서비스 제공자</th>
                  <th scope="col">처리 목적</th>
                  <th scope="col">관련 정보</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="서비스 제공자">Google LLC</td>
                  <td data-label="처리 목적">인증, 데이터베이스, 서버 기능, 푸시 알림</td>
                  <td data-label="관련 정보">계정, 콘텐츠, 기기·알림 및 운영 정보</td>
                </tr>
                <tr>
                  <td data-label="서비스 제공자">Amazon Web Services, Inc.</td>
                  <td data-label="처리 목적">사진·영상·음성 파일 저장과 전송</td>
                  <td data-label="관련 정보">미디어 파일 및 미디어 메타데이터</td>
                </tr>
                <tr>
                  <td data-label="서비스 제공자">주식회사 카카오</td>
                  <td data-label="처리 목적">카카오 로그인과 이용자가 선택한 초대 공유</td>
                  <td data-label="관련 정보">로그인 응답 및 이용자가 공유한 초대 정보</td>
                </tr>
                <tr>
                  <td data-label="서비스 제공자">Apple Inc.</td>
                  <td data-label="처리 목적">Apple로 로그인</td>
                  <td data-label="관련 정보">로그인 응답과 Apple이 제공한 계정 정보</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            주요 Firestore 데이터베이스와 미디어 저장소는 대한민국 서울 리전에 구성되어 있습니다. 다만 인증,
            푸시 및 기술 지원 과정에서 외부 서비스 제공자의 글로벌 인프라를 통해 정보가 처리될 수 있습니다.
          </p>
        </section>

        <section id="retention">
          <h2>5. 보관 기간과 삭제</h2>
          <ul className="legal-detail-list">
            <li>
              <strong>계정 정보</strong>
              계정 탈퇴 시 Firebase 인증 계정, 개인 프로필, 알림 토큰, 알림 설정 및 주머니 멤버십을 삭제합니다.
            </li>
            <li>
              <strong>공동 주머니의 콘텐츠</strong>
              공동 주머니에 작성한 피드, 댓글, 채팅과 관련 미디어는 다른 구성원의 추억과 대화 흐름을 유지하기 위해 계정 탈퇴 후에도 남을 수 있습니다.
            </li>
            <li>
              <strong>비어 있는 주머니</strong>
              마지막 구성원이 나가면 주머니를 비활성화하고 초대 코드를 즉시 무효화합니다. 최소 30일의 유예 기간이 지난 후 주머니와 남은 콘텐츠를 순차적으로 삭제합니다.
            </li>
            <li>
              <strong>복구용 백업</strong>
              삭제된 정보는 보안과 장애 복구를 위한 보호된 백업에 최대 14주 동안 남을 수 있습니다.
            </li>
          </ul>
        </section>

        <section id="rights">
          <h2>6. 이용자의 권리와 행사 방법</h2>
          <p>
            이용자는 앱에서 프로필과 알림 설정을 변경하고, 지원되는 피드와 댓글을 삭제할 수 있습니다.
            개인정보 열람·정정·삭제 또는 처리 관련 문의는 문의처로 요청할 수 있으며, 본인 확인 후 필요한 조치를 안내합니다.
          </p>
          <div className="legal-button-row">
            <Link className="legal-button-link" to="/account-deletion/">계정 삭제 방법 보기</Link>
            <a className="legal-button-link secondary" href="mailto:mypot.support@gmail.com">개인정보 문의</a>
          </div>
        </section>

        <section id="permissions">
          <h2>7. 앱 권한 사용</h2>
          <ul className="legal-detail-list">
            <li><strong>사진 및 동영상</strong> 프로필, 피드 또는 채팅에 이용자가 선택한 사진·영상을 첨부할 때 사용합니다.</li>
            <li><strong>마이크</strong> 이용자가 피드나 채팅에서 음성 녹음을 시작한 동안에만 사용합니다.</li>
            <li><strong>알림</strong> 현재 선택한 주머니의 새 피드, 댓글, 채팅 및 설정한 추억 알림을 표시할 때 사용합니다.</li>
          </ul>
        </section>

        <section id="security">
          <h2>8. 개인정보 보호 조치</h2>
          <ul>
            <li>Firebase 인증과 서버 검증을 통한 계정 및 주머니 접근 통제</li>
            <li>주머니 멤버십을 기준으로 한 Firestore 읽기·쓰기 권한 제한</li>
            <li>HTTPS 암호화 통신과 만료 시간이 짧은 미디어 업로드 URL 사용</li>
            <li>비공개 저장소와 접근 정책 적용</li>
            <li>개발·운영 환경 분리 및 최소 권한 원칙에 따른 운영 접근 제한</li>
          </ul>
        </section>

        <section id="children">
          <h2>9. 아동의 개인정보</h2>
          <p>
            마이폿은 만 14세 미만 아동의 개인정보를 법정대리인의 동의 없이 수집하려는 목적으로 운영하지 않습니다.
            동의 없이 만 14세 미만 이용자의 정보가 수집된 사실을 알게 된 경우 문의처로 알려주시면 필요한 삭제 조치를 진행합니다.
          </p>
        </section>

        <section id="changes">
          <h2>10. 개인정보처리방침 변경</h2>
          <p>서비스 또는 개인정보 처리 방식이 변경되면 이 페이지의 시행일을 갱신하고, 중요한 변경은 앱 또는 서비스 내 적절한 방법으로 안내합니다.</p>
        </section>

        <section id="contact">
          <h2>11. 개인정보 문의처</h2>
          <div className="legal-contact-box">
            <p><strong>운영자:</strong> 마이폿</p>
            <p><strong>이메일:</strong> <a href="mailto:mypot.support@gmail.com">mypot.support@gmail.com</a></p>
            <p>개인정보 열람·정정·삭제, 계정 삭제 및 개인정보 보호 관련 문의를 접수합니다.</p>
          </div>
        </section>
      </LegalLayout>
    </>
  )
}
