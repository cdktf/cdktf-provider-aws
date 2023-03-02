# `datasyncLocationFsxWindowsFileSystem` Submodule <a name="`datasyncLocationFsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxWindowsFileSystem <a name="DatasyncLocationFsxWindowsFileSystem" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system aws_datasync_location_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_windows_file_system.DatasyncLocationFsxWindowsFileSystem;

DatasyncLocationFsxWindowsFileSystem.Builder.create(Construct scope, java.lang.String id)
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
    .password(java.lang.String)
    .securityGroupArns(java.util.List<java.lang.String>)
    .user(java.lang.String)
//  .domain(java.lang.String)
//  .id(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.fsxFilesystemArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}.

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.securityGroupArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.user"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetId"></a>

```java
public void resetId()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_windows_file_system.DatasyncLocationFsxWindowsFileSystem;

DatasyncLocationFsxWindowsFileSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_windows_file_system.DatasyncLocationFsxWindowsFileSystem;

DatasyncLocationFsxWindowsFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_windows_file_system.DatasyncLocationFsxWindowsFileSystem;

DatasyncLocationFsxWindowsFileSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput">fsxFilesystemArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `fsxFilesystemArnInput`<sup>Optional</sup> <a name="fsxFilesystemArnInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArnInput"></a>

```java
public java.lang.String getFsxFilesystemArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArnsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.fsxFilesystemArn"></a>

```java
public java.lang.String getFsxFilesystemArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxWindowsFileSystemConfig <a name="DatasyncLocationFsxWindowsFileSystemConfig" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_fsx_windows_file_system.DatasyncLocationFsxWindowsFileSystemConfig;

DatasyncLocationFsxWindowsFileSystemConfig.builder()
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
    .password(java.lang.String)
    .securityGroupArns(java.util.List<java.lang.String>)
    .user(java.lang.String)
//  .domain(java.lang.String)
//  .id(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user">user</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.fsxFilesystemArn"></a>

```java
public java.lang.String getFsxFilesystemArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#password DatasyncLocationFsxWindowsFileSystem#password}.

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#user DatasyncLocationFsxWindowsFileSystem#user}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#domain DatasyncLocationFsxWindowsFileSystem#domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#id DatasyncLocationFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags DatasyncLocationFsxWindowsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationFsxWindowsFileSystem.DatasyncLocationFsxWindowsFileSystemConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}.

---



