'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export const UpperFooter = () => {
  return (
    <section className="w-full bg-secondary-1100 text-secondary-20 py-4 flex items-center justify-between">
      <div>UpperFooter Section Here</div>
      <motion.div
        whileInView={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        initial={{ translateX: -412 }}
        viewport={{ once: true }}
      >
        <Image
          alt="car"
          width={412}
          height={270}
          src={'/images/footer/horizontal-car-desktop.webp'}
        />
      </motion.div>
    </section>
  );
};
