-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orginal_url" TEXT NOT NULL,
    "short_key" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "total_clicks" INTEGER NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clicks" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "user_agent" TEXT NOT NULL,
    "link_id" INTEGER NOT NULL,

    CONSTRAINT "clicks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_short_key_key" ON "Links"("short_key");

-- CreateIndex
CREATE UNIQUE INDEX "Links_user_id_key" ON "Links"("user_id");

-- AddForeignKey
ALTER TABLE "clicks" ADD CONSTRAINT "clicks_link_id_fkey" FOREIGN KEY ("link_id") REFERENCES "Links"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
