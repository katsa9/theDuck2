
import { motion } from "framer-motion";
import { useMotionValue, useTransform, useViewportScroll } from 'framer-motion';

const Junk = () => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [1, 1, 0])

  const { scrollYProgress } = useViewportScroll()

  const MyComponent2 = () => (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <button>hello hello</button>
    </motion.div>
  )

  return (
    <div>
      <motion.div drag="x" style={{ x, opacity }} >
        <button>hello</button>
      </motion.div>
      <MyComponent2 />
      <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        <button>hukjjklj</button>
      </motion.div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 2.1 }}
        whileTap={{ scale: 0.9 }} >
        <button>Boooo</button>
      </motion.div>


      {/* Create declarative, reactive chains of MotionValues that can update as a result of animations and/or gestures. */}
      <motion.path style={{ pathLength: scrollYProgress }} >
        <p>See you later</p>
        <p>See you later</p>
        <p>See you later</p>
        <p>See you later</p>
        <p>See you later</p>
      </motion.path>
    </div>
  );
}
export default Junk;