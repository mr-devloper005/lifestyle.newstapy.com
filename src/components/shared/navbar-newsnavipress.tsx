'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function NavbarNewsNaviPress() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, logout } = useAuth()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const navigation = useMemo(
    () => [
      { name: 'Press', href: '/updates' },
      // { name: 'Insights', href: '/blog' },
      { name: 'About', href: '/about' },
      { name: 'Help', href: '/help' },
    ],
    []
  )

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white p-1">
              <img
                src="/favicon.png?v=20260520"
                alt={`${SITE_CONFIG.name} logo`}
                width="40"
                height="40"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white">{SITE_CONFIG.name}</span>
              <span className="block text-[10px] uppercase tracking-[0.24em] text-white/55">{SITE_CONFIG.tagline}</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={`${item.name}-${item.href}`}
                href={item.href}
                className={cn(
                  'text-sm font-semibold transition-colors',
                  isActive(item.href) ? 'text-white' : 'text-white/70 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {isClient && isAuthenticated ? (
              <>
                {/* <Link href="/create/article" className="rounded-xl bg-[#f6b60f] px-4 py-2 text-sm font-bold uppercase tracking-[0.06em] text-black hover:bg-[#ffc83f]">
                  Create Post
                </Link> */}
                <Button
                  variant="ghost"
                  onClick={logout}
                  className="rounded-xl border border-white/15 bg-transparent px-4 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/login" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10">
                  Login
                </Link>
                <Link href="/register" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="lg:hidden text-white hover:bg-white/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-3">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={`${item.name}-${item.href}`}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-sm font-semibold transition-colors',
                    isActive(item.href) ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                {isClient && isAuthenticated ? (
                  <>
                    <Link
                      href="/create/article"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 rounded-xl bg-[#f6b60f] px-4 py-2 text-center text-sm font-black uppercase tracking-[0.08em] text-black"
                    >
                      Create Post
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        logout()
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white/85"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1 rounded-xl bg-[#f6b60f] px-4 py-2 text-center text-sm font-black uppercase tracking-[0.08em] text-black"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
