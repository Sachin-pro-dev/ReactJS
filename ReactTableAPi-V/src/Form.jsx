import Button from "./Button";
const Form = ({ reqtype, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText="users"
        reqtype={reqtype}
        setReqType={setReqType}
      ></Button>
      <Button
        buttonText="posts"
        reqtype={reqtype}
        setReqType={setReqType}
      ></Button>
      <Button
        buttonText="comments"
        reqtype={reqtype}
        setReqType={setReqType}
      ></Button>
    </form>
  );
};

export default Form;
