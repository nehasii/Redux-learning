import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault(props) {
  return (
    <Card className="mt-6 w-96 h-96 items-center">
      <CardHeader floated={false} color="blue-gray" className="h-80 w-80">
        <img src={props.imageLink} alt="card" className="h-full w-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.title}
        </Typography>
        <Typography>Price: INR {props.price}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={props.clickAction}>
          {props.removeCart ? "Remove item" : " Add to cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
