# `datasyncLocationEfs` Submodule <a name="`datasyncLocationEfs` Submodule" id="@cdktf/provider-aws.datasyncLocationEfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationEfs <a name="DatasyncLocationEfs" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs aws_datasync_location_efs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_efs.DatasyncLocationEfs;

DatasyncLocationEfs.Builder.create(Construct scope, java.lang.String id)
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
    .ec2Config(DatasyncLocationEfsEc2Config)
    .efsFileSystemArn(java.lang.String)
//  .accessPointArn(java.lang.String)
//  .fileSystemAccessRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .inTransitEncryption(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.ec2Config">ec2Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | ec2_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.efsFileSystemArn">efsFileSystemArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.fileSystemAccessRoleArn">fileSystemAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#id DatasyncLocationEfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.inTransitEncryption">inTransitEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags DatasyncLocationEfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ec2Config`<sup>Required</sup> <a name="ec2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.ec2Config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

ec2_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#ec2_config DatasyncLocationEfs#ec2_config}

---

##### `efsFileSystemArn`<sup>Required</sup> <a name="efsFileSystemArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.efsFileSystemArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}.

---

##### `accessPointArn`<sup>Optional</sup> <a name="accessPointArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.accessPointArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}.

---

##### `fileSystemAccessRoleArn`<sup>Optional</sup> <a name="fileSystemAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.fileSystemAccessRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#id DatasyncLocationEfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inTransitEncryption`<sup>Optional</sup> <a name="inTransitEncryption" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.inTransitEncryption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags DatasyncLocationEfs#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config">putEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetAccessPointArn">resetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetFileSystemAccessRoleArn">resetFileSystemAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetInTransitEncryption">resetInTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEc2Config` <a name="putEc2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config"></a>

```java
public void putEc2Config(DatasyncLocationEfsEc2Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.putEc2Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `resetAccessPointArn` <a name="resetAccessPointArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetAccessPointArn"></a>

```java
public void resetAccessPointArn()
```

##### `resetFileSystemAccessRoleArn` <a name="resetFileSystemAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetFileSystemAccessRoleArn"></a>

```java
public void resetFileSystemAccessRoleArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetId"></a>

```java
public void resetId()
```

##### `resetInTransitEncryption` <a name="resetInTransitEncryption" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetInTransitEncryption"></a>

```java
public void resetInTransitEncryption()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_efs.DatasyncLocationEfs;

DatasyncLocationEfs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_efs.DatasyncLocationEfs;

DatasyncLocationEfs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_efs.DatasyncLocationEfs;

DatasyncLocationEfs.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config">ec2Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArnInput">accessPointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput">ec2ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput">efsFileSystemArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArnInput">fileSystemAccessRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryptionInput">inTransitEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn">efsFileSystemArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArn">fileSystemAccessRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryption">inTransitEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `ec2Config`<sup>Required</sup> <a name="ec2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2Config"></a>

```java
public DatasyncLocationEfsEc2ConfigOutputReference getEc2Config();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference">DatasyncLocationEfsEc2ConfigOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `accessPointArnInput`<sup>Optional</sup> <a name="accessPointArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArnInput"></a>

```java
public java.lang.String getAccessPointArnInput();
```

- *Type:* java.lang.String

---

##### `ec2ConfigInput`<sup>Optional</sup> <a name="ec2ConfigInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.ec2ConfigInput"></a>

```java
public DatasyncLocationEfsEc2Config getEc2ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---

##### `efsFileSystemArnInput`<sup>Optional</sup> <a name="efsFileSystemArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArnInput"></a>

```java
public java.lang.String getEfsFileSystemArnInput();
```

- *Type:* java.lang.String

---

##### `fileSystemAccessRoleArnInput`<sup>Optional</sup> <a name="fileSystemAccessRoleArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArnInput"></a>

```java
public java.lang.String getFileSystemAccessRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inTransitEncryptionInput`<sup>Optional</sup> <a name="inTransitEncryptionInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryptionInput"></a>

```java
public java.lang.String getInTransitEncryptionInput();
```

- *Type:* java.lang.String

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

---

##### `efsFileSystemArn`<sup>Required</sup> <a name="efsFileSystemArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.efsFileSystemArn"></a>

```java
public java.lang.String getEfsFileSystemArn();
```

- *Type:* java.lang.String

---

##### `fileSystemAccessRoleArn`<sup>Required</sup> <a name="fileSystemAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.fileSystemAccessRoleArn"></a>

```java
public java.lang.String getFileSystemAccessRoleArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inTransitEncryption`<sup>Required</sup> <a name="inTransitEncryption" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.inTransitEncryption"></a>

```java
public java.lang.String getInTransitEncryption();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationEfsConfig <a name="DatasyncLocationEfsConfig" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_efs.DatasyncLocationEfsConfig;

DatasyncLocationEfsConfig.builder()
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
    .ec2Config(DatasyncLocationEfsEc2Config)
    .efsFileSystemArn(java.lang.String)
//  .accessPointArn(java.lang.String)
//  .fileSystemAccessRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .inTransitEncryption(java.lang.String)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config">ec2Config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | ec2_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn">efsFileSystemArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.fileSystemAccessRoleArn">fileSystemAccessRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#id DatasyncLocationEfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.inTransitEncryption">inTransitEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags DatasyncLocationEfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ec2Config`<sup>Required</sup> <a name="ec2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.ec2Config"></a>

```java
public DatasyncLocationEfsEc2Config getEc2Config();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

ec2_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#ec2_config DatasyncLocationEfs#ec2_config}

---

##### `efsFileSystemArn`<sup>Required</sup> <a name="efsFileSystemArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.efsFileSystemArn"></a>

```java
public java.lang.String getEfsFileSystemArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}.

---

##### `accessPointArn`<sup>Optional</sup> <a name="accessPointArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}.

---

##### `fileSystemAccessRoleArn`<sup>Optional</sup> <a name="fileSystemAccessRoleArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.fileSystemAccessRoleArn"></a>

```java
public java.lang.String getFileSystemAccessRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#id DatasyncLocationEfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inTransitEncryption`<sup>Optional</sup> <a name="inTransitEncryption" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.inTransitEncryption"></a>

```java
public java.lang.String getInTransitEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags DatasyncLocationEfs#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}.

---

### DatasyncLocationEfsEc2Config <a name="DatasyncLocationEfsEc2Config" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_efs.DatasyncLocationEfsEc2Config;

DatasyncLocationEfsEc2Config.builder()
    .securityGroupArns(java.util.List<java.lang.String>)
    .subnetArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn">subnetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}. |

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}.

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config.property.subnetArn"></a>

```java
public java.lang.String getSubnetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationEfsEc2ConfigOutputReference <a name="DatasyncLocationEfsEc2ConfigOutputReference" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_efs.DatasyncLocationEfsEc2ConfigOutputReference;

new DatasyncLocationEfsEc2ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput">subnetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns">securityGroupArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn">subnetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArnsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetArnInput`<sup>Optional</sup> <a name="subnetArnInput" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArnInput"></a>

```java
public java.lang.String getSubnetArnInput();
```

- *Type:* java.lang.String

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.securityGroupArns"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetArn`<sup>Required</sup> <a name="subnetArn" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.subnetArn"></a>

```java
public java.lang.String getSubnetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2ConfigOutputReference.property.internalValue"></a>

```java
public DatasyncLocationEfsEc2Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationEfs.DatasyncLocationEfsEc2Config">DatasyncLocationEfsEc2Config</a>

---



