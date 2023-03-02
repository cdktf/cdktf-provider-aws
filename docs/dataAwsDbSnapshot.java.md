# `dataAwsDbSnapshot` Submodule <a name="`dataAwsDbSnapshot` Submodule" id="@cdktf/provider-aws.dataAwsDbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDbSnapshot <a name="DataAwsDbSnapshot" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot aws_db_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_snapshot.DataAwsDbSnapshot;

DataAwsDbSnapshot.Builder.create(Construct scope, java.lang.String id)
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
//  .dbInstanceIdentifier(java.lang.String)
//  .dbSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .includePublic(java.lang.Boolean)
//  .includePublic(IResolvable)
//  .includeShared(java.lang.Boolean)
//  .includeShared(IResolvable)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .snapshotType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#id DataAwsDbSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.includePublic">includePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_public DataAwsDbSnapshot#include_public}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.includeShared">includeShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}.

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="dbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.dbSnapshotIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#id DataAwsDbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includePublic`<sup>Optional</sup> <a name="includePublic" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.includePublic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_public DataAwsDbSnapshot#include_public}.

---

##### `includeShared`<sup>Optional</sup> <a name="includeShared" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.includeShared"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.mostRecent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}.

---

##### `snapshotType`<sup>Optional</sup> <a name="snapshotType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.snapshotType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier">resetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic">resetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared">resetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType">resetSnapshotType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier"></a>

```java
public void resetDbInstanceIdentifier()
```

##### `resetDbSnapshotIdentifier` <a name="resetDbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier"></a>

```java
public void resetDbSnapshotIdentifier()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetIncludePublic` <a name="resetIncludePublic" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic"></a>

```java
public void resetIncludePublic()
```

##### `resetIncludeShared` <a name="resetIncludeShared" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared"></a>

```java
public void resetIncludeShared()
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent"></a>

```java
public void resetMostRecent()
```

##### `resetSnapshotType` <a name="resetSnapshotType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType"></a>

```java
public void resetSnapshotType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_snapshot.DataAwsDbSnapshot;

DataAwsDbSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_snapshot.DataAwsDbSnapshot;

DataAwsDbSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_snapshot.DataAwsDbSnapshot;

DataAwsDbSnapshot.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage">allocatedStorage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn">dbSnapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted">encrypted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName">optionGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime">snapshotCreateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier">sourceDbSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput">dbSnapshotIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput">includePublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput">includeSharedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput">mostRecentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput">snapshotTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic">includePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared">includeShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage"></a>

```java
public java.lang.Number getAllocatedStorage();
```

- *Type:* java.lang.Number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `dbSnapshotArn`<sup>Required</sup> <a name="dbSnapshotArn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn"></a>

```java
public java.lang.String getDbSnapshotArn();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted"></a>

```java
public IResolvable getEncrypted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `optionGroupName`<sup>Required</sup> <a name="optionGroupName" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName"></a>

```java
public java.lang.String getOptionGroupName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `snapshotCreateTime`<sup>Required</sup> <a name="snapshotCreateTime" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime"></a>

```java
public java.lang.String getSnapshotCreateTime();
```

- *Type:* java.lang.String

---

##### `sourceDbSnapshotIdentifier`<sup>Required</sup> <a name="sourceDbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier"></a>

```java
public java.lang.String getSourceDbSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput"></a>

```java
public java.lang.String getDbInstanceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbSnapshotIdentifierInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput"></a>

```java
public java.lang.String getDbSnapshotIdentifierInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includePublicInput`<sup>Optional</sup> <a name="includePublicInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput"></a>

```java
public java.lang.Object getIncludePublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeSharedInput`<sup>Optional</sup> <a name="includeSharedInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput"></a>

```java
public java.lang.Object getIncludeSharedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput"></a>

```java
public java.lang.Object getMostRecentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotTypeInput`<sup>Optional</sup> <a name="snapshotTypeInput" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput"></a>

```java
public java.lang.String getSnapshotTypeInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier"></a>

```java
public java.lang.String getDbInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `dbSnapshotIdentifier`<sup>Required</sup> <a name="dbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier"></a>

```java
public java.lang.String getDbSnapshotIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includePublic`<sup>Required</sup> <a name="includePublic" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic"></a>

```java
public java.lang.Object getIncludePublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeShared`<sup>Required</sup> <a name="includeShared" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared"></a>

```java
public java.lang.Object getIncludeShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType"></a>

```java
public java.lang.String getSnapshotType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDbSnapshotConfig <a name="DataAwsDbSnapshotConfig" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_db_snapshot.DataAwsDbSnapshotConfig;

DataAwsDbSnapshotConfig.builder()
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
//  .dbInstanceIdentifier(java.lang.String)
//  .dbSnapshotIdentifier(java.lang.String)
//  .id(java.lang.String)
//  .includePublic(java.lang.Boolean)
//  .includePublic(IResolvable)
//  .includeShared(java.lang.Boolean)
//  .includeShared(IResolvable)
//  .mostRecent(java.lang.Boolean)
//  .mostRecent(IResolvable)
//  .snapshotType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier">dbSnapshotIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#id DataAwsDbSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic">includePublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_public DataAwsDbSnapshot#include_public}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared">includeShared</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent">mostRecent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType">snapshotType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier"></a>

```java
public java.lang.String getDbInstanceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}.

---

##### `dbSnapshotIdentifier`<sup>Optional</sup> <a name="dbSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier"></a>

```java
public java.lang.String getDbSnapshotIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#id DataAwsDbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includePublic`<sup>Optional</sup> <a name="includePublic" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic"></a>

```java
public java.lang.Object getIncludePublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_public DataAwsDbSnapshot#include_public}.

---

##### `includeShared`<sup>Optional</sup> <a name="includeShared" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared"></a>

```java
public java.lang.Object getIncludeShared();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent"></a>

```java
public java.lang.Object getMostRecent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}.

---

##### `snapshotType`<sup>Optional</sup> <a name="snapshotType" id="@cdktf/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType"></a>

```java
public java.lang.String getSnapshotType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}.

---



