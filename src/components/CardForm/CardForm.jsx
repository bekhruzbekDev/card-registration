import { useForm } from "react-hook-form";
import "./cardForm.css";
import PropTypes from "prop-types";
export const CardForm = ({ setIsCardInfo, setIsActive}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitted(data) {
    setIsCardInfo(data);
    setIsActive(true)
  }
  function cardNumber(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (i % 4 == 0) {
        result += " ";
      }
      result += value[i];
    }
    e.target.value = result.trim();
  }
let years =new Date().getFullYear().toString().slice(2,)
  return (
    <form className="form" onSubmit={handleSubmit(submitted)}>
      <div className="input-wrap">
        <label htmlFor="name">Cardholder Name</label>
        <input
          type="text"
          className={errors.name?.type ? "errorInput" : ""}
          id="name"
          placeholder="e.g. Jane Appleseed"
          {...register("name", {
            required: "Wrong format, numbers only",
            pattern: /^[a-zA-Z]/i,
            minLength: 2,
          })}
        />
        <span className="errorText">
          {errors.name?.type
            ? "Wrong format, numbers only"
            : errors.name?.message}
        </span>
      </div>
      <div className="input-wrap">
        <label htmlFor="number">Card Number</label>
        <input
          type="text"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          className={errors.cardNumber?.type ? "errorInput" : ""}
          onInput={cardNumber}
          {...register("cardNumber", {
            required: true,
            minLength: 19,
            maxLength: 19,
            pattern: /^[0-9\s]+$/,
          })}
        />
        <span className="errorText">
          {errors.cardNumber?.type
            ? "Wrong format, numbers only"
            : errors.cardNumber?.message}
        </span>
      </div>
      <div className="data">
        <div>
          <label htmlFor="">Exp. Date (MM/YY)</label>
          <span>
            <input
              type="number"
              className="number-input"
              id={errors.month?.type ? "errorInput" : ""}
              placeholder="MM"
              {...register("month", {
                required: true,
                min: 1,
                max: 12,
              })}
            />
            <input
              type="number"
              id={errors.year?.type ? "errorInput" : ""}
              className="number-input input2"
              placeholder="YY"
              {...register("year", {
                required: true,
                min: years,
                maxLength: 2,
              })}
            />
          </span>
          <span className="errorText">
            {errors.year?.type
              ? "Can’t be blank"
              : "" || errors.month?.type
              ? "Can’t be blank"
              : ""}
          </span>
        </div>
        <div>
          <label htmlFor="">CVC</label>
          <span>
            <input
              type="number"
              className="numberInput"
              placeholder="e.g. 123"
              id={errors.CVC?.type ? "errorInput" : ""}
              {...register("CVC", {
                required: true,
                min: 1,
                maxLength: 3,
                minLength: 3,
              })}
            />
          </span>
          <span className="errorText">
            {errors.CVC?.type ? "Can’t be blank" : ""}
          </span>
        </div>
      </div>
      <button>Confirm</button>
    </form>
  );
};
CardForm.propTypes = {
  setIsCardInfo: PropTypes.func,
  setIsActive:PropTypes.func
};
