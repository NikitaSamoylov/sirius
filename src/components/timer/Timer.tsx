import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import styles from './Timer.module.scss';

type TTimer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Timer: React.FC = () => {
  const sheduleStore = useAppSelector(state => state.shedule);

  const parsedShedule = sheduleStore.map((el) => (
    el.date.map(item => {
      return {
        subject: el.subject,
        date: item.start,
      }
    })
  ))
    .flat()
    .sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ).filter(el => new Date(el.date).getTime() >= Date.now());

  const calculateTimeLeft = (): TTimer | null => {
    const difference = +new Date(parsedShedule[0].date) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (3600000)) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      return null;
    };
  };

  const [timeLeft, setTimeLeft] = useState<TTimer | null>(calculateTimeLeft());


  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const showTimer = () => {
    if (timeLeft !== null) {
      return (
        <div>
          <div style={ { display: 'flex' } }>
            <div style={ { display: 'flex' } } >
              { timeLeft.days
                !== undefined ?
                (
                  <div className={ styles.date__days }>
                    {
                      timeLeft.days
                        .toString()
                        .split('')
                        .length <= 1
                        ? '0' + timeLeft.days
                        : timeLeft.days
                    }
                    <div className={ styles.date__descr }>
                      д
                    </div>
                  </div>
                )
                : null
              }
            </div>
            <div>
              { timeLeft.hours
                !== undefined ?
                <div className={ styles.date__hours }>
                  {
                    timeLeft.hours
                      .toString()
                      .split('')
                      .length <= 1
                      ? '0' + timeLeft.hours
                      : timeLeft.hours
                  }
                  <div className={ styles.date__descr }>
                    ч
                  </div>
                </div>
                : null
              }
            </div>
            <div>
              { timeLeft.minutes
                !== undefined
                ? <div className={ styles.date__minutes }>
                  {
                    timeLeft.minutes
                      .toString()
                      .split('')
                      .length <= 1
                      ? '0' + timeLeft.minutes
                      : timeLeft.minutes
                  }
                  <div className={ styles.date__descr }
                    style={ { marginRight: 0 } }
                  >
                    мин
                  </div>
                </div>
                : null
              }
            </div>
            <div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <h3>
          Акция закончилась
        </h3>
      )
    };
  };

  return (
    <div >
      { showTimer() }
    </div>
  );
};

export default Timer;