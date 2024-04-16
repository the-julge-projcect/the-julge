import Post from "@/shared/components/Post/Post";
import { useEffect, useState } from "react";
import styles from "@/pages/index.module.scss";
import instance from "./api/axiosInstance";

type Res = {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
    };
  };
};

type Props = {
  item: Res[];
};

export default function Home() {
  const [userData, setUserData] = useState<Props["item"]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(`notices`);
      setUserData(response.data.items);
    };
    fetchData();
  }, []);

  return (
    <div>
      {userData.map((data: Res) => (
        <div className={styles.a} key={data.item.id}>
          <Post
            imageUrl={data.item.shop?.item?.imageUrl}
            key={data.item.id}
            startsAt={data.item.startsAt}
            workhour={data.item.workhour}
            hourlyPay={data.item.hourlyPay}
            closed={data.item.closed}
            name={data.item.shop?.item?.name}
            address1={data.item.shop?.item?.address1}
            originalHourlyPay={data.item.shop?.item?.originalHourlyPay}
          />
        </div>
      ))}
    </div>
  );
}
