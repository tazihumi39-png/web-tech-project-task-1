const { useState } = React;

function App() {

    // =========================
    // ADMIN STATE
    // =========================

    const [adminName, setAdminName] =
        useState("");

    const [adminEmail, setAdminEmail] =
        useState("");

    const [adminResult, setAdminResult] =
        useState("");

    // =========================
    // SUPERVISOR STATE
    // =========================

    const [supervisorName, setSupervisorName] =
        useState("");

    const [supervisors, setSupervisors] =
        useState([]);

    // =========================
    // DETAILS STATE
    // =========================

    const [supName, setSupName] =
        useState("");

    const [supEmail, setSupEmail] =
        useState("");

    const [supDepartment, setSupDepartment] =
        useState("");

    const [details, setDetails] =
        useState([]);

    // =========================
    // RESULT STATE
    // =========================

    const [marks, setMarks] =
        useState("");

    const [result, setResult] =
        useState("");

    // =========================
    // CREATE ADMIN
    // =========================

    const createAdmin = (e) => {

        e.preventDefault();

        if (
            adminName.trim() === "" ||
            adminEmail.trim() === ""
        ) {

            setAdminResult(
                "Please fill all fields"
            );

            return;
        }

        setAdminResult(
            `Admin ${adminName} created successfully`
        );

        setAdminName("");
        setAdminEmail("");
    };

    // =========================
    // ADD SUPERVISOR
    // =========================

    const addSupervisor = (e) => {

        e.preventDefault();

        if (
            supervisorName.trim() === ""
        ) {
            return;
        }

        // Spread Operator

        setSupervisors([
            ...supervisors,
            supervisorName
        ]);

        setSupervisorName("");
    };

    // =========================
    // SAVE DETAILS
    // =========================

    const saveDetails = (e) => {

        e.preventDefault();

        if (
            supName.trim() === "" ||
            supEmail.trim() === "" ||
            supDepartment.trim() === ""
        ) {
            return;
        }

        const newDetail = {
            name: supName,
            email: supEmail,
            department: supDepartment
        };

        setDetails([
            ...details,
            newDetail
        ]);

        setSupName("");
        setSupEmail("");
        setSupDepartment("");
    };

    // =========================
    // CHECK RESULT
    // =========================

    const checkResult = () => {

        const finalResult =
            Number(marks) >= 50
                ? "Pass"
                : "Fail";

        setResult(
            `Student Result: ${finalResult}`
        );
    };

    // =========================
    // STRICT EQUALITY
    // =========================

    const numberValue = 10;

    const stringValue = "10";

    console.log(
        numberValue === stringValue
            ? "Equal"
            : "Not Equal"
    );

    // =========================
    // JSX
    // =========================

    return (

        <div className="container">

            {/* HEADER */}

            <header>

                <h1>
                    Admin Panel System
                </h1>

                <p>
                    Final Year Project Management Website
                </p>

            </header>

            {/* CREATE ADMIN */}

            <section className="card">

                <h2>
                    Create Admin Panel
                </h2>

                <form onSubmit={createAdmin}>

                    <input
                        type="text"
                        placeholder="Enter Admin Name"
                        value={adminName}
                        onChange={(e) =>
                            setAdminName(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="email"
                        placeholder="Enter Admin Email"
                        value={adminEmail}
                        onChange={(e) =>
                            setAdminEmail(
                                e.target.value
                            )
                        }
                    />

                    <button type="submit">
                        Create Admin
                    </button>

                </form>

                <div id="adminResult">
                    {adminResult}
                </div>

            </section>

            {/* ADD SUPERVISOR */}

            <section className="card">

                <h2>
                    Add Supervisor
                </h2>

                <form onSubmit={addSupervisor}>

                    <input
                        type="text"
                        placeholder="Enter Supervisor Name"
                        value={supervisorName}
                        onChange={(e) =>
                            setSupervisorName(
                                e.target.value
                            )
                        }
                    />

                    <button type="submit">
                        Add Supervisor
                    </button>

                </form>

                <ul>

                    {
                        supervisors.map(
                            (supervisor, index) => (

                                <li key={index}>
                                    {supervisor}
                                </li>

                            )
                        )
                    }

                </ul>

            </section>

            {/* SUPERVISOR DETAILS */}

            <section className="card">

                <h2>
                    Supervisor Details
                </h2>

                <form onSubmit={saveDetails}>

                    <input
                        type="text"
                        placeholder="Supervisor Name"
                        value={supName}
                        onChange={(e) =>
                            setSupName(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="email"
                        placeholder="Supervisor Email"
                        value={supEmail}
                        onChange={(e) =>
                            setSupEmail(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Department"
                        value={supDepartment}
                        onChange={(e) =>
                            setSupDepartment(
                                e.target.value
                            )
                        }
                    />

                    <button type="submit">
                        Save Details
                    </button>

                </form>

                {
                    details.map(
                        (detail, index) => (

                            <div
                                className="detail-box"
                                key={index}
                            >

                                <p>
                                    <strong>
                                        Name:
                                    </strong>

                                    {" "}
                                    {detail.name}
                                </p>

                                <p>
                                    <strong>
                                        Email:
                                    </strong>

                                    {" "}
                                    {detail.email}
                                </p>

                                <p>
                                    <strong>
                                        Department:
                                    </strong>

                                    {" "}
                                    {detail.department}
                                </p>

                            </div>

                        )
                    )
                }

            </section>

            {/* RESULT CHECKER */}

            <section className="card">

                <h2>
                    Ternary Operator Result Checker
                </h2>

                <input
                    type="number"
                    placeholder="Enter Marks"
                    value={marks}
                    onChange={(e) =>
                        setMarks(
                            e.target.value
                        )
                    }
                />

                <button onClick={checkResult}>
                    Check Result
                </button>

                <h3 id="result">
                    {result}
                </h3>

            </section>

            {/* OPERATORS */}

            <section className="card">

                <h2>
                    JavaScript Operators Used
                </h2>

                <div className="info-box">

                    <h3>
                        Ternary Operator
                    </h3>

                    <p>
                        condition ? trueValue : falseValue
                    </p>

                    <h3>
                        Strict Equality
                    </h3>

                    <p>
                        === checks value and data type both.
                    </p>

                    <h3>
                        Spread Operator
                    </h3>

                    <p>
                        ... is used to copy or merge arrays.
                    </p>

                </div>

            </section>

        </div>
    );
}

// RENDER

const root =
    ReactDOM.createRoot(
        document.getElementById("root")
    );

root.render(<App />);