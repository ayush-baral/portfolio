import React, { useContext, useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { IconType } from "react-icons";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler } from "react-hook-form";
import { ThemeContext } from "../../context";
import toast from "react-hot-toast";
import MoveInFromLeftOnView from "../Motions/MoveInFromLeftOnView";

interface ContactInfoProps {
  Icon: IconType;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ Icon, text }) => (
  <div className='flex items-center gap-4 mb-8'>
    <Icon className='text-primary text-3xl' />
    <span className='text-xl'>{text}</span>
  </div>
);

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  errors: any;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({
  register,
  name,
  errors,
  label,
  className,
  ...props
}) => (
  <div className='mb-6'>
    <label htmlFor={name} className='block text-lg font-medium mb-2'>
      {label}
    </label>
    <input
      id={name}
      {...register(name, { required: "This field is required" })}
      className={`w-full p-4 text-lg border-2 rounded-lg outline-none transition-colors duration-200 ease-in-out ${
        errors[name] ? "border-red-500" : "border-gray-300 focus:border-primary"
      } ${className || ""}`}
      {...props}
    />
    {errors[name] && (
      <p className='text-red-500 text-sm mt-1'>{errors[name].message}</p>
    )}
  </div>
);

interface MessageForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ThemeContextType {
  darkMode: boolean;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useContext<ThemeContextType>(ThemeContext);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<MessageForm>();

  const submitMessageHandler: SubmitHandler<MessageForm> = async (data) => {
    setLoading(true);
    toast.loading("Sending message...");

    try {
      const emailData: Record<string, unknown> = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        "service_oje07os",
        "template_80qce8m",
        emailData,
        "user_Nx1CU504JmnLwXRUtw605"
      );
      toast.success("Message sent!");
      reset();
    } catch (error) {
      toast.error("Failed to send message.");
      console.error(error);
    } finally {
      setLoading(false);
      setTimeout(() => toast.dismiss(), 2000);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        theme.darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } p-4 md:p-8 flex flex-col`}
    >
      <div className='max-w-6xl mx-auto w-full flex-grow'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16 text-primary'>
          Let's discuss your project
        </h1>
        <div className='grid md:grid-cols-2 gap-8 md:gap-16'>
          <div>
            <p className='text-lg md:text-xl mb-8 md:mb-12'>
              Hello there! Want to contact us? Please fill in the form, and
              we'll get back to you as soon as possible.
            </p>
            <ContactInfo Icon={AiOutlinePhone} text='+977 9866064677' />
            <ContactInfo Icon={AiOutlineMail} text='ayushbaral17@gmail.com' />
            <ContactInfo Icon={BsPinMap} text='Pokhara, Nepal' />
          </div>
          <form
            onSubmit={handleSubmit(submitMessageHandler)}
            className='space-y-6 md:space-y-8'
          >
            <FormField
              register={register}
              name='name'
              errors={errors}
              label='Name'
              placeholder='Your Name'
              className={theme.darkMode ? "bg-gray-800" : "bg-gray-100"}
            />
            <FormField
              register={register}
              name='email'
              errors={errors}
              label='Email'
              placeholder='your.email@example.com'
              type='email'
              className={theme.darkMode ? "bg-gray-800" : "bg-gray-100"}
            />
            <FormField
              register={register}
              name='subject'
              errors={errors}
              label='Subject'
              placeholder="What's this about?"
              className={theme.darkMode ? "bg-gray-800" : "bg-gray-100"}
            />
            <div className='pb-6 md:pb-8'>
              <label
                htmlFor='message'
                className='block text-lg font-medium mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                {...register("message", {
                  required: "This field is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters long",
                  },
                })}
                placeholder='Your message here...'
                rows={6}
                className={`w-full p-4 text-lg border-2 rounded-lg outline-none transition-colors duration-200 ease-in-out ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 focus:border-primary"
                } ${theme.darkMode ? "bg-gray-800" : "bg-gray-100"}`}
              />
              {errors.message && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.message.message as string}
                </p>
              )}
            </div>
            <MoveInFromLeftOnView>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  disabled={loading}
                  className='w-full bg-primary text-white py-4 px-6 rounded-lg text-lg font-semibold transition hover:bg-primary-dark disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </MoveInFromLeftOnView>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
