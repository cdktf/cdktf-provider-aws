# `dataAwsRdsOrderableDbInstance` Submodule <a name="`dataAwsRdsOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsOrderableDbInstance <a name="DataAwsRdsOrderableDbInstance" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance aws_rds_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_orderable_db_instance

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  availability_zone_group: str = None,
  engine_version: str = None,
  id: str = None,
  instance_class: str = None,
  license_model: str = None,
  preferred_engine_versions: typing.List[str] = None,
  preferred_instance_classes: typing.List[str] = None,
  storage_type: str = None,
  supports_enhanced_monitoring: typing.Union[bool, IResolvable] = None,
  supports_global_databases: typing.Union[bool, IResolvable] = None,
  supports_iam_database_authentication: typing.Union[bool, IResolvable] = None,
  supports_iops: typing.Union[bool, IResolvable] = None,
  supports_kerberos_authentication: typing.Union[bool, IResolvable] = None,
  supports_performance_insights: typing.Union[bool, IResolvable] = None,
  supports_storage_autoscaling: typing.Union[bool, IResolvable] = None,
  supports_storage_encryption: typing.Union[bool, IResolvable] = None,
  vpc: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.availabilityZoneGroup">availability_zone_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredEngineVersions">preferred_engine_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredInstanceClasses">preferred_instance_classes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsEnhancedMonitoring">supports_enhanced_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsGlobalDatabases">supports_global_databases</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIamDatabaseAuthentication">supports_iam_database_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIops">supports_iops</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsKerberosAuthentication">supports_kerberos_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsPerformanceInsights">supports_performance_insights</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageAutoscaling">supports_storage_autoscaling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageEncryption">supports_storage_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.vpc">vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}.

---

##### `availability_zone_group`<sup>Optional</sup> <a name="availability_zone_group" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.availabilityZoneGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.instanceClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}.

---

##### `preferred_engine_versions`<sup>Optional</sup> <a name="preferred_engine_versions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredEngineVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}.

---

##### `preferred_instance_classes`<sup>Optional</sup> <a name="preferred_instance_classes" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredInstanceClasses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}.

---

##### `supports_enhanced_monitoring`<sup>Optional</sup> <a name="supports_enhanced_monitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsEnhancedMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}.

---

##### `supports_global_databases`<sup>Optional</sup> <a name="supports_global_databases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsGlobalDatabases"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}.

---

##### `supports_iam_database_authentication`<sup>Optional</sup> <a name="supports_iam_database_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIamDatabaseAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}.

---

##### `supports_iops`<sup>Optional</sup> <a name="supports_iops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIops"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}.

---

##### `supports_kerberos_authentication`<sup>Optional</sup> <a name="supports_kerberos_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsKerberosAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}.

---

##### `supports_performance_insights`<sup>Optional</sup> <a name="supports_performance_insights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsPerformanceInsights"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}.

---

##### `supports_storage_autoscaling`<sup>Optional</sup> <a name="supports_storage_autoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageAutoscaling"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}.

---

##### `supports_storage_encryption`<sup>Optional</sup> <a name="supports_storage_encryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.vpc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetAvailabilityZoneGroup">reset_availability_zone_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetInstanceClass">reset_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredEngineVersions">reset_preferred_engine_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredInstanceClasses">reset_preferred_instance_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsEnhancedMonitoring">reset_supports_enhanced_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsGlobalDatabases">reset_supports_global_databases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIamDatabaseAuthentication">reset_supports_iam_database_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIops">reset_supports_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsKerberosAuthentication">reset_supports_kerberos_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsPerformanceInsights">reset_supports_performance_insights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageAutoscaling">reset_supports_storage_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageEncryption">reset_supports_storage_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetVpc">reset_vpc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_availability_zone_group` <a name="reset_availability_zone_group" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetAvailabilityZoneGroup"></a>

```python
def reset_availability_zone_group() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_class` <a name="reset_instance_class" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetInstanceClass"></a>

```python
def reset_instance_class() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_preferred_engine_versions` <a name="reset_preferred_engine_versions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredEngineVersions"></a>

```python
def reset_preferred_engine_versions() -> None
```

##### `reset_preferred_instance_classes` <a name="reset_preferred_instance_classes" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredInstanceClasses"></a>

```python
def reset_preferred_instance_classes() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_supports_enhanced_monitoring` <a name="reset_supports_enhanced_monitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsEnhancedMonitoring"></a>

```python
def reset_supports_enhanced_monitoring() -> None
```

##### `reset_supports_global_databases` <a name="reset_supports_global_databases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsGlobalDatabases"></a>

```python
def reset_supports_global_databases() -> None
```

##### `reset_supports_iam_database_authentication` <a name="reset_supports_iam_database_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIamDatabaseAuthentication"></a>

```python
def reset_supports_iam_database_authentication() -> None
```

##### `reset_supports_iops` <a name="reset_supports_iops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIops"></a>

```python
def reset_supports_iops() -> None
```

##### `reset_supports_kerberos_authentication` <a name="reset_supports_kerberos_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsKerberosAuthentication"></a>

```python
def reset_supports_kerberos_authentication() -> None
```

##### `reset_supports_performance_insights` <a name="reset_supports_performance_insights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsPerformanceInsights"></a>

```python
def reset_supports_performance_insights() -> None
```

##### `reset_supports_storage_autoscaling` <a name="reset_supports_storage_autoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageAutoscaling"></a>

```python
def reset_supports_storage_autoscaling() -> None
```

##### `reset_supports_storage_encryption` <a name="reset_supports_storage_encryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageEncryption"></a>

```python
def reset_supports_storage_encryption() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetVpc"></a>

```python
def reset_vpc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_orderable_db_instance

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_orderable_db_instance

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_orderable_db_instance

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerDbInstance">max_iops_per_db_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerGib">max_iops_per_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxStorageSize">max_storage_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerDbInstance">min_iops_per_db_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerGib">min_iops_per_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minStorageSize">min_storage_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.multiAzCapable">multi_az_capable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.outpostCapable">outpost_capable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.readReplicaCapable">read_replica_capable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedEngineModes">supported_engine_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedNetworkTypes">supported_network_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroupInput">availability_zone_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClassInput">instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersionsInput">preferred_engine_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClassesInput">preferred_instance_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoringInput">supports_enhanced_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabasesInput">supports_global_databases_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthenticationInput">supports_iam_database_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIopsInput">supports_iops_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthenticationInput">supports_kerberos_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsightsInput">supports_performance_insights_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscalingInput">supports_storage_autoscaling_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryptionInput">supports_storage_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpcInput">vpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroup">availability_zone_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClass">instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersions">preferred_engine_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClasses">preferred_instance_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoring">supports_enhanced_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabases">supports_global_databases</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthentication">supports_iam_database_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIops">supports_iops</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthentication">supports_kerberos_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsights">supports_performance_insights</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscaling">supports_storage_autoscaling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryption">supports_storage_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpc">vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_iops_per_db_instance`<sup>Required</sup> <a name="max_iops_per_db_instance" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerDbInstance"></a>

```python
max_iops_per_db_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_iops_per_gib`<sup>Required</sup> <a name="max_iops_per_gib" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerGib"></a>

```python
max_iops_per_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_storage_size`<sup>Required</sup> <a name="max_storage_size" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxStorageSize"></a>

```python
max_storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_iops_per_db_instance`<sup>Required</sup> <a name="min_iops_per_db_instance" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerDbInstance"></a>

```python
min_iops_per_db_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_iops_per_gib`<sup>Required</sup> <a name="min_iops_per_gib" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerGib"></a>

```python
min_iops_per_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_storage_size`<sup>Required</sup> <a name="min_storage_size" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minStorageSize"></a>

```python
min_storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_az_capable`<sup>Required</sup> <a name="multi_az_capable" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.multiAzCapable"></a>

```python
multi_az_capable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `outpost_capable`<sup>Required</sup> <a name="outpost_capable" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.outpostCapable"></a>

```python
outpost_capable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `read_replica_capable`<sup>Required</sup> <a name="read_replica_capable" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.readReplicaCapable"></a>

```python
read_replica_capable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supported_engine_modes`<sup>Required</sup> <a name="supported_engine_modes" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedEngineModes"></a>

```python
supported_engine_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_network_types`<sup>Required</sup> <a name="supported_network_types" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedNetworkTypes"></a>

```python
supported_network_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone_group_input`<sup>Optional</sup> <a name="availability_zone_group_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroupInput"></a>

```python
availability_zone_group_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_class_input`<sup>Optional</sup> <a name="instance_class_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClassInput"></a>

```python
instance_class_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `preferred_engine_versions_input`<sup>Optional</sup> <a name="preferred_engine_versions_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersionsInput"></a>

```python
preferred_engine_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_instance_classes_input`<sup>Optional</sup> <a name="preferred_instance_classes_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```python
preferred_instance_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `supports_enhanced_monitoring_input`<sup>Optional</sup> <a name="supports_enhanced_monitoring_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoringInput"></a>

```python
supports_enhanced_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_global_databases_input`<sup>Optional</sup> <a name="supports_global_databases_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabasesInput"></a>

```python
supports_global_databases_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_iam_database_authentication_input`<sup>Optional</sup> <a name="supports_iam_database_authentication_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthenticationInput"></a>

```python
supports_iam_database_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_iops_input`<sup>Optional</sup> <a name="supports_iops_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIopsInput"></a>

```python
supports_iops_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_kerberos_authentication_input`<sup>Optional</sup> <a name="supports_kerberos_authentication_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthenticationInput"></a>

```python
supports_kerberos_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_performance_insights_input`<sup>Optional</sup> <a name="supports_performance_insights_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsightsInput"></a>

```python
supports_performance_insights_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_storage_autoscaling_input`<sup>Optional</sup> <a name="supports_storage_autoscaling_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscalingInput"></a>

```python
supports_storage_autoscaling_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_storage_encryption_input`<sup>Optional</sup> <a name="supports_storage_encryption_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryptionInput"></a>

```python
supports_storage_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpcInput"></a>

```python
vpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_group`<sup>Required</sup> <a name="availability_zone_group" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroup"></a>

```python
availability_zone_group: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `preferred_engine_versions`<sup>Required</sup> <a name="preferred_engine_versions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersions"></a>

```python
preferred_engine_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preferred_instance_classes`<sup>Required</sup> <a name="preferred_instance_classes" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClasses"></a>

```python
preferred_instance_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `supports_enhanced_monitoring`<sup>Required</sup> <a name="supports_enhanced_monitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoring"></a>

```python
supports_enhanced_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_global_databases`<sup>Required</sup> <a name="supports_global_databases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabases"></a>

```python
supports_global_databases: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_iam_database_authentication`<sup>Required</sup> <a name="supports_iam_database_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthentication"></a>

```python
supports_iam_database_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_iops`<sup>Required</sup> <a name="supports_iops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIops"></a>

```python
supports_iops: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_kerberos_authentication`<sup>Required</sup> <a name="supports_kerberos_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthentication"></a>

```python
supports_kerberos_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_performance_insights`<sup>Required</sup> <a name="supports_performance_insights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsights"></a>

```python
supports_performance_insights: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_storage_autoscaling`<sup>Required</sup> <a name="supports_storage_autoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscaling"></a>

```python
supports_storage_autoscaling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supports_storage_encryption`<sup>Required</sup> <a name="supports_storage_encryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryption"></a>

```python
supports_storage_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpc"></a>

```python
vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsOrderableDbInstanceConfig <a name="DataAwsRdsOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_orderable_db_instance

dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  availability_zone_group: str = None,
  engine_version: str = None,
  id: str = None,
  instance_class: str = None,
  license_model: str = None,
  preferred_engine_versions: typing.List[str] = None,
  preferred_instance_classes: typing.List[str] = None,
  storage_type: str = None,
  supports_enhanced_monitoring: typing.Union[bool, IResolvable] = None,
  supports_global_databases: typing.Union[bool, IResolvable] = None,
  supports_iam_database_authentication: typing.Union[bool, IResolvable] = None,
  supports_iops: typing.Union[bool, IResolvable] = None,
  supports_kerberos_authentication: typing.Union[bool, IResolvable] = None,
  supports_performance_insights: typing.Union[bool, IResolvable] = None,
  supports_storage_autoscaling: typing.Union[bool, IResolvable] = None,
  supports_storage_encryption: typing.Union[bool, IResolvable] = None,
  vpc: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.availabilityZoneGroup">availability_zone_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.instanceClass">instance_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredEngineVersions">preferred_engine_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredInstanceClasses">preferred_instance_classes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsEnhancedMonitoring">supports_enhanced_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsGlobalDatabases">supports_global_databases</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIamDatabaseAuthentication">supports_iam_database_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIops">supports_iops</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsKerberosAuthentication">supports_kerberos_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsPerformanceInsights">supports_performance_insights</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageAutoscaling">supports_storage_autoscaling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageEncryption">supports_storage_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.vpc">vpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}.

---

##### `availability_zone_group`<sup>Optional</sup> <a name="availability_zone_group" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.availabilityZoneGroup"></a>

```python
availability_zone_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}.

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}.

---

##### `preferred_engine_versions`<sup>Optional</sup> <a name="preferred_engine_versions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredEngineVersions"></a>

```python
preferred_engine_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}.

---

##### `preferred_instance_classes`<sup>Optional</sup> <a name="preferred_instance_classes" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```python
preferred_instance_classes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}.

---

##### `supports_enhanced_monitoring`<sup>Optional</sup> <a name="supports_enhanced_monitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsEnhancedMonitoring"></a>

```python
supports_enhanced_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}.

---

##### `supports_global_databases`<sup>Optional</sup> <a name="supports_global_databases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsGlobalDatabases"></a>

```python
supports_global_databases: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}.

---

##### `supports_iam_database_authentication`<sup>Optional</sup> <a name="supports_iam_database_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIamDatabaseAuthentication"></a>

```python
supports_iam_database_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}.

---

##### `supports_iops`<sup>Optional</sup> <a name="supports_iops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIops"></a>

```python
supports_iops: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}.

---

##### `supports_kerberos_authentication`<sup>Optional</sup> <a name="supports_kerberos_authentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsKerberosAuthentication"></a>

```python
supports_kerberos_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}.

---

##### `supports_performance_insights`<sup>Optional</sup> <a name="supports_performance_insights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsPerformanceInsights"></a>

```python
supports_performance_insights: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}.

---

##### `supports_storage_autoscaling`<sup>Optional</sup> <a name="supports_storage_autoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageAutoscaling"></a>

```python
supports_storage_autoscaling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}.

---

##### `supports_storage_encryption`<sup>Optional</sup> <a name="supports_storage_encryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageEncryption"></a>

```python
supports_storage_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.vpc"></a>

```python
vpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}.

---



