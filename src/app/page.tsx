"use client";

import React, { useState } from "react";
import {
  Button,
  Container,
  ContainerContent,
  ContainerContentForm,
} from "@/styles/styles";
import { useForm } from "react-hook-form";
import { api } from "@/service/api";

type FormData = {
  file: File;
};

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    const encoder = new TextEncoder();
    const utf8Array = encoder.encode(await file?.text());
    const utf8File = new File([utf8Array], file!.name, {
      type: "text/plain;charset=utf-8",
    });

    formData.append("file", utf8File);

    try {
      const response = await api.post("upload", formData);
      if (response.status > 204) {
        console.log("Error ao realizar upload");
      }
    } catch (error) {
      console.log("Erro ao realizar upload");
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] ?? null);
  };

  return (
    <>
      <div className="space-y-4">
        <Container id="container">
          <ContainerContent>
            <h1 className="text-xl text-center font-medium">Afiliados App</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ContainerContentForm>
                <label htmlFor="file">
                  Escolha um arquivo com as transações de produtos vendidos
                </label>
                <input
                  type="file"
                  id="file"
                  {...register("file", { required: true })}
                  onChange={handleFileChange}
                />
                {errors.file && <span>Selecione um arquivo</span>}
                <Button type="submit">Upload</Button>
              </ContainerContentForm>
            </form>
          </ContainerContent>
        </Container>
      </div>
    </>
  );
};

export default Home;
