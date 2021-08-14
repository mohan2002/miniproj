import React from 'react'
import Nav from '../Navigation/Nav'
import l1 from '../Images/bck1.jpg'
import l2 from '../Images/l2.jpg'

function Basics() {
    return (
        <div>
            <Nav/>
            <div className="mx-12 mt-10">
                <h2 className="mb-10 font-mono text-4xl font-extrabold">5 Things to Know Before Your First Loan Application</h2>
                <p className="mx-12 w-auto font-semibold">If you're considering applying for your first personal loan, it’s important that you know certain information, both so you can provide it to potential lenders and for your own awareness. Some of these things you may know off the top of your head, like your income, but there are also things you'll want to look into before you apply for your loan, such as your credit score. Let’s dive into what you need to know before you apply and why.</p>
                <img src={l1} className=" h-96 w-auto mx-auto content-center rounded-md"></img>
                <div className="w-auto mx-20 p-10 mt-10 text-center bg-gray-200 rounded-2xl">
                    <h1>1. Credit score and credit history</h1>
                    <p>A good credit score and credit history show lenders that you pay your credit obligations on time. The better your credit, the better your chances of securing a loan at the most favorable terms. The best terms can save you thousands over the life of your loan. For example, here’s what a 2- or 4-percentage-point difference in interest can mean for your wallet on a $25,000 loan paid over five years:</p>
                    <img src={l2} className="mx-auto"></img>
                </div>
                <div  className="w-auto mx-20 p-10 mt-10 text-center bg-gray-200 rounded-2xl">
                    <h2>2. Income</h2>
                    <p>Your take-home pay affects your ability to pay off a loan, so you’ll need to have proof of income for your application. If you’re an employee, you’ll need pay stubs, W-2 forms and/or a salary letter from your employer. If you’re a self-employed applicant, you’ll need tax returns for the past two-plus years and possibly invoices and receipts.</p>
                    <p>Of course, you have to know just how much you’re bringing home each month so you'll know whether you can afford monthly loan payments. Remember to think about all of your income sources, not just your primary one. This may include a spouse’s income, child support and second-job or freelancing income.</p>
                </div>
                <div  className="w-auto mx-20 p-10 mt-10 text-center bg-gray-200 rounded-2xl">
                    <h2>3. Monthly debt payments</h2>
                    <p>Your income is only one part of the equation; it’s also important to know your monthly debt obligations. If your income is $5,000 a month but you pay $4,500 each month toward your debts, you won’t realistically be able to pay off a new loan. A loan application will likely require you to list certain obligations — typically your rent or mortgage payment and existing payments toward credit cards or other debts.</p>
                </div>
                <div  className="w-auto mx-20 p-10 mt-10 text-center bg-gray-200 rounded-2xl">
                    <h2>4. Assets and liabilities</h2>
                    <p>Another thing your potential lender may look at is your net worth, or your assets minus your liabilities. Assets are the things that you own that are worth something, like your investment accounts and properties, and liabilities are the financial obligations you have, such as your student loan debt or mortgage.</p>
                    <p>Knowing your net worth is important for personal knowledge as well. The loan you’re applying for will become a liability, which you may be using to purchase an asset. Calculating your net worth — as well as how it will change when you get the loan — is a great way to keep your finances in check.</p>
                </div>
                <div className="w-auto mx-20 p-10 mt-10 text-center mb-10 bg-gray-200 rounded-2xl">
                    <h2>5. Employer’s contact information</h2>
                    <p>Potential lenders will probably ask for your current employer’s contact information and maybe a past employer’s information. Your current and past employers may be contacted as references or to verify income and employment dates.</p>
                </div>

                <div className="w-auto mx-20 p-10 mt-10 text-center mb-10 bg-gray-200 rounded-2xl">
                    <h2>For beter understandment watch this Video</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jgAsPXRhTLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="mx-auto mt-10 rounded-3xl"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Basics
