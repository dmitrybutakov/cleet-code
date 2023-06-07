import React from "react"
import Input from "../Input"
type ResetPasswordProps = {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <form className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
      <h3 className="text-xl font-medium  text-white">Reset Password</h3>
      <p className="text-sm text-white">
        Forgotten your password? Enter your e-mail address below, and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <div>
        <Input
          id="email"
          placeholder="Enter your email:"
          text="example@mail.com"
        />
      </div>

      <button
        type="submit"
        className=" w-full rounded-lg bg-brand-orange  px-5 py-2.5 text-center text-sm font-medium capitalize text-white hover:bg-brand-orange-s 
                focus:ring-4 focus:ring-blue-300 "
      >
        reset password
      </button>
    </form>
  )
}
export default ResetPassword