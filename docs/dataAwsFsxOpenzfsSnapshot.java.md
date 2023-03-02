# `dataAwsFsxOpenzfsSnapshot` Submodule <a name="`dataAwsFsxOpenzfsSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOpenzfsSnapshot <a name="DataAwsFsxOpenzfsSnapshot" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot aws_fsx_openzfs_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshot;

DataAwsFsxOpenzfsSnapshot.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsFsxOpenzfsSnapshotFilter>)
//  .id(java.lang.String)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .snapshotIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.snapshotIds">snapshotIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#filter DataAwsFsxOpenzfsSnapshot#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.mostRecent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `snapshotIds`<sup>Optional</sup> <a name="snapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.snapshotIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds">resetSnapshotIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsFsxOpenzfsSnapshotFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetMostRecent"></a>

```java
public void resetMostRecent()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetName"></a>

```java
public void resetName()
```

##### `resetSnapshotIds` <a name="resetSnapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetSnapshotIds"></a>

```java
public void resetSnapshotIds()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshot;

DataAwsFsxOpenzfsSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshot;

DataAwsFsxOpenzfsSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshot;

DataAwsFsxOpenzfsSnapshot.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput">mostRecentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput">snapshotIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds">snapshotIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filter"></a>

```java
public DataAwsFsxOpenzfsSnapshotFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList">DataAwsFsxOpenzfsSnapshotFilterList</a>

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecentInput"></a>

```java
public java.lang.Object getMostRecentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdsInput`<sup>Optional</sup> <a name="snapshotIdsInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIdsInput"></a>

```java
public java.util.List<java.lang.String> getSnapshotIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `snapshotIds`<sup>Required</sup> <a name="snapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.snapshotIds"></a>

```java
public java.util.List<java.lang.String> getSnapshotIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOpenzfsSnapshotConfig <a name="DataAwsFsxOpenzfsSnapshotConfig" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshotConfig;

DataAwsFsxOpenzfsSnapshotConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsFsxOpenzfsSnapshotFilter>)
//  .id(java.lang.String)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .name(java.lang.String)
//  .snapshotIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds">snapshotIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#filter DataAwsFsxOpenzfsSnapshot#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#id DataAwsFsxOpenzfsSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#most_recent DataAwsFsxOpenzfsSnapshot#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `snapshotIds`<sup>Optional</sup> <a name="snapshotIds" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.snapshotIds"></a>

```java
public java.util.List<java.lang.String> getSnapshotIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#snapshot_ids DataAwsFsxOpenzfsSnapshot#snapshot_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#tags DataAwsFsxOpenzfsSnapshot#tags}.

---

### DataAwsFsxOpenzfsSnapshotFilter <a name="DataAwsFsxOpenzfsSnapshotFilter" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshotFilter;

DataAwsFsxOpenzfsSnapshotFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#name DataAwsFsxOpenzfsSnapshot#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/fsx_openzfs_snapshot#values DataAwsFsxOpenzfsSnapshot#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOpenzfsSnapshotFilterList <a name="DataAwsFsxOpenzfsSnapshotFilterList" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshotFilterList;

new DataAwsFsxOpenzfsSnapshotFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get"></a>

```java
public DataAwsFsxOpenzfsSnapshotFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a>>

---


### DataAwsFsxOpenzfsSnapshotFilterOutputReference <a name="DataAwsFsxOpenzfsSnapshotFilterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_openzfs_snapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference;

new DataAwsFsxOpenzfsSnapshotFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOpenzfsSnapshot.DataAwsFsxOpenzfsSnapshotFilter">DataAwsFsxOpenzfsSnapshotFilter</a> OR com.hashicorp.cdktf.IResolvable

---



