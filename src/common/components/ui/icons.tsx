import {
  AlertCircle,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  LucideIcon,
  XCircle,
} from 'lucide-react-native'
import { cssInterop } from 'nativewind'

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  })
}

interopIcon(AlertCircle)
interopIcon(CheckCircle)
interopIcon(XCircle)

interopIcon(Check)
interopIcon(ChevronDown)
interopIcon(ChevronRight)
interopIcon(ChevronLeft)
interopIcon(ChevronUp)

export {
  AlertCircle,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  XCircle,
}
