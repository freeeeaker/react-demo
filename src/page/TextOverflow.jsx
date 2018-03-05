import React, { PureComponent } from 'react'
const textOverflow = require('../util/text-overflow')
// import textOverflow from '../util/text-overflow'

require('../style/page/text-overflow.scss')

const str = 'this is the first paragraph<mention id="sfd">@github</mention>, it not only has plain text\n' 
        + 'this is the second paragraph，break line by \\n\n'
        + 'this is the third<a href="https://github.com"><span class="c"></span>github.com</a>, width padding and margin\n'
        + '\n'
        + '\n'
        + '\n'
        + 'this is the fourth\n'
        + 'you can use emoji<span class="c"></span>😆😆<span class="c"></span>😆<span class="c"></span>😆\n'
        + '😆'

export default class TextOverflow extends PureComponent {
  constructor () {
    super()
    this.state = {
      userList: [
        '点击有变化哦',
        '😆😆😆',
        '😎😎😎',
        'click it',
        '吼 吼 吼',
        'enenen',
        'gogogo',
        '哦哦哦'
      ]
    }
    this.str = str
  }
  componentDidMount () {
    textOverflow(this.l1, { 
      str: this.str,
      addedStr: '...<a href="javascript:;">more</a>',
      maxLine: 7,
      maxWidth: 360,
      emptyLine: true
    })
    textOverflow(this.l2, { 
      str: this.str,
      addedStr: '...<a href="javascript:;">more</a>',
      maxLine: 7,
      maxWidth: 360,
      emptyLine: false
    })
    textOverflow(this.l3, { 
      str: this.renderUserList(),
      addedStr: '...<a href="javascript:;">more</a>',
      maxLine: 3,
      maxWidth: 360,
      emptyLine: false
    })
  }
  add = () => {
    this.setState({
      userList: [...this.state.userList, `ECHO${this.state.userList.length + 1}`]
    }, () => {
      textOverflow(this.l3, {
        str: this.renderUserList(),
        addedStr: `等${this.state.userList.length}人觉得很赞`,
        maxLine: 2,
        maxWidth: 360,
        emptyLine: false
      })
    })
  }
  remove = () => {}
  renderUserList () {
    let html = ''
    for (let i = 0; i < this.state.userList.length; i++) {
      const user = this.state.userList[i]
      if (i === this.state.userList.length - 1) {
        html += `<a href="#">${user}</a>`
      } else {
        html += `<a href="#">${user}</a>,`
      }
    }
    return html
  }
  render () {
    return (
      <div className="text-overflow-page">
        <div className="box">
          <h3>原文, original text</h3>
          <div className="test" dangerouslySetInnerHTML={{__html: this.str}}></div>
          <h3>最大7行截断后, maxLine: 7</h3>
          <h5>不过滤空行, with empty line</h5>
          <div ref={ref=>this.l1=ref} className="test"></div>
          <h5>过滤空行, without empty line</h5>
          <div ref={ref=>this.l2=ref} className="test"></div>
          <h3>最大2行截断后, maxline: 2</h3>
          <button onClick={this.add}>点赞</button><button onClick={this.remove}>取消点赞</button>
          <div ref={ref=>this.l3=ref} className="test"></div>
        </div>
      </div>
    )
  }
}