# `timestreaminfluxdbDbInstance` Submodule <a name="`timestreaminfluxdbDbInstance` Submodule" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreaminfluxdbDbInstance <a name="TimestreaminfluxdbDbInstance" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance aws_timestreaminfluxdb_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allocated_storage: typing.Union[int, float],
  bucket: str,
  db_instance_type: str,
  name: str,
  organization: str,
  password: str,
  username: str,
  vpc_security_group_ids: typing.List[str],
  vpc_subnet_ids: typing.List[str],
  db_parameter_group_identifier: str = None,
  db_storage_type: str = None,
  deployment_type: str = None,
  log_delivery_configuration: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfiguration]] = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: TimestreaminfluxdbDbInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbInstanceType">db_instance_type</a></code> | <code>str</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.password">password</a></code> | <code>str</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.username">username</a></code> | <code>str</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of VPC security group IDs to associate with the DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | A list of VPC subnet IDs to associate with the DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | The id of the DB parameter group assigned to your DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbStorageType">db_storage_type</a></code> | <code>str</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.deploymentType">deployment_type</a></code> | <code>str</code> | Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configures the DB instance with a public IP to facilitate access. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.allocatedStorage"></a>

- *Type:* typing.Union[int, float]

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#allocated_storage TimestreaminfluxdbDbInstance#allocated_storage}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#bucket TimestreaminfluxdbDbInstance#bucket}

---

##### `db_instance_type`<sup>Required</sup> <a name="db_instance_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbInstanceType"></a>

- *Type:* str

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#db_instance_type TimestreaminfluxdbDbInstance#db_instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.name"></a>

- *Type:* str

The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB instance names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#name TimestreaminfluxdbDbInstance#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.organization"></a>

- *Type:* str

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#organization TimestreaminfluxdbDbInstance#organization}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.password"></a>

- *Type:* str

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#password TimestreaminfluxdbDbInstance#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.username"></a>

- *Type:* str

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#username TimestreaminfluxdbDbInstance#username}

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

A list of VPC security group IDs to associate with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#vpc_security_group_ids TimestreaminfluxdbDbInstance#vpc_security_group_ids}

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* typing.List[str]

A list of VPC subnet IDs to associate with the DB instance.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#vpc_subnet_ids TimestreaminfluxdbDbInstance#vpc_subnet_ids}

---

##### `db_parameter_group_identifier`<sup>Optional</sup> <a name="db_parameter_group_identifier" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbParameterGroupIdentifier"></a>

- *Type:* str

The id of the DB parameter group assigned to your DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#db_parameter_group_identifier TimestreaminfluxdbDbInstance#db_parameter_group_identifier}

---

##### `db_storage_type`<sup>Optional</sup> <a name="db_storage_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.dbStorageType"></a>

- *Type:* str

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#db_storage_type TimestreaminfluxdbDbInstance#db_storage_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.deploymentType"></a>

- *Type:* str

Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#deployment_type TimestreaminfluxdbDbInstance#deployment_type}

---

##### `log_delivery_configuration`<sup>Optional</sup> <a name="log_delivery_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.logDeliveryConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#log_delivery_configuration TimestreaminfluxdbDbInstance#log_delivery_configuration}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configures the DB instance with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#publicly_accessible TimestreaminfluxdbDbInstance#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#timeouts TimestreaminfluxdbDbInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration">put_log_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbParameterGroupIdentifier">reset_db_parameter_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbStorageType">reset_db_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDeploymentType">reset_deployment_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetLogDeliveryConfiguration">reset_log_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_log_delivery_configuration` <a name="put_log_delivery_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration"></a>

```python
def put_log_delivery_configuration(
  value: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#create TimestreaminfluxdbDbInstance#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#delete TimestreaminfluxdbDbInstance#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#update TimestreaminfluxdbDbInstance#update}

---

##### `reset_db_parameter_group_identifier` <a name="reset_db_parameter_group_identifier" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbParameterGroupIdentifier"></a>

```python
def reset_db_parameter_group_identifier() -> None
```

##### `reset_db_storage_type` <a name="reset_db_storage_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbStorageType"></a>

```python
def reset_db_storage_type() -> None
```

##### `reset_deployment_type` <a name="reset_deployment_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDeploymentType"></a>

```python
def reset_deployment_type() -> None
```

##### `reset_log_delivery_configuration` <a name="reset_log_delivery_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetLogDeliveryConfiguration"></a>

```python
def reset_log_delivery_configuration() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TimestreaminfluxdbDbInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TimestreaminfluxdbDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TimestreaminfluxdbDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.influxAuthParametersSecretArn">influx_auth_parameters_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.secondaryAvailabilityZone">secondary_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference">TimestreaminfluxdbDbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorageInput">allocated_storage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceTypeInput">db_instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifierInput">db_parameter_group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageTypeInput">db_storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentTypeInput">deployment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfigurationInput">log_delivery_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIdsInput">vpc_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceType">db_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageType">db_storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `influx_auth_parameters_secret_arn`<sup>Required</sup> <a name="influx_auth_parameters_secret_arn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.influxAuthParametersSecretArn"></a>

```python
influx_auth_parameters_secret_arn: str
```

- *Type:* str

---

##### `log_delivery_configuration`<sup>Required</sup> <a name="log_delivery_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList</a>

---

##### `secondary_availability_zone`<sup>Required</sup> <a name="secondary_availability_zone" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.secondaryAvailabilityZone"></a>

```python
secondary_availability_zone: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeouts"></a>

```python
timeouts: TimestreaminfluxdbDbInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference">TimestreaminfluxdbDbInstanceTimeoutsOutputReference</a>

---

##### `allocated_storage_input`<sup>Optional</sup> <a name="allocated_storage_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorageInput"></a>

```python
allocated_storage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `db_instance_type_input`<sup>Optional</sup> <a name="db_instance_type_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceTypeInput"></a>

```python
db_instance_type_input: str
```

- *Type:* str

---

##### `db_parameter_group_identifier_input`<sup>Optional</sup> <a name="db_parameter_group_identifier_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifierInput"></a>

```python
db_parameter_group_identifier_input: str
```

- *Type:* str

---

##### `db_storage_type_input`<sup>Optional</sup> <a name="db_storage_type_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageTypeInput"></a>

```python
db_storage_type_input: str
```

- *Type:* str

---

##### `deployment_type_input`<sup>Optional</sup> <a name="deployment_type_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentTypeInput"></a>

```python
deployment_type_input: str
```

- *Type:* str

---

##### `log_delivery_configuration_input`<sup>Optional</sup> <a name="log_delivery_configuration_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfigurationInput"></a>

```python
log_delivery_configuration_input: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, TimestreaminfluxdbDbInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids_input`<sup>Optional</sup> <a name="vpc_subnet_ids_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIdsInput"></a>

```python
vpc_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `db_instance_type`<sup>Required</sup> <a name="db_instance_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceType"></a>

```python
db_instance_type: str
```

- *Type:* str

---

##### `db_parameter_group_identifier`<sup>Required</sup> <a name="db_parameter_group_identifier" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifier"></a>

```python
db_parameter_group_identifier: str
```

- *Type:* str

---

##### `db_storage_type`<sup>Required</sup> <a name="db_storage_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageType"></a>

```python
db_storage_type: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreaminfluxdbDbInstanceConfig <a name="TimestreaminfluxdbDbInstanceConfig" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allocated_storage: typing.Union[int, float],
  bucket: str,
  db_instance_type: str,
  name: str,
  organization: str,
  password: str,
  username: str,
  vpc_security_group_ids: typing.List[str],
  vpc_subnet_ids: typing.List[str],
  db_parameter_group_identifier: str = None,
  db_storage_type: str = None,
  deployment_type: str = None,
  log_delivery_configuration: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfiguration]] = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: TimestreaminfluxdbDbInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.allocatedStorage">allocated_storage</a></code> | <code>typing.Union[int, float]</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbInstanceType">db_instance_type</a></code> | <code>str</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.name">name</a></code> | <code>str</code> | The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.organization">organization</a></code> | <code>str</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.password">password</a></code> | <code>str</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.username">username</a></code> | <code>str</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | A list of VPC security group IDs to associate with the DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | A list of VPC subnet IDs to associate with the DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbParameterGroupIdentifier">db_parameter_group_identifier</a></code> | <code>str</code> | The id of the DB parameter group assigned to your DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbStorageType">db_storage_type</a></code> | <code>str</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.deploymentType">deployment_type</a></code> | <code>str</code> | Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.logDeliveryConfiguration">log_delivery_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configures the DB instance with a public IP to facilitate access. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allocated_storage`<sup>Required</sup> <a name="allocated_storage" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.allocatedStorage"></a>

```python
allocated_storage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#allocated_storage TimestreaminfluxdbDbInstance#allocated_storage}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#bucket TimestreaminfluxdbDbInstance#bucket}

---

##### `db_instance_type`<sup>Required</sup> <a name="db_instance_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbInstanceType"></a>

```python
db_instance_type: str
```

- *Type:* str

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#db_instance_type TimestreaminfluxdbDbInstance#db_instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB instance names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#name TimestreaminfluxdbDbInstance#name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#organization TimestreaminfluxdbDbInstance#organization}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#password TimestreaminfluxdbDbInstance#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#username TimestreaminfluxdbDbInstance#username}

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of VPC security group IDs to associate with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#vpc_security_group_ids TimestreaminfluxdbDbInstance#vpc_security_group_ids}

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of VPC subnet IDs to associate with the DB instance.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#vpc_subnet_ids TimestreaminfluxdbDbInstance#vpc_subnet_ids}

---

##### `db_parameter_group_identifier`<sup>Optional</sup> <a name="db_parameter_group_identifier" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbParameterGroupIdentifier"></a>

```python
db_parameter_group_identifier: str
```

- *Type:* str

The id of the DB parameter group assigned to your DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#db_parameter_group_identifier TimestreaminfluxdbDbInstance#db_parameter_group_identifier}

---

##### `db_storage_type`<sup>Optional</sup> <a name="db_storage_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbStorageType"></a>

```python
db_storage_type: str
```

- *Type:* str

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#db_storage_type TimestreaminfluxdbDbInstance#db_storage_type}

---

##### `deployment_type`<sup>Optional</sup> <a name="deployment_type" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#deployment_type TimestreaminfluxdbDbInstance#deployment_type}

---

##### `log_delivery_configuration`<sup>Optional</sup> <a name="log_delivery_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.logDeliveryConfiguration"></a>

```python
log_delivery_configuration: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#log_delivery_configuration TimestreaminfluxdbDbInstance#log_delivery_configuration}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configures the DB instance with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#publicly_accessible TimestreaminfluxdbDbInstance#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.timeouts"></a>

```python
timeouts: TimestreaminfluxdbDbInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#timeouts TimestreaminfluxdbDbInstance#timeouts}

---

### TimestreaminfluxdbDbInstanceLogDeliveryConfiguration <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration(
  s3_configuration: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.property.s3Configuration">s3_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]]</code> | s3_configuration block. |

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.property.s3Configuration"></a>

```python
s3_configuration: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]]

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#s3_configuration TimestreaminfluxdbDbInstance#s3_configuration}

---

### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration(
  bucket_name: str,
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName">bucket_name</a></code> | <code>str</code> | The name of the S3 bucket to deliver logs to. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether log delivery to the S3 bucket is enabled. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

The name of the S3 bucket to deliver logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#bucket_name TimestreaminfluxdbDbInstance#bucket_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether log delivery to the S3 bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#enabled TimestreaminfluxdbDbInstance#enabled}

---

### TimestreaminfluxdbDbInstanceTimeouts <a name="TimestreaminfluxdbDbInstanceTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#create TimestreaminfluxdbDbInstance#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#delete TimestreaminfluxdbDbInstance#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.61.0/docs/resources/timestreaminfluxdb_db_instance#update TimestreaminfluxdbDbInstance#update}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]]

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  value: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]]

---

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList</a>

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TimestreaminfluxdbDbInstanceLogDeliveryConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration">TimestreaminfluxdbDbInstanceLogDeliveryConfiguration</a>]

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]]

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration</a>]

---


### TimestreaminfluxdbDbInstanceTimeoutsOutputReference <a name="TimestreaminfluxdbDbInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import timestreaminfluxdb_db_instance

timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TimestreaminfluxdbDbInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>]

---



