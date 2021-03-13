FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y build-essential nodejs
    
COPY ["site/banjackal.com.csproj", "site/"]
RUN dotnet restore "site/banjackal.com.csproj"
COPY . .
WORKDIR /src/site
RUN dotnet build "banjackal.com.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "banjackal.com.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "banjackal.com.dll"]
