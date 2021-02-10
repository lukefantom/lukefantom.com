import GridItem from "../ProjectContainer/gridItem";
import styles from "../ProjectContainer/projectContainer.module.css";
import cn from "classnames";

export default function Tourdefrance() {
  return (
    <GridItem
      color={"#3bab87"}
      fontColor={"#f5f5e8"}
      title={"Societly"}
      fullWidth
      underline
      grow
    >
      <p className={cn(styles.gridItemText)} style={{ color: "#f5f5e8" }}>
        Keeping all bootcampers connected after the School of Code. The platform
        aims to strengthen the School of Code community, while allowing coaches
        to gauge the wider impact of the course.
      </p>
    </GridItem>
  );
}

//   color,
//   fullWidth,
//   title,
//   text,
//   link,
//   children,
//   image,
//   grow,
//   underline,

// <GridItem
//           color={"#3bab87"}
//           fontColor={"#f5f5e8"}
//           fullWidth
//           title={"Societly"}
//           underline
//           grow
//           link={"https://societly.netlify.app/"}
//         >
//           <p className={gridStyles.gridItemText} style={{ color: "#f5f5e8" }}>
//             Keeping all bootcampers connected after the School of Code
//           </p>
//         </GridItem>
