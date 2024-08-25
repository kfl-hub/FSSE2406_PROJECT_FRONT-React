import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import {CartItemDto} from "../../type/Cart.type.ts";
import {LoginUserContext} from "../../context/LoginUserContext.ts";
import {getCartItem} from "../../api/CartApi.ts";
import LoadingSpinner from "../component/LoadingSpinner.tsx";
import CartTableRow from "../component/CartTableRow.tsx";

export default function CartPage() {
  const [cartItemDtoList, setCartItemDtoList] = useState<CartItemDto[] | undefined>(undefined);
  const loginUser = useContext(LoginUserContext);


  const onDeleteItem = (cid: number) => {
    setCartItemDtoList((prevState) => (prevState?.filter((item) => (item.cid !== cid))))
    console.log("deleted")
  }

  const onUpdateItem = (cid: number, quantity: number, size: string) => {
    setCartItemDtoList((prevList: CartItemDto[]) =>
      prevList.map((prevItem) => {
        if (prevItem.cid === cid) {
          // Update the quantity and size if the cid matches
          return { ...prevItem, quantity, size };
        }
        // Return the item unchanged if the cid does not match
        return prevItem;
      })
    );
    console.log("updated");
  };

  useEffect(() => {
    if (loginUser) {
      const fetchData = async () => {
        const responseData = await getCartItem();
        setCartItemDtoList(responseData);
      };
      fetchData();
    }

  }, [loginUser])

  return !cartItemDtoList
    ? <LoadingSpinner/>
    : (

      <Box sx={{
        background: `url(https://images.unsplash.com/photo-1539182972012-585804f77548?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundPosition: "50% 80%",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'start',
        height: "100%",
        minHeight: "100vh",
        width: "100%",
        pt: 0,
      }}>
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: "100%",
            minHeight: "100vh",
            width: "100%",
            m: 0, pt: 4,
          }}
        >
          <Typography align={"center"} variant={"h3"}>Your Cart ({cartItemDtoList.length} items)</Typography>
          <TableContainer sx={{width: "90%", height: "100%", m: 8}}>
            <Table>
              <TableHead sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                <TableRow>
                  <TableCell width={"48%"}>Item</TableCell>
                  <TableCell sx={{fontSize: "1.2rem"}}>Price</TableCell>
                  <TableCell sx={{fontSize: "1.2rem"}} align={"center"}>Quantity</TableCell>
                  <TableCell sx={{fontSize: "1.2rem"}} align={"right"}>Total</TableCell>
                  <TableCell width={32}> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItemDtoList.map((item) => (
                  <CartTableRow key={item.cid} item={item} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem}/>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

    );
};