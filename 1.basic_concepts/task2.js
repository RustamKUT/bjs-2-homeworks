describe('Домашнее задание к занятию 1. «Основные понятия»', () => {
  describe('Задача №1', () => {
    it('должна возвращать 2 корня уравнения', () => {
      expect(solveEquation(1, -3, 2)).toEqual([2, 1]);
    });
  
    it('должна возвращать 1 корень уравнения', () => {
      expect(solveEquation(1, 2, 1)).toEqual([-1]);
    });

    it('должна вернуть пустой массив', () => {
      expect(solveEquation(1, 1, 1)).toEqual([]);
    });
  });
  
  describe('Задача №2. Функция должна:', () => {
    it('верно считать кредит: кейс #1', () => {
      expect(calculateTotalMortgage(20, 0, 50000, 12)).toEqual(55580.7);
    });

    it('верно считать кредит: кейс #2', () => {
      expect(calculateTotalMortgage(22, 1000, 50000, 12)).toEqual(56033.5);
    });

    it('верно считать кредит: кейс #3', () => {
      expect(calculateTotalMortgage(25, 20000, 20000, 48)).toEqual(0);
    });

    it('верно считать кредит: кейс #4', () => {
      expect(calculateTotalMortgage(28, 0, 10000, 36)).toEqual(14890.89);
    });

    it('верно считать кредит: кейс #5', () => {
      expect(calculateTotalMortgage(30, 0, 10000, 36)).toEqual(15282.57);
    }); 
  });
});