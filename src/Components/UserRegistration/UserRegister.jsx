// import React, { useState } from "react";
// import {
//   Button,
//   Container,
//   Form,
//   FormControl,
//   FormGroup,
//   FormLabel,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
//   ModalTitle,
//   Table,
// } from "react-bootstrap";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// function UserRegister() {
//   const [show, Setshow] = useState(false);
//   const [AllData, SetAllData] = useState([]);
//   const [InputData, SetInputData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     number: "",
//   });
//   const [ButtonState ,SetButtonStae]=useState(true);
// const [index,setIndex]=useState(0)
//   let temp = {};
//   const getformData = (e) => {
//     e.preventDefault();
//     let input = e.target;
//     // let value = input.value;
//     // console.log(input);
//     // console.log(value);

//     // const FormData ={
//     //   name:"Vaishu",
//     //   email:"vaishnavidodke414@gmail.com"
//     // }

//     let formdata = new FormData(input);
//     // console.log(formdata.get("full-name"));
//     // console.log(formdata.get("email"));
//     // console.log(formdata.get("number"));
//     // console.log(formdata.get("password"));
//     // console.log(formdata.get("file"));
//     // let temp = {};
//     for (let data of formdata) {
//       // console.log(data);
//       let key = data[0];
//       let value = data[1];
//       console.log(key);
//       // console.log(value);
//       console.log(typeof value);
//       if (typeof value === "object") {
//         value = URL.createObjectURL(value);
//       }
//       // console.log(value);
//       temp[key] = value;
//       // console.log(temp);
//     }
//     return temp;
//     // SetAllData((old) => [...old, temp]);
//     // Setshow(false);
//     // SetInputData({
//     //   fullname: "",
//     //   email: "",
//     //   password: "",
//     //   number: ""
//     // })
//   };
//   function DeleteData(index) {
//     // console.log(index);
//     let tempdata = [...AllData];
//     tempdata.splice(index, 1);
//     return SetAllData(tempdata);
//   }
//   function getInputData(e) {
//     let target = e.target;
//     // console.log(target);
//     let value = target.value;
//     // console.log(value);
//     let key = target.name;
//     console.log(key, " ", value);
//     return SetInputData((old) => {
//       return {
//         ...old,
//         [key]: value,
//       };
//     });
//     // SetInputData([key]=value)
//   }
//   function InsertData(e) {
//     e.preventDefault();
//     alert("Insert Data");
//     getformData(e);
//     SetAllData((old) => [...old, temp]);
//     Setshow(false);
//     SetInputData({
//       fullname: "",
//       email: "",
//       password: "",
//       number: "",
//     });
//   }
  
//   function UpdateData(e){
//     e.preventDefault();
//     getformData(e);
//     console.log("Updated temp:", temp); // Log the updated data
//     const tempData = [...AllData];
//     tempData[index] = temp;
//     console.log("Updated tempData:", tempData); // Log the updated tempData
//     Setshow(false);
//     SetAllData(tempData);
//   }
  
//   function EditData(item) {
//      Setshow(true);
//       SetInputData(item);
//       SetButtonStae(false);
//       // alert(item.index)
//       setIndex(item.index)
//   }
  
//   function AddButton(){
//     return(
//       Setshow(true),
//       SetInputData({
//         fullname: "",
//         email: "",
//         password: "",
//         number: ""
//       }),
//       SetButtonStae(true)
//     )
//   }
//   function Tr({ item, index }) {
//     return (
//       <>
//         <tr>
//           <td>{index + 1}</td>
//           <td>{item.fullname}</td>
//           <td>{item.email}</td>
//           <td>{item.password}</td>
//           <td>{item.number}</td>
//           <td>
//             <img
//               src={item.file}
//               alt="Profile"
//               width={50}
//               height={50}
//               className="rounded-circle"
//             />
//           </td>
//           <td>
//             <Button
//               className="text-center me-2"
//               variant="primary"
//               onClick={() => {
//                 EditData(item);
//               }}
//             >
//               <FontAwesomeIcon icon={faEdit} /> Edit
//             </Button>
//             <Button
//               className="text-center me-2"
//               variant="danger"
//               onClick={() => {
//                 DeleteData(index);
//               }}
//             >
//               <FontAwesomeIcon icon={faTrash} /> Delete
//             </Button>
//           </td>
//         </tr>
//       </>
//     );
//   }

//   return (
//     <>
//       <h1 className="text-center">Registration Details</h1>
//       <div>
//         <Button
//           className="position-absolute bottom-0 end-0 me-3 mb-3 rounded-circle"
//           onClick={AddButton}
//         >
//           <FontAwesomeIcon icon={faPlus} />
//         </Button>
//       </div>
//       <Modal show={show}>
//         <ModalHeader closeButton onHide={() => Setshow(false)}>
//           <ModalTitle>User Registeration</ModalTitle>
//         </ModalHeader>
//         <ModalBody>
//           {/* <Form onSubmit={getformData}> */}
//           <Form onSubmit={ButtonState ? InsertData:UpdateData}>
//             <FormGroup>
//               <FormLabel>Full Name: </FormLabel>
//               <FormControl
//                 type="text"
//                 name="fullname"
//                 placeholder="Enter Full Name"
//                 onChange={getInputData} value={InputData.fullname}
//               ></FormControl>
//             </FormGroup>
//             <FormGroup>
//               <FormLabel>Email: </FormLabel>
//               <FormControl
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 onChange={getInputData} value={InputData.email}
//               ></FormControl>
//             </FormGroup>
//             <FormGroup>
//               <FormLabel>Mobile Number: </FormLabel>
//               <FormControl
//                 type="tel"
//                 name="number"
//                 placeholder="Enter Mobile Number"
//                 onChange={getInputData} value={InputData.number}
//               ></FormControl>
//             </FormGroup>
//             <FormGroup>
//               <FormLabel>Password: </FormLabel>
//               <FormControl
//                 type="Password"
//                 name="password"
//                 placeholder="Enter Password"
//                 onChange={getInputData}
//                 value={InputData.password}
//               ></FormControl>
//             </FormGroup>
//             <FormGroup>
//               <FormLabel>Uplod Image </FormLabel>
//               <FormControl
//                 type="file"
//                 name="file"
//                 placeholder="Enter file"
//               ></FormControl>
//             </FormGroup>
//         <FormGroup className="mt-3">
//           {
//             ButtonState ?<Button type="submit" className="me-2" variant="primary">
//             Submit </Button>:<Button type="submit" className="me-2" variant="info">
//             Update </Button>
//           }
            
           
//             <Button type="reset" className="me-2" variant="danger" onClick={()=>Setshow(false)}>
//               Cancel
//             </Button>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button onClick={() => Setshow(false)} variant="danger">
//             <FontAwesomeIcon icon={faTimes} />
//             Close
//           </Button>
//         </ModalFooter>
//         {/* <p>{JSON.stringify(InputData)}</p> */}
//         {/* <p>{JSON.stringify(key ,"",value)}</p> */}
//       </Modal>
//       {/* <h1>{console.log(AllData)}</h1> */}
//       {/* <p>{JSON.stringify(AllData)}</p> */}
//       <Container>
//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th>SR NO</th>
//               <th>Full Name</th>
//               <th>Email</th>
//               <th>Password</th>
//               <th>Mobile</th>
//               <th>Profile</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {AllData.map((item, index) => (
//               <Tr key={index} item={item} index={index} />
//             ))}
//           </tbody>
//         </Table>
//       </Container>
//     </>
//   );
// }

// export default UserRegister;
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Table,
} from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function UserRegister() {
  const [show, Setshow] = useState(false);
  const [AllData, SetAllData] = useState([]);
  const [InputData, SetInputData] = useState({
    fullname: "",
    email: "",
    password: "",
    number: "",
  });
  const [ButtonState, SetButtonState] = useState(true);
  const [index, setIndex] = useState(0);

  const getformData = (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    let updatedTemp = {};
    for (let data of formdata) {
      let key = data[0];
      let value = data[1];
      if (typeof value === "object") {
        value = URL.createObjectURL(value);
      }
      updatedTemp[key] = value;
    }
    return updatedTemp;
  };

  function DeleteData(index) {
    let tempdata = [...AllData];
    tempdata.splice(index, 1);
    SetAllData(tempdata);
  }

  function getInputData(e) {
    let target = e.target;
    let value = target.value;
    let key = target.name;
    SetInputData((old) => {
      return {
        ...old,
        [key]: value,
      };
    });
  }

  function InsertData(e) {
    e.preventDefault();
    alert("Insert Data");
    let updatedTemp = getformData(e);
    SetAllData((old) => [...old, updatedTemp]);
    Setshow(false);
    SetInputData({
      fullname: "",
      email: "",
      password: "",
      number: "",
    });
  }

  function UpdateData(e) {
    e.preventDefault();
    let updatedTemp = getformData(e);
    const tempData = [...AllData];
    tempData[index] = updatedTemp;
    Setshow(false);
    SetAllData(tempData);
  }

  function EditData(item, idx) {
    Setshow(true);
    SetInputData(item);
    SetButtonState(false);
    setIndex(idx);
  }

  function AddButton() {
    Setshow(true);
    SetInputData({
      fullname: "",
      email: "",
      password: "",
      number: "",
    });
    SetButtonState(true);
  }

  function Tr({ item, index }) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.fullname}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.number}</td>
        <td>
          <img
            src={item.file}
            alt="Profile"
            width={50}
            height={50}
            className="rounded-circle"
          />
        </td>
        <td>
          <Button
            className="text-center me-2"
            variant="primary"
            onClick={() => {
              EditData(item, index);
            }}
          >
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>
          <Button
            className="text-center me-2"
            variant="danger"
            onClick={() => {
              DeleteData(index);
            }}
          >
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <h1 className="text-center">Registration Details</h1>
      <div>
        <Button
          className="position-absolute bottom-0 end-0 me-3 mb-3 rounded-circle"
          onClick={AddButton}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <Modal show={show}>
        <ModalHeader closeButton onHide={() => Setshow(false)}>
          <ModalTitle>User Registration</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={ButtonState ? InsertData : UpdateData}>
            <FormGroup>
              <FormLabel>Full Name: </FormLabel>
              <FormControl
                type="text"
                name="fullname"
                placeholder="Enter Full Name"
                onChange={getInputData}
                value={InputData.fullname}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Email: </FormLabel>
              <FormControl
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={getInputData}
                value={InputData.email}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Mobile Number: </FormLabel>
              <FormControl
                type="tel"
                name="number"
                placeholder="Enter Mobile Number"
                onChange={getInputData}
                value={InputData.number}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Password: </FormLabel>
              <FormControl
                type="Password"
                name="password"
                placeholder="Enter Password"
                onChange={getInputData}
                value={InputData.password}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Upload Image </FormLabel>
              <FormControl type="file" name="file" placeholder="Enter file" />
            </FormGroup>
            <FormGroup className="mt-3">
              {ButtonState ? (
                <Button type="submit" className="me-2" variant="primary">
                  Submit
                </Button>
              ) : (
                <Button type="submit" className="me-2" variant="info">
                  Update
                </Button>
              )}

              <Button
                type="reset"
                className="me-2"
                variant="danger"
                onClick={() => Setshow(false)}
              >
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => Setshow(false)} variant="danger">
            <FontAwesomeIcon icon={faTimes} />
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SR NO</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Mobile</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {AllData.map((item, index) => (
              <Tr key={index} item={item} index={index} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default UserRegister;
