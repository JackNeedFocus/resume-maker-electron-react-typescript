import React from 'react';
import './index.less';
import testImg from '../../assets/test.png';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  return (
    <div style={styles} styleName="title">
      {text}
    </div>
  );
}

export default Title;
