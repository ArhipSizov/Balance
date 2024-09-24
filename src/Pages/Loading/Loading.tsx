import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
        <img src="/loading.png" alt="" />
        <p>Загрузка...</p>
    </div>
  );
}