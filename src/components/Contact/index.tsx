import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { BsPinMap } from "react-icons/bs";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Dark } from "../../interface/dark";

interface MessageForm {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const Contact: React.FC<{ dark: Dark }> = () => {
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<MessageForm>();

  const submitMessageHandler = (data: MessageForm) => {
    toast.loading("Sending message...");
    setLoading(true);
    emailjs
      .send(
        "service_oje07os",
        "template_80qce8m",
        data as any,
        "user_Nx1CU504JmnLwXRUtw605"
      )
      .then(
        (result: any) => {
          console.log(result);
          toast.dismiss();
          toast.success("Message sent!");
          reset();
        },
        (error: any) => {
          toast.dismiss();
          toast.error("Message failed to send!");
        }
      )
      .finally(() => {
        setLoading(false);

        setTimeout(() => {
          toast.dismiss();
        }, 2000);
      });
  };

  return (
    <div className="h-screen relative">
      <div className="w-5 h-full bg-primary absolute"></div>
      <div className="p-12 flex">
        <div className="flex-1">
          <h1 className="text-[60px] w-[60%]">Let's discuss your project</h1>
          <div>
            <div className="flex items-center gap-4 my-12">
              <AiOutlinePhone />
              <span className="text-black">+977 9866064677</span>
            </div>
            <div className="flex items-center gap-4 my-12">
              <AiOutlineMail />
              <span className="text-black">ayushbaral17@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 my-12 w-9/12">
              <BsPinMap />
              <span className="text-black">Pokhara, Nepal</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <p className="font-extralight">
            <b>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</b>{" "}
            Similique quod rerum fugit eos tempore, praesentium excepturi aut
            ratione totam recusandae!
          </p>
          <form className="mt-5" onSubmit={handleSubmit(submitMessageHandler)}>
            <input
              {...register("name", { required: " This field is required" })}
              type="text"
              placeholder="Name"
              className="block w-full h-[50px] border-b-2 outline-none border-primary border-b-solid my-3 mx-0 pl-3"
            />
            {errors?.name && (
              <p className="text-red-500">This field is required</p>
            )}

            <input
              {...register("email", {
                required: " This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                  message: "Email format doesnt match",
                },
              })}
              type="email"
              placeholder="Email"
              className="block w-full h-[50px] border-b-2 outline-none border-primary border-b-solid my-4 mx-0 pl-3"
            />
            {errors?.email && (
              <p className="text-red-500">This field is required</p>
            )}
            <input
              {...register("subject", { required: " This field is required" })}
              type="text"
              placeholder="Subject"
              className="block w-full h-[50px] border-b-2 outline-none border-primary border-b-solid my-4 mx-0 pl-3"
            />
            {errors?.subject && (
              <p className="text-red-500">This field is required</p>
            )}
            <textarea
              {...register("message", {
                required: " This field is required",
                minLength: {
                  value: 10,
                  message: "Message cannot be less than 10 characters",
                },
              })}
              rows={10}
              placeholder="Message"
              className="block w-full  border-b-2 outline-none border-primary border-b-solid my-4 mx-0 pl-3"
            />
            {errors?.message && (
              <p className="text-red-500">This field is required</p>
            )}
            <button
              disabled={loading}
              type="submit"
              className="bg-primary text-white py-3 px-6 transition hover:scale-110 hover:-translate-y-1 duration-500 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
