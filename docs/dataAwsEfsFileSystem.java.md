# `dataAwsEfsFileSystem` Submodule <a name="`dataAwsEfsFileSystem` Submodule" id="@cdktf/provider-aws.dataAwsEfsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEfsFileSystem <a name="DataAwsEfsFileSystem" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system aws_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystem;

DataAwsEfsFileSystem.Builder.create(Construct scope, java.lang.String id)
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
//  .creationToken(java.lang.String)
//  .fileSystemId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.creationToken">creationToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationToken`<sup>Optional</sup> <a name="creationToken" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.creationToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}.

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.fileSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetCreationToken">resetCreationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCreationToken` <a name="resetCreationToken" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetCreationToken"></a>

```java
public void resetCreationToken()
```

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetFileSystemId"></a>

```java
public void resetFileSystemId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystem;

DataAwsEfsFileSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystem;

DataAwsEfsFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystem;

DataAwsEfsFileSystem.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneName">availabilityZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.encrypted">encrypted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList">DataAwsEfsFileSystemLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.performanceMode">performanceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provisionedThroughputInMibps">provisionedThroughputInMibps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.throughputMode">throughputMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationTokenInput">creationTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationToken">creationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneName"></a>

```java
public java.lang.String getAvailabilityZoneName();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.encrypted"></a>

```java
public IResolvable getEncrypted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `lifecyclePolicy`<sup>Required</sup> <a name="lifecyclePolicy" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecyclePolicy"></a>

```java
public DataAwsEfsFileSystemLifecyclePolicyList getLifecyclePolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList">DataAwsEfsFileSystemLifecyclePolicyList</a>

---

##### `performanceMode`<sup>Required</sup> <a name="performanceMode" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.performanceMode"></a>

```java
public java.lang.String getPerformanceMode();
```

- *Type:* java.lang.String

---

##### `provisionedThroughputInMibps`<sup>Required</sup> <a name="provisionedThroughputInMibps" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provisionedThroughputInMibps"></a>

```java
public java.lang.Number getProvisionedThroughputInMibps();
```

- *Type:* java.lang.Number

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.sizeInBytes"></a>

```java
public java.lang.Number getSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `throughputMode`<sup>Required</sup> <a name="throughputMode" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.throughputMode"></a>

```java
public java.lang.String getThroughputMode();
```

- *Type:* java.lang.String

---

##### `creationTokenInput`<sup>Optional</sup> <a name="creationTokenInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationTokenInput"></a>

```java
public java.lang.String getCreationTokenInput();
```

- *Type:* java.lang.String

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `creationToken`<sup>Required</sup> <a name="creationToken" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationToken"></a>

```java
public java.lang.String getCreationToken();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEfsFileSystemConfig <a name="DataAwsEfsFileSystemConfig" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystemConfig;

DataAwsEfsFileSystemConfig.builder()
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
//  .creationToken(java.lang.String)
//  .fileSystemId(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.creationToken">creationToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationToken`<sup>Optional</sup> <a name="creationToken" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.creationToken"></a>

```java
public java.lang.String getCreationToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}.

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}.

---

### DataAwsEfsFileSystemLifecyclePolicy <a name="DataAwsEfsFileSystemLifecyclePolicy" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystemLifecyclePolicy;

DataAwsEfsFileSystemLifecyclePolicy.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEfsFileSystemLifecyclePolicyList <a name="DataAwsEfsFileSystemLifecyclePolicyList" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystemLifecyclePolicyList;

new DataAwsEfsFileSystemLifecyclePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get"></a>

```java
public DataAwsEfsFileSystemLifecyclePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsEfsFileSystemLifecyclePolicyOutputReference <a name="DataAwsEfsFileSystemLifecyclePolicyOutputReference" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_efs_file_system.DataAwsEfsFileSystemLifecyclePolicyOutputReference;

new DataAwsEfsFileSystemLifecyclePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa">transitionToIa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass">transitionToPrimaryStorageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy">DataAwsEfsFileSystemLifecyclePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transitionToIa`<sup>Required</sup> <a name="transitionToIa" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa"></a>

```java
public java.lang.String getTransitionToIa();
```

- *Type:* java.lang.String

---

##### `transitionToPrimaryStorageClass`<sup>Required</sup> <a name="transitionToPrimaryStorageClass" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass"></a>

```java
public java.lang.String getTransitionToPrimaryStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.internalValue"></a>

```java
public DataAwsEfsFileSystemLifecyclePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy">DataAwsEfsFileSystemLifecyclePolicy</a>

---



