export default function Map() {
  return (
    <div className="overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.04882613214!2d-46.875494669673245!3d-23.68153146105172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1676394462127!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </div>
  );
}
