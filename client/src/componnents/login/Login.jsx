import { Link } from "react-router-dom";
import './Login.css'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function Login() {
    return (
        <>
            <div className="wrapper">
                    <Card color="transparent">
                        <Typography variant="h4" color="blue-gray">
                            Login
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Nice to meet you! Enter your details to login.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />

                            </div>
                            <Checkbox
                                label={
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-gray-900"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                            <Button className="m-6" fullWidth>
                                Login
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Already don't have an account?{" "}
                                <Link to="/register" className="font-medium text-gray-900">
                                    Register
                                </Link >
                            </Typography>
                        </form>
                    </Card>
            </div>
        </>
    );
}