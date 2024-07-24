"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Form } from "rsuite";
import { motion } from "framer-motion";

import { model } from "@/models/Login.Model";

import logo from "@/assets/img/logo.svg";

import "@/assets/css/login.css";
import { users } from "@/json/Users";
import NotchBox from "@/components/global/NotchBox";

type FieldType = {
  username: string;
  password: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

function LoginPage() {
  const router = useRouter();
  const formRef = useRef<any>();
  const [formValue, setFormValue] = useState<FieldType>({ username: "", password: "" });
  const [user, setUser] = useState(null);

  const handleSubmit = async () => {
    if (!formRef.current.check()) {
      return;
    } else {
      users.find((item) => {
        if (item.username === formValue.username && item.password === formValue.password) {
          setUser(item);
          router.push("/dashboard");
        }
      });
    }
  };

  return (
    <div className="login-container bg-spGreen h-screen w-full grid place-items-center overflow-hidden">
      <div className="login-bg"></div>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.33, 0, 0.67, 1] }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            priority
            className="absolute right-1/2 translate-x-1/2 -top-14 z-50 -mr-1"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <NotchBox color="cream">
            <div className="login-box bg-spCream w-[22rem] h-80 px-4 pb-4 text-spGreen relative">
              <Form
                ref={formRef}
                fluid
                model={model}
                formValue={formValue}
                onChange={setFormValue}
                className="flex flex-col justify-between h-full"
              >
                <div className="flex flex-col gap-2 w-full mt-8">
                  <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }}>
                    <Form.Group>
                      <Form.ControlLabel
                        className="text-mainColor font-semibold"
                        style={{ fontSize: "1.2rem" }}
                      >
                        نام کاربری
                      </Form.ControlLabel>
                      <Form.Control className="h-10 text-lg" name="username" />
                    </Form.Group>
                  </motion.div>

                  <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }}>
                    <Form.Group>
                      <Form.ControlLabel
                        className="text-mainColor font-semibold"
                        style={{ fontSize: "1.2rem" }}
                      >
                        رمز عبور
                      </Form.ControlLabel>
                      <Form.Control
                        className="h-10 text-lg"
                        name="password"
                        type="password"
                        autoComplete="off"
                      />
                    </Form.Group>
                  </motion.div>
                </div>
                <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.5 }}>
                  <button
                    className="bg-spGreen hover:bg-spGreen/70 transition w-full h-10 rounded-xl text-spCream font-bold text-xl"
                    onClick={handleSubmit}
                  >
                    ورود
                  </button>
                </motion.div>
              </Form>
            </div>
          </NotchBox>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
