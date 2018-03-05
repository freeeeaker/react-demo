export default function log () {
  console.log.apply(this, ['----log:', ...arguments])
}