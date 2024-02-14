'use client'
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Project() {
    
    const [projectId, setProjectId] = useState(0);

    useEffect(() => {
        // Récupérez les paramètres de recherche de l'URL
        const params = new URLSearchParams(window.location.search);

        console.log(params.get('id'));
        setProjectId(Number(params.get('id')));

    }, []);

    return (
        <div>
            <Head>
                <title>Project Details</title>
                <meta name="description" content="Details about the project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-3xl font-bold mb-4">Project Details</h1>
                <p>Project ID: {projectId}</p>
                {/* Affichez les détails du projet et de l'image correspondants */}
            </main>
        </div>
    );
}
