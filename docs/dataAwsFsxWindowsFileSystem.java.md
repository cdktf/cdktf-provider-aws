# `dataAwsFsxWindowsFileSystem` Submodule <a name="`dataAwsFsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxWindowsFileSystem <a name="DataAwsFsxWindowsFileSystem" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystem;

DataAwsFsxWindowsFileSystem.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystem;

DataAwsFsxWindowsFileSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystem;

DataAwsFsxWindowsFileSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystem;

DataAwsFsxWindowsFileSystem.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystem;

DataAwsFsxWindowsFileSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsFsxWindowsFileSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsFsxWindowsFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsFsxWindowsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFsxWindowsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId">activeDirectoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases">aliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration">auditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp">preferredFileServerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId">preferredSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup">skipFinalBackup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `activeDirectoryId`<sup>Required</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId"></a>

```java
public java.lang.String getActiveDirectoryId();
```

- *Type:* java.lang.String

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases"></a>

```java
public java.util.List<java.lang.String> getAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `auditLogConfiguration`<sup>Required</sup> <a name="auditLogConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration"></a>

```java
public DataAwsFsxWindowsFileSystemAuditLogConfigurationList getAuditLogConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a>

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```java
public java.lang.Number getAutomaticBackupRetentionDays();
```

- *Type:* java.lang.Number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups"></a>

```java
public IResolvable getCopyTagsToBackups();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```java
public java.lang.String getDailyAutomaticBackupStartTime();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `diskIopsConfiguration`<sup>Required</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration"></a>

```java
public DataAwsFsxWindowsFileSystemDiskIopsConfigurationList getDiskIopsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="preferredFileServerIp" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp"></a>

```java
public java.lang.String getPreferredFileServerIp();
```

- *Type:* java.lang.String

---

##### `preferredSubnetId`<sup>Required</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId"></a>

```java
public java.lang.String getPreferredSubnetId();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipFinalBackup`<sup>Required</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup"></a>

```java
public IResolvable getSkipFinalBackup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity"></a>

```java
public java.lang.Number getStorageCapacity();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```java
public java.lang.String getWeeklyMaintenanceStartTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfiguration <a name="DataAwsFsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystemAuditLogConfiguration;

DataAwsFsxWindowsFileSystemAuditLogConfiguration.builder()
    .build();
```


### DataAwsFsxWindowsFileSystemConfig <a name="DataAwsFsxWindowsFileSystemConfig" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystemConfig;

DataAwsFsxWindowsFileSystemConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}.

---

### DataAwsFsxWindowsFileSystemDiskIopsConfiguration <a name="DataAwsFsxWindowsFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystemDiskIopsConfiguration;

DataAwsFsxWindowsFileSystemDiskIopsConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfigurationList <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationList" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystemAuditLogConfigurationList;

new DataAwsFsxWindowsFileSystemAuditLogConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get"></a>

```java
public DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference;

new DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">auditLogDestination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">fileAccessAuditLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">fileShareAccessAuditLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLogDestination`<sup>Required</sup> <a name="auditLogDestination" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```java
public java.lang.String getAuditLogDestination();
```

- *Type:* java.lang.String

---

##### `fileAccessAuditLogLevel`<sup>Required</sup> <a name="fileAccessAuditLogLevel" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```java
public java.lang.String getFileAccessAuditLogLevel();
```

- *Type:* java.lang.String

---

##### `fileShareAccessAuditLogLevel`<sup>Required</sup> <a name="fileShareAccessAuditLogLevel" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```java
public java.lang.String getFileShareAccessAuditLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsFsxWindowsFileSystemAuditLogConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a>

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationList <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationList" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList;

new DataAwsFsxWindowsFileSystemDiskIopsConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get"></a>

```java
public DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_fsx_windows_file_system.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference;

new DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsFsxWindowsFileSystemDiskIopsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a>

---



