# `datasyncLocationFsxOpenzfsFileSystem` Submodule <a name="`datasyncLocationFsxOpenzfsFileSystem` Submodule" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxOpenzfsFileSystem <a name="DatasyncLocationFsxOpenzfsFileSystem" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system aws_datasync_location_fsx_openzfs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystem;

DatasyncLocationFsxOpenzfsFileSystem.Builder.create(Construct scope, java.lang.String id)
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
    .fsxFilesystemArn(java.lang.String)
    .protocol(DatasyncLocationFsxOpenzfsFileSystemProtocol)
    .securityGroupArns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#fsx_filesystem_arn DatasyncLocationFsxOpenzfsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.protocol">protocol</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a></code> | protocol block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#security_group_arns DatasyncLocationFsxOpenzfsFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#id DatasyncLocationFsxOpenzfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#subdirectory DatasyncLocationFsxOpenzfsFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags DatasyncLocationFsxOpenzfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags_all DatasyncLocationFsxOpenzfsFileSystem#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.fsxFilesystemArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#fsx_filesystem_arn DatasyncLocationFsxOpenzfsFileSystem#fsx_filesystem_arn}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.protocol"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a>

protocol block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#protocol DatasyncLocationFsxOpenzfsFileSystem#protocol}

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.securityGroupArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#security_group_arns DatasyncLocationFsxOpenzfsFileSystem#security_group_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#id DatasyncLocationFsxOpenzfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#subdirectory DatasyncLocationFsxOpenzfsFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags DatasyncLocationFsxOpenzfsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags_all DatasyncLocationFsxOpenzfsFileSystem#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.putProtocol">putProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putProtocol` <a name="putProtocol" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.putProtocol"></a>

```java
public void putProtocol(DatasyncLocationFsxOpenzfsFileSystemProtocol value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.putProtocol.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetId"></a>

```java
public void resetId()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystem;

DatasyncLocationFsxOpenzfsFileSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystem;

DatasyncLocationFsxOpenzfsFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystem;

DatasyncLocationFsxOpenzfsFileSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.protocol">protocol</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference">DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.fsxFilesystemArnInput">fsxFilesystemArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.protocolInput">protocolInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.protocol"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference getProtocol();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference">DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `fsxFilesystemArnInput`<sup>Optional</sup> <a name="fsxFilesystemArnInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.fsxFilesystemArnInput"></a>

```java
public java.lang.String getFsxFilesystemArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.protocolInput"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocol getProtocolInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a>

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.securityGroupArnsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.fsxFilesystemArn"></a>

```java
public java.lang.String getFsxFilesystemArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxOpenzfsFileSystemConfig <a name="DatasyncLocationFsxOpenzfsFileSystemConfig" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystemConfig;

DatasyncLocationFsxOpenzfsFileSystemConfig.builder()
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
    .fsxFilesystemArn(java.lang.String)
    .protocol(DatasyncLocationFsxOpenzfsFileSystemProtocol)
    .securityGroupArns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#fsx_filesystem_arn DatasyncLocationFsxOpenzfsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.protocol">protocol</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a></code> | protocol block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#security_group_arns DatasyncLocationFsxOpenzfsFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#id DatasyncLocationFsxOpenzfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#subdirectory DatasyncLocationFsxOpenzfsFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags DatasyncLocationFsxOpenzfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags_all DatasyncLocationFsxOpenzfsFileSystem#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.fsxFilesystemArn"></a>

```java
public java.lang.String getFsxFilesystemArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#fsx_filesystem_arn DatasyncLocationFsxOpenzfsFileSystem#fsx_filesystem_arn}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.protocol"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocol getProtocol();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a>

protocol block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#protocol DatasyncLocationFsxOpenzfsFileSystem#protocol}

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#security_group_arns DatasyncLocationFsxOpenzfsFileSystem#security_group_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#id DatasyncLocationFsxOpenzfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#subdirectory DatasyncLocationFsxOpenzfsFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags DatasyncLocationFsxOpenzfsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#tags_all DatasyncLocationFsxOpenzfsFileSystem#tags_all}.

---

### DatasyncLocationFsxOpenzfsFileSystemProtocol <a name="DatasyncLocationFsxOpenzfsFileSystemProtocol" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystemProtocol;

DatasyncLocationFsxOpenzfsFileSystemProtocol.builder()
    .nfs(DatasyncLocationFsxOpenzfsFileSystemProtocolNfs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs">DatasyncLocationFsxOpenzfsFileSystemProtocolNfs</a></code> | nfs block. |

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol.property.nfs"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfs getNfs();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs">DatasyncLocationFsxOpenzfsFileSystemProtocolNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#nfs DatasyncLocationFsxOpenzfsFileSystem#nfs}

---

### DatasyncLocationFsxOpenzfsFileSystemProtocolNfs <a name="DatasyncLocationFsxOpenzfsFileSystemProtocolNfs" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs;

DatasyncLocationFsxOpenzfsFileSystemProtocolNfs.builder()
    .mountOptions(DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions</a></code> | mount_options block. |

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs.property.mountOptions"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#mount_options DatasyncLocationFsxOpenzfsFileSystem#mount_options}

---

### DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions <a name="DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions;

DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions.builder()
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#version DatasyncLocationFsxOpenzfsFileSystem#version}. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_openzfs_file_system#version DatasyncLocationFsxOpenzfsFileSystem#version}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference <a name="DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference;

new DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions</a>

---


### DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference <a name="DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference;

new DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.putMountOptions">putMountOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.putMountOptions"></a>

```java
public void putMountOptions(DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs">DatasyncLocationFsxOpenzfsFileSystemProtocolNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.mountOptions"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference getMountOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.mountOptionsInput"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions getMountOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference.property.internalValue"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs">DatasyncLocationFsxOpenzfsFileSystemProtocolNfs</a>

---


### DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference <a name="DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_openzfs_file_system.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference;

new DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.putNfs">putNfs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfs` <a name="putNfs" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.putNfs"></a>

```java
public void putNfs(DatasyncLocationFsxOpenzfsFileSystemProtocolNfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs">DatasyncLocationFsxOpenzfsFileSystemProtocolNfs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs">DatasyncLocationFsxOpenzfsFileSystemProtocolNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.nfs"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference getNfs();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference">DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference</a>

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.nfsInput"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocolNfs getNfsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolNfs">DatasyncLocationFsxOpenzfsFileSystemProtocolNfs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference.property.internalValue"></a>

```java
public DatasyncLocationFsxOpenzfsFileSystemProtocol getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationFsxOpenzfsFileSystem.DatasyncLocationFsxOpenzfsFileSystemProtocol">DatasyncLocationFsxOpenzfsFileSystemProtocol</a>

---



