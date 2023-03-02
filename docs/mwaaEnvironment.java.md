# `mwaaEnvironment` Submodule <a name="`mwaaEnvironment` Submodule" id="@cdktf/provider-aws.mwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaEnvironment <a name="MwaaEnvironment" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment aws_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironment;

MwaaEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dagS3Path(java.lang.String)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .networkConfiguration(MwaaEnvironmentNetworkConfiguration)
    .sourceBucketArn(java.lang.String)
//  .airflowConfigurationOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .airflowVersion(java.lang.String)
//  .environmentClass(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .loggingConfiguration(MwaaEnvironmentLoggingConfiguration)
//  .maxWorkers(java.lang.Number)
//  .minWorkers(java.lang.Number)
//  .pluginsS3ObjectVersion(java.lang.String)
//  .pluginsS3Path(java.lang.String)
//  .requirementsS3ObjectVersion(java.lang.String)
//  .requirementsS3Path(java.lang.String)
//  .schedulers(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MwaaEnvironmentTimeouts)
//  .webserverAccessMode(java.lang.String)
//  .weeklyMaintenanceWindowStart(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dagS3Path">dagS3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.sourceBucketArn">sourceBucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowVersion">airflowVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.environmentClass">environmentClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3Path">pluginsS3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3Path">requirementsS3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.schedulers">schedulers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.webserverAccessMode">webserverAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dagS3Path`<sup>Required</sup> <a name="dagS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.dagS3Path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}

---

##### `sourceBucketArn`<sup>Required</sup> <a name="sourceBucketArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.sourceBucketArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}.

---

##### `airflowConfigurationOptions`<sup>Optional</sup> <a name="airflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowConfigurationOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}.

---

##### `airflowVersion`<sup>Optional</sup> <a name="airflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.airflowVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}.

---

##### `environmentClass`<sup>Optional</sup> <a name="environmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.environmentClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.maxWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.minWorkers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}.

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="pluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3ObjectVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}.

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="pluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.pluginsS3Path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}.

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="requirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3ObjectVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}.

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="requirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.requirementsS3Path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.schedulers"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#timeouts MwaaEnvironment#timeouts}

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="webserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.webserverAccessMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.Initializer.parameter.weeklyMaintenanceWindowStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions">resetAirflowConfigurationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion">resetAirflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass">resetEnvironmentClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers">resetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers">resetMinWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion">resetPluginsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path">resetPluginsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion">resetRequirementsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path">resetRequirementsS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers">resetSchedulers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode">resetWebserverAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart">resetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration"></a>

```java
public void putLoggingConfiguration(MwaaEnvironmentLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(MwaaEnvironmentNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts"></a>

```java
public void putTimeouts(MwaaEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

---

##### `resetAirflowConfigurationOptions` <a name="resetAirflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowConfigurationOptions"></a>

```java
public void resetAirflowConfigurationOptions()
```

##### `resetAirflowVersion` <a name="resetAirflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetAirflowVersion"></a>

```java
public void resetAirflowVersion()
```

##### `resetEnvironmentClass` <a name="resetEnvironmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetEnvironmentClass"></a>

```java
public void resetEnvironmentClass()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetLoggingConfiguration"></a>

```java
public void resetLoggingConfiguration()
```

##### `resetMaxWorkers` <a name="resetMaxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMaxWorkers"></a>

```java
public void resetMaxWorkers()
```

##### `resetMinWorkers` <a name="resetMinWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetMinWorkers"></a>

```java
public void resetMinWorkers()
```

##### `resetPluginsS3ObjectVersion` <a name="resetPluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3ObjectVersion"></a>

```java
public void resetPluginsS3ObjectVersion()
```

##### `resetPluginsS3Path` <a name="resetPluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetPluginsS3Path"></a>

```java
public void resetPluginsS3Path()
```

##### `resetRequirementsS3ObjectVersion` <a name="resetRequirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3ObjectVersion"></a>

```java
public void resetRequirementsS3ObjectVersion()
```

##### `resetRequirementsS3Path` <a name="resetRequirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetRequirementsS3Path"></a>

```java
public void resetRequirementsS3Path()
```

##### `resetSchedulers` <a name="resetSchedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetSchedulers"></a>

```java
public void resetSchedulers()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWebserverAccessMode` <a name="resetWebserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWebserverAccessMode"></a>

```java
public void resetWebserverAccessMode()
```

##### `resetWeeklyMaintenanceWindowStart` <a name="resetWeeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.resetWeeklyMaintenanceWindowStart"></a>

```java
public void resetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironment;

MwaaEnvironment.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironment;

MwaaEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironment;

MwaaEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated">lastUpdated</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn">serviceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl">webserverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput">airflowConfigurationOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput">airflowVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput">dagS3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput">environmentClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput">maxWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput">minWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput">pluginsS3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput">pluginsS3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput">requirementsS3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput">requirementsS3PathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput">schedulersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput">sourceBucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput">webserverAccessModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput">weeklyMaintenanceWindowStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion">airflowVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path">dagS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass">environmentClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path">pluginsS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path">requirementsS3Path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers">schedulers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn">sourceBucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode">webserverAccessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.lastUpdated"></a>

```java
public MwaaEnvironmentLastUpdatedList getLastUpdated();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList">MwaaEnvironmentLastUpdatedList</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfiguration"></a>

```java
public MwaaEnvironmentLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference">MwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfiguration"></a>

```java
public MwaaEnvironmentNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference">MwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `serviceRoleArn`<sup>Required</sup> <a name="serviceRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.serviceRoleArn"></a>

```java
public java.lang.String getServiceRoleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeouts"></a>

```java
public MwaaEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference">MwaaEnvironmentTimeoutsOutputReference</a>

---

##### `webserverUrl`<sup>Required</sup> <a name="webserverUrl" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverUrl"></a>

```java
public java.lang.String getWebserverUrl();
```

- *Type:* java.lang.String

---

##### `airflowConfigurationOptionsInput`<sup>Optional</sup> <a name="airflowConfigurationOptionsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAirflowConfigurationOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `airflowVersionInput`<sup>Optional</sup> <a name="airflowVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersionInput"></a>

```java
public java.lang.String getAirflowVersionInput();
```

- *Type:* java.lang.String

---

##### `dagS3PathInput`<sup>Optional</sup> <a name="dagS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3PathInput"></a>

```java
public java.lang.String getDagS3PathInput();
```

- *Type:* java.lang.String

---

##### `environmentClassInput`<sup>Optional</sup> <a name="environmentClassInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClassInput"></a>

```java
public java.lang.String getEnvironmentClassInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.loggingConfigurationInput"></a>

```java
public MwaaEnvironmentLoggingConfiguration getLoggingConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---

##### `maxWorkersInput`<sup>Optional</sup> <a name="maxWorkersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkersInput"></a>

```java
public java.lang.Number getMaxWorkersInput();
```

- *Type:* java.lang.Number

---

##### `minWorkersInput`<sup>Optional</sup> <a name="minWorkersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkersInput"></a>

```java
public java.lang.Number getMinWorkersInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.networkConfigurationInput"></a>

```java
public MwaaEnvironmentNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---

##### `pluginsS3ObjectVersionInput`<sup>Optional</sup> <a name="pluginsS3ObjectVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersionInput"></a>

```java
public java.lang.String getPluginsS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `pluginsS3PathInput`<sup>Optional</sup> <a name="pluginsS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3PathInput"></a>

```java
public java.lang.String getPluginsS3PathInput();
```

- *Type:* java.lang.String

---

##### `requirementsS3ObjectVersionInput`<sup>Optional</sup> <a name="requirementsS3ObjectVersionInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersionInput"></a>

```java
public java.lang.String getRequirementsS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `requirementsS3PathInput`<sup>Optional</sup> <a name="requirementsS3PathInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3PathInput"></a>

```java
public java.lang.String getRequirementsS3PathInput();
```

- *Type:* java.lang.String

---

##### `schedulersInput`<sup>Optional</sup> <a name="schedulersInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulersInput"></a>

```java
public java.lang.Number getSchedulersInput();
```

- *Type:* java.lang.Number

---

##### `sourceBucketArnInput`<sup>Optional</sup> <a name="sourceBucketArnInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArnInput"></a>

```java
public java.lang.String getSourceBucketArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `webserverAccessModeInput`<sup>Optional</sup> <a name="webserverAccessModeInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessModeInput"></a>

```java
public java.lang.String getWebserverAccessModeInput();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStartInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStartInput"></a>

```java
public java.lang.String getWeeklyMaintenanceWindowStartInput();
```

- *Type:* java.lang.String

---

##### `airflowConfigurationOptions`<sup>Required</sup> <a name="airflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowConfigurationOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAirflowConfigurationOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `airflowVersion`<sup>Required</sup> <a name="airflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.airflowVersion"></a>

```java
public java.lang.String getAirflowVersion();
```

- *Type:* java.lang.String

---

##### `dagS3Path`<sup>Required</sup> <a name="dagS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.dagS3Path"></a>

```java
public java.lang.String getDagS3Path();
```

- *Type:* java.lang.String

---

##### `environmentClass`<sup>Required</sup> <a name="environmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.environmentClass"></a>

```java
public java.lang.String getEnvironmentClass();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `maxWorkers`<sup>Required</sup> <a name="maxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

---

##### `minWorkers`<sup>Required</sup> <a name="minWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.minWorkers"></a>

```java
public java.lang.Number getMinWorkers();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pluginsS3ObjectVersion`<sup>Required</sup> <a name="pluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```java
public java.lang.String getPluginsS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `pluginsS3Path`<sup>Required</sup> <a name="pluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.pluginsS3Path"></a>

```java
public java.lang.String getPluginsS3Path();
```

- *Type:* java.lang.String

---

##### `requirementsS3ObjectVersion`<sup>Required</sup> <a name="requirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```java
public java.lang.String getRequirementsS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `requirementsS3Path`<sup>Required</sup> <a name="requirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.requirementsS3Path"></a>

```java
public java.lang.String getRequirementsS3Path();
```

- *Type:* java.lang.String

---

##### `schedulers`<sup>Required</sup> <a name="schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.schedulers"></a>

```java
public java.lang.Number getSchedulers();
```

- *Type:* java.lang.Number

---

##### `sourceBucketArn`<sup>Required</sup> <a name="sourceBucketArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.sourceBucketArn"></a>

```java
public java.lang.String getSourceBucketArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `webserverAccessMode`<sup>Required</sup> <a name="webserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.webserverAccessMode"></a>

```java
public java.lang.String getWebserverAccessMode();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceWindowStart`<sup>Required</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```java
public java.lang.String getWeeklyMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaEnvironmentConfig <a name="MwaaEnvironmentConfig" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentConfig;

MwaaEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dagS3Path(java.lang.String)
    .executionRoleArn(java.lang.String)
    .name(java.lang.String)
    .networkConfiguration(MwaaEnvironmentNetworkConfiguration)
    .sourceBucketArn(java.lang.String)
//  .airflowConfigurationOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .airflowVersion(java.lang.String)
//  .environmentClass(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .loggingConfiguration(MwaaEnvironmentLoggingConfiguration)
//  .maxWorkers(java.lang.Number)
//  .minWorkers(java.lang.Number)
//  .pluginsS3ObjectVersion(java.lang.String)
//  .pluginsS3Path(java.lang.String)
//  .requirementsS3ObjectVersion(java.lang.String)
//  .requirementsS3Path(java.lang.String)
//  .schedulers(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MwaaEnvironmentTimeouts)
//  .webserverAccessMode(java.lang.String)
//  .weeklyMaintenanceWindowStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path">dagS3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn">sourceBucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions">airflowConfigurationOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion">airflowVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass">environmentClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers">maxWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers">minWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion">pluginsS3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path">pluginsS3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion">requirementsS3ObjectVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path">requirementsS3Path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers">schedulers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode">webserverAccessMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart">weeklyMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dagS3Path`<sup>Required</sup> <a name="dagS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.dagS3Path"></a>

```java
public java.lang.String getDagS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_s3_path MwaaEnvironment#dag_s3_path}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#execution_role_arn MwaaEnvironment#execution_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#name MwaaEnvironment#name}.

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.networkConfiguration"></a>

```java
public MwaaEnvironmentNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#network_configuration MwaaEnvironment#network_configuration}

---

##### `sourceBucketArn`<sup>Required</sup> <a name="sourceBucketArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.sourceBucketArn"></a>

```java
public java.lang.String getSourceBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#source_bucket_arn MwaaEnvironment#source_bucket_arn}.

---

##### `airflowConfigurationOptions`<sup>Optional</sup> <a name="airflowConfigurationOptions" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowConfigurationOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAirflowConfigurationOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_configuration_options MwaaEnvironment#airflow_configuration_options}.

---

##### `airflowVersion`<sup>Optional</sup> <a name="airflowVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.airflowVersion"></a>

```java
public java.lang.String getAirflowVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#airflow_version MwaaEnvironment#airflow_version}.

---

##### `environmentClass`<sup>Optional</sup> <a name="environmentClass" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.environmentClass"></a>

```java
public java.lang.String getEnvironmentClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#environment_class MwaaEnvironment#environment_class}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#id MwaaEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#kms_key MwaaEnvironment#kms_key}.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.loggingConfiguration"></a>

```java
public MwaaEnvironmentLoggingConfiguration getLoggingConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#logging_configuration MwaaEnvironment#logging_configuration}

---

##### `maxWorkers`<sup>Optional</sup> <a name="maxWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.maxWorkers"></a>

```java
public java.lang.Number getMaxWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#max_workers MwaaEnvironment#max_workers}.

---

##### `minWorkers`<sup>Optional</sup> <a name="minWorkers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.minWorkers"></a>

```java
public java.lang.Number getMinWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#min_workers MwaaEnvironment#min_workers}.

---

##### `pluginsS3ObjectVersion`<sup>Optional</sup> <a name="pluginsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3ObjectVersion"></a>

```java
public java.lang.String getPluginsS3ObjectVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_object_version MwaaEnvironment#plugins_s3_object_version}.

---

##### `pluginsS3Path`<sup>Optional</sup> <a name="pluginsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.pluginsS3Path"></a>

```java
public java.lang.String getPluginsS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#plugins_s3_path MwaaEnvironment#plugins_s3_path}.

---

##### `requirementsS3ObjectVersion`<sup>Optional</sup> <a name="requirementsS3ObjectVersion" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3ObjectVersion"></a>

```java
public java.lang.String getRequirementsS3ObjectVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_object_version MwaaEnvironment#requirements_s3_object_version}.

---

##### `requirementsS3Path`<sup>Optional</sup> <a name="requirementsS3Path" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.requirementsS3Path"></a>

```java
public java.lang.String getRequirementsS3Path();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#requirements_s3_path MwaaEnvironment#requirements_s3_path}.

---

##### `schedulers`<sup>Optional</sup> <a name="schedulers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.schedulers"></a>

```java
public java.lang.Number getSchedulers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#schedulers MwaaEnvironment#schedulers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags MwaaEnvironment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#tags_all MwaaEnvironment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.timeouts"></a>

```java
public MwaaEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#timeouts MwaaEnvironment#timeouts}

---

##### `webserverAccessMode`<sup>Optional</sup> <a name="webserverAccessMode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.webserverAccessMode"></a>

```java
public java.lang.String getWebserverAccessMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_access_mode MwaaEnvironment#webserver_access_mode}.

---

##### `weeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="weeklyMaintenanceWindowStart" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentConfig.property.weeklyMaintenanceWindowStart"></a>

```java
public java.lang.String getWeeklyMaintenanceWindowStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#weekly_maintenance_window_start MwaaEnvironment#weekly_maintenance_window_start}.

---

### MwaaEnvironmentLastUpdated <a name="MwaaEnvironmentLastUpdated" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLastUpdated;

MwaaEnvironmentLastUpdated.builder()
    .build();
```


### MwaaEnvironmentLastUpdatedError <a name="MwaaEnvironmentLastUpdatedError" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLastUpdatedError;

MwaaEnvironmentLastUpdatedError.builder()
    .build();
```


### MwaaEnvironmentLoggingConfiguration <a name="MwaaEnvironmentLoggingConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfiguration;

MwaaEnvironmentLoggingConfiguration.builder()
//  .dagProcessingLogs(MwaaEnvironmentLoggingConfigurationDagProcessingLogs)
//  .schedulerLogs(MwaaEnvironmentLoggingConfigurationSchedulerLogs)
//  .taskLogs(MwaaEnvironmentLoggingConfigurationTaskLogs)
//  .webserverLogs(MwaaEnvironmentLoggingConfigurationWebserverLogs)
//  .workerLogs(MwaaEnvironmentLoggingConfigurationWorkerLogs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs">dagProcessingLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | dag_processing_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs">schedulerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | scheduler_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs">taskLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | task_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs">webserverLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | webserver_logs block. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs">workerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | worker_logs block. |

---

##### `dagProcessingLogs`<sup>Optional</sup> <a name="dagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.dagProcessingLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationDagProcessingLogs getDagProcessingLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

dag_processing_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#dag_processing_logs MwaaEnvironment#dag_processing_logs}

---

##### `schedulerLogs`<sup>Optional</sup> <a name="schedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.schedulerLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationSchedulerLogs getSchedulerLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

scheduler_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#scheduler_logs MwaaEnvironment#scheduler_logs}

---

##### `taskLogs`<sup>Optional</sup> <a name="taskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.taskLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationTaskLogs getTaskLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

task_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#task_logs MwaaEnvironment#task_logs}

---

##### `webserverLogs`<sup>Optional</sup> <a name="webserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.webserverLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationWebserverLogs getWebserverLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

webserver_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#webserver_logs MwaaEnvironment#webserver_logs}

---

##### `workerLogs`<sup>Optional</sup> <a name="workerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration.property.workerLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationWorkerLogs getWorkerLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

worker_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#worker_logs MwaaEnvironment#worker_logs}

---

### MwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs;

MwaaEnvironmentLoggingConfigurationDagProcessingLogs.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationSchedulerLogs;

MwaaEnvironmentLoggingConfigurationSchedulerLogs.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationTaskLogs <a name="MwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationTaskLogs;

MwaaEnvironmentLoggingConfigurationTaskLogs.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWebserverLogs <a name="MwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationWebserverLogs;

MwaaEnvironmentLoggingConfigurationWebserverLogs.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentLoggingConfigurationWorkerLogs <a name="MwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationWorkerLogs;

MwaaEnvironmentLoggingConfigurationWorkerLogs.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#enabled MwaaEnvironment#enabled}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#log_level MwaaEnvironment#log_level}.

---

### MwaaEnvironmentNetworkConfiguration <a name="MwaaEnvironmentNetworkConfiguration" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentNetworkConfiguration;

MwaaEnvironmentNetworkConfiguration.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#security_group_ids MwaaEnvironment#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#subnet_ids MwaaEnvironment#subnet_ids}.

---

### MwaaEnvironmentTimeouts <a name="MwaaEnvironmentTimeouts" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentTimeouts;

MwaaEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#create MwaaEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#delete MwaaEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment#update MwaaEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwaaEnvironmentLastUpdatedErrorList <a name="MwaaEnvironmentLastUpdatedErrorList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLastUpdatedErrorList;

new MwaaEnvironmentLastUpdatedErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get"></a>

```java
public MwaaEnvironmentLastUpdatedErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MwaaEnvironmentLastUpdatedErrorOutputReference <a name="MwaaEnvironmentLastUpdatedErrorOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLastUpdatedErrorOutputReference;

new MwaaEnvironmentLastUpdatedErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode">errorCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorCode"></a>

```java
public java.lang.String getErrorCode();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLastUpdatedError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedError">MwaaEnvironmentLastUpdatedError</a>

---


### MwaaEnvironmentLastUpdatedList <a name="MwaaEnvironmentLastUpdatedList" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLastUpdatedList;

new MwaaEnvironmentLastUpdatedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get"></a>

```java
public MwaaEnvironmentLastUpdatedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MwaaEnvironmentLastUpdatedOutputReference <a name="MwaaEnvironmentLastUpdatedOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLastUpdatedOutputReference;

new MwaaEnvironmentLastUpdatedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.error"></a>

```java
public MwaaEnvironmentLastUpdatedErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedErrorList">MwaaEnvironmentLastUpdatedErrorList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdatedOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLastUpdated getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLastUpdated">MwaaEnvironmentLastUpdated</a>

---


### MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference;

new MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn">cloudWatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="cloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```java
public java.lang.String getCloudWatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLoggingConfigurationDagProcessingLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### MwaaEnvironmentLoggingConfigurationOutputReference <a name="MwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationOutputReference;

new MwaaEnvironmentLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs">putDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs">putSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs">putTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs">putWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs">putWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs">resetDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs">resetSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs">resetTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs">resetWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs">resetWorkerLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDagProcessingLogs` <a name="putDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs"></a>

```java
public void putDagProcessingLogs(MwaaEnvironmentLoggingConfigurationDagProcessingLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putDagProcessingLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `putSchedulerLogs` <a name="putSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs"></a>

```java
public void putSchedulerLogs(MwaaEnvironmentLoggingConfigurationSchedulerLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putSchedulerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `putTaskLogs` <a name="putTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs"></a>

```java
public void putTaskLogs(MwaaEnvironmentLoggingConfigurationTaskLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putTaskLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `putWebserverLogs` <a name="putWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs"></a>

```java
public void putWebserverLogs(MwaaEnvironmentLoggingConfigurationWebserverLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWebserverLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `putWorkerLogs` <a name="putWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs"></a>

```java
public void putWorkerLogs(MwaaEnvironmentLoggingConfigurationWorkerLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.putWorkerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `resetDagProcessingLogs` <a name="resetDagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetDagProcessingLogs"></a>

```java
public void resetDagProcessingLogs()
```

##### `resetSchedulerLogs` <a name="resetSchedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetSchedulerLogs"></a>

```java
public void resetSchedulerLogs()
```

##### `resetTaskLogs` <a name="resetTaskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetTaskLogs"></a>

```java
public void resetTaskLogs()
```

##### `resetWebserverLogs` <a name="resetWebserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWebserverLogs"></a>

```java
public void resetWebserverLogs()
```

##### `resetWorkerLogs` <a name="resetWorkerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.resetWorkerLogs"></a>

```java
public void resetWorkerLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">dagProcessingLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">schedulerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">taskLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">webserverLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">workerLogs</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput">dagProcessingLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput">schedulerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput">taskLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput">webserverLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput">workerLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dagProcessingLogs`<sup>Required</sup> <a name="dagProcessingLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference getDagProcessingLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `schedulerLogs`<sup>Required</sup> <a name="schedulerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference getSchedulerLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `taskLogs`<sup>Required</sup> <a name="taskLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference getTaskLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `webserverLogs`<sup>Required</sup> <a name="webserverLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference getWebserverLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `workerLogs`<sup>Required</sup> <a name="workerLogs" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```java
public MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference getWorkerLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `dagProcessingLogsInput`<sup>Optional</sup> <a name="dagProcessingLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogsInput"></a>

```java
public MwaaEnvironmentLoggingConfigurationDagProcessingLogs getDagProcessingLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationDagProcessingLogs">MwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---

##### `schedulerLogsInput`<sup>Optional</sup> <a name="schedulerLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogsInput"></a>

```java
public MwaaEnvironmentLoggingConfigurationSchedulerLogs getSchedulerLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---

##### `taskLogsInput`<sup>Optional</sup> <a name="taskLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogsInput"></a>

```java
public MwaaEnvironmentLoggingConfigurationTaskLogs getTaskLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---

##### `webserverLogsInput`<sup>Optional</sup> <a name="webserverLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogsInput"></a>

```java
public MwaaEnvironmentLoggingConfigurationWebserverLogs getWebserverLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---

##### `workerLogsInput`<sup>Optional</sup> <a name="workerLogsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogsInput"></a>

```java
public MwaaEnvironmentLoggingConfigurationWorkerLogs getWorkerLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLoggingConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfiguration">MwaaEnvironmentLoggingConfiguration</a>

---


### MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference;

new MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn">cloudWatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="cloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```java
public java.lang.String getCloudWatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLoggingConfigurationSchedulerLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationSchedulerLogs">MwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference;

new MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn">cloudWatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="cloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```java
public java.lang.String getCloudWatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLoggingConfigurationTaskLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationTaskLogs">MwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference;

new MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn">cloudWatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="cloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```java
public java.lang.String getCloudWatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLoggingConfigurationWebserverLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWebserverLogs">MwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference;

new MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn">cloudWatchLogGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchLogGroupArn`<sup>Required</sup> <a name="cloudWatchLogGroupArn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudWatchLogGroupArn"></a>

```java
public java.lang.String getCloudWatchLogGroupArn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentLoggingConfigurationWorkerLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentLoggingConfigurationWorkerLogs">MwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### MwaaEnvironmentNetworkConfigurationOutputReference <a name="MwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentNetworkConfigurationOutputReference;

new MwaaEnvironmentNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public MwaaEnvironmentNetworkConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentNetworkConfiguration">MwaaEnvironmentNetworkConfiguration</a>

---


### MwaaEnvironmentTimeoutsOutputReference <a name="MwaaEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.mwaa_environment.MwaaEnvironmentTimeoutsOutputReference;

new MwaaEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mwaaEnvironment.MwaaEnvironmentTimeouts">MwaaEnvironmentTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



