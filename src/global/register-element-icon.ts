import { App } from 'vue'
import {
  UserFilled,
  Cellphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  DArrowLeft,
  DArrowRight,
  CaretBottom,
  ChatDotRound,
  CollectionTag,
  Bell,
  Delete,
  WindPower,
  Search,
  Refresh,
  Edit
} from '@element-plus/icons-vue'

const icons = [
  UserFilled,
  Cellphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  DArrowLeft,
  DArrowRight,
  CaretBottom,
  ChatDotRound,
  CollectionTag,
  Bell,
  Delete,
  WindPower,
  Search,
  Refresh,
  Edit
]

export default function registerElementIcon(app: App): void {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
