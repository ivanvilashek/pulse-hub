-- AlterTable
ALTER TABLE "Preferences" ALTER COLUMN "isPrivate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "isVerified" BOOLEAN,
ADD COLUMN     "profileImage" TEXT,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "website" DROP NOT NULL;
