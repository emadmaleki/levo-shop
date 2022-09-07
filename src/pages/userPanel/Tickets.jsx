import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Title from "../../components/UserPanel/Title";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserTicket, FetchUserTickets } from "../../redux/actions/TicketsActions/TicketsActions";
import { getStorage } from "../../services/localStorage";
import { FiTrash } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { msgbox } from "../../utils/helpers";
import {useNavigate} from 'react-router-dom';
import CmLoading from "../../components/User/Loading/CmLoading";

const Tickets = () => {
  let {tickets} = useSelector((state) => state);
  let loading = tickets.loading;
  let dispatch = useDispatch();
  let nav = useNavigate();
  
  useEffect(() => {
    dispatch(FetchUserTickets(getStorage("userInfo")));
  }, []);
  
  let handleDeleteTicket = (id) => {
      dispatch(DeleteUserTicket(id));
      msgbox("yout ticket deleted !", "success");
      nav('/panel');
  };

  if (loading) {
    return <CmLoading />;
  }
  return (
    <>
      <Title>Tickets</Title>
      <Link to="/panel/createTicket" className="tickets-create">
        create
      </Link>
      <section className="Tickets">
        <Row>
          {tickets.tickets.map((ticket) => (
            <Col xs="12" sm="12" md="6" lg="6" key={ticket.id}>
              <section className="ticket">
                <section className="ticket-header">
                  <p className="ticket-title">{ticket.title}</p>
                </section>
                <section className="ticket-body">
                  <p className="ticket-desc">{ticket.desc}</p>
                </section>
                <section className="ticket-footer">
                  <p className="ticket-date">{ticket.created_at}</p>
                  <section className="ticket-setting">
                    <span
                      className="trash-icon"
                      onClick={() => handleDeleteTicket(ticket.id)}
                    >
                      <FiTrash />
                    </span>
                    <span className="edit-icon">
                      <TbEdit />
                    </span>
                  </section>
                </section>
              </section>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Tickets;
