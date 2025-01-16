import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição.
    const response = await fetch(`${apiConfig.baseURL}/schedule`);

    // Converte para JSON.
    const data = await responde.json();

    // Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alter("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}
