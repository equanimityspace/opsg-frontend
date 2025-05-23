import { useGetCustomerObjectQuery } from "../../Slices/qbSlice";
import InfoCard from "../InfoCard";

function Balance(id, bg) {
  const {
    data: objCustomer,
    status,
    isLoading,
  } = useGetCustomerObjectQuery(id);

  return (
    <>
      {objCustomer?.Balance ? (
        objCustomer.Balance === 0 ? (
          <InfoCard bg="success" title="No outstanding balance 🎉" />
        ) : (
          <InfoCard
            bg={bg}
            title="Outstanding Balance"
            text={objCustomer.Balance}
          />
        )
      ) : (
        <InfoCard bg={bg} title="Loading..." />
      )}
    </>
  );
}

export default Balance;
