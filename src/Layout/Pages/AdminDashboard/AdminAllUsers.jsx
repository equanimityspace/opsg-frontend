import AdminNav from "../../../Features/Navigations/Navbars/AdminNav";
import { useGetAllUsersQuery } from "../../../Slices/mainSlice";
import "./adminAllUsers.css";

import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AdminAllUsers() {
  const { data: users, error, isLoading } = useGetAllUsersQuery();

  return (
    <Container>
      <Row>
        <Col className="navCol">
          <AdminNav />
        </Col>
        <Col className="listCol">
          <ListGroup className="listGroup">
            {users ? (
              users.map((user) => {
                const userId = user.id;
                const name = `${user.firstName} ${user.lastName}`;
                const email = user.email;
                return (
                  <ListGroup.Item
                    action
                    href={`/admin/users/user/${userId}`}
                    key={userId}
                  >
                    {`${name} ${email}`}
                  </ListGroup.Item>
                );
              })
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
