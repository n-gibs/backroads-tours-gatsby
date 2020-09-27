import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form className={styles.form}>
          <div>
            <input type="text" name="name" id="name" className={styles.formControl} placeholder="Name" />
            <div>
            <input type="email" name="email" id="email" className={styles.formControl} placeholder="Email" />
            </div>
            <div>
              <textarea name="message" id="message" rows="10" className={styles.formControl} placeholder="Message" />
            </div>
            <div>
              <input type="submit" value="submit" className={styles.submit} />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
