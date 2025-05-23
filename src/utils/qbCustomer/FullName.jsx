import { useGetCustomerObjectQuery } from "../../Slices/qbSlice";
import InfoCard from "../InfoCard";

function FullName(id, bg) {
  const {
    data: objCustomer,
    status,
    isLoading,
  } = useGetCustomerObjectQuery(id);

  return (
    <>
      {objCustomer?.FullyQualifiedName && !isLoading ? (
        <InfoCard bg={bg} title={objCustomer.FullyQualifiedName} />
      ) : (
        <InfoCard bg={bg} title="Loading..." />
      )}
    </>
  );
}

export default FullName;
