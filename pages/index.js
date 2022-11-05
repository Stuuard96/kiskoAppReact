import { PrismaClient } from '@prisma/client';

export default function Home({ categorias }) {
  return <h1 className="title">NextJS</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  return {
    props: {
      categorias,
    },
  };
};
