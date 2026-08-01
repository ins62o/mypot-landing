import { AudioLines, Heart, Image, LockKeyhole, MessageCircle, Pencil, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import googleIcon from '../assets/google-play-icon.webp'
import heroVisual from '../assets/hero-visual-mascot.webp'
import appleIcon from '../assets/ic_apple_login.svg'
import logo from '../assets/logo.webp'
import chatVisual from '../assets/chat-section/chat-phone-couple-balanced-transparent.webp'
import photoMemory from '../assets/record-section/photo-memory.webp'
import videoMemory from '../assets/record-section/video-memory.webp'
import './App.css'
import { PageMeta } from './components/PageMeta'
import { ScrollToTop } from './components/ScrollToTop'
import { AccountDeletionPage } from './pages/AccountDeletionPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { getPublicPocketCount } from './services/pocketMetrics'

function LandingPage() {
  const [pocketCount, setPocketCount] = useState(0)
  const [targetPocketCount, setTargetPocketCount] = useState<number | null>(null)
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const [isRecordVisible, setIsRecordVisible] = useState(false)
  const [isChatVisible, setIsChatVisible] = useState(false)
  const recordSectionRef = useRef<HTMLElement>(null)
  const chatSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const controller = new AbortController()

    getPublicPocketCount(controller.signal)
      .then(setTargetPocketCount)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }

        console.error('운영 주머니 수를 불러오지 못했습니다.', error)
      })

    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (targetPocketCount === null) {
      return
    }

    const duration = 2200
    let animationFrame = 0
    const startTime = performance.now()

    const animateCount = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3

      setPocketCount(Math.round(targetPocketCount * easedProgress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount)
      }
    }

    animationFrame = requestAnimationFrame(animateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [targetPocketCount])

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const recordSection = recordSectionRef.current

    if (!recordSection) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRecordVisible(entry.isIntersecting)
      },
      { threshold: 0.22 },
    )

    observer.observe(recordSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const chatSection = chatSectionRef.current

    if (!chatSection) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsChatVisible(entry.isIntersecting)
      },
      { threshold: 0.28 },
    )

    observer.observe(chatSection)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageMeta
        title="마이폿 | 함께 기록하는 추억앱"
        description="마이폿은 가족, 연인, 친구와 사진·영상·글·음성으로 오늘의 순간을 함께 기록하는 추억앱입니다."
        canonicalPath="/"
        ogTitle="마이폿 | 함께 기록하는 추억앱"
        ogDescription="가족, 연인, 친구와 함께 오늘의 순간을 마이폿에 담아보세요."
      />
      <header className={`site-header${isHeaderScrolled ? ' is-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="마이폿 홈">
          <img src={logo} alt="MyPot" />
        </a>
      </header>

      <main className="landing-page" id="top">
        <section className="hero-section" id="intro" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div
              className="pocket-count-card"
              aria-label={`${pocketCount}개의 주머니가 함께 하고 있어요`}
            >
              <strong>
                <span className="pocket-count-number">
                  {pocketCount.toLocaleString('ko-KR')}
                </span>
                개의 주머니가
              </strong>
              <span>함께 하고 있어요</span>
            </div>

            <h1 id="hero-title">
              오늘의 순간을
              <br />
              <mark>마이폿</mark>에 담아보세요
            </h1>
            <span>가족, 연인, 친구와 사진·영상·글·음성으로 함께 기록하는 우리만의 추억앱</span>

            <div className="store-actions" aria-label="앱 다운로드">
              <a className="store-button" href="#download" aria-label="App Store에서 다운로드">
                <img src={appleIcon} alt="" aria-hidden="true" />
                <strong>App Store</strong>
              </a>
              <a className="store-button" href="#download" aria-label="Google Play에서 다운로드">
                <img src={googleIcon} alt="" aria-hidden="true" />
                <strong>Google Play</strong>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="마이폿 앱 화면 미리보기">
            <img src={heroVisual} alt="마이폿 앱 화면과 추억 사진, 캐릭터가 함께 있는 이미지" />
          </div>
        </section>

        <section
          ref={recordSectionRef}
          className={`record-section${isRecordVisible ? ' is-visible' : ''}`}
          id="features"
          aria-labelledby="record-title"
        >
          <div className="record-heading">
            <h2 id="record-title">
              어떤 순간이든 <mark>남겨보세요</mark>
            </h2>
            <p>사진, 영상, 글, 음성까지 원하는 방식으로 기록해요</p>
          </div>

          <div className="record-cards" aria-label="마이폿 기록 방식">
            <article className="record-card-shell record-photo">
              <div className="record-card photo-card">
                <div className="record-label">
                  <span className="record-icon photo-icon" aria-hidden="true">
                    <Image />
                  </span>
                  <strong>사진</strong>
                </div>
                <div className="polaroid-frame">
                  <img src={photoMemory} alt="꽃을 들고 웃는 아이의 추억 사진" />
                </div>
                <div className="memory-note">
                  <span className="profile-dot" aria-hidden="true" />
                  <div>
                    <strong>민아</strong>
                    <span>봄날의 웃음</span>
                  </div>
                  <em>2025.04.12</em>
                </div>
              </div>
            </article>

            <article className="record-card-shell record-video">
              <div className="record-card video-card">
                <div className="record-label">
                  <span className="record-icon video-icon" aria-hidden="true">
                    <Play />
                  </span>
                  <strong>영상</strong>
                </div>
                <div className="video-frame">
                  <img src={videoMemory} alt="가족이 함께 웃는 영상 기록" />
                </div>
              </div>
            </article>

            <article className="record-card-shell record-writing">
              <div className="record-card writing-card">
                <div className="record-label">
                  <span className="record-icon writing-icon" aria-hidden="true">
                    <Pencil />
                  </span>
                  <strong>글</strong>
                </div>
                <div className="paper-note">
                  <span>오랜만에 친구들과</span>
                  <span>좋아하던 카페에 모였어요.</span>
                  <span>별것 아닌 이야기도</span>
                  <span>함께 웃으니 오래 기억될 것 같아요.</span>
                  <span>다음 약속도 꼭 지키기로 했어요.</span>
                  <em>2025.04.10</em>
                </div>
              </div>
            </article>

            <article className="record-card-shell record-voice">
              <div className="record-card voice-card">
                <div className="record-label">
                  <span className="record-icon voice-icon" aria-hidden="true">
                    <AudioLines />
                  </span>
                  <strong>음성</strong>
                </div>
                <div className="voice-panel">
                  <div className="waveform" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>00:12</strong>
                  <button type="button" aria-label="음성 재생">▶</button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          ref={chatSectionRef}
          className={`chat-section${isChatVisible ? ' is-visible' : ''}`}
          aria-labelledby="chat-title"
        >
          <div className="chat-visual-wrap">
            <img src={chatVisual} alt="마이폿 채팅 화면과 함께 나누는 추억 이미지" />
          </div>

          <div className="chat-copy">
            <h2 id="chat-title">
              추억은
              <br />
              <mark>함께 나눌 때</mark>
              <br />더 특별해져요
            </h2>


            <div className="chat-feature-list" aria-label="채팅 기능">
              <span>
                <MessageCircle />
                실시간 채팅
              </span>
              <span>
                <LockKeyhole />
                우리끼리만
              </span>
              <span>
                <Heart />
                따뜻한 대화
              </span>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <img src={logo} alt="MyPot" />
          <nav aria-label="마이폿 하단 메뉴">
            <Link to="/account-deletion/">계정 삭제 안내</Link>
            <span aria-hidden="true">|</span>
            <Link to="/privacy/">개인정보처리방침</Link>
            <span aria-hidden="true">|</span>
            <a href="https://pf.kakao.com/_HFxfxnX/chat" target="_blank" rel="noreferrer">
              고객센터
            </a>
            <span aria-hidden="true">|</span>
            <a href="https://www.instagram.com/app.mypot/" target="_blank" rel="noreferrer">
              인스타그램
            </a>
          </nav>
          <small>© MyPot All rights reserved.</small>
        </footer>
      </main>

    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/privacy/" component={PrivacyPage} />
        <Route path="/account-deletion/" component={AccountDeletionPage} />
        <Route component={LandingPage} />
      </Switch>
    </>
  )
}

export default App
