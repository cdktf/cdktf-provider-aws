# `timestreaminfluxdbDbCluster` Submodule <a name="`timestreaminfluxdbDbCluster` Submodule" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreaminfluxdbDbCluster <a name="TimestreaminfluxdbDbCluster" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster aws_timestreaminfluxdb_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbCluster;

TimestreaminfluxdbDbCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allocatedStorage(java.lang.Number)
    .bucket(java.lang.String)
    .dbInstanceType(java.lang.String)
    .name(java.lang.String)
    .organization(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
    .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .vpcSubnetIds(java.util.List<java.lang.String>)
//  .dbParameterGroupIdentifier(java.lang.String)
//  .dbStorageType(java.lang.String)
//  .deploymentType(java.lang.String)
//  .failoverMode(java.lang.String)
//  .logDeliveryConfiguration(IResolvable)
//  .logDeliveryConfiguration(java.util.List<TimestreaminfluxdbDbClusterLogDeliveryConfiguration>)
//  .networkType(java.lang.String)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TimestreaminfluxdbDbClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name that uniquely identifies the DB cluster when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC subnet IDs to associate with the DB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | The ID of the DB parameter group to assign to your DB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Specifies the type of cluster to create. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | Specifies the behavior of failure recovery when the primary node of the cluster 					fails. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Specifies whether the networkType of the Timestream for InfluxDB cluster is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configures the Timestream for InfluxDB cluster with a public IP to facilitate access. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#tags TimestreaminfluxdbDbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.allocatedStorage"></a>

- *Type:* java.lang.Number

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#allocated_storage TimestreaminfluxdbDbCluster#allocated_storage}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#bucket TimestreaminfluxdbDbCluster#bucket}

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dbInstanceType"></a>

- *Type:* java.lang.String

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#db_instance_type TimestreaminfluxdbDbCluster#db_instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name that uniquely identifies the DB cluster when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB cluster names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#name TimestreaminfluxdbDbCluster#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#organization TimestreaminfluxdbDbCluster#organization}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#password TimestreaminfluxdbDbCluster#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.username"></a>

- *Type:* java.lang.String

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#username TimestreaminfluxdbDbCluster#username}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#vpc_security_group_ids TimestreaminfluxdbDbCluster#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

A list of VPC subnet IDs to associate with the DB cluster.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#vpc_subnet_ids TimestreaminfluxdbDbCluster#vpc_subnet_ids}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dbParameterGroupIdentifier"></a>

- *Type:* java.lang.String

The ID of the DB parameter group to assign to your DB cluster.

DB parameter groups specify how the database is configured. For example, DB parameter groups
can specify the limit for query concurrency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#db_parameter_group_identifier TimestreaminfluxdbDbCluster#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.dbStorageType"></a>

- *Type:* java.lang.String

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#db_storage_type TimestreaminfluxdbDbCluster#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Specifies the type of cluster to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#deployment_type TimestreaminfluxdbDbCluster#deployment_type}

---

##### `failoverMode`<sup>Optional</sup> <a name="failoverMode" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.failoverMode"></a>

- *Type:* java.lang.String

Specifies the behavior of failure recovery when the primary node of the cluster 					fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#failover_mode TimestreaminfluxdbDbCluster#failover_mode}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#log_delivery_configuration TimestreaminfluxdbDbCluster#log_delivery_configuration}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Specifies whether the networkType of the Timestream for InfluxDB cluster is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#network_type TimestreaminfluxdbDbCluster#network_type}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#port TimestreaminfluxdbDbCluster#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.publiclyAccessible"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configures the Timestream for InfluxDB cluster with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#publicly_accessible TimestreaminfluxdbDbCluster#publicly_accessible}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#region TimestreaminfluxdbDbCluster#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#tags TimestreaminfluxdbDbCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#timeouts TimestreaminfluxdbDbCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putLogDeliveryConfiguration">putLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbParameterGroupIdentifier">resetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbStorageType">resetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetFailoverMode">resetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetLogDeliveryConfiguration">resetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPubliclyAccessible">resetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogDeliveryConfiguration` <a name="putLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putLogDeliveryConfiguration"></a>

```java
public void putLogDeliveryConfiguration(IResolvable OR java.util.List<TimestreaminfluxdbDbClusterLogDeliveryConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putTimeouts"></a>

```java
public void putTimeouts(TimestreaminfluxdbDbClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a>

---

##### `resetDbParameterGroupIdentifier` <a name="resetDbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbParameterGroupIdentifier"></a>

```java
public void resetDbParameterGroupIdentifier()
```

##### `resetDbStorageType` <a name="resetDbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbStorageType"></a>

```java
public void resetDbStorageType()
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDeploymentType"></a>

```java
public void resetDeploymentType()
```

##### `resetFailoverMode` <a name="resetFailoverMode" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetFailoverMode"></a>

```java
public void resetFailoverMode()
```

##### `resetLogDeliveryConfiguration` <a name="resetLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetLogDeliveryConfiguration"></a>

```java
public void resetLogDeliveryConfiguration()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPort"></a>

```java
public void resetPort()
```

##### `resetPubliclyAccessible` <a name="resetPubliclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPubliclyAccessible"></a>

```java
public void resetPubliclyAccessible()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TimestreaminfluxdbDbCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbCluster;

TimestreaminfluxdbDbCluster.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbCluster;

TimestreaminfluxdbDbCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbCluster;

TimestreaminfluxdbDbCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbCluster;

TimestreaminfluxdbDbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TimestreaminfluxdbDbCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a TimestreaminfluxdbDbCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TimestreaminfluxdbDbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TimestreaminfluxdbDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the TimestreaminfluxdbDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.readerEndpoint">readerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference">TimestreaminfluxdbDbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorageInput">allocatedStorageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceTypeInput">dbInstanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifierInput">dbParameterGroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageTypeInput">dbStorageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverModeInput">failoverModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfigurationInput">logDeliveryConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessibleInput">publiclyAccessibleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIdsInput">vpcSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.influxAuthParametersSecretArn"></a>

```java
public java.lang.String getInfluxAuthParametersSecretArn();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfiguration"></a>

```java
public TimestreaminfluxdbDbClusterLogDeliveryConfigurationList getLogDeliveryConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationList</a>

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.readerEndpoint"></a>

```java
public java.lang.String getReaderEndpoint();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeouts"></a>

```java
public TimestreaminfluxdbDbClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference">TimestreaminfluxdbDbClusterTimeoutsOutputReference</a>

---

##### `allocatedStorageInput`<sup>Optional</sup> <a name="allocatedStorageInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorageInput"></a>

```java
public java.lang.Number getAllocatedStorageInput();
```

- *Type:* java.lang.Number

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceTypeInput`<sup>Optional</sup> <a name="dbInstanceTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceTypeInput"></a>

```java
public java.lang.String getDbInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="dbParameterGroupIdentifierInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifierInput"></a>

```java
public java.lang.String getDbParameterGroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbStorageTypeInput`<sup>Optional</sup> <a name="dbStorageTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageTypeInput"></a>

```java
public java.lang.String getDbStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `failoverModeInput`<sup>Optional</sup> <a name="failoverModeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverModeInput"></a>

```java
public java.lang.String getFailoverModeInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryConfigurationInput`<sup>Optional</sup> <a name="logDeliveryConfigurationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfigurationInput"></a>

```java
public java.lang.Object getLogDeliveryConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessibleInput`<sup>Optional</sup> <a name="publiclyAccessibleInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessibleInput"></a>

```java
public java.lang.Object getPubliclyAccessibleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIdsInput`<sup>Optional</sup> <a name="vpcSubnetIdsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceType"></a>

```java
public java.lang.String getDbInstanceType();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifier"></a>

```java
public java.lang.String getDbParameterGroupIdentifier();
```

- *Type:* java.lang.String

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageType"></a>

```java
public java.lang.String getDbStorageType();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverMode"></a>

```java
public java.lang.String getFailoverMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreaminfluxdbDbClusterConfig <a name="TimestreaminfluxdbDbClusterConfig" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterConfig;

TimestreaminfluxdbDbClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allocatedStorage(java.lang.Number)
    .bucket(java.lang.String)
    .dbInstanceType(java.lang.String)
    .name(java.lang.String)
    .organization(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
    .vpcSecurityGroupIds(java.util.List<java.lang.String>)
    .vpcSubnetIds(java.util.List<java.lang.String>)
//  .dbParameterGroupIdentifier(java.lang.String)
//  .dbStorageType(java.lang.String)
//  .deploymentType(java.lang.String)
//  .failoverMode(java.lang.String)
//  .logDeliveryConfiguration(IResolvable)
//  .logDeliveryConfiguration(java.util.List<TimestreaminfluxdbDbClusterLogDeliveryConfiguration>)
//  .networkType(java.lang.String)
//  .port(java.lang.Number)
//  .publiclyAccessible(java.lang.Boolean)
//  .publiclyAccessible(IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(TimestreaminfluxdbDbClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbInstanceType">dbInstanceType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name that uniquely identifies the DB cluster when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.password">password</a></code> | <code>java.lang.String</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.username">username</a></code> | <code>java.lang.String</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of VPC subnet IDs to associate with the DB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>java.lang.String</code> | The ID of the DB parameter group to assign to your DB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbStorageType">dbStorageType</a></code> | <code>java.lang.String</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Specifies the type of cluster to create. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.failoverMode">failoverMode</a></code> | <code>java.lang.String</code> | Specifies the behavior of failure recovery when the primary node of the cluster 					fails. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>></code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Specifies whether the networkType of the Timestream for InfluxDB cluster is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.publiclyAccessible">publiclyAccessible</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configures the Timestream for InfluxDB cluster with a public IP to facilitate access. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#tags TimestreaminfluxdbDbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#allocated_storage TimestreaminfluxdbDbCluster#allocated_storage}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#bucket TimestreaminfluxdbDbCluster#bucket}

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbInstanceType"></a>

```java
public java.lang.String getDbInstanceType();
```

- *Type:* java.lang.String

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#db_instance_type TimestreaminfluxdbDbCluster#db_instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name that uniquely identifies the DB cluster when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB cluster names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#name TimestreaminfluxdbDbCluster#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#organization TimestreaminfluxdbDbCluster#organization}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#password TimestreaminfluxdbDbCluster#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#username TimestreaminfluxdbDbCluster#username}

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#vpc_security_group_ids TimestreaminfluxdbDbCluster#vpc_security_group_ids}

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSubnetIds"></a>

```java
public java.util.List<java.lang.String> getVpcSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

A list of VPC subnet IDs to associate with the DB cluster.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#vpc_subnet_ids TimestreaminfluxdbDbCluster#vpc_subnet_ids}

---

##### `dbParameterGroupIdentifier`<sup>Optional</sup> <a name="dbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbParameterGroupIdentifier"></a>

```java
public java.lang.String getDbParameterGroupIdentifier();
```

- *Type:* java.lang.String

The ID of the DB parameter group to assign to your DB cluster.

DB parameter groups specify how the database is configured. For example, DB parameter groups
can specify the limit for query concurrency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#db_parameter_group_identifier TimestreaminfluxdbDbCluster#db_parameter_group_identifier}

---

##### `dbStorageType`<sup>Optional</sup> <a name="dbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbStorageType"></a>

```java
public java.lang.String getDbStorageType();
```

- *Type:* java.lang.String

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#db_storage_type TimestreaminfluxdbDbCluster#db_storage_type}

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Specifies the type of cluster to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#deployment_type TimestreaminfluxdbDbCluster#deployment_type}

---

##### `failoverMode`<sup>Optional</sup> <a name="failoverMode" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.failoverMode"></a>

```java
public java.lang.String getFailoverMode();
```

- *Type:* java.lang.String

Specifies the behavior of failure recovery when the primary node of the cluster 					fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#failover_mode TimestreaminfluxdbDbCluster#failover_mode}

---

##### `logDeliveryConfiguration`<sup>Optional</sup> <a name="logDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.logDeliveryConfiguration"></a>

```java
public java.lang.Object getLogDeliveryConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>>

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#log_delivery_configuration TimestreaminfluxdbDbCluster#log_delivery_configuration}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Specifies whether the networkType of the Timestream for InfluxDB cluster is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#network_type TimestreaminfluxdbDbCluster#network_type}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#port TimestreaminfluxdbDbCluster#port}

---

##### `publiclyAccessible`<sup>Optional</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.publiclyAccessible"></a>

```java
public java.lang.Object getPubliclyAccessible();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configures the Timestream for InfluxDB cluster with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#publicly_accessible TimestreaminfluxdbDbCluster#publicly_accessible}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#region TimestreaminfluxdbDbCluster#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#tags TimestreaminfluxdbDbCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.timeouts"></a>

```java
public TimestreaminfluxdbDbClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#timeouts TimestreaminfluxdbDbCluster#timeouts}

---

### TimestreaminfluxdbDbClusterLogDeliveryConfiguration <a name="TimestreaminfluxdbDbClusterLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration;

TimestreaminfluxdbDbClusterLogDeliveryConfiguration.builder()
//  .s3Configuration(IResolvable)
//  .s3Configuration(java.util.List<TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration.property.s3Configuration">s3Configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>></code> | s3_configuration block. |

---

##### `s3Configuration`<sup>Optional</sup> <a name="s3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration.property.s3Configuration"></a>

```java
public java.lang.Object getS3Configuration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>>

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#s3_configuration TimestreaminfluxdbDbCluster#s3_configuration}

---

### TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration;

TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.builder()
    .bucketName(java.lang.String)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The name of the S3 bucket to deliver logs to. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether log delivery to the S3 bucket is enabled. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The name of the S3 bucket to deliver logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#bucket_name TimestreaminfluxdbDbCluster#bucket_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether log delivery to the S3 bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#enabled TimestreaminfluxdbDbCluster#enabled}

---

### TimestreaminfluxdbDbClusterTimeouts <a name="TimestreaminfluxdbDbClusterTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterTimeouts;

TimestreaminfluxdbDbClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#create TimestreaminfluxdbDbCluster#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#delete TimestreaminfluxdbDbCluster#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/timestreaminfluxdb_db_cluster#update TimestreaminfluxdbDbCluster#update}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreaminfluxdbDbClusterLogDeliveryConfigurationList <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.get"></a>

```java
public TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>>

---


### TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration">putS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration">resetS3Configuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Configuration` <a name="putS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```java
public void putS3Configuration(IResolvable OR java.util.List<TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>>

---

##### `resetS3Configuration` <a name="resetS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```java
public void resetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3ConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```java
public TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList getS3Configuration();
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList</a>

---

##### `s3ConfigurationInput`<sup>Optional</sup> <a name="s3ConfigurationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```java
public java.lang.Object getS3ConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration">TimestreaminfluxdbDbClusterLogDeliveryConfiguration</a>

---


### TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.get"></a>

```java
public TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>>

---


### TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration</a>

---


### TimestreaminfluxdbDbClusterTimeoutsOutputReference <a name="TimestreaminfluxdbDbClusterTimeoutsOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.timestreaminfluxdb_db_cluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference;

new TimestreaminfluxdbDbClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a>

---



