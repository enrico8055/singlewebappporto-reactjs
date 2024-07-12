import React from "react";
import { motion, useScroll } from "framer-motion"


export default function Main() {

    const draw = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 5,
                ease: "backInOut",
            },
        },
    };

    return (
        <div className="flex justify-center mt-10 text-white mx-5">
            <div className="w-full lg:w-5/6 ">

                <motion.div
                    drag
                    dragTransition={{
                        min: 0,
                        max: 100,
                        bounceStiffness: 100,
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={draw}
                    style={{ fontSize: "48px", fontWeight: "bold" }}
                >
                    Hello World
                </motion.div>
            </div>
        </div>
    );
}
