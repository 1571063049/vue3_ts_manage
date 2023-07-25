type ThisType = any
type Fn = () => void
export default function throttle(fn: Fn, interval: number, trailing = false) {
  let timer: any = 0
  let last = 0
  const _throttle = function (this: ThisType, ...args: any[]) {
    return new Promise((resolve, reject) => {
      const now = new Date().getTime()
      if (now - last > interval) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        resolve(fn.apply(this, args as any))
        last = now
      } else if (trailing && timer === null) {
        timer = setTimeout(() => {
          timer = null
          resolve(fn.apply(this, args as any))
          last = now
        }, interval)
      }
    })
  }

  _throttle.cancle = function () {
    if (timer) clearTimeout(timer)
    timer = null
  }

  return _throttle
}
