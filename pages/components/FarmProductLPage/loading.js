import Image from "next/image";

const Loading = () => {
  return <div className="text-center py-4">
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-100">
      <div className="spinner w-20 h-20">
      </div>
    </div>
  </div>
};

export default Loading;


