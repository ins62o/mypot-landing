import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import logo from '../../assets/logo.webp'
import './LegalPage.css'

type LegalLayoutProps = {
  eyebrow: string
  title: string
  intro: string
  dateLabel: string
  toc: Array<{
    href: string
    label: string
  }>
  footer: string
  children: ReactNode
}

export function LegalLayout({ eyebrow, title, intro, dateLabel, toc, footer, children }: LegalLayoutProps) {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <div className="legal-header-inner">
          <NavLink className="legal-brand" to="/" aria-label="마이폿 홈">
            <img src={logo} alt="MyPot" />
          </NavLink>
          <nav className="legal-nav" aria-label="정책 페이지">
            <NavLink to="/privacy/">개인정보처리방침</NavLink>
            <NavLink to="/account-deletion/">계정 삭제 안내</NavLink>
          </nav>
        </div>
      </header>

      <main className="legal-page">
        <div className="legal-intro">
          <p className="legal-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-intro-copy">{intro}</p>
          <p className="legal-effective-date">{dateLabel}</p>
        </div>

        <div className="legal-layout">
          <nav className="legal-toc" aria-label="목차">
            <p className="legal-toc-title">목차</p>
            {toc.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <details className="legal-toc-mobile">
            <summary>목차 보기</summary>
            <nav aria-label="모바일 목차">
              {toc.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>

          <article className="legal-content">{children}</article>
        </div>
      </main>

      <footer className="legal-footer">{footer}</footer>
    </div>
  )
}
