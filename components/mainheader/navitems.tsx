import Link from 'next/link'
import { motion } from 'framer-motion'

type NavItemProps = {
  href: string
  label: string
  disabled?: boolean
}

export default function NavItem({ href, label, disabled }: NavItemProps) {
  return (
    <motion.div className="relative inline-block" whileHover="hover" initial="rest" animate="rest">
      {disabled ? (
        <span className="font-medium text-lime-900 hover:text-gray-800 transition-colors duration-300 cursor-not-allowed opacity-60">
          {label}
        </span>
      ) : (
        <Link href={href} className="font-medium text-lime-900 hover:text-gray-800 transition-colors duration-300">
          {label}
        </Link>
      )}
      <motion.span
        variants={{
          rest: { opacity: 0, width: 0 },
          hover: { opacity: 1, width: "100%" }
        }}
        transition={{ duration: 0.3 }}
        className="block h-1 bg-lime-900 rounded absolute left-0 -bottom-1"
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  )
}