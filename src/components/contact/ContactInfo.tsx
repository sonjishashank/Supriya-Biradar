import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/framer-animations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Pratibha Residency, C-41, Shri Siddhi Garden, Sasane Nagar, Hadapsar, Pune, Maharashtra 411028'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 XXXXXXXXXX'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@supriyabiradar.com'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM'
  }
];

export function ContactInfo() {
  return (
    <motion.div variants={fadeIn} className="space-y-8">
      <div className="aspect-[4/3] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9991.104324805727!2d73.92648756653927!3d18.497410097395807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1fef9c75557%3A0x74558018b8b80595!2sPratibha%20Residency!5e1!3m2!1sen!2sin!4v1734001761081!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>

      <div className="space-y-6">
        {CONTACT_INFO.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}