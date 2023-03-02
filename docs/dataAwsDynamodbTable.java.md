# `dataAwsDynamodbTable` Submodule <a name="`dataAwsDynamodbTable` Submodule" id="@cdktf/provider-aws.dataAwsDynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbTable <a name="DataAwsDynamodbTable" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table aws_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTable;

DataAwsDynamodbTable.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .serverSideEncryption(DataAwsDynamodbTableServerSideEncryption)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#name DataAwsDynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#id DataAwsDynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#tags DataAwsDynamodbTable#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#name DataAwsDynamodbTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#id DataAwsDynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.serverSideEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#server_side_encryption DataAwsDynamodbTable#server_side_encryption}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#tags DataAwsDynamodbTable#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.putServerSideEncryption">putServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putServerSideEncryption` <a name="putServerSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.putServerSideEncryption"></a>

```java
public void putServerSideEncryption(DataAwsDynamodbTableServerSideEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.putServerSideEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetId"></a>

```java
public void resetId()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTable;

DataAwsDynamodbTable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTable;

DataAwsDynamodbTable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTable;

DataAwsDynamodbTable.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.attribute">attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList">DataAwsDynamodbTableAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.billingMode">billingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.globalSecondaryIndex">globalSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList">DataAwsDynamodbTableGlobalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.hashKey">hashKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.localSecondaryIndex">localSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList">DataAwsDynamodbTableLocalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.pointInTimeRecovery">pointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList">DataAwsDynamodbTablePointInTimeRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.readCapacity">readCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList">DataAwsDynamodbTableReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference">DataAwsDynamodbTableServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamArn">streamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamEnabled">streamEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamLabel">streamLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamViewType">streamViewType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tableClass">tableClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList">DataAwsDynamodbTableTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.writeCapacity">writeCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.attribute"></a>

```java
public DataAwsDynamodbTableAttributeList getAttribute();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList">DataAwsDynamodbTableAttributeList</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.billingMode"></a>

```java
public java.lang.String getBillingMode();
```

- *Type:* java.lang.String

---

##### `globalSecondaryIndex`<sup>Required</sup> <a name="globalSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.globalSecondaryIndex"></a>

```java
public DataAwsDynamodbTableGlobalSecondaryIndexList getGlobalSecondaryIndex();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList">DataAwsDynamodbTableGlobalSecondaryIndexList</a>

---

##### `hashKey`<sup>Required</sup> <a name="hashKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.hashKey"></a>

```java
public java.lang.String getHashKey();
```

- *Type:* java.lang.String

---

##### `localSecondaryIndex`<sup>Required</sup> <a name="localSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.localSecondaryIndex"></a>

```java
public DataAwsDynamodbTableLocalSecondaryIndexList getLocalSecondaryIndex();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList">DataAwsDynamodbTableLocalSecondaryIndexList</a>

---

##### `pointInTimeRecovery`<sup>Required</sup> <a name="pointInTimeRecovery" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.pointInTimeRecovery"></a>

```java
public DataAwsDynamodbTablePointInTimeRecoveryList getPointInTimeRecovery();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList">DataAwsDynamodbTablePointInTimeRecoveryList</a>

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

---

##### `readCapacity`<sup>Required</sup> <a name="readCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.readCapacity"></a>

```java
public java.lang.Number getReadCapacity();
```

- *Type:* java.lang.Number

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.replica"></a>

```java
public DataAwsDynamodbTableReplicaList getReplica();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList">DataAwsDynamodbTableReplicaList</a>

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryption"></a>

```java
public DataAwsDynamodbTableServerSideEncryptionOutputReference getServerSideEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference">DataAwsDynamodbTableServerSideEncryptionOutputReference</a>

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamArn"></a>

```java
public java.lang.String getStreamArn();
```

- *Type:* java.lang.String

---

##### `streamEnabled`<sup>Required</sup> <a name="streamEnabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamEnabled"></a>

```java
public IResolvable getStreamEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `streamLabel`<sup>Required</sup> <a name="streamLabel" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamLabel"></a>

```java
public java.lang.String getStreamLabel();
```

- *Type:* java.lang.String

---

##### `streamViewType`<sup>Required</sup> <a name="streamViewType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.streamViewType"></a>

```java
public java.lang.String getStreamViewType();
```

- *Type:* java.lang.String

---

##### `tableClass`<sup>Required</sup> <a name="tableClass" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tableClass"></a>

```java
public java.lang.String getTableClass();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.ttl"></a>

```java
public DataAwsDynamodbTableTtlList getTtl();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList">DataAwsDynamodbTableTtlList</a>

---

##### `writeCapacity`<sup>Required</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.writeCapacity"></a>

```java
public java.lang.Number getWriteCapacity();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.serverSideEncryptionInput"></a>

```java
public DataAwsDynamodbTableServerSideEncryption getServerSideEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbTableAttribute <a name="DataAwsDynamodbTableAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableAttribute;

DataAwsDynamodbTableAttribute.builder()
    .build();
```


### DataAwsDynamodbTableConfig <a name="DataAwsDynamodbTableConfig" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableConfig;

DataAwsDynamodbTableConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .serverSideEncryption(DataAwsDynamodbTableServerSideEncryption)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#name DataAwsDynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#id DataAwsDynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#tags DataAwsDynamodbTable#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#name DataAwsDynamodbTable#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#id DataAwsDynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.serverSideEncryption"></a>

```java
public DataAwsDynamodbTableServerSideEncryption getServerSideEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#server_side_encryption DataAwsDynamodbTable#server_side_encryption}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table#tags DataAwsDynamodbTable#tags}.

---

### DataAwsDynamodbTableGlobalSecondaryIndex <a name="DataAwsDynamodbTableGlobalSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableGlobalSecondaryIndex;

DataAwsDynamodbTableGlobalSecondaryIndex.builder()
    .build();
```


### DataAwsDynamodbTableLocalSecondaryIndex <a name="DataAwsDynamodbTableLocalSecondaryIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableLocalSecondaryIndex;

DataAwsDynamodbTableLocalSecondaryIndex.builder()
    .build();
```


### DataAwsDynamodbTablePointInTimeRecovery <a name="DataAwsDynamodbTablePointInTimeRecovery" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTablePointInTimeRecovery;

DataAwsDynamodbTablePointInTimeRecovery.builder()
    .build();
```


### DataAwsDynamodbTableReplica <a name="DataAwsDynamodbTableReplica" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableReplica;

DataAwsDynamodbTableReplica.builder()
    .build();
```


### DataAwsDynamodbTableServerSideEncryption <a name="DataAwsDynamodbTableServerSideEncryption" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableServerSideEncryption;

DataAwsDynamodbTableServerSideEncryption.builder()
    .build();
```


### DataAwsDynamodbTableTtl <a name="DataAwsDynamodbTableTtl" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableTtl;

DataAwsDynamodbTableTtl.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDynamodbTableAttributeList <a name="DataAwsDynamodbTableAttributeList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableAttributeList;

new DataAwsDynamodbTableAttributeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.get"></a>

```java
public DataAwsDynamodbTableAttributeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDynamodbTableAttributeOutputReference <a name="DataAwsDynamodbTableAttributeOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableAttributeOutputReference;

new DataAwsDynamodbTableAttributeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute">DataAwsDynamodbTableAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttributeOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbTableAttribute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableAttribute">DataAwsDynamodbTableAttribute</a>

---


### DataAwsDynamodbTableGlobalSecondaryIndexList <a name="DataAwsDynamodbTableGlobalSecondaryIndexList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableGlobalSecondaryIndexList;

new DataAwsDynamodbTableGlobalSecondaryIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.get"></a>

```java
public DataAwsDynamodbTableGlobalSecondaryIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDynamodbTableGlobalSecondaryIndexOutputReference <a name="DataAwsDynamodbTableGlobalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference;

new DataAwsDynamodbTableGlobalSecondaryIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey">hashKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity">readCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity">writeCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex">DataAwsDynamodbTableGlobalSecondaryIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hashKey`<sup>Required</sup> <a name="hashKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey"></a>

```java
public java.lang.String getHashKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

---

##### `readCapacity`<sup>Required</sup> <a name="readCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity"></a>

```java
public java.lang.Number getReadCapacity();
```

- *Type:* java.lang.Number

---

##### `writeCapacity`<sup>Required</sup> <a name="writeCapacity" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity"></a>

```java
public java.lang.Number getWriteCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbTableGlobalSecondaryIndex getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableGlobalSecondaryIndex">DataAwsDynamodbTableGlobalSecondaryIndex</a>

---


### DataAwsDynamodbTableLocalSecondaryIndexList <a name="DataAwsDynamodbTableLocalSecondaryIndexList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableLocalSecondaryIndexList;

new DataAwsDynamodbTableLocalSecondaryIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.get"></a>

```java
public DataAwsDynamodbTableLocalSecondaryIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDynamodbTableLocalSecondaryIndexOutputReference <a name="DataAwsDynamodbTableLocalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableLocalSecondaryIndexOutputReference;

new DataAwsDynamodbTableLocalSecondaryIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes">nonKeyAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.projectionType">projectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey">rangeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex">DataAwsDynamodbTableLocalSecondaryIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonKeyAttributes`<sup>Required</sup> <a name="nonKeyAttributes" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```java
public java.util.List<java.lang.String> getNonKeyAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectionType`<sup>Required</sup> <a name="projectionType" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.projectionType"></a>

```java
public java.lang.String getProjectionType();
```

- *Type:* java.lang.String

---

##### `rangeKey`<sup>Required</sup> <a name="rangeKey" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey"></a>

```java
public java.lang.String getRangeKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndexOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbTableLocalSecondaryIndex getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableLocalSecondaryIndex">DataAwsDynamodbTableLocalSecondaryIndex</a>

---


### DataAwsDynamodbTablePointInTimeRecoveryList <a name="DataAwsDynamodbTablePointInTimeRecoveryList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTablePointInTimeRecoveryList;

new DataAwsDynamodbTablePointInTimeRecoveryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.get"></a>

```java
public DataAwsDynamodbTablePointInTimeRecoveryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDynamodbTablePointInTimeRecoveryOutputReference <a name="DataAwsDynamodbTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTablePointInTimeRecoveryOutputReference;

new DataAwsDynamodbTablePointInTimeRecoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery">DataAwsDynamodbTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbTablePointInTimeRecovery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTablePointInTimeRecovery">DataAwsDynamodbTablePointInTimeRecovery</a>

---


### DataAwsDynamodbTableReplicaList <a name="DataAwsDynamodbTableReplicaList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableReplicaList;

new DataAwsDynamodbTableReplicaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.get"></a>

```java
public DataAwsDynamodbTableReplicaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDynamodbTableReplicaOutputReference <a name="DataAwsDynamodbTableReplicaOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableReplicaOutputReference;

new DataAwsDynamodbTableReplicaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.regionName">regionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica">DataAwsDynamodbTableReplica</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.regionName"></a>

```java
public java.lang.String getRegionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplicaOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbTableReplica getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableReplica">DataAwsDynamodbTableReplica</a>

---


### DataAwsDynamodbTableServerSideEncryptionOutputReference <a name="DataAwsDynamodbTableServerSideEncryptionOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableServerSideEncryptionOutputReference;

new DataAwsDynamodbTableServerSideEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryptionOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbTableServerSideEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableServerSideEncryption">DataAwsDynamodbTableServerSideEncryption</a>

---


### DataAwsDynamodbTableTtlList <a name="DataAwsDynamodbTableTtlList" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableTtlList;

new DataAwsDynamodbTableTtlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.get"></a>

```java
public DataAwsDynamodbTableTtlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDynamodbTableTtlOutputReference <a name="DataAwsDynamodbTableTtlOutputReference" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table.DataAwsDynamodbTableTtlOutputReference;

new DataAwsDynamodbTableTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.attributeName">attributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl">DataAwsDynamodbTableTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.attributeName"></a>

```java
public java.lang.String getAttributeName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtlOutputReference.property.internalValue"></a>

```java
public DataAwsDynamodbTableTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTable.DataAwsDynamodbTableTtl">DataAwsDynamodbTableTtl</a>

---



