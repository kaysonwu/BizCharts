// fixme: 先开发 g2 registerAnnotation。预计g2@4.0.9版本
import Base, { IAnnotationBaseProps } from './base';

import HtmlComponent from '@antv/component/lib/abstract/html-component';
import { Annotation as AnnotationComponent } from '@antv/component/lib';
class HtmlAnnotation extends HtmlComponent {
  setLocation = () => {
    return {}
  }
  render() {
    const container = this.get('container');
  }
}

AnnotationComponent['Html'] = HtmlAnnotation;

export interface AnnotationHtmlProps extends IAnnotationBaseProps {
  el: HTMLElement;
}

export default class Html extends Base<AnnotationHtmlProps>{
  public annotationType = 'html';
};
