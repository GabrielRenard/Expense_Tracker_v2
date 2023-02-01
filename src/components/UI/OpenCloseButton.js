import { MdAdd } from "react-icons/md";
import { motion } from "framer-motion";
import styled from "styled-components";

// const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 1rem auto;
//   padding: 0.25rem;
//   font-size: 25px;
//   width: 3rem;
//   height: 3rem;
//   border-radius: 50%;
//   border: none;
//   cursor: pointer;
//   transform: rotate(${props => (props.open ? "0deg" : "0deg")});
//   border-radius: 50px;
//   background: linear-gradient(145deg, #f0f0f0, #cacaca);
//   box-shadow: 7px 7px 14px #b3b3b3, -7px -7px 14px #ffffff;

//   transition: 0.2s ease-in-out;
//   box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
//     -6px -6px 10px rgba(255, 255, 255, 0.5),
//     6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);

//   &:hover {
//     box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6),
//       -2px -2px 4px rgba(255, 255, 255, 0.4),
//       2px 2px 2px rgba(255, 255, 255, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1);
//   }
//   &:active {
//     box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7),
//       inset -2px -2px 4px rgba(255, 255, 255, 0.5),
//       inset 2px 2px 2px rgba(255, 255, 255, 0.075),
//       inset 2px 2px 4px rgba(0, 0, 0, 0.15);
//   }
// `;

// export const OpenCloseButton = ({ onClick, toggle }) => {
//   return (
//     <>
//       {toggle && (
//         <Button
//           as={motion.button}
//           initial={{ rotate: 0 }}
//           animate={{ rotate: 45 }}
//           type="button"
//           onClick={onClick}
//         >
//           <MdAdd />
//         </Button>
//       )}

//       {!toggle && (
//         <Button
//           as={motion.button}
//           initial={{ rotate: 45 }}
//           animate={{ rotate: 0 }}
//           exit={{ rotate: 45 }}
//           type="button"
//           onClick={onClick}
//           close
//         >
//           <MdAdd />
//         </Button>
//       )}
//     </>
//   );
// };


const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto 0;
  padding: 0.5rem;
  font-size: 35px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  background: linear-gradient(145deg, #e3e3e3, #bfbfbf);
  box-shadow: 5px 5px 9px #aeaeae, -5px -5px 9px #fafafa;

  :hover {
    box-shadow: 2px 2px 4px #aeaeae, -2px -2px 4px #fafafa;
  }

  :active {
    box-shadow: inset 4px 4px 7px #aeaeae, inset -4px -4px 7px #fafafa;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s ease;
  }
`;

export const OpenCloseButton = ({ onClick, toggle }) => {
  return (
    <>
        {toggle && (
          <Button type="button" onClick={onClick}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 45 }}
              transition={{ duration: 0.5 }}
              exit={{ rotate: 45 }}
            >
              <MdAdd />
            </motion.div>
          </Button>
        )}
        {!toggle && (
          <Button type="button" onClick={onClick}>
            <motion.div
              initial={{ rotate: 45 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ rotate: 180 }}
            >
              <MdAdd />
            </motion.div>
          </Button>
        )}
    </>
  );
};
