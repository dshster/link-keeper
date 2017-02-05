import statuses from './statuses';
import { FETCH_PROCESS } from '../actions/types';

describe('process reducer', () => {
  it('should handle initial state', () => {
    expect(statuses(undefined, {}))
      .toEqual({ fetch: false });
  });

  it('toggle fetch true', () => {
    expect(statuses({ fetch: false }, {
      type: FETCH_PROCESS,
      status: true
    })).toEqual({ fetch: true })
  });

  it('toggle fetch false', () => {
    expect(statuses({ fetch: true }, {
      type: FETCH_PROCESS,
      status: false
    })).toEqual({ fetch: false })
  });
});
