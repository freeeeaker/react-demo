import React, { PureComponent } from 'react'

import "../style/view/footer.scss"

export default class Footer extends PureComponent {
  render () {
    return (
      <footer className="footer">
        <div className="container clear">
          <p className="copy">© 2018 copy right</p>
          <ul className="right">
            <li>邮箱：437270544@qq.com</li>
            <li>微博：<a href="https://weibo.com/u/2056281391?wvr=3.6&lf=reg&is_all=1" target="_blank">freeeeeeeaker</a></li>
            <li>gitHub：<a href="https://github.com/freeeeaker">freeeeaker</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}