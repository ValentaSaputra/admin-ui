import FormSignUp from "../components/Fragments/FormSignUp";
// import Authlayout from "../components/Layouts/Authlayout";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout type = "sign up">
      <FormSignUp />
    </AuthLayout>
  );
};

export default SignUpPage;