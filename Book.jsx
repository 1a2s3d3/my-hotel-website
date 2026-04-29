import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormContainer from "../components/FormContainer";

function Book() {
  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service.trim() || !duration) {
      alert("Fill all fields");
      return;
    }

    alert("Booking successful!");

    navigate("/home");
  };

  return (
    <FormContainer
      title="Booking"
      onSubmit={handleSubmit}
    >
      <FormInput
        label="Service"
        type="text"
        value={service}
        onChange={(e) =>
          setService(e.target.value)
        }
        placeholder="Enter service"
      />

      <FormInput
        label="How long do you want to stay"
        type="number"
        value={duration}
        onChange={(e) =>
          setDuration(e.target.value)
        }
        placeholder="Enter number of days"
      />
    </FormContainer>
  );
}

export default Book;
