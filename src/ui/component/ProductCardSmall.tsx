import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CallMadeIcon from '@mui/icons-material/CallMade';
import {GetProductDto} from "../../type/Product.type.ts";
import {useNavigate} from "react-router-dom";
import {CircularProgress, Tooltip,} from "@mui/material";
import Box from "@mui/material/Box";

type Props = {
    productDto: GetProductDto | undefined,
    onProductClick: (productId: number) => void

}


export default function ProductCardSmall({productDto, onProductClick}: Props) {

    const navigate = useNavigate();
    let imgfit = "cover";
    if (productDto?.category === "Supplement") {
        imgfit = "contain";
    }

    const handleNavigateToProductDetail = (productId: number) => {
        navigate(`/product/${productId}`)
    };

    const truncateText = (wordLimit: number): string => {
        const words = productDto!.description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return productDto!.description;
    };
    const truncatedDescription = truncateText(17);

    const renderSoldOutImage = () => {
        if (productDto !== undefined) {
            if (!productDto.hasStock) {
                return <Box padding={1} flex={1} display="flex" justifyContent={"flex-end"}><img width={40}
                                                                                                 src={"/soldOut.png"}
                                                                                                 alt={"sold-out"}/></Box>;
            }
        }
        return null;
    };
    const renderSoldOutIcon = () => {
        if (productDto !== undefined) {
            if (!productDto.hasStock) {
                return <img width={40}
                            src={"/soldOut.png"}
                            alt={"sold-out"}/>;
            }
        }
        return null;
    };


    // @ts-ignore
    // @ts-ignore
    return (productDto ?
            <Card sx={{
                width: "90%", height: {xl: 500, lg: 500, md: 500, sm: 200, xs: 200},
                m: 2, border: 1, display: 'flex', flexDirection: 'column'
                ,justifyContent:{xl: "start", lg: "start", md: "start", sm: "center", xs: "center"}
            }}
                  onClick={() => handleNavigateToProductDetail(productDto.pid)}>
                <CardHeader sx={{
                    height: "30%", mb: -2, alignItems: "flex-start",
                    display: {xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none"}
                }}
                            action={<>
                                <IconButton aria-label="go detail" onClick={() => onProductClick(productDto.pid)}>
                                    <CallMadeIcon/>
                                </IconButton>
                            </>}
                            title={productDto.name}
                            subheader={"$" + productDto.price + ".0"}
                />
                <Tooltip title="Product Detail" placement={"top"}>
                    <CardMedia
                        sx={{
                            mb: -2,
                            height: {xl: "40%", lg: "40%", md: "40%", sm: "0%", xs: "0%"},
                            objectFit: {xl: imgfit, lg: imgfit, md: imgfit, sm: "scale-down", xs: "contain"},
                            width: '100%',
                        }}
                        component="img"
                        image={productDto.imageUrl}
                        alt="Product Image"
                        onClick={() => handleNavigateToProductDetail(productDto.pid)}

                    />
                </Tooltip>
                <CardContent sx={{display: {xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none"}}}>
                    <Typography variant="body1"
                                color="text.secondary"
                                sx={{
                                    maxHeight: 100,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}>
                        {truncatedDescription}

                    </Typography>
                </CardContent>
                {/*                <CardContent sx={{flexDirection:"column",display: {xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex"}}}>*/}
                {/*                    <Typography variant="body1"*/}
                {/*                                color="text.primary"*/}
                {/*                                sx={{*/}
                {/*                                    height: "40%",*/}
                {/*                                }}>*/}
                {/*                        {productDto.name}*/}
                {/*                    </Typography>*/}
                {/*                    <Typography variant="body2"*/}
                {/*                                color="text.primary"*/}
                {/*>*/}
                {/*                        {productDto.price}*/}
                {/*                    </Typography>*/}
                {/*                </CardContent>*/}
                <Box sx={{display: {xl: "none", lg: "none", md: "none", sm: "flex", xs: "flex"},
                    flexDirection: "row"}}>
                    <Box sx={{width: "40%", height: "100%%", objectFit: "cover", mt: 2, mb: -1}}>
                        <img width={"100%"} src={productDto.imageUrl}/></Box>
                    <Box sx={{
                        mx: 1,
                        alignContent: "center",
                        display: {xl: "none", lg: "none", md: "none"}
                    }}>
                        <Typography variant={"h6"}>{productDto.name}</Typography>
                        <Typography variant={"subtitle1"}>${productDto.price}.0</Typography>
                        <Box>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon/>
                            </IconButton>
                            {renderSoldOutIcon()}
                        </Box>
                    </Box>
                </Box>
                <CardActions sx={{marginTop: 'auto', display: {xl: "flex", lg: "flex", md: "flex",sm: "none", xs: "none"}}}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>

                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    {renderSoldOutImage()}
                </CardActions>
            </Card>
            : <CircularProgress/>
    );
}
