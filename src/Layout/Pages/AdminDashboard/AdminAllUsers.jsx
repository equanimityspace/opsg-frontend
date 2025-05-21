import UserSearch from "../../../utils/SearchBarComponents/UserSearch";
import AdminNav from "../../../Features/Navigations/Navbars/AdminNav";
import { useGetAllUsersQuery } from "../../../Slices/mainSlice";
import { useState } from "react";
import { ListGroup, Spinner, Container, Row, Col } from "react-bootstrap";

export default function AdminAllUsers() {
  const { data: users, error, isLoading } = useGetAllUsersQuery();
  const [showAllUsers, setShowAllUsers] = useState(true);

  return (
    <Container
      fluid
      data-bs-theme="dark"
      style={{ backgroundColor: "#272932" }}
    >
      <Row className="g-0">
        <Col
          xs="auto"
          className="flex-shrink-0"
          style={{ width: "10rem", marginLeft: "2rem" }}
        >
          <AdminNav />
        </Col>

        <Col data-bs-theme="dark" className="flex-grow-1">
          <Row className="mt-3 mb-4">
            <Col>
              <UserSearch />
            </Col>
          </Row>
          {showAllUsers && (
            <Row>
              <Col style={{ marginTop: "5px" }}>
                {isLoading ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <ListGroup>
                    {users.map((user) => (
                      <ListGroup.Item
                        action
                        href={`/user/${user.id}`}
                        key={user.id}
                      >
                        {user.firstName} {user.lastName} — {user.email}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
}
