import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Shield, Search, FileText, Users, Car, Gavel } from "lucide-react";

export default function MDTSystem() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white p-6">
      {/* Header MDT */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-wide flex items-center gap-2">
            <Shield className="w-7 h-7" />
            Detective Bureau MDT
          </h1>
          <p className="text-sm text-slate-400">Sistema interno — GTA SA RolePlay</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-400">Estado del Sistema</p>
          <p className="text-green-400 font-semibold">● ONLINE</p>
        </div>
      </motion.div>

      {/* Buscador Global */}
      <Card className="bg-slate-900/60 border-slate-700 mb-6 rounded-2xl">
        <CardContent className="p-4 flex gap-4">
          <Input
            placeholder="Buscar por Nombre / Placa / Teléfono"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-800 border-slate-600"
          />
          <Button className="rounded-2xl">
            <Search className="w-4 h-4 mr-2" /> Buscar
          </Button>
        </CardContent>
      </Card>

      {/* Tabs MDT */}
      <Tabs defaultValue="citizens">
        <TabsList className="bg-slate-900 border border-slate-700 rounded-2xl p-2 mb-6 grid grid-cols-5 gap-2">
          <TabsTrigger value="citizens">Ciudadanos</TabsTrigger>
          <TabsTrigger value="cases">Expedientes</TabsTrigger>
          <TabsTrigger value="vehicles">Vehículos</TabsTrigger>
          <TabsTrigger value="warrants">Órdenes</TabsTrigger>
          <TabsTrigger value="reports">Reportes</TabsTrigger>
        </TabsList>

        {/* Ciudadanos */}
        <TabsContent value="citizens">
          <Card className="bg-slate-900/60 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users /> Base de Ciudadanos
              </h2>
              <p className="text-slate-400 text-sm">
                Aquí aparecerá historial completo, antecedentes, CCW y timeline.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Expedientes */}
        <TabsContent value="cases">
          <Card className="bg-slate-900/60 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText /> Expedientes Investigativos
              </h2>
              <p className="text-slate-400 text-sm">
                Vinculación a evidencias, órdenes y antecedentes.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Vehículos */}
        <TabsContent value="vehicles">
          <Card className="bg-slate-900/60 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Car /> Registro Vehicular
              </h2>
              <p className="text-slate-400 text-sm">
                Consulta de placas, propietarios y estado legal.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Órdenes */}
        <TabsContent value="warrants">
          <Card className="bg-slate-900/60 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Gavel /> Órdenes Judiciales
              </h2>
              <p className="text-slate-400 text-sm">
                Órdenes de captura activas, archivadas y vinculadas a casos.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reportes */}
        <TabsContent value="reports">
          <Card className="bg-slate-900/60 border-slate-700 rounded-2xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText /> Reportes de Oficiales
              </h2>
              <p className="text-slate-400 text-sm">
                Registro completo de actuaciones policiales.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
