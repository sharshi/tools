import { aIsPercentageOfB, aPercentOfB, aPercentageChangeFromB } from '../src';

describe('percentage-calculator', () => {
  describe('aIsPercentageOfB', () => {
    it('should calculate "percentage of"', () => {
      expect(aIsPercentageOfB(1, 1)).toEqual(100);
      expect(aIsPercentageOfB(234, 2352435)).toEqual(0.009947139878466356);
      expect(aIsPercentageOfB(1, 100)).toEqual(1);
      expect(aIsPercentageOfB(234, 23)).toEqual(1017.3913043478261);
    });

    it('should handle 0 gracefully', () => {
      expect(aIsPercentageOfB(0, 1)).toEqual(0);
      expect(aIsPercentageOfB(0, 100)).toEqual(0);
      expect(aIsPercentageOfB(0, 0)).toEqual(0);
      expect(aIsPercentageOfB(100, 0)).toEqual(0);
    });
  });

  describe('aPercentOfB', () => {
    it('should calculate "percent of"', () => {
      expect(aPercentOfB(10, 100)).toEqual(10);
      expect(aPercentOfB(1, 100)).toEqual(1);
      expect(aPercentOfB(1, 50)).toEqual(2);
      expect(aPercentOfB(1, 200)).toEqual(0.5);
      expect(aPercentOfB(2, 1)).toEqual(200);
      expect(aPercentOfB(4, 2)).toEqual(200);
    });

    it('should handle 0 gracefully', () => {
      expect(aPercentOfB(0, 1)).toEqual(0);
    });
  });

  describe('aPercentageChangeFromB', () => {
    it('should calculate "percentage change from"', () => {
      expect(aPercentageChangeFromB(1, 1)).toEqual('0%');
      expect(aPercentageChangeFromB(100, 99)).toEqual('1.0101010101010102%');
      expect(aPercentageChangeFromB(99, 100)).toEqual('-1%');
      expect(aPercentageChangeFromB(10, 100)).toEqual('-90%');
      expect(aPercentageChangeFromB(100, 10)).toEqual('900%');
    });

    it('should handle 0 gracefully', () => {
      expect(aPercentageChangeFromB(0, 1)).toEqual('unable to calculate');
    });
  });
});
