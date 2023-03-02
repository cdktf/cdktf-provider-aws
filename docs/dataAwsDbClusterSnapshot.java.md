# `dataAwsDbClusterSnapshot` Submodule <a name="`dataAwsDbClusterSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDbClusterSnapshot <a name="DataAwsDbClusterSnapshot" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot aws_db_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_cluster_snapshot.DataAwsDbClusterSnapshot;

DataAwsDbClusterSnapshot.Builder.create(Construct scope, java.lang.String id)
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
//  .dbClusterIdentifier(java.lang.String)
//  .dbClusterSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .includePublic(java.lang.Boolean)
//  .includePublic(IResolvable)
//  .includeShared(java.lang.Boolean)
//  .includeShared(IResolvable)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .snapshotType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#id DataAwsDbClusterSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.includePublic">includePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_public DataAwsDbClusterSnapshot#include_public}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.includeShared">includeShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_shared DataAwsDbClusterSnapshot#include_shared}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#most_recent DataAwsDbClusterSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#tags DataAwsDbClusterSnapshot#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}.

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.dbClusterSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#id DataAwsDbClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includePublic`<sup>Optional</sup> <a name="includePublic" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.includePublic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_public DataAwsDbClusterSnapshot#include_public}.

---

##### `includeShared`<sup>Optional</sup> <a name="includeShared" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.includeShared"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_shared DataAwsDbClusterSnapshot#include_shared}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.mostRecent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#most_recent DataAwsDbClusterSnapshot#most_recent}.

---

##### `snapshotType`<sup>Optional</sup> <a name="snapshotType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.snapshotType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#tags DataAwsDbClusterSnapshot#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterIdentifier">resetDbClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterSnapshotIdentifier">resetDbClusterSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludePublic">resetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludeShared">resetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetSnapshotType">resetSnapshotType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDbClusterIdentifier` <a name="resetDbClusterIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterIdentifier"></a>

```java
public void resetDbClusterIdentifier()
```

##### `resetDbClusterSnapshotIdentifier` <a name="resetDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetDbClusterSnapshotIdentifier"></a>

```java
public void resetDbClusterSnapshotIdentifier()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetIncludePublic` <a name="resetIncludePublic" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludePublic"></a>

```java
public void resetIncludePublic()
```

##### `resetIncludeShared` <a name="resetIncludeShared" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetIncludeShared"></a>

```java
public void resetIncludeShared()
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetMostRecent"></a>

```java
public void resetMostRecent()
```

##### `resetSnapshotType` <a name="resetSnapshotType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetSnapshotType"></a>

```java
public void resetSnapshotType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_cluster_snapshot.DataAwsDbClusterSnapshot;

DataAwsDbClusterSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_cluster_snapshot.DataAwsDbClusterSnapshot;

DataAwsDbClusterSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_cluster_snapshot.DataAwsDbClusterSnapshot;

DataAwsDbClusterSnapshot.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotArn">dbClusterSnapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotCreateTime">snapshotCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.sourceDbClusterSnapshotArn">sourceDbClusterSnapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.storageEncrypted">storageEncrypted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifierInput">dbClusterSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublicInput">includePublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeSharedInput">includeSharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecentInput">mostRecentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotTypeInput">snapshotTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublic">includePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeShared">includeShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="dbClusterSnapshotArn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotArn"></a>

```java
public java.lang.String getDbClusterSnapshotArn();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="snapshotCreateTime" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotCreateTime"></a>

```java
public java.lang.String getSnapshotCreateTime();
```

- *Type:* java.lang.String

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="sourceDbClusterSnapshotArn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

```java
public java.lang.String getSourceDbClusterSnapshotArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.storageEncrypted"></a>

```java
public IResolvable getStorageEncrypted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifierInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifierInput"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includePublicInput`<sup>Optional</sup> <a name="includePublicInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublicInput"></a>

```java
public java.lang.Object getIncludePublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSharedInput`<sup>Optional</sup> <a name="includeSharedInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeSharedInput"></a>

```java
public java.lang.Object getIncludeSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecentInput"></a>

```java
public java.lang.Object getMostRecentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotTypeInput`<sup>Optional</sup> <a name="snapshotTypeInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotTypeInput"></a>

```java
public java.lang.String getSnapshotTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includePublic`<sup>Required</sup> <a name="includePublic" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includePublic"></a>

```java
public java.lang.Object getIncludePublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeShared`<sup>Required</sup> <a name="includeShared" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.includeShared"></a>

```java
public java.lang.Object getIncludeShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.snapshotType"></a>

```java
public java.lang.String getSnapshotType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDbClusterSnapshotConfig <a name="DataAwsDbClusterSnapshotConfig" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_cluster_snapshot.DataAwsDbClusterSnapshotConfig;

DataAwsDbClusterSnapshotConfig.builder()
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
//  .dbClusterIdentifier(java.lang.String)
//  .dbClusterSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .includePublic(java.lang.Boolean)
//  .includePublic(IResolvable)
//  .includeShared(java.lang.Boolean)
//  .includeShared(IResolvable)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .snapshotType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#id DataAwsDbClusterSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includePublic">includePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_public DataAwsDbClusterSnapshot#include_public}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includeShared">includeShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_shared DataAwsDbClusterSnapshot#include_shared}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#most_recent DataAwsDbClusterSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#tags DataAwsDbClusterSnapshot#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Optional</sup> <a name="dbClusterIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}.

---

##### `dbClusterSnapshotIdentifier`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.dbClusterSnapshotIdentifier"></a>

```java
public java.lang.String getDbClusterSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#id DataAwsDbClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includePublic`<sup>Optional</sup> <a name="includePublic" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includePublic"></a>

```java
public java.lang.Object getIncludePublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_public DataAwsDbClusterSnapshot#include_public}.

---

##### `includeShared`<sup>Optional</sup> <a name="includeShared" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.includeShared"></a>

```java
public java.lang.Object getIncludeShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#include_shared DataAwsDbClusterSnapshot#include_shared}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#most_recent DataAwsDbClusterSnapshot#most_recent}.

---

##### `snapshotType`<sup>Optional</sup> <a name="snapshotType" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.snapshotType"></a>

```java
public java.lang.String getSnapshotType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDbClusterSnapshot.DataAwsDbClusterSnapshotConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_cluster_snapshot#tags DataAwsDbClusterSnapshot#tags}.

---



