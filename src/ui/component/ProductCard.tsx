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


export default function ProductCard({productDto, onProductClick}: Props) {

    const navigate = useNavigate();
    let imgfit="cover";
    const cardHeight=500;
    const imgHeight="40%";
    if (productDto?.category === "Supplement") {
        imgfit="contain";
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
                return <Box padding={1} flex={1} display="flex" justifyContent={"flex-end"}><img width={40} src={"/soldOut.png"} alt={"sold-out"}/></Box>;
            }
        }
        return null;
    };

    return (productDto ?
            <Card sx={{
                width: 350, height:cardHeight,
                m: 2, border: 1, display:"flex", flexDirection: 'column'
            }}>
                <CardHeader sx={{height: "30%", mb: -2, alignItems:"flex-start"}}
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
                            height: imgHeight,
                            objectFit: imgfit,
                            width: '100%',
                    }}
                        component="img"
                        height={imgHeight}
                        image={productDto.imageUrl}
                        alt="Product Image"
                        onClick={() => handleNavigateToProductDetail(productDto.pid)}

                    />
                </Tooltip>
                <CardContent>
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
                <CardActions sx={{marginTop: 'auto'}}>
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
