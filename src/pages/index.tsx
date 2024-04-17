import Modal from "@/common/components/Modal/Modal";
import styles from "@/pages/index.module.scss";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClickConfirm = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleleftButtononClick = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handlerightButtononClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <button type="button" onClick={handleClickConfirm}>
        모달
      </button>
      {isModalOpen && (
        <div>
          <Modal>
            <Modal.YesNo
              message="신청을 취소하시겠어요?"
              className={styles.test}
              leftButtononClick={handleleftButtononClick}
              rightButtononClick={handlerightButtononClick}
              leftButtonText="아니오"
              rightButtonText="취소"
            />
            <Modal.Confirm message="등록이 완료되었습니다." className={styles.test} onClick={handleClickConfirm} />
            <Modal.Warn
              message="내 프로필을 먼저 등록해 주세요."
              onClick={handleClickConfirm}
              className={styles.test}
            />
          </Modal>
        </div>
      )}
    </>
  );
}
