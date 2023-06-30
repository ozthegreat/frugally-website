import React from 'react';
import styles from './styles.module.css';

const List = [
  {
    title: 'Section 1',
    img: 'https://placehold.co/550x350',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'Section 2',
    img: 'https://placehold.co/550x350',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'Section 3',
    img: 'https://placehold.co/550x350',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'Section 4',
    img: 'https://placehold.co/550x350',
    description: (
      <>
        Once you've worked through the getting started guide and have frugally.app setup and working you might wish to
        look through the Advanced Section of the documentation for more information on things like security as well as
        the Billing section to understand how invoices are raised in more detail. After that FAQs can be found here.
      </>
    ),
  },
  {
    title: 'Section 5',
    img: 'https://placehold.co/550x350',
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
      <img src={img} alt={title} />

      {/* Content */}
      <div>
        <h3 style={{ fontSize: '36px' }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
