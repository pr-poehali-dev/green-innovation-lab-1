import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, items, tag, isActive }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
      {subtitle && (
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      {tag && !subtitle && (
        <motion.p
          className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
        >
          {tag}
        </motion.p>
      )}

      <motion.h2
        className="text-3xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight max-w-5xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-3xl mt-5 text-neutral-400 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {items && items.length > 0 && (
        <motion.ul
          className="mt-6 space-y-3 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-neutral-300 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}

      <motion.div
        className="absolute bottom-8 left-8 md:left-16 lg:left-24 text-neutral-700 text-xs tracking-widest"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        ФРГ 1949–1969
      </motion.div>
    </section>
  )
}
