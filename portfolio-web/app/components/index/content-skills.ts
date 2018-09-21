import Component from '@ember/component';
import { logoImageRoot } from 'portfolio-web/data/constants/asset-paths';

const skills = [
  { name: 'Javascript', asset: 'js.png' },
  { name: 'Ember JS', asset: 'ember.png' },
  { name: 'Redux', asset: 'redux.png' },
  { name: 'React', asset: 'react.png' },
  { name: 'HTML', asset: 'html5.png' },
  { name: 'CSS', asset: 'css3.png' },
  { name: 'jQuery', asset: 'jquery.gif' },
  { name: 'D3', asset: 'd3.png' },
  { name: 'Highcharts', asset: 'highcharts.jpg' },
  { name: 'Three.js', asset: 'threejs.png' },
  { name: 'Create.js', asset: 'createjs.png' },
  { name: 'Java', asset: 'java.png' },
  { name: 'Node', asset: 'node.png' },
  { name: 'Express', asset: 'express.png' },
  { name: 'MySQL', asset: 'mysql.png' },
  { name: 'PostgreSQL', asset: 'postgres.png' },
  { name: 'Python', asset: 'python.png' },
  { name: 'WebSockets', asset: 'websocket.png' },
  { name: 'WebRTC', asset: 'webrtc.png' }
].map(skill => ({
  ...skill,
  asset: `${logoImageRoot}${skill.asset}`
}));

export default class IndexContentSkills extends Component.extend({
  tagName: 'section'
}) {
  /**
   * List of skills to be passed to the template for rendering
   */
  skills = skills;
};
