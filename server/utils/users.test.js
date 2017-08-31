const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Colonel Mustard',
      room: 'Kitchen'
    }, {
      id: '2',
      name: 'Professor Plum',
      room: 'Study'
    }, {
      id: '3',
      name: 'Miss Scarlet',
      room: 'Kitchen'
    }]
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Reverend Green',
      room: 'Hall'
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '2';
    const user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = '99';
    const user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '2';
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    const userId = '99';
    const user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Kitchen', () => {
    const userList = users.getUserList('Kitchen');

    expect(userList).toEqual(['Colonel Mustard', 'Miss Scarlet']);
  });

  it('should return names for Study', () => {
    const userList = users.getUserList('Study');

    expect(userList).toEqual(['Professor Plum']);
  });
});