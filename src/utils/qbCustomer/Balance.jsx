import { useGetCustomerObjectQuery } from "../../Slices/qbSlice";
import InfoCard from "../InfoCard";

function Balance({ id, bg }) {
  const {
    data: arrCustomer,
    status,
    isLoading,
  } = useGetCustomerObjectQuery(id);

  return (
    <>
      {arrCustomer === null && status === "fulfilled" ? (
        <InfoCard bg="success" title="No outstanding balance 🎉" />
      ) : !isLoading ? (
        arrCustomer[0]?.Balance === 0 ? (
          <InfoCard bg="success" title="No outstanding balance 🎉" />
        ) : (
          <InfoCard
            bg={bg}
            title="Outstanding Balance"
            text={`$${arrCustomer[0]?.Balance}`}
          />
        )
      ) : (
        <InfoCard bg={bg} title="Loading..." />
      )}
    </>
  );
}

export default Balance;
