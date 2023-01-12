import { listAll, getDownloadURL, getMetadata } from "firebase/storage"
import { v4 } from "uuid"

export const fetchStorage = async (listRef, opts) => {
  const defaultOptions = {
    withMeta: false,
  }

  // 2ed opts value will overwrite 1st defaultoptions val
  // sequential logic !!
  const options = {
    ...defaultOptions,
    ...opts,
  }
  const { withMeta } = options

  const list = await listAll(listRef)
  const listItems = await Promise.all(
    list.items.map(async item => {
      const url = await getDownloadURL(item)
      const meta = withMeta ? await getMetadata(item) : {}
      const folderPath = item._location.path_

      return {
        ...item,
        ...meta,
        id: v4(),
        folder: folderPath,
        urlpath: url,
      }
    }),
  )
  return listItems
}
