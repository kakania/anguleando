/**
 * Created by Jesse on 3/22/2014.
 */
describe('Expense', function () {
    var expenseEntry, expense;

    beforeEach(function () {
        expenseEntry = new ExpenseEntry(100);
        expense = new Expense(expenseEntry);
    });
   it('should be an expense', function(){
       expect(expense.expenseEntry).toBe(expenseEntry);
   });

   it('should have the correct expense amount', function () {
       expect(expense.expenseEntry.amount).toEqual(100);
   });
});