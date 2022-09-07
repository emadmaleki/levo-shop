import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "reactstrap";
import { SetUserTicket } from "../../redux/actions/TicketsActions/TicketsActions";
import Title from "../../components/UserPanel/Title";
import { getStorage } from "../../services/localStorage";
import { RedBtnOutline } from "../../styles/Style";
import { msgbox } from "../../utils/helpers";
import {useNavigate} from 'react-router-dom';
const CreateTicket = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    let dispatch = useDispatch();
    let nav = useNavigate();
    let handleSendTicket = () => {
        let data = {
            title, 
            desc,
            userId:getStorage('userInfo'),
            created_at : new Date()
        }
        if (title != "" && desc !="") {
            dispatch(SetUserTicket(data));
            msgbox('yout ticket sended !','success');
            nav('/panel');
        }
    }

  return (
    <>
      <Title>Create Ticket</Title>
      <section className="createTicket">
            <section className="L-formControl">
              <label htmlFor="title" className="L-label">
                Title :
              </label>
              <input type="text" id="title" className="L-input" onChange={(e)=>setTitle(e.target.value)}/>
            </section>
            <section className="L-formControl">
              <label htmlFor="desc" className="L-label">
                description :
              </label>
                <textarea id="desc" className="L-textarea" onChange={(e)=>setDesc(e.target.value)}></textarea>
            </section>
            <RedBtnOutline onClick={handleSendTicket}>Send</RedBtnOutline>
      </section>
    </>
  );
};

export default CreateTicket;
