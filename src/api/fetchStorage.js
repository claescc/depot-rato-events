import { ref, listAll, getDownloadURL, getStorage, getMetadata } from "firebase/storage"
import { v4 } from "uuid"

export const fetchStorage = async (listRef, opts) => {
  // const defaultOptions = {
  //   withMeta: false,
  // }
  // const { withMeta } = {
  //   ...defaultOptions,
  //   ...opts,
  // }
  // const options = {
  //   ...defaultOptions,
  //   ...opts,
  // }
  // const { withMeta } = options

  const withMeta = opts?.withMeta || false

  const list = await listAll(listRef)
  const listItems = await Promise.all(
    list.items.map(async item => {
      const url = await getDownloadURL(item)
      const meta = withMeta ? await getMetadata(item) : {}

      return {
        ...item,
        ...meta,
        id: v4(),
        urlpath: url,
      }
    }),
  )

  return listItems
}
