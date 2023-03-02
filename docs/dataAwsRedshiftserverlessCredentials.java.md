# `dataAwsRedshiftserverlessCredentials` Submodule <a name="`dataAwsRedshiftserverlessCredentials` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftserverlessCredentials <a name="DataAwsRedshiftserverlessCredentials" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials aws_redshiftserverless_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_credentials.DataAwsRedshiftserverlessCredentials;

DataAwsRedshiftserverlessCredentials.Builder.create(Construct scope, java.lang.String id)
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
    .workgroupName(java.lang.String)
//  .dbName(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#workgroup_name DataAwsRedshiftserverlessCredentials#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#db_name DataAwsRedshiftserverlessCredentials#db_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#duration_seconds DataAwsRedshiftserverlessCredentials#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#id DataAwsRedshiftserverlessCredentials#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.workgroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#workgroup_name DataAwsRedshiftserverlessCredentials#workgroup_name}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.dbName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#db_name DataAwsRedshiftserverlessCredentials#db_name}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.durationSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#duration_seconds DataAwsRedshiftserverlessCredentials#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#id DataAwsRedshiftserverlessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDbName` <a name="resetDbName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_credentials.DataAwsRedshiftserverlessCredentials;

DataAwsRedshiftserverlessCredentials.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_credentials.DataAwsRedshiftserverlessCredentials;

DataAwsRedshiftserverlessCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_credentials.DataAwsRedshiftserverlessCredentials;

DataAwsRedshiftserverlessCredentials.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbPassword">dbPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbUser">dbUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.workgroupNameInput">workgroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbPassword`<sup>Required</sup> <a name="dbPassword" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbPassword"></a>

```java
public java.lang.String getDbPassword();
```

- *Type:* java.lang.String

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbUser"></a>

```java
public java.lang.String getDbUser();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.workgroupNameInput"></a>

```java
public java.lang.String getWorkgroupNameInput();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftserverlessCredentialsConfig <a name="DataAwsRedshiftserverlessCredentialsConfig" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_credentials.DataAwsRedshiftserverlessCredentialsConfig;

DataAwsRedshiftserverlessCredentialsConfig.builder()
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
    .workgroupName(java.lang.String)
//  .dbName(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#workgroup_name DataAwsRedshiftserverlessCredentials#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.dbName">dbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#db_name DataAwsRedshiftserverlessCredentials#db_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#duration_seconds DataAwsRedshiftserverlessCredentials#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#id DataAwsRedshiftserverlessCredentials#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#workgroup_name DataAwsRedshiftserverlessCredentials#workgroup_name}.

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#db_name DataAwsRedshiftserverlessCredentials#db_name}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#duration_seconds DataAwsRedshiftserverlessCredentials#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessCredentials.DataAwsRedshiftserverlessCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshiftserverless_credentials#id DataAwsRedshiftserverlessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



