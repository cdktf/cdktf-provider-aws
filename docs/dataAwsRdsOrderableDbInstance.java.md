# `dataAwsRdsOrderableDbInstance` Submodule <a name="`dataAwsRdsOrderableDbInstance` Submodule" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsOrderableDbInstance <a name="DataAwsRdsOrderableDbInstance" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance aws_rds_orderable_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_orderable_db_instance.DataAwsRdsOrderableDbInstance;

DataAwsRdsOrderableDbInstance.Builder.create(Construct scope, java.lang.String id)
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
    .engine(java.lang.String)
//  .availabilityZoneGroup(java.lang.String)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .instanceClass(java.lang.String)
//  .licenseModel(java.lang.String)
//  .preferredEngineVersions(java.util.List<java.lang.String>)
//  .preferredInstanceClasses(java.util.List<java.lang.String>)
//  .storageType(java.lang.String)
//  .supportsEnhancedMonitoring(java.lang.Boolean)
//  .supportsEnhancedMonitoring(IResolvable)
//  .supportsGlobalDatabases(java.lang.Boolean)
//  .supportsGlobalDatabases(IResolvable)
//  .supportsIamDatabaseAuthentication(java.lang.Boolean)
//  .supportsIamDatabaseAuthentication(IResolvable)
//  .supportsIops(java.lang.Boolean)
//  .supportsIops(IResolvable)
//  .supportsKerberosAuthentication(java.lang.Boolean)
//  .supportsKerberosAuthentication(IResolvable)
//  .supportsPerformanceInsights(java.lang.Boolean)
//  .supportsPerformanceInsights(IResolvable)
//  .supportsStorageAutoscaling(java.lang.Boolean)
//  .supportsStorageAutoscaling(IResolvable)
//  .supportsStorageEncryption(java.lang.Boolean)
//  .supportsStorageEncryption(IResolvable)
//  .vpc(java.lang.Boolean)
//  .vpc(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.availabilityZoneGroup">availabilityZoneGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredEngineVersions">preferredEngineVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsEnhancedMonitoring">supportsEnhancedMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsGlobalDatabases">supportsGlobalDatabases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIamDatabaseAuthentication">supportsIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIops">supportsIops</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsKerberosAuthentication">supportsKerberosAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsPerformanceInsights">supportsPerformanceInsights</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageAutoscaling">supportsStorageAutoscaling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageEncryption">supportsStorageEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.vpc">vpc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}.

---

##### `availabilityZoneGroup`<sup>Optional</sup> <a name="availabilityZoneGroup" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.availabilityZoneGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.instanceClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}.

---

##### `preferredEngineVersions`<sup>Optional</sup> <a name="preferredEngineVersions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredEngineVersions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}.

---

##### `preferredInstanceClasses`<sup>Optional</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.preferredInstanceClasses"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}.

---

##### `supportsEnhancedMonitoring`<sup>Optional</sup> <a name="supportsEnhancedMonitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsEnhancedMonitoring"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}.

---

##### `supportsGlobalDatabases`<sup>Optional</sup> <a name="supportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsGlobalDatabases"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}.

---

##### `supportsIamDatabaseAuthentication`<sup>Optional</sup> <a name="supportsIamDatabaseAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIamDatabaseAuthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}.

---

##### `supportsIops`<sup>Optional</sup> <a name="supportsIops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsIops"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}.

---

##### `supportsKerberosAuthentication`<sup>Optional</sup> <a name="supportsKerberosAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsKerberosAuthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}.

---

##### `supportsPerformanceInsights`<sup>Optional</sup> <a name="supportsPerformanceInsights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsPerformanceInsights"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}.

---

##### `supportsStorageAutoscaling`<sup>Optional</sup> <a name="supportsStorageAutoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageAutoscaling"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}.

---

##### `supportsStorageEncryption`<sup>Optional</sup> <a name="supportsStorageEncryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.supportsStorageEncryption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.Initializer.parameter.vpc"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetAvailabilityZoneGroup">resetAvailabilityZoneGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredEngineVersions">resetPreferredEngineVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredInstanceClasses">resetPreferredInstanceClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsEnhancedMonitoring">resetSupportsEnhancedMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsGlobalDatabases">resetSupportsGlobalDatabases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIamDatabaseAuthentication">resetSupportsIamDatabaseAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIops">resetSupportsIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsKerberosAuthentication">resetSupportsKerberosAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsPerformanceInsights">resetSupportsPerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageAutoscaling">resetSupportsStorageAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageEncryption">resetSupportsStorageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAvailabilityZoneGroup` <a name="resetAvailabilityZoneGroup" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetAvailabilityZoneGroup"></a>

```java
public void resetAvailabilityZoneGroup()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetInstanceClass"></a>

```java
public void resetInstanceClass()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetPreferredEngineVersions` <a name="resetPreferredEngineVersions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredEngineVersions"></a>

```java
public void resetPreferredEngineVersions()
```

##### `resetPreferredInstanceClasses` <a name="resetPreferredInstanceClasses" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetPreferredInstanceClasses"></a>

```java
public void resetPreferredInstanceClasses()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetSupportsEnhancedMonitoring` <a name="resetSupportsEnhancedMonitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsEnhancedMonitoring"></a>

```java
public void resetSupportsEnhancedMonitoring()
```

##### `resetSupportsGlobalDatabases` <a name="resetSupportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsGlobalDatabases"></a>

```java
public void resetSupportsGlobalDatabases()
```

##### `resetSupportsIamDatabaseAuthentication` <a name="resetSupportsIamDatabaseAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIamDatabaseAuthentication"></a>

```java
public void resetSupportsIamDatabaseAuthentication()
```

##### `resetSupportsIops` <a name="resetSupportsIops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsIops"></a>

```java
public void resetSupportsIops()
```

##### `resetSupportsKerberosAuthentication` <a name="resetSupportsKerberosAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsKerberosAuthentication"></a>

```java
public void resetSupportsKerberosAuthentication()
```

##### `resetSupportsPerformanceInsights` <a name="resetSupportsPerformanceInsights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsPerformanceInsights"></a>

```java
public void resetSupportsPerformanceInsights()
```

##### `resetSupportsStorageAutoscaling` <a name="resetSupportsStorageAutoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageAutoscaling"></a>

```java
public void resetSupportsStorageAutoscaling()
```

##### `resetSupportsStorageEncryption` <a name="resetSupportsStorageEncryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetSupportsStorageEncryption"></a>

```java
public void resetSupportsStorageEncryption()
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.resetVpc"></a>

```java
public void resetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_orderable_db_instance.DataAwsRdsOrderableDbInstance;

DataAwsRdsOrderableDbInstance.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_orderable_db_instance.DataAwsRdsOrderableDbInstance;

DataAwsRdsOrderableDbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_orderable_db_instance.DataAwsRdsOrderableDbInstance;

DataAwsRdsOrderableDbInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerDbInstance">maxIopsPerDbInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerGib">maxIopsPerGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxStorageSize">maxStorageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerDbInstance">minIopsPerDbInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerGib">minIopsPerGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minStorageSize">minStorageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.multiAzCapable">multiAzCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.outpostCapable">outpostCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.readReplicaCapable">readReplicaCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedEngineModes">supportedEngineModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedNetworkTypes">supportedNetworkTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroupInput">availabilityZoneGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClassInput">instanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersionsInput">preferredEngineVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClassesInput">preferredInstanceClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoringInput">supportsEnhancedMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabasesInput">supportsGlobalDatabasesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthenticationInput">supportsIamDatabaseAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIopsInput">supportsIopsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthenticationInput">supportsKerberosAuthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsightsInput">supportsPerformanceInsightsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscalingInput">supportsStorageAutoscalingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryptionInput">supportsStorageEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpcInput">vpcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroup">availabilityZoneGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersions">preferredEngineVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoring">supportsEnhancedMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabases">supportsGlobalDatabases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthentication">supportsIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIops">supportsIops</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthentication">supportsKerberosAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsights">supportsPerformanceInsights</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscaling">supportsStorageAutoscaling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryption">supportsStorageEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpc">vpc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxIopsPerDbInstance`<sup>Required</sup> <a name="maxIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerDbInstance"></a>

```java
public java.lang.Number getMaxIopsPerDbInstance();
```

- *Type:* java.lang.Number

---

##### `maxIopsPerGib`<sup>Required</sup> <a name="maxIopsPerGib" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxIopsPerGib"></a>

```java
public java.lang.Number getMaxIopsPerGib();
```

- *Type:* java.lang.Number

---

##### `maxStorageSize`<sup>Required</sup> <a name="maxStorageSize" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.maxStorageSize"></a>

```java
public java.lang.Number getMaxStorageSize();
```

- *Type:* java.lang.Number

---

##### `minIopsPerDbInstance`<sup>Required</sup> <a name="minIopsPerDbInstance" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerDbInstance"></a>

```java
public java.lang.Number getMinIopsPerDbInstance();
```

- *Type:* java.lang.Number

---

##### `minIopsPerGib`<sup>Required</sup> <a name="minIopsPerGib" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minIopsPerGib"></a>

```java
public java.lang.Number getMinIopsPerGib();
```

- *Type:* java.lang.Number

---

##### `minStorageSize`<sup>Required</sup> <a name="minStorageSize" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.minStorageSize"></a>

```java
public java.lang.Number getMinStorageSize();
```

- *Type:* java.lang.Number

---

##### `multiAzCapable`<sup>Required</sup> <a name="multiAzCapable" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.multiAzCapable"></a>

```java
public IResolvable getMultiAzCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `outpostCapable`<sup>Required</sup> <a name="outpostCapable" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.outpostCapable"></a>

```java
public IResolvable getOutpostCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `readReplicaCapable`<sup>Required</sup> <a name="readReplicaCapable" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.readReplicaCapable"></a>

```java
public IResolvable getReadReplicaCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `supportedEngineModes`<sup>Required</sup> <a name="supportedEngineModes" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedEngineModes"></a>

```java
public java.util.List<java.lang.String> getSupportedEngineModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedNetworkTypes`<sup>Required</sup> <a name="supportedNetworkTypes" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportedNetworkTypes"></a>

```java
public java.util.List<java.lang.String> getSupportedNetworkTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityZoneGroupInput`<sup>Optional</sup> <a name="availabilityZoneGroupInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroupInput"></a>

```java
public java.lang.String getAvailabilityZoneGroupInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClassInput"></a>

```java
public java.lang.String getInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `preferredEngineVersionsInput`<sup>Optional</sup> <a name="preferredEngineVersionsInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersionsInput"></a>

```java
public java.util.List<java.lang.String> getPreferredEngineVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredInstanceClassesInput`<sup>Optional</sup> <a name="preferredInstanceClassesInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClassesInput"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `supportsEnhancedMonitoringInput`<sup>Optional</sup> <a name="supportsEnhancedMonitoringInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoringInput"></a>

```java
public java.lang.Object getSupportsEnhancedMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsGlobalDatabasesInput`<sup>Optional</sup> <a name="supportsGlobalDatabasesInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabasesInput"></a>

```java
public java.lang.Object getSupportsGlobalDatabasesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsIamDatabaseAuthenticationInput`<sup>Optional</sup> <a name="supportsIamDatabaseAuthenticationInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthenticationInput"></a>

```java
public java.lang.Object getSupportsIamDatabaseAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsIopsInput`<sup>Optional</sup> <a name="supportsIopsInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIopsInput"></a>

```java
public java.lang.Object getSupportsIopsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsKerberosAuthenticationInput`<sup>Optional</sup> <a name="supportsKerberosAuthenticationInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthenticationInput"></a>

```java
public java.lang.Object getSupportsKerberosAuthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsPerformanceInsightsInput`<sup>Optional</sup> <a name="supportsPerformanceInsightsInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsightsInput"></a>

```java
public java.lang.Object getSupportsPerformanceInsightsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsStorageAutoscalingInput`<sup>Optional</sup> <a name="supportsStorageAutoscalingInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscalingInput"></a>

```java
public java.lang.Object getSupportsStorageAutoscalingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsStorageEncryptionInput`<sup>Optional</sup> <a name="supportsStorageEncryptionInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryptionInput"></a>

```java
public java.lang.Object getSupportsStorageEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpcInput"></a>

```java
public java.lang.Object getVpcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneGroup`<sup>Required</sup> <a name="availabilityZoneGroup" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.availabilityZoneGroup"></a>

```java
public java.lang.String getAvailabilityZoneGroup();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.instanceClass"></a>

```java
public java.lang.String getInstanceClass();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `preferredEngineVersions`<sup>Required</sup> <a name="preferredEngineVersions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredEngineVersions"></a>

```java
public java.util.List<java.lang.String> getPreferredEngineVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preferredInstanceClasses`<sup>Required</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.preferredInstanceClasses"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `supportsEnhancedMonitoring`<sup>Required</sup> <a name="supportsEnhancedMonitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsEnhancedMonitoring"></a>

```java
public java.lang.Object getSupportsEnhancedMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsGlobalDatabases`<sup>Required</sup> <a name="supportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsGlobalDatabases"></a>

```java
public java.lang.Object getSupportsGlobalDatabases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsIamDatabaseAuthentication`<sup>Required</sup> <a name="supportsIamDatabaseAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIamDatabaseAuthentication"></a>

```java
public java.lang.Object getSupportsIamDatabaseAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsIops`<sup>Required</sup> <a name="supportsIops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsIops"></a>

```java
public java.lang.Object getSupportsIops();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsKerberosAuthentication`<sup>Required</sup> <a name="supportsKerberosAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsKerberosAuthentication"></a>

```java
public java.lang.Object getSupportsKerberosAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsPerformanceInsights`<sup>Required</sup> <a name="supportsPerformanceInsights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsPerformanceInsights"></a>

```java
public java.lang.Object getSupportsPerformanceInsights();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsStorageAutoscaling`<sup>Required</sup> <a name="supportsStorageAutoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageAutoscaling"></a>

```java
public java.lang.Object getSupportsStorageAutoscaling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `supportsStorageEncryption`<sup>Required</sup> <a name="supportsStorageEncryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.supportsStorageEncryption"></a>

```java
public java.lang.Object getSupportsStorageEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.vpc"></a>

```java
public java.lang.Object getVpc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsOrderableDbInstanceConfig <a name="DataAwsRdsOrderableDbInstanceConfig" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_orderable_db_instance.DataAwsRdsOrderableDbInstanceConfig;

DataAwsRdsOrderableDbInstanceConfig.builder()
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
    .engine(java.lang.String)
//  .availabilityZoneGroup(java.lang.String)
//  .engineVersion(java.lang.String)
//  .id(java.lang.String)
//  .instanceClass(java.lang.String)
//  .licenseModel(java.lang.String)
//  .preferredEngineVersions(java.util.List<java.lang.String>)
//  .preferredInstanceClasses(java.util.List<java.lang.String>)
//  .storageType(java.lang.String)
//  .supportsEnhancedMonitoring(java.lang.Boolean)
//  .supportsEnhancedMonitoring(IResolvable)
//  .supportsGlobalDatabases(java.lang.Boolean)
//  .supportsGlobalDatabases(IResolvable)
//  .supportsIamDatabaseAuthentication(java.lang.Boolean)
//  .supportsIamDatabaseAuthentication(IResolvable)
//  .supportsIops(java.lang.Boolean)
//  .supportsIops(IResolvable)
//  .supportsKerberosAuthentication(java.lang.Boolean)
//  .supportsKerberosAuthentication(IResolvable)
//  .supportsPerformanceInsights(java.lang.Boolean)
//  .supportsPerformanceInsights(IResolvable)
//  .supportsStorageAutoscaling(java.lang.Boolean)
//  .supportsStorageAutoscaling(IResolvable)
//  .supportsStorageEncryption(java.lang.Boolean)
//  .supportsStorageEncryption(IResolvable)
//  .vpc(java.lang.Boolean)
//  .vpc(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.availabilityZoneGroup">availabilityZoneGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.instanceClass">instanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredEngineVersions">preferredEngineVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredInstanceClasses">preferredInstanceClasses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsEnhancedMonitoring">supportsEnhancedMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsGlobalDatabases">supportsGlobalDatabases</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIamDatabaseAuthentication">supportsIamDatabaseAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIops">supportsIops</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsKerberosAuthentication">supportsKerberosAuthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsPerformanceInsights">supportsPerformanceInsights</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageAutoscaling">supportsStorageAutoscaling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageEncryption">supportsStorageEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.vpc">vpc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine DataAwsRdsOrderableDbInstance#engine}.

---

##### `availabilityZoneGroup`<sup>Optional</sup> <a name="availabilityZoneGroup" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.availabilityZoneGroup"></a>

```java
public java.lang.String getAvailabilityZoneGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#engine_version DataAwsRdsOrderableDbInstance#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#id DataAwsRdsOrderableDbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.instanceClass"></a>

```java
public java.lang.String getInstanceClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#instance_class DataAwsRdsOrderableDbInstance#instance_class}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#license_model DataAwsRdsOrderableDbInstance#license_model}.

---

##### `preferredEngineVersions`<sup>Optional</sup> <a name="preferredEngineVersions" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredEngineVersions"></a>

```java
public java.util.List<java.lang.String> getPreferredEngineVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}.

---

##### `preferredInstanceClasses`<sup>Optional</sup> <a name="preferredInstanceClasses" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.preferredInstanceClasses"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceClasses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#storage_type DataAwsRdsOrderableDbInstance#storage_type}.

---

##### `supportsEnhancedMonitoring`<sup>Optional</sup> <a name="supportsEnhancedMonitoring" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsEnhancedMonitoring"></a>

```java
public java.lang.Object getSupportsEnhancedMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}.

---

##### `supportsGlobalDatabases`<sup>Optional</sup> <a name="supportsGlobalDatabases" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsGlobalDatabases"></a>

```java
public java.lang.Object getSupportsGlobalDatabases();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}.

---

##### `supportsIamDatabaseAuthentication`<sup>Optional</sup> <a name="supportsIamDatabaseAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIamDatabaseAuthentication"></a>

```java
public java.lang.Object getSupportsIamDatabaseAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}.

---

##### `supportsIops`<sup>Optional</sup> <a name="supportsIops" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsIops"></a>

```java
public java.lang.Object getSupportsIops();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}.

---

##### `supportsKerberosAuthentication`<sup>Optional</sup> <a name="supportsKerberosAuthentication" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsKerberosAuthentication"></a>

```java
public java.lang.Object getSupportsKerberosAuthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}.

---

##### `supportsPerformanceInsights`<sup>Optional</sup> <a name="supportsPerformanceInsights" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsPerformanceInsights"></a>

```java
public java.lang.Object getSupportsPerformanceInsights();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}.

---

##### `supportsStorageAutoscaling`<sup>Optional</sup> <a name="supportsStorageAutoscaling" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageAutoscaling"></a>

```java
public java.lang.Object getSupportsStorageAutoscaling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}.

---

##### `supportsStorageEncryption`<sup>Optional</sup> <a name="supportsStorageEncryption" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.supportsStorageEncryption"></a>

```java
public java.lang.Object getSupportsStorageEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-aws.dataAwsRdsOrderableDbInstance.DataAwsRdsOrderableDbInstanceConfig.property.vpc"></a>

```java
public java.lang.Object getVpc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance#vpc DataAwsRdsOrderableDbInstance#vpc}.

---



