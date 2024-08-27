import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

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
                    handleOnSizeValueChange(e.target.value+'')
                }}
                label="shoe-size"
            >
                {category === "menShoes"
                    ? (Array.from({length:9}).map((_,index)=>{
                        const menSize = 8 + index * 0.5;
                       return <MenuItem key={menSize} value={menSize}>{menSize}</MenuItem>
                    }))
                    : category === "womenShoes"
                        ? (Array.from({length:6}).map((_,index)=>{
                      const womenSize = 8 + index * 0.5;
                      return <MenuItem key={womenSize} value={womenSize}>{womenSize}</MenuItem>
                    }))
                        : <></>
                   }
            </Select>
        </FormControl></>);

};