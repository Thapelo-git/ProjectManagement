import React from 'react'
import SubscriptionCard from './SubscriptionCard';

const paidPlan = [
    'Add unlimited project',
    'Access to live chat',
    'Add unlimited team member',
    'Advanced Reporting',
    'Priority Support',
    'Customization Options',
    'Integration Support',
    'Advanced Security',
    'Training and Resources',
    'Access Control',
    'Custom Workflows'
];

const annualPlan = [
    'Add unlimited project',
    'Access to live chat',
    'Add unlimited team member',
    'Advanced Reporting',
    'Priority Support',
    'Customization Options',
    'Integration Support',
    'Advanced Security',
    'Training and Resources',
    'Access Control',
    'Custom Workflows'
];
const freePlan = [
    'Add unlimited project',
    'Access to live chat',
    'Add unlimited team member',
    'Advanced Reporting',
    'Priority Support',
    'Customization Options',
    'Integration Support',
    'Advanced Security',
    'Training and Resources',
    'Access Control',
    'Custom Workflows'
];

const Subscription = () => {
    return (
        <div className='p-10'>
            <h1 className='text-5xl font-semibold py-5 pb-16 text-center'>Pricing</h1>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
                <SubscriptionCard data={{
                    planName: 'Free', fetures: freePlan, planType: 'FREE', price: 0,
                    buttonName: true ? 'Current Plan' : 'Get Started'
                }} />
                <SubscriptionCard data={{
                    planName: 'Monthly Paid Plan', fetures: paidPlan, planType: 'MONTHLY', price: 10,
                    buttonName: true ? 'Current Plan' : 'Get Started'
                }} />
                <SubscriptionCard data={{
                    planName: 'Annual Plan', fetures: annualPlan, planType: 'ANNUALLY', price: 100,
                    buttonName: true ? 'Current Plan' : 'Get Started'
                }} />
            </div>
        </div>
    )
}

export default Subscription