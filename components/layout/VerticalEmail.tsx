import { PERSONAL_INFO } from '@/lib/constants'

export default function VerticalEmail() {
  return (
    <aside className="fixed left-8 bottom-32 hidden xl:block z-40">
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="vertical-text text-muted-foreground hover:text-foreground transition-colors tracking-widest text-sm"
      >
        {PERSONAL_INFO.email}
      </a>
    </aside>
  )
}
