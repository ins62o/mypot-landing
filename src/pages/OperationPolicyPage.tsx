import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { LegalLayout } from './LegalLayout'

const operationPolicyToc = [
  { href: '#principles', label: '1. 기본 원칙' },
  { href: '#sanctions', label: '2. 누적 위반 제재' },
  { href: '#severity', label: '3. 위반 심각도별 예외' },
  { href: '#restriction-scope', label: '4. 이용정지 범위' },
  { href: '#admin-review', label: '5. 관리자 처리 기준' },
  { href: '#processing-time', label: '6. 신고 처리 기한' },
  { href: '#appeals', label: '7. 이의제기' },
  { href: '#posted-notice', label: '8. 게시용 문구' },
  { href: '#contact', label: '9. 문의처' },
]

export function OperationPolicyPage() {
  return (
    <>
      <PageMeta
        title="운영정책 | 마이폿"
        description="마이폿 신고, 위반 확인, 이용정지 및 이의제기 기준을 안내합니다."
        canonicalPath="/operation-policy/"
        ogTitle="마이폿 운영정책"
        ogDescription="신고 접수만으로 자동 정지하지 않고, 관리자가 위반을 확인한 경우에만 제재 이력에 반영합니다."
      />
      <LegalLayout
        eyebrow="MY POT POLICY"
        title="마이폿 운영정책"
        intro="마이폿은 신고 접수 횟수가 아니라 관리자가 실제 위반으로 확인한 횟수를 기준으로 제재를 적용합니다. 신고된 콘텐츠는 필요한 경우 신고자 화면에서 즉시 숨기거나 차단할 수 있으며, 긴급한 피해가 우려되는 사안은 우선 조치합니다."
        dateLabel="최종 업데이트: 2026년 8월 5일"
        toc={operationPolicyToc}
        footer="© 2026 MyPot. 모두가 안심하고 추억을 나눌 수 있는 공간을 지켜갑니다."
      >
        <section id="principles">
          <h2>1. 기본 원칙</h2>
          <ul>
            <li>사용자가 신고했다는 이유만으로 자동 정지하지 않습니다.</li>
            <li>관리자가 신고 내용과 관련 자료를 검토한 후 위반 확인으로 처리한 경우에만 운영정책 위반 횟수가 1회 증가합니다.</li>
            <li>동일한 콘텐츠에 여러 신고가 접수돼도 위반 횟수는 1회만 증가합니다.</li>
            <li>위반 없음으로 처리된 신고는 제재 이력에 포함하지 않습니다.</li>
            <li>신고된 콘텐츠는 신고자 화면에서 즉시 숨기거나 차단할 수 있습니다.</li>
            <li>중대한 위반은 누적 횟수와 관계없이 즉시 장기 또는 영구정지할 수 있습니다.</li>
          </ul>
        </section>

        <section id="sanctions">
          <h2>2. 누적 위반에 따른 제재</h2>
          <div className="legal-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">최근 12개월 위반 횟수</th>
                  <th scope="col">제재</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="최근 12개월 위반 횟수">1회</td>
                  <td data-label="제재">콘텐츠 삭제 및 경고</td>
                </tr>
                <tr>
                  <td data-label="최근 12개월 위반 횟수">2회</td>
                  <td data-label="제재">3일 이용정지</td>
                </tr>
                <tr>
                  <td data-label="최근 12개월 위반 횟수">3회</td>
                  <td data-label="제재">7일 이용정지</td>
                </tr>
                <tr>
                  <td data-label="최근 12개월 위반 횟수">4회</td>
                  <td data-label="제재">30일 이용정지</td>
                </tr>
                <tr>
                  <td data-label="최근 12개월 위반 횟수">5회 이상</td>
                  <td data-label="제재">영구 이용정지</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>위반 횟수는 해당 위반이 확정된 날부터 12개월간 누적합니다.</li>
            <li>12개월 동안 추가 위반이 없다면 해당 위반은 누적 제재 계산에서 제외합니다.</li>
            <li>영구정지 이력은 12개월이 지나도 초기화하지 않습니다.</li>
            <li>동일한 행위로 여러 운영정책을 위반했더라도 원칙적으로 한 번의 사건은 1회로 계산합니다.</li>
          </ul>
        </section>

        <section id="severity">
          <h2>3. 위반 심각도별 예외</h2>
          <div className="legal-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">등급</th>
                  <th scope="col">예시</th>
                  <th scope="col">처리 기준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="등급">경미</td>
                  <td data-label="예시">도배, 반복 게시, 서비스 이용 방해</td>
                  <td data-label="처리 기준">삭제 또는 경고</td>
                </tr>
                <tr>
                  <td data-label="등급">일반</td>
                  <td data-label="예시">욕설, 괴롭힘, 개인정보 노출, 타인의 사진 무단 게시, 원치 않는 반복 연락</td>
                  <td data-label="처리 기준">위반 횟수 누적 및 단계별 제재</td>
                </tr>
                <tr>
                  <td data-label="등급">중대</td>
                  <td data-label="예시">협박, 사칭, 혐오 표현, 성적 콘텐츠, 불법 거래, 반복적인 괴롭힘</td>
                  <td data-label="처리 기준">최초라도 7일~30일 정지 가능</td>
                </tr>
                <tr>
                  <td data-label="등급">긴급</td>
                  <td data-label="예시">불법촬영물, 아동·청소년 성착취물, 실제 위해 협박, 범죄 조장</td>
                  <td data-label="처리 기준">즉시 비노출 및 영구정지 가능, 필요시 관계기관 신고</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="legal-notice">
            <p>중대하거나 긴급한 사안은 기존 제재 단계를 건너뛸 수 있습니다. 특히 불법촬영물, 아동·청소년 성착취물, 실제 위해에 대한 협박처럼 이용자에게 심각한 피해를 줄 수 있는 콘텐츠는 일반 누적 정책보다 우선해 삭제하거나 차단할 수 있습니다.</p>
          </div>
        </section>

        <section id="restriction-scope">
          <h2>4. 이용정지 범위</h2>
          <ul className="legal-detail-list">
            <li>
              <strong>3일·7일 정지</strong>
              피드 및 댓글 작성, 채팅 메시지·사진·음성 전송, 주머니 생성·참여·초대가 제한됩니다. 기존 콘텐츠 열람은 가능하며, 신고, 이의제기, 고객센터 및 회원 탈퇴 기능은 이용할 수 있습니다.
            </li>
            <li>
              <strong>30일 정지</strong>
              콘텐츠 작성 및 전송, 주머니 생성·참여·초대가 제한됩니다. 기존 콘텐츠 열람도 제한될 수 있으며, 이의제기, 고객센터 및 회원 탈퇴 기능만 이용할 수 있습니다.
            </li>
            <li>
              <strong>영구 이용정지</strong>
              마이폿의 주요 기능 이용이 제한되고 로그인 시 영구정지 안내 화면이 표시됩니다. 이의제기, 고객센터 및 회원 탈퇴는 가능하며, 동일 이용자의 재가입을 제한할 수 있습니다.
            </li>
          </ul>
          <div className="legal-notice">
            <p>정지된 사용자도 회원 탈퇴와 이의제기 경로에는 접근할 수 있어야 합니다.</p>
          </div>
        </section>

        <section id="admin-review">
          <h2>5. 관리자 처리 기준</h2>
          <div className="legal-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">관리자 버튼</th>
                  <th scope="col">처리 결과</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="관리자 버튼">위반 없음</td>
                  <td data-label="처리 결과">신고 기각, 위반 횟수 증가 없음</td>
                </tr>
                <tr>
                  <td data-label="관리자 버튼">위반 확인</td>
                  <td data-label="처리 결과">위반 횟수 +1, 콘텐츠 조치 및 제재 적용</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>위반 확인을 누르면 다음 항목을 필수로 선택하거나 기록하는 것을 원칙으로 합니다.</p>
          <ul>
            <li>위반 유형</li>
            <li>위반 등급</li>
            <li>콘텐츠 삭제 또는 비노출 여부</li>
            <li>적용할 제재</li>
            <li>관리자 판단 사유</li>
            <li>처리 관리자 및 처리 일시</li>
            <li>중복 위반 여부</li>
          </ul>
          <p>제재는 기본적으로 누적 기준에 따라 자동 제안하되, 관리자가 사유를 기록하고 단계를 변경할 수 있습니다.</p>
        </section>

        <section id="processing-time">
          <h2>6. 신고 처리 기한</h2>
          <ul className="legal-detail-list">
            <li><strong>신고 접수</strong>즉시 접수 완료를 안내합니다.</li>
            <li><strong>긴급 신고</strong>24시간 이내 우선 확인합니다.</li>
            <li><strong>일반 신고</strong>72시간 이내 1차 확인합니다.</li>
            <li><strong>추가 조사가 필요한 신고</strong>최대 7일 이내 처리합니다.</li>
            <li><strong>결과 안내</strong>구체적인 처벌이나 개인정보를 공개하지 않고 필요한 조치 완료 여부만 안내합니다.</li>
          </ul>
        </section>

        <section id="appeals">
          <h2>7. 이의제기</h2>
          <ul>
            <li>사용자는 제재 통지를 받은 날부터 14일 이내에 이의를 제기할 수 있습니다.</li>
            <li>이의제기 중에도 제재는 유지하는 것을 원칙으로 합니다.</li>
            <li>검토 결과 잘못된 제재로 확인되면 정지를 해제하고 해당 위반 횟수를 복구합니다.</li>
            <li>동일 사안에 대한 반복적인 이의제기는 제한할 수 있습니다.</li>
            <li>이의제기 접수 후 원칙적으로 7일 이내 결과를 안내합니다.</li>
          </ul>
        </section>

        <section id="posted-notice">
          <h2>8. 운영정책 게시용 문구</h2>
          <p>
            마이폿은 신고가 접수되었다는 사실만으로 회원의 이용을 제한하지 않습니다. 신고된 콘텐츠와 관련 자료를 검토하여 운영정책 위반이 확인된 경우에만 해당 회원의 운영정책 위반 횟수를 증가시키고, 콘텐츠 삭제, 경고, 기능 제한, 일정 기간 이용정지 또는 영구 이용정지 조치를 할 수 있습니다.
          </p>
          <p>
            일반적인 위반은 최근 12개월 동안 확정된 위반 횟수를 기준으로 1회 경고, 2회 3일 이용정지, 3회 7일 이용정지, 4회 30일 이용정지, 5회 이상 영구 이용정지를 적용하는 것을 원칙으로 합니다.
          </p>
          <p>
            다만 불법촬영물, 아동·청소년 성착취물, 실제 위해에 대한 협박, 중대한 괴롭힘 등 이용자에게 심각한 피해를 줄 수 있는 행위는 누적 위반 횟수와 관계없이 콘텐츠를 즉시 제한하고 장기 또는 영구 이용정지 조치를 할 수 있습니다.
          </p>
          <p>
            동일한 콘텐츠에 여러 신고가 접수된 경우 하나의 위반으로 처리할 수 있으며, 위반이 확인되지 않은 신고는 제재 이력에 포함하지 않습니다. 허위 신고, 반복 신고 또는 타인을 부당하게 제재받게 할 목적으로 신고 기능을 악용한 회원도 이용이 제한될 수 있습니다.
          </p>
          <p>
            이용정지 조치를 받은 회원은 통지받은 날부터 14일 이내에 고객센터를 통해 이의를 제기할 수 있습니다. 검토 결과 제재가 잘못 적용된 것으로 확인되면 해당 제재와 위반 이력을 정정합니다.
          </p>
          <div className="legal-notice">
            <p>이 정책은 Apple App Review Guidelines 1.2가 요구하는 UGC 신고 기능, 신속한 대응, 악성 사용자 차단, 운영자 연락처 제공과 함께 적용합니다. 불법촬영물 등 긴급 콘텐츠는 전기통신사업법 등 관련 법령에 따라 일반 누적 정책보다 우선해 삭제·차단할 수 있습니다.</p>
          </div>
        </section>

        <section id="contact">
          <h2>9. 문의처</h2>
          <div className="legal-contact-box">
            <p><strong>운영자:</strong> 마이폿</p>
            <p><strong>이메일:</strong> <a href="mailto:mypot.support@gmail.com">mypot.support@gmail.com</a></p>
            <p>개인정보 처리 기준은 <Link to="/privacy/">마이폿 개인정보처리방침</Link>에서, 계정 삭제 방법은 <Link to="/account-deletion/">계정 삭제 안내</Link>에서 확인할 수 있습니다.</p>
          </div>
        </section>
      </LegalLayout>
    </>
  )
}
