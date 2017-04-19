// This program implements the bankAccount object.
// Author: Allan Gilmore

namespace bankAccountApplication 
{
	public class bankAccount 
	{
		public float interestRate; // Interest rate on account as a percent
		private float balance;  // Current balance in the account

		// Construct a new bankAccount with a starting balance of zero and 
		// an interest rate of %2.
		public bankAccount() 
		{
			balance = 0;
			interestRate = 2;
		}

		// Construct a new bankAccount with a starting balance of "startBalance" and 
		// an interest rate of %2.
		public bankAccount(float startBalance) 
		{
			balance = startBalance;
			interestRate = 2;
		}

		// Construct a new bankAccount with a starting balance of "amount" and 
		// an interest rate of %"startRate.
		public bankAccount(float startBalance, float startRate) 
		{
			balance = startBalance;
			interestRate = startRate;
		}

		// Return the current balance of the bankAccount.
		public float getBalance() 
		{
			return balance;
		}

		// Add the value "amount" to the current balance of the bankAccount.
		public void deposit(float amount) 
		{
			balance += amount;
		}

		// Subtract the value "amount" from the current balance of the bankAccount.
		// Balance is allowed to be/become negative.
		public void withdraw(float amount) 
		{
			balance -= amount;
		}

		// Calculate the amount of interest earn at the rate of interestRate and
		// add it to the balance of the bankAccount.
		// Interest is not compound (simple interest)
		public void addInterest() 
		{
			balance += balance * (interestRate / 100);
		}
	}
}


