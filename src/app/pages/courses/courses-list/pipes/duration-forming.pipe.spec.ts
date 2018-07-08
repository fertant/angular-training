import { DurationFormingPipe } from './duration-forming.pipe';

describe('DurationFormingPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationFormingPipe();
    expect(pipe).toBeTruthy();
  });

  it('check processing duration', () => {
    const pipe = new DurationFormingPipe();
    expect(pipe.transform(61)).toBe('1h 1min');
  });
});
