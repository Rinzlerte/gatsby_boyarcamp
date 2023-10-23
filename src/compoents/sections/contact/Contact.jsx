import React from "react";
import Section from "../elements/Section";
import Container from "../elements/Container";
import ContactForm from "../../forms/ContactForm";
import SectionTitle from "../elements/SectionTitle";

import "./contact.scss";

const Contact = () => {
  return (
    <Section id="bording">

      <Container>
        <SectionTitle
          title={"бронювання"}
          description={"make a "}
          descriptionAdd={"Reservation"}
        />
        <br />

        <div className="contact-wrapper">
          <div className="order-container">
            <div className="order-container--box">
              <h3>Забронювати путівку</h3>
              <p>У формі бронювання вказати контактні дані</p>
            </div>

            <div className="order-container--box">
              <h3>Необхідні документи :</h3>
              <ul>
                <li>
                  <p>Свідоцтво про народження дитини </p>
                </li>
                <li>
                  <p>Паспорт одного із батьків</p>
                </li>
                <li>
                  <p>Договір</p>
                </li>
                <li>
                  <p>Путівка</p>
                </li>
                <li>
                  <p>Медична довідка(079о)</p>
                </li>
                <li>
                  <p>Квитанція про оплату</p>
                </li>
              </ul>
            </div>

            <div className="order-container--box">
              <h3>Oплата</h3>
              <ul>
                <li>
                  <p>
                    Від моменту бронювання необхідно оплатити вартість заїзду
                    протягом 7 днів і надіслати квитанцію
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <br />
          <ContactForm />
        </div>
      </Container>
      
    </Section>
  );
};

export default Contact;
