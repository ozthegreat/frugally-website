import React from 'react';
import styles from './styles.module.css';

const List = [
  {
    title: 'Run Ad Off Actions',
    img: 'img/4.png',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'Create Schedules',
    img: 'img/3.png',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'View Upcoming Schedules',
    img: 'img/5.png',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'See the Results in Channels',
    img: 'img/1.png',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'View Monthly Savings',
    img: 'img/2.png',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
];

export default function MainSection() {
  return (
    <section className={styles.features}>
      {List.map((props, idx) => (
        <Container key={props.title} {...props} reverse={idx % 2} />
      ))}
    </section>
  );
}

function Container({ reverse, img, title, description }) {
  return (
    <div className={styles.container} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      {/* Image */}
      <img src={img} alt={title} width="550" />

      {/* Content */}
      <div>
        <h3 style={{ fontSize: '36px' }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
