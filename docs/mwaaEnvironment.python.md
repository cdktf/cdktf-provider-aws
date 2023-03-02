# `mwaaEnvironment` Submodule <a name="`mwaaEnvironment` Submodule" id="@cdktf/provider-aws.mwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaEnvironment <a name="MwaaEnvironment" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment aws_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dag_s3_path: str,
  execution_role_arn: str,
  name: str,
  network_configuration: MwaaEnvironmentNetworkConfiguration,
  source_bucket_arn: str,
  airflow_configuration_options: typing.Mapping[str] = None,
  airflow_version: str = None,
  environment_class: str = None,
  id: str = None,
  kms_key: str = None,
  logging_configuration: MwaaEnvironmentLoggingConfiguration = None,
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None,
  plugins_s3_object_version: str = None,
  plugins_s3_path: str = None,
  requirements_s3_object_version: str = None,
  requirements_s3_path: str = None,
  schedulers: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MwaaEnvironmentTimeouts = None,
  webserver_access_mode: str = None,
  weekly_maintenance_window_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dagS3Path">dag_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.sourceBucketArn">source_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowConfigurationOptions">airflow_configuration_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowVersion">airflow_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.environmentClass">environment_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3ObjectVersion">plugins_s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3Path">plugins_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3ObjectVersion">requirements_s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3Path">requirements_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.schedulers">schedulers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.webserverAccessMode">webserver_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dag_s3_path`<sup>Required</sup> <a name="dag_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dagS3Path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}.

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}

---

##### `source_bucket_arn`<sup>Required</sup> <a name="source_bucket_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.sourceBucketArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}.

---

##### `airflow_configuration_options`<sup>Optional</sup> <a name="airflow_configuration_options" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowConfigurationOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}.

---

##### `airflow_version`<sup>Optional</sup> <a name="airflow_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}.

---

##### `environment_class`<sup>Optional</sup> <a name="environment_class" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.environmentClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.kmsKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.maxWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}.

---

##### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.minWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}.

---

##### `plugins_s3_object_version`<sup>Optional</sup> <a name="plugins_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3ObjectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}.

---

##### `plugins_s3_path`<sup>Optional</sup> <a name="plugins_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3Path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}.

---

##### `requirements_s3_object_version`<sup>Optional</sup> <a name="requirements_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3ObjectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}.

---

##### `requirements_s3_path`<sup>Optional</sup> <a name="requirements_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3Path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.schedulers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#timeouts MwaaEnvironment#timeouts}

---

##### `webserver_access_mode`<sup>Optional</sup> <a name="webserver_access_mode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.webserverAccessMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}.

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.weeklyMaintenanceWindowStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration">put_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions">reset_airflow_configuration_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion">reset_airflow_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass">reset_environment_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration">reset_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers">reset_max_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers">reset_min_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion">reset_plugins_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path">reset_plugins_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion">reset_requirements_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path">reset_requirements_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers">reset_schedulers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode">reset_webserver_access_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart">reset_weekly_maintenance_window_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_logging_configuration` <a name="put_logging_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration"></a>

```python
def put_logging_configuration(
  dag_processing_logs: MwaaEnvironmentLoggingConfigurationDagProcessingLogs = None,
  scheduler_logs: MwaaEnvironmentLoggingConfigurationSchedulerLogs = None,
  task_logs: MwaaEnvironmentLoggingConfigurationTaskLogs = None,
  webserver_logs: MwaaEnvironmentLoggingConfigurationWebserverLogs = None,
  worker_logs: MwaaEnvironmentLoggingConfigurationWorkerLogs = None
) -> None
```

###### `dag_processing_logs`<sup>Optional</sup> <a name="dag_processing_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.dagProcessingLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

dag_processing_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}

---

###### `scheduler_logs`<sup>Optional</sup> <a name="scheduler_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.schedulerLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

scheduler_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}

---

###### `task_logs`<sup>Optional</sup> <a name="task_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.taskLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

task_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#task_logs MwaaEnvironment#task_logs}

---

###### `webserver_logs`<sup>Optional</sup> <a name="webserver_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.webserverLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

webserver_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}

---

###### `worker_logs`<sup>Optional</sup> <a name="worker_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.workerLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

worker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}

---

##### `put_network_configuration` <a name="put_network_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str]
) -> None
```

###### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}.

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}.

---

##### `reset_airflow_configuration_options` <a name="reset_airflow_configuration_options" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions"></a>

```python
def reset_airflow_configuration_options() -> None
```

##### `reset_airflow_version` <a name="reset_airflow_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion"></a>

```python
def reset_airflow_version() -> None
```

##### `reset_environment_class` <a name="reset_environment_class" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass"></a>

```python
def reset_environment_class() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_logging_configuration` <a name="reset_logging_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration"></a>

```python
def reset_logging_configuration() -> None
```

##### `reset_max_workers` <a name="reset_max_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers"></a>

```python
def reset_max_workers() -> None
```

##### `reset_min_workers` <a name="reset_min_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers"></a>

```python
def reset_min_workers() -> None
```

##### `reset_plugins_s3_object_version` <a name="reset_plugins_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion"></a>

```python
def reset_plugins_s3_object_version() -> None
```

##### `reset_plugins_s3_path` <a name="reset_plugins_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path"></a>

```python
def reset_plugins_s3_path() -> None
```

##### `reset_requirements_s3_object_version` <a name="reset_requirements_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion"></a>

```python
def reset_requirements_s3_object_version() -> None
```

##### `reset_requirements_s3_path` <a name="reset_requirements_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path"></a>

```python
def reset_requirements_s3_path() -> None
```

##### `reset_schedulers` <a name="reset_schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers"></a>

```python
def reset_schedulers() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_webserver_access_mode` <a name="reset_webserver_access_mode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode"></a>

```python
def reset_webserver_access_mode() -> None
```

##### `reset_weekly_maintenance_window_start` <a name="reset_weekly_maintenance_window_start" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart"></a>

```python
def reset_weekly_maintenance_window_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated">last_updated</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl">webserver_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput">airflow_configuration_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput">airflow_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput">dag_s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput">environment_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput">logging_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput">max_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput">min_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput">plugins_s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput">plugins_s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput">requirements_s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput">requirements_s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput">schedulers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput">source_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput">webserver_access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput">weekly_maintenance_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions">airflow_configuration_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion">airflow_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path">dag_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass">environment_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion">plugins_s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path">plugins_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion">requirements_s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path">requirements_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers">schedulers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn">source_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode">webserver_access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated"></a>

```python
last_updated: MwaaEnvironmentLastUpdatedList
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a>

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration"></a>

```python
logging_configuration: MwaaEnvironmentLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration"></a>

```python
network_configuration: MwaaEnvironmentNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts"></a>

```python
timeouts: MwaaEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a>

---

##### `webserver_url`<sup>Required</sup> <a name="webserver_url" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl"></a>

```python
webserver_url: str
```

- *Type:* str

---

##### `airflow_configuration_options_input`<sup>Optional</sup> <a name="airflow_configuration_options_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput"></a>

```python
airflow_configuration_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `airflow_version_input`<sup>Optional</sup> <a name="airflow_version_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput"></a>

```python
airflow_version_input: str
```

- *Type:* str

---

##### `dag_s3_path_input`<sup>Optional</sup> <a name="dag_s3_path_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput"></a>

```python
dag_s3_path_input: str
```

- *Type:* str

---

##### `environment_class_input`<sup>Optional</sup> <a name="environment_class_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput"></a>

```python
environment_class_input: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `logging_configuration_input`<sup>Optional</sup> <a name="logging_configuration_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput"></a>

```python
logging_configuration_input: MwaaEnvironmentLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `max_workers_input`<sup>Optional</sup> <a name="max_workers_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput"></a>

```python
max_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers_input`<sup>Optional</sup> <a name="min_workers_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput"></a>

```python
min_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput"></a>

```python
network_configuration_input: MwaaEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `plugins_s3_object_version_input`<sup>Optional</sup> <a name="plugins_s3_object_version_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput"></a>

```python
plugins_s3_object_version_input: str
```

- *Type:* str

---

##### `plugins_s3_path_input`<sup>Optional</sup> <a name="plugins_s3_path_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput"></a>

```python
plugins_s3_path_input: str
```

- *Type:* str

---

##### `requirements_s3_object_version_input`<sup>Optional</sup> <a name="requirements_s3_object_version_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput"></a>

```python
requirements_s3_object_version_input: str
```

- *Type:* str

---

##### `requirements_s3_path_input`<sup>Optional</sup> <a name="requirements_s3_path_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput"></a>

```python
requirements_s3_path_input: str
```

- *Type:* str

---

##### `schedulers_input`<sup>Optional</sup> <a name="schedulers_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput"></a>

```python
schedulers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_bucket_arn_input`<sup>Optional</sup> <a name="source_bucket_arn_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput"></a>

```python
source_bucket_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MwaaEnvironmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>, cdktf.IResolvable]

---

##### `webserver_access_mode_input`<sup>Optional</sup> <a name="webserver_access_mode_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput"></a>

```python
webserver_access_mode_input: str
```

- *Type:* str

---

##### `weekly_maintenance_window_start_input`<sup>Optional</sup> <a name="weekly_maintenance_window_start_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput"></a>

```python
weekly_maintenance_window_start_input: str
```

- *Type:* str

---

##### `airflow_configuration_options`<sup>Required</sup> <a name="airflow_configuration_options" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions"></a>

```python
airflow_configuration_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `airflow_version`<sup>Required</sup> <a name="airflow_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion"></a>

```python
airflow_version: str
```

- *Type:* str

---

##### `dag_s3_path`<sup>Required</sup> <a name="dag_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path"></a>

```python
dag_s3_path: str
```

- *Type:* str

---

##### `environment_class`<sup>Required</sup> <a name="environment_class" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass"></a>

```python
environment_class: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `max_workers`<sup>Required</sup> <a name="max_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_workers`<sup>Required</sup> <a name="min_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plugins_s3_object_version`<sup>Required</sup> <a name="plugins_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```python
plugins_s3_object_version: str
```

- *Type:* str

---

##### `plugins_s3_path`<sup>Required</sup> <a name="plugins_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path"></a>

```python
plugins_s3_path: str
```

- *Type:* str

---

##### `requirements_s3_object_version`<sup>Required</sup> <a name="requirements_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```python
requirements_s3_object_version: str
```

- *Type:* str

---

##### `requirements_s3_path`<sup>Required</sup> <a name="requirements_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path"></a>

```python
requirements_s3_path: str
```

- *Type:* str

---

##### `schedulers`<sup>Required</sup> <a name="schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers"></a>

```python
schedulers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_bucket_arn`<sup>Required</sup> <a name="source_bucket_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn"></a>

```python
source_bucket_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `webserver_access_mode`<sup>Required</sup> <a name="webserver_access_mode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode"></a>

```python
webserver_access_mode: str
```

- *Type:* str

---

##### `weekly_maintenance_window_start`<sup>Required</sup> <a name="weekly_maintenance_window_start" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaEnvironmentConfig <a name="MwaaEnvironmentConfig" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dag_s3_path: str,
  execution_role_arn: str,
  name: str,
  network_configuration: MwaaEnvironmentNetworkConfiguration,
  source_bucket_arn: str,
  airflow_configuration_options: typing.Mapping[str] = None,
  airflow_version: str = None,
  environment_class: str = None,
  id: str = None,
  kms_key: str = None,
  logging_configuration: MwaaEnvironmentLoggingConfiguration = None,
  max_workers: typing.Union[int, float] = None,
  min_workers: typing.Union[int, float] = None,
  plugins_s3_object_version: str = None,
  plugins_s3_path: str = None,
  requirements_s3_object_version: str = None,
  requirements_s3_path: str = None,
  schedulers: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MwaaEnvironmentTimeouts = None,
  webserver_access_mode: str = None,
  weekly_maintenance_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path">dag_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn">source_bucket_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions">airflow_configuration_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion">airflow_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass">environment_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers">max_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers">min_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion">plugins_s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path">plugins_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion">requirements_s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path">requirements_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers">schedulers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode">webserver_access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart">weekly_maintenance_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dag_s3_path`<sup>Required</sup> <a name="dag_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path"></a>

```python
dag_s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}.

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration"></a>

```python
network_configuration: MwaaEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}

---

##### `source_bucket_arn`<sup>Required</sup> <a name="source_bucket_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn"></a>

```python
source_bucket_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}.

---

##### `airflow_configuration_options`<sup>Optional</sup> <a name="airflow_configuration_options" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions"></a>

```python
airflow_configuration_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}.

---

##### `airflow_version`<sup>Optional</sup> <a name="airflow_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion"></a>

```python
airflow_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}.

---

##### `environment_class`<sup>Optional</sup> <a name="environment_class" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass"></a>

```python
environment_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration"></a>

```python
logging_configuration: MwaaEnvironmentLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}

---

##### `max_workers`<sup>Optional</sup> <a name="max_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers"></a>

```python
max_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}.

---

##### `min_workers`<sup>Optional</sup> <a name="min_workers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers"></a>

```python
min_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}.

---

##### `plugins_s3_object_version`<sup>Optional</sup> <a name="plugins_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion"></a>

```python
plugins_s3_object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}.

---

##### `plugins_s3_path`<sup>Optional</sup> <a name="plugins_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path"></a>

```python
plugins_s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}.

---

##### `requirements_s3_object_version`<sup>Optional</sup> <a name="requirements_s3_object_version" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion"></a>

```python
requirements_s3_object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}.

---

##### `requirements_s3_path`<sup>Optional</sup> <a name="requirements_s3_path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path"></a>

```python
requirements_s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers"></a>

```python
schedulers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts"></a>

```python
timeouts: MwaaEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#timeouts MwaaEnvironment#timeouts}

---

##### `webserver_access_mode`<sup>Optional</sup> <a name="webserver_access_mode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode"></a>

```python
webserver_access_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}.

---

##### `weekly_maintenance_window_start`<sup>Optional</sup> <a name="weekly_maintenance_window_start" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart"></a>

```python
weekly_maintenance_window_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}.

---

### MwaaEnvironmentLastUpdated <a name="MwaaEnvironmentLastUpdated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLastUpdated()
```


### MwaaEnvironmentLastUpdatedError <a name="MwaaEnvironmentLastUpdatedError" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLastUpdatedError()
```


### MwaaEnvironmentLoggingConfiguration <a name="MwaaEnvironmentLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfiguration(
  dag_processing_logs: MwaaEnvironmentLoggingConfigurationDagProcessingLogs = None,
  scheduler_logs: MwaaEnvironmentLoggingConfigurationSchedulerLogs = None,
  task_logs: MwaaEnvironmentLoggingConfigurationTaskLogs = None,
  webserver_logs: MwaaEnvironmentLoggingConfigurationWebserverLogs = None,
  worker_logs: MwaaEnvironmentLoggingConfigurationWorkerLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs">dag_processing_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | dag_processing_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs">scheduler_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | scheduler_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs">task_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | task_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs">webserver_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | webserver_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs">worker_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | worker_logs block. |

---

##### `dag_processing_logs`<sup>Optional</sup> <a name="dag_processing_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs"></a>

```python
dag_processing_logs: MwaaEnvironmentLoggingConfigurationDagProcessingLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

dag_processing_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}

---

##### `scheduler_logs`<sup>Optional</sup> <a name="scheduler_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs"></a>

```python
scheduler_logs: MwaaEnvironmentLoggingConfigurationSchedulerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

scheduler_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}

---

##### `task_logs`<sup>Optional</sup> <a name="task_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs"></a>

```python
task_logs: MwaaEnvironmentLoggingConfigurationTaskLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

task_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#task_logs MwaaEnvironment#task_logs}

---

##### `webserver_logs`<sup>Optional</sup> <a name="webserver_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs"></a>

```python
webserver_logs: MwaaEnvironmentLoggingConfigurationWebserverLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

webserver_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}

---

##### `worker_logs`<sup>Optional</sup> <a name="worker_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs"></a>

```python
worker_logs: MwaaEnvironmentLoggingConfigurationWorkerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

worker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}

---

### MwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationTaskLogs <a name="MwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWebserverLogs <a name="MwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWorkerLogs <a name="MwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel">log_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentNetworkConfiguration <a name="MwaaEnvironmentNetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentNetworkConfiguration(
  security_group_ids: typing.List[str],
  subnet_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}. |

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}.

---

### MwaaEnvironmentTimeouts <a name="MwaaEnvironmentTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwaaEnvironmentLastUpdatedErrorList <a name="MwaaEnvironmentLastUpdatedErrorList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MwaaEnvironmentLastUpdatedErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MwaaEnvironmentLastUpdatedErrorOutputReference <a name="MwaaEnvironmentLastUpdatedErrorOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode">error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode"></a>

```python
error_code: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLastUpdatedError
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a>

---


### MwaaEnvironmentLastUpdatedList <a name="MwaaEnvironmentLastUpdatedList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLastUpdatedList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MwaaEnvironmentLastUpdatedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MwaaEnvironmentLastUpdatedOutputReference <a name="MwaaEnvironmentLastUpdatedOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error"></a>

```python
error: MwaaEnvironmentLastUpdatedErrorList
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLastUpdated
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a>

---


### MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn">cloud_watch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_log_group_arn`<sup>Required</sup> <a name="cloud_watch_log_group_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```python
cloud_watch_log_group_arn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLoggingConfigurationDagProcessingLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### MwaaEnvironmentLoggingConfigurationOutputReference <a name="MwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs">put_dag_processing_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs">put_scheduler_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs">put_task_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs">put_webserver_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs">put_worker_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs">reset_dag_processing_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs">reset_scheduler_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs">reset_task_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs">reset_webserver_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs">reset_worker_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dag_processing_logs` <a name="put_dag_processing_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs"></a>

```python
def put_dag_processing_logs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

##### `put_scheduler_logs` <a name="put_scheduler_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs"></a>

```python
def put_scheduler_logs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

##### `put_task_logs` <a name="put_task_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs"></a>

```python
def put_task_logs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

##### `put_webserver_logs` <a name="put_webserver_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs"></a>

```python
def put_webserver_logs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

##### `put_worker_logs` <a name="put_worker_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs"></a>

```python
def put_worker_logs(
  enabled: typing.Union[bool, IResolvable] = None,
  log_level: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

###### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs.parameter.logLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

##### `reset_dag_processing_logs` <a name="reset_dag_processing_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs"></a>

```python
def reset_dag_processing_logs() -> None
```

##### `reset_scheduler_logs` <a name="reset_scheduler_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs"></a>

```python
def reset_scheduler_logs() -> None
```

##### `reset_task_logs` <a name="reset_task_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs"></a>

```python
def reset_task_logs() -> None
```

##### `reset_webserver_logs` <a name="reset_webserver_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs"></a>

```python
def reset_webserver_logs() -> None
```

##### `reset_worker_logs` <a name="reset_worker_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs"></a>

```python
def reset_worker_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">dag_processing_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">scheduler_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">task_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">webserver_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">worker_logs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput">dag_processing_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput">scheduler_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput">task_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput">webserver_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput">worker_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dag_processing_logs`<sup>Required</sup> <a name="dag_processing_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```python
dag_processing_logs: MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `scheduler_logs`<sup>Required</sup> <a name="scheduler_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```python
scheduler_logs: MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `task_logs`<sup>Required</sup> <a name="task_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```python
task_logs: MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `webserver_logs`<sup>Required</sup> <a name="webserver_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```python
webserver_logs: MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `worker_logs`<sup>Required</sup> <a name="worker_logs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```python
worker_logs: MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `dag_processing_logs_input`<sup>Optional</sup> <a name="dag_processing_logs_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput"></a>

```python
dag_processing_logs_input: MwaaEnvironmentLoggingConfigurationDagProcessingLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `scheduler_logs_input`<sup>Optional</sup> <a name="scheduler_logs_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput"></a>

```python
scheduler_logs_input: MwaaEnvironmentLoggingConfigurationSchedulerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `task_logs_input`<sup>Optional</sup> <a name="task_logs_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput"></a>

```python
task_logs_input: MwaaEnvironmentLoggingConfigurationTaskLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `webserver_logs_input`<sup>Optional</sup> <a name="webserver_logs_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput"></a>

```python
webserver_logs_input: MwaaEnvironmentLoggingConfigurationWebserverLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `worker_logs_input`<sup>Optional</sup> <a name="worker_logs_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput"></a>

```python
worker_logs_input: MwaaEnvironmentLoggingConfigurationWorkerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---


### MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn">cloud_watch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_log_group_arn`<sup>Required</sup> <a name="cloud_watch_log_group_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```python
cloud_watch_log_group_arn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLoggingConfigurationSchedulerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn">cloud_watch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_log_group_arn`<sup>Required</sup> <a name="cloud_watch_log_group_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```python
cloud_watch_log_group_arn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLoggingConfigurationTaskLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn">cloud_watch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_log_group_arn`<sup>Required</sup> <a name="cloud_watch_log_group_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```python
cloud_watch_log_group_arn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLoggingConfigurationWebserverLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel">reset_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel"></a>

```python
def reset_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn">cloud_watch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_log_group_arn`<sup>Required</sup> <a name="cloud_watch_log_group_arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```python
cloud_watch_log_group_arn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentLoggingConfigurationWorkerLogs
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### MwaaEnvironmentNetworkConfigurationOutputReference <a name="MwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: MwaaEnvironmentNetworkConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---


### MwaaEnvironmentTimeoutsOutputReference <a name="MwaaEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import mwaa_environment

mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MwaaEnvironmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>, cdktf.IResolvable]

---



