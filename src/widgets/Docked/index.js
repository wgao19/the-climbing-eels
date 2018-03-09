/**
 * @flow
 * @jsx h
 * */
import  { h, Component } from 'preact';
import cx from 'classnames';
import './style.scss';

type P = {
  top?: number,
};

type S = {
  active: boolean,
};

const docked = (...WrappedComponents: any[]) => {
  class DockedComponent extends Component {
    state: S;
    dockedNode: HTMLElement;
    handleScroll: () => void;
    defaultProps: {
      top: 0, // default docked header would be sticky to top from the very beginning
      paddingTop: 0,
    };

    constructor(props: P) {
      super(props);
      this.state = {
        active: false,
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      document && document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      document && document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
      if (window.scrollY > this.props.top) {
        this.setState({ active: true });
      } else {
        this.setState({ active: false });
      }
    }

    render() {
      const { paddingTop, zIndex } = this.props;
      return (
        <div
          className={cx(
            'eels-docked',
            this.state.active
              ? 'eels-docked--active'
              : 'eels-docked--inactive'
          )}
          ref={r => {
            this.dockedNode = r;
          }}
          style={{ paddingTop, zIndex }}
        >
          {WrappedComponents &&
            WrappedComponents.map((WrappedComponent, index) => (
              <WrappedComponent key={index} {...this.props} />
            ))}
        </div>
      );
    }
  }
  return DockedComponent;
};

export default docked;
