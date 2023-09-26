import React from 'react'
import { createClient } from 'contentful'
import Project from './components/Project';
import styles from './Project.module.scss'

const client = createClient({
  space: 'm014an19zign',
  accessToken: 'v6TA_fe11aip9-A7IUBMg-5_j9mBWtNF9qOqUMDkmRc',
});

const data = async () => {

  const response = await client.getEntries({
    content_type: "followMouseMenu",
  });

  return (
    <div className={styles.Project__Container}>
      {response.items.map((item, index) => (
        <Project key={index} project={item} />
      ))}
    </div>
  )
}

export default data