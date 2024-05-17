import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initialUser = {
    name: "",
    email: "",
    number: "",
    password: "",
    conPassword: "",
    gender: "",
    age: "",
};
const initialAddress = {
    add: "",
    city: "",
    state: "",
    pinCode: "",
};
export default function Reg() {
    let [user, setUser] = useState(initialUser);
    let [address, setAddress] = useState(initialAddress);
    const [emailError, setEmailError] = useState("");

    // navigation
    const navigate = useNavigate();

    const registerHandler = async () => {

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!mailformat.test(user.email)) {
            toast.error("Invalid email address")
            return;
        }


        console.log("User Data:");
        console.log(user);

        console.log("Address Data:");
        console.log(address);

    };

    const handleGenderChange = (e) => {
        setUser({ ...user, gender: e.target.value }); // Update gender in user state
    };


    const validateForm = () => {
        let tempErrors = {};

        if (!validateName(user.name)) {
            tempErrors.name = "Invalid name. Only letters and spaces are allowed, between 2 to 30 characters.";
        }

        if (!validateEmail(user.email)) {
            tempErrors.email = "Invalid email address.";
        }

        if (user.number.length !== 10 || isNaN(user.number)) {
            tempErrors.number = "Invalid number. Must be exactly 10 digits.";
        }

        if (isNaN(user.age) || user.age < 1 || user.age > 120) {
            tempErrors.age = "Invalid age. Must be a number between 1 and 120.";
        }

        if (!user.gender) {
            tempErrors.gender = "Gender is required.";
        }

        if (!address.add || !address.city || !address.state || !address.pinCode) {
            tempErrors.address = "All address fields are required.";
        }

        if (user.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters long.";
        }

        if (user.password !== user.conPassword) {
            tempErrors.conPassword = "Passwords do not match.";
        }
    };




    return (
        <>
            <div className="text-center py-8 flex flex-col items-center ">
                <h1 className="font-medium text-3xl mb-12">CREATE AN ACCOUNT</h1>
                <div className="py-9 text-sm flex flex-col w-[50%] px-8 items-start border">
                    <h3 className="font-medium mb-5 text-xl">PERSONAL INFORMATION</h3>
                    <label htmlFor="name" className=" w-[100%] flex justify-between">
                        <span>Name*</span>{" "}
                        <span className="text-gray-400">*Required Fields</span>
                        *</label>
                    <input
                        type="text"
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        placeholder="Enter your name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        id="name"
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="text"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Enter your email"
                        id="mail"
                    />
                    <span id="result" className="text-red-600"></span>
                    <label htmlFor="number">Number*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="text"
                        onChange={(e) => setUser({ ...user, number: e.target.value })}
                        placeholder="Enter your number"
                        maxLength={10}
                        id="number"
                    />
                    <label htmlFor="age">Age*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="text"
                        onChange={(e) => setUser({ ...user, age: e.target.value })}
                        placeholder="Enter your age"
                        maxLength={2}
                        id="age"
                    />
                    <label className="mt-3">Gender*</label>
                    <div className="flex gap-4 mb-2 mt-1">
                        <div>
                            <input
                                type="radio"
                                value="male"
                                checked={user.gender === "male"}
                                onChange={handleGenderChange}
                                className="focus:ring-0 mr-2 "
                            />
                            <label htmlFor="">Male*</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="female"
                                checked={user.gender === "female"}
                                onChange={handleGenderChange}
                                className="focus:ring-0 mr-2 "
                            />
                            <label htmlFor="">Female*</label>
                        </div>
                    </div>
                    <label htmlFor="add">Address-1*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="text"
                        onChange={(e) => setAddress({ ...address, add: e?.target?.value })}

                        placeholder="Enter your add"
                        id="add"
                    />
                    <label htmlFor="city">City*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="text"
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}

                        placeholder="Enter your city"
                        id="city"
                    />
                    <label htmlFor="state">State*</label>
                    <input

                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="text"
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                        placeholder="Enter your state"
                        id="state"
                    />
                    <label htmlFor="pincode">Pincode*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="text"
                        onChange={(e) => setAddress({ ...address, pinCode: e.target.value })}
                        placeholder="Enter your pincode"
                        id="pincode"
                    />
                    <label htmlFor="password">Password*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Enter your password"
                        id="password"
                    />
                    <label htmlFor="ConPassword">Confirm Password*</label>
                    <input
                        className="rounded-md mb-3 mt-2 w-full border-none bg-[#e6e7e8] focus:!ring-red-600 focus:ring-1"
                        type="password"
                        onChange={(e) => setUser({ ...user, conPassword: e.target.value })}

                        placeholder="Enter your confirm password"
                        id="ConPassword"
                    />
                    <div>
                        <button
                            onClick={() => registerHandler()}
                            className="mt-4 ring-2 ring-red-600 px-6 py-2 rou rounded-md text-red-600 hover:bg-red-600 hover:text-white"
                        >
                            REGISTER
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

let data = {
    name: "mr. gray",
    userType: "customer",
    email: "gray@gmail.com",
    number: "7895461230",
    password: "$2b$12$XjY0awULd6KWNX1aQ3fKGeEv6I2nDbTyeKYlVnY5ZAq.Qho5Y/d8O",
    age: 23,
    address: [
        {
            add: "01",
            city: "city name",
            state: "state name",
            pinCode: "city name",
        },
    ],
};

/*
{
  name: "mr. gray",
    userType: "customer",
    email: "gray@gmail.com",
    number: "7895461230",
    password: "$2b$12$XjY0awULd6KWNX1aQ3fKGeEv6I2nDbTyeKYlVnY5ZAq.Qho5Y/d8O",
    age: 23,
}

 {
            add: "01",
            city: "city name",
            state: "state name",
            pinCode: "city name",
  },


  */