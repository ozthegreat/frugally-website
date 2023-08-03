import React from 'react';
import styles from './styles.module.css';

const List = [
  {
    title: 'Turn AWS resources off',
    img: 'img/schedule-aws-resources.png',
    imgAlt: 'Create AWS Schedules',
    description: (
      <>
        You probably have a development environment? Maybe even a QA as well? Possibly several more.
        <b>Why not turn them off when they're not in use?</b>
        <br />
        <br />
        You engineers don't work weekends and evenings, why pay for these environments to be up. You can <b>save money on
        your AWS bill</b> by creating a Schedule in Frugally and only having them turned on when you need them.
        <br />
        <br />
        All from Slack!
      </>
    ),
  },
  {
    title: 'Run Ad Hoc Actions',
    img: 'img/turn-ec2s-off.png',
    imgAlt: 'Turn AWS EC2s Off',
    description: (
      <>
      Working late? Or over the weekend? Need to turn a service(s) on/off outside a Schedule? Run ad hoc Executions
      straight from Slack. Turn on a Service when you need it or off again when you don't to save money.
      <br />
      <br />
      Don't worry, we'll publish the results in any Slack channel you like (or privately if you prefer).
      </>
    ),
  },
  {
    title: 'See what\'s happening when',
    img: 'img/view-frugally-schedules-slack.png',
    imgAlt: 'See Frugally Schedules',
    description: (
      <>
        Want to know when your next Schedule will run? Don't worry you can see exactly when the next UP action
        and DOWN action will occur.
        <br />
        <br />
        Straight from Slack.
      </>
    ),
  },
  {
    title: 'See the Results in Channels',
    img: 'img/aws-results-in-slack.png',
    imgAlt: 'Results in Slack',
    description: (
      <>
        Every Schedule you setup or every Ad Hoc Execution you run, we'll post the results in any Slack
        channel you like (public or private). We'll tell you exactly what resources were affected, when,
        and by who.
        <br />
        <br />
        Or not if you prefer!
      </>
    ),
  },
  {
    title: 'Save up to 60%',
    img: 'img/frugally-aws-invoice-savings.png',
    imgAlt: 'Save money in AWS',
    description: (
      <>
        And now for the best bit. See how <b>much money you're saving</b>!
        <br />
        <br />
        If your AWS instances are on for 12h a day 5 days a week and use Frugally to turn them off the rest of
        the time, you'll be saving nearly 60% of the cost of your EC2s.
        <br />
        <br />
        You can view all your estimated savings in the Frugally App.
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

function Container({ reverse, img, imgAlt, title, description }) {
  return (
    <div className={styles.container} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      {/* Image */}
      <img src={img} alt={imgAlt} width="550" />

      {/* Content */}
      <div>
        <h3 style={{ fontSize: '36px' }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
