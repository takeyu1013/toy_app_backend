-- CreateTable
CREATE TABLE "Micropost" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Micropost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Micropost" ADD CONSTRAINT "Micropost_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
