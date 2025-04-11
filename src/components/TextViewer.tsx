interface Props {
	ip: string;
	filename: string;
}

const TextViewer = ({ ip, filename }: Props) => {
  console.log("Grabbing file from ip " + ip);
	return <div>Viewing {filename}</div>;
};

export default TextViewer;
