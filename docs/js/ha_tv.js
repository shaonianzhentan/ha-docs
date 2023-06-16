const HAStyle = {
  'tv.cctv.com': `
      #player{
        width: 100% !important;
        height: 100% !important;
        position: fixed !important;
        left: 0 !important;
        top: 0 !important;
      }
      .zhibo_201014,
      .gwA18043_ind01{
        display: none !important;
      }
  `,
  'live.douyin.com': `
  `
}
if (location.hostname in HAStyle) {
  const style = document.createElement('style')
  style.textContent = HAStyle[location.hostname]
  document.body.appendChild(style)
}