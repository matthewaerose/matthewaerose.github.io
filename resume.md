---
layout: single
title: Matthew Rose
subtitle: Resume
---

## Skills and Technologies
- **Cloud Platforms:** AWS, Azure
- **Containerization & Orchestration:** Docker, Kubernetes, Helm
- **Infrastructure as Code:** Terraform, CloudFormation, Terratest
- **Programming Languages:** Go, Python, Bash
- **Monitoring & Logging:** Grafana, DataDog, Prometheus, OpenTelemetry, Loki
- **CI/CD Tools:** GitLab CI/CD, Jenkins, GitHub Actions
- **Networking Protocols:** TCP/IP, BGP, DNS, HTTP/S, TLS

## Experience

### Senior Software Engineer → Staff Software Engineer
**ServiceNow, Santa Clara, CA** - July 2025 - Present
- Built a Golang proxy microservice that consumes requests from the Glide frontend and orchestrates the lifecycle of single-tenant customer pods, replacing a previously manual provisioning process
- Developed an in-pod Golang service wrapping a Java JAR of third-party metadata collector business logic, bringing legacy logic into a container-native runtime
- Implemented a customer-facing Golang proxy microservice that brokers tenant interactions with collector pods, now deployed globally and available to all ServiceNow customers
- Authored net-new GitLab CI/CD pipelines (build, unit/integration tests, security scans) integrated with ServiceNow's internal build and artifact systems, with zero failed deployments attributable to these services since launch
- Wrote net-new Helm charts consumed by ServiceNow's internal Kubernetes workload tooling, standardizing Services, Certificates, Deployments, and Replica Sets across all three microservices
- Partnered with the security team to requisition TLS certificates and provision secrets via ServiceNow's custom vault, and stood up alerts, monitors, and dashboards as ConfigMaps in Helm for day-one observability
- Adopted KinD (Kubernetes in Docker) for local development, shortening feedback cycles and reducing review comments on pull requests

### Senior SRE → Staff SRE
**data.world, Austin, TX** - March 2023 - July 2025
- Replaced Lacework with Golang/Docker Lambdas built on AWS Config and Systems Manager, cutting ~$100K in annual licensing costs
- Stood up an enterprise Terraform platform - private module registry, Terratest-based Golang test suite, and Terraform Cloud - standardizing infrastructure deployments across the organization
- Migrated legacy infrastructure and application code to multi-architecture Docker builds, delivering a 20% performance increase across production workloads
- Migrated legacy IaC from CloudFormation to Terraform and integrated OIDC for AWS access, improving change auditability and eliminating long-lived credentials
- Built a Terraform and Golang pipeline to scan newly built AMIs for vulnerabilities before release, with multi-channel alerting that routes findings to owning teams
- Automated build and deployment of Dockerized AWS Lambdas within a Terraform monorepo, proving out a pattern now used to manage diverse application code across the org
- Built reusable GitHub Actions and workflows adopted enterprise-wide, eliminating duplicated CI logic across ~20 repositories

### Senior Site Reliability Engineer
**OpenGov, San Francisco, CA** - May 2021 - March 2023
- Analyzed CPU and memory patterns across 400+ databases to rebalance Azure Elastic Pools, reducing resource consumption by 20% and cutting associated Azure spend
- Owned production incident response and root-cause investigation, maintaining 99.99% uptime across customer-facing systems
- Built SLI/SLO tracking in Grafana, Azure Monitor, and New Relic across infrastructure and application tiers, catching regressions before customer impact

### Software Engineer → Principal Software Engineer
**Northrop Grumman, Huntsville, AL** - February 2019 - May 2021
- Prototyped DevOps tooling for classified on-premises environments, validating compatibility with strict compliance and security controls
- Delivered software to classified environments using Docker, Docker Compose, the ELK stack, and Jenkins CI/CD pipelines, introducing centralized logging, monitoring, and automated deployment to a previously manual workflow
- Introduced DevOps practices to legacy systems, shortening release cycles and accelerating delivery of system updates
- Automated build and delivery across RHEL and Solaris targets, replacing manual processes that had caused inconsistent deployments
- Designed and maintained Jenkins pipelines for critical applications, surfacing build and deployment status that had previously been opaque to the team

### Previous Experience
- **Associate Systems Software Engineer,** Abaco Systems, Huntsville, AL - May 2018 - February 2019
- **Software Engineering Aide,** Radiance Technologies, Huntsville, AL - November 2015 - May 2018

## Education
- **Bachelor of Computer Science** - 2018  
  University of Alabama in Huntsville
- **Bachelor of Music** - 2011  
  University of Montevallo

