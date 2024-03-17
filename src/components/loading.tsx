import ReactDom from 'react-dom/client'
import { Spin } from 'antd'
const loadingEl = document.querySelector(
  '#kk-loading'
) as HTMLDivElement
let count = 0
export function showLoading() {
  if (count === 0) {
    ReactDom.createRoot(loadingEl).render(
      <Spin tip='loading...'>
        <div className='loading-content' />
      </Spin>
    )
    loadingEl.style.setProperty('display', 'flex')
  }
  count++
}

export function hideLoading() {
  --count
  if (count === 0) {
    loadingEl.style.display = 'none'
  }
}
