# `directoryServiceSharedDirectory` Submodule <a name="`directoryServiceSharedDirectory` Submodule" id="@cdktf/provider-aws.directoryServiceSharedDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceSharedDirectory <a name="DirectoryServiceSharedDirectory" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory aws_directory_service_shared_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectory;

DirectoryServiceSharedDirectory.Builder.create(Construct scope, java.lang.String id)
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
    .directoryId(java.lang.String)
    .target(DirectoryServiceSharedDirectoryTarget)
//  .id(java.lang.String)
//  .method(java.lang.String)
//  .notes(java.lang.String)
//  .timeouts(DirectoryServiceSharedDirectoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#target DirectoryServiceSharedDirectory#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.method"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#timeouts DirectoryServiceSharedDirectory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget"></a>

```java
public void putTarget(DirectoryServiceSharedDirectoryTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts"></a>

```java
public void putTimeouts(DirectoryServiceSharedDirectoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetId"></a>

```java
public void resetId()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectory;

DirectoryServiceSharedDirectory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectory;

DirectoryServiceSharedDirectory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectory;

DirectoryServiceSharedDirectory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.sharedDirectoryId">sharedDirectoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference">DirectoryServiceSharedDirectoryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference">DirectoryServiceSharedDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sharedDirectoryId`<sup>Required</sup> <a name="sharedDirectoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.sharedDirectoryId"></a>

```java
public java.lang.String getSharedDirectoryId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.target"></a>

```java
public DirectoryServiceSharedDirectoryTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference">DirectoryServiceSharedDirectoryTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeouts"></a>

```java
public DirectoryServiceSharedDirectoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference">DirectoryServiceSharedDirectoryTimeoutsOutputReference</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.targetInput"></a>

```java
public DirectoryServiceSharedDirectoryTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceSharedDirectoryConfig <a name="DirectoryServiceSharedDirectoryConfig" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectoryConfig;

DirectoryServiceSharedDirectoryConfig.builder()
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
    .directoryId(java.lang.String)
    .target(DirectoryServiceSharedDirectoryTarget)
//  .id(java.lang.String)
//  .method(java.lang.String)
//  .notes(java.lang.String)
//  .timeouts(DirectoryServiceSharedDirectoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.target"></a>

```java
public DirectoryServiceSharedDirectoryTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#target DirectoryServiceSharedDirectory#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.timeouts"></a>

```java
public DirectoryServiceSharedDirectoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#timeouts DirectoryServiceSharedDirectory#timeouts}

---

### DirectoryServiceSharedDirectoryTarget <a name="DirectoryServiceSharedDirectoryTarget" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectoryTarget;

DirectoryServiceSharedDirectoryTarget.builder()
    .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}.

---

### DirectoryServiceSharedDirectoryTimeouts <a name="DirectoryServiceSharedDirectoryTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectoryTimeouts;

DirectoryServiceSharedDirectoryTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceSharedDirectoryTargetOutputReference <a name="DirectoryServiceSharedDirectoryTargetOutputReference" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectoryTargetOutputReference;

new DirectoryServiceSharedDirectoryTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.internalValue"></a>

```java
public DirectoryServiceSharedDirectoryTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---


### DirectoryServiceSharedDirectoryTimeoutsOutputReference <a name="DirectoryServiceSharedDirectoryTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.directory_service_shared_directory.DirectoryServiceSharedDirectoryTimeoutsOutputReference;

new DirectoryServiceSharedDirectoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



