'use client'

import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono text-xs">
          <span className="text-primary">EM_</span> · Ezequiel Mettler · {year}
        </p>
        <p className="text-xs">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
