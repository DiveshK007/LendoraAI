use aiken/hash.{Blake2b_224, Hash}
use aiken/list
use aiken/transaction.{ScriptContext, Spend, Transaction}
use aiken/transaction/credential.{VerificationKey}

type Datum {
  lender: Hash<Blake2b_224, VerificationKey>,
  borrower: Hash<Blake2b_224, VerificationKey>,
  deadline: Int,
}

type Redeemer {
  Repay
  Claim
}

validator {
  fn escrow(datum: Datum, redeemer: Redeemer, ctx: ScriptContext) -> Bool {
    let tx = ctx.transaction
    when redeemer is {
      Repay -> {
        // Borrower repays the loan
        // In a real implementation, we'd check if the output pays the lender
        list.has(tx.extra_signatories, datum.borrower)
      }
      Claim -> {
        // Lender claims collateral after deadline
        // Check if deadline has passed
        // check if signed by lender
        list.has(tx.extra_signatories, datum.lender)
      }
    }
  }
}
