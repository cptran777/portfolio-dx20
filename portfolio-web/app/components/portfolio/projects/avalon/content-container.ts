import BaseContentContainer from 'portfolio-web/components/base-content-container';
import { imageRoot, logoImageRoot } from 'portfolio-web/data/constants/asset-paths';

const skills = [
  { name: 'Javascript', asset: 'js.png' },
  { name: 'Redux', asset: 'redux.png' },
  { name: 'React', asset: 'react.png' },
  { name: 'Three.js', asset: 'threejs.png' },
  { name: 'VR', asset: 'vr.png' },
  { name: 'Java', asset: 'java.png' },
  { name: 'Node', asset: 'node.png' },
  { name: 'Express', asset: 'express.png' },
  { name: 'PostgreSQL', asset: 'postgres.png' },
  { name: 'WebSockets', asset: 'websocket.png' },
  { name: 'WebRTC', asset: 'webrtc.png' }
].map(skill => ({
  ...skill,
  asset: `${logoImageRoot}${skill.asset}`
}));

export default class AvalonContentContainer extends BaseContentContainer {
  imageRoot = imageRoot;

  techStack = skills;
};
