// type Fn = () => void
// export default function throttle(fn: Fn, interval: number, trailing = false) {
//   let timer: any = 0
//   let last = 0
//   const _throttle = function () {
//     return new Promise((resolve, reject) => {
//       let _arguments = arguments
//       let now = new Date().getTime()
//       if (now - last > interval) {
//         if (timer) {
//           clearTimeout(timer)
//           timer = null
//         }
//         resolve(fn.call(this, ..._arguments))
//         last = now
//       } else if (trailing && timer === null) {
//         timer = setTimeout(() => {
//           timer = null
//           resolve(fn.call(this, ..._arguments))
//           last = now
//         }, interval)
//       }
//     })
//   }

//   _throttle.cancle = function () {
//     if (timer) clearTimeout(timer)
//     timer = null
//   }

//   return _throttle
// }
