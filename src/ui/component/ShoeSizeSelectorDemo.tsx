import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

type Props = {
    category: string,
    value:string,
    handleOnSizeValueChange:(sizeValue:string)=>void,


}

export default function ShoeSizeSelectorDemo({category, value,handleOnSizeValueChange}: Props) {

    return (<>
        <Typography sx={{fontWeight: '500', mt: 2}} variant="h6">Select Size</Typography>
        <FormControl variant="standard" sx={{m: 2, minWidth: 160}}>
            <InputLabel
                id="w-shoe-size">{category === "menShoes" ? "Men" : category === "womenShoes" ? "Women" : <></>}</InputLabel>
            <Select
                labelId="w-shoe-size2"
                id="w-shoe-size"
                value={value}
                onChange={(e) => {
                    console.log("seletor on change")
                    console.log(e.target.value)
                    handleOnSizeValueChange(e.target.value+'')
                }}
                label="shoe-size"
            >
                {category === "menShoes"
                    ? (Array.from({length:9}).map((_,index)=>{
                        const menSize = 8 + index * 0.5;
                       return <MenuItem value={menSize}>{menSize}</MenuItem>
                    }))
                    : category === "womenShoes"
                        ? (<>
                            <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={8.5}>8.5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                        </>)
                        : <></>
                   }
            </Select>
        </FormControl></>);

};