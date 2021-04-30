export default function Modal({ onclose }) {
  return (
    <div class="fixed top-0 left-0 bg-green-800 w-full h-screen z-50">
      <button onclick={onclose}> FECHA </button>
      MODAL
    </div>
  );
}