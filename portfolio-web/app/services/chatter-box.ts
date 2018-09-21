import Service from '@ember/service';
import randomUsername from 'portfolio-web/utils/social/random-username';
import { get } from '@ember/object';

export enum ChatUserRank {
  pleb = 'plebian',
  sub = 'subscriber',
  mod = 'moderator'
}

export interface IChatUser {
  name: string;
  rank: ChatUserRank;
}

export interface IMessage {
  user: IChatUser;
  message: string;
}

/**
 * The ChatterBox service populates the right side of the screen with fake generated messages and can track
 * the lists of messages that have been made. This can be connected to other components and even give context
 * to the current route or components. Named after a fond memory of a time long, long ago when Hack Reactor
 * was still a thing.
 */
export default class ChatterBox extends Service {
  /**
   * Holds our current list of messages to be displayed on the chatterbox
   * @type {Array<IMessage>}
   */
  messageList: Array<IMessage> = [];

  /**
   * Holds a list of "users" currently in chatterbox
   * @type {Array<IChatUser>}
   */
  userList: Array<IChatUser> = [];

  /**
   * Creates a user and places them in our user list
   * @param rank - optional specification for the user's current rank
   * @param name - optional specification for the user's name
   */
  createUser(rank?: ChatUserRank, name?: string) {
    const newUser: IChatUser = {
      name: name || randomUsername(),
      rank: rank || ChatUserRank.pleb,
    }

    get(this, 'userList').pushObject(newUser);
  }

  constructor() {
    super(...arguments);
  }
}

declare module '@ember/service' {
  interface Registry {
    'chatter-box': ChatterBox;
  }
}
