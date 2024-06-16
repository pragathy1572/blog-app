import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, there!</b> <br />Discover cool stories and creative ideas.
      </h1>
      {/* <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Travel May Broaden the Mind, But Living Abroad Deepens It.</h1>
          <p className={styles.postDesc}>
          That world slowly expands over the coming months, from her, to hers. We have no form of independent locomotion, so must be carried by an adult — almost always our mother under typical circumstances — to perceive the surrounding world along her chosen or dictated trajectory.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div> */}
    </div>
  );
};

export default Featured;
