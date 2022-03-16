import React, { useEffect, useState } from 'react';

import { useHoldings } from '@contexts/holdings';

import addTransactionToCoinAndRefreshData from '@services/addTransactionToCoinAndRefreshData';

import CoinDetailsForm from './CoinDetailsForm';
import DateDetailsForm from './DateDetailsForm';

interface Props {
  setActionLoading: React.Dispatch<React.SetStateAction<boolean>>;
  coinName: string;
}

const AddTransactionFrom: React.FC<Props> = ({
  setActionLoading,
  coinName,
}: Props) => {
  const { holdings, setHoldings } = useHoldings();

  const [step, setStep] = useState(0);
  const isPositiveState = useState(true);
  const quantityState = useState(0.0);
  const [date, setDate] = useState(0);
  const [submit, setSubmit] = useState(false);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (submit) {
      addTransaction();
      setSubmit(false);
    }
  }, [submit]);

  const addTransaction = async () => {
    setActionLoading(true);

    await addTransactionToCoinAndRefreshData({
      coinName: coinName,
      isPositive: isPositiveState[0],
      quantity: quantityState[0],
      date: date,
      holdings: holdings,
      setHoldings: setHoldings,
    });
    setActionLoading(false);
  };

  switch (step) {
    case 0:
      return (
        <CoinDetailsForm
          isPositiveState={isPositiveState}
          quantityState={quantityState}
          nextStep={nextStep}
        />
      );
    case 1:
      return (
        <DateDetailsForm
          setSubmit={setSubmit}
          prevStep={prevStep}
          setDate={setDate}
        />
      );
    default:
      return <div>An Error has occured</div>;
  }
};

export default AddTransactionFrom;
