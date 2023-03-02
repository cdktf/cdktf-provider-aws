# `dataAwsAuditmanagerFramework` Submodule <a name="`dataAwsAuditmanagerFramework` Submodule" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAuditmanagerFramework <a name="DataAwsAuditmanagerFramework" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework aws_auditmanager_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFramework;

DataAwsAuditmanagerFramework.Builder.create(Construct scope, java.lang.String id)
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
    .frameworkType(java.lang.String)
    .name(java.lang.String)
//  .controlSets(IResolvable)
//  .controlSets(java.util.List<DataAwsAuditmanagerFrameworkControlSets>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.frameworkType">frameworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.controlSets">controlSets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>></code> | control_sets block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frameworkType`<sup>Required</sup> <a name="frameworkType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.frameworkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}.

---

##### `controlSets`<sup>Optional</sup> <a name="controlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.Initializer.parameter.controlSets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>>

control_sets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets">putControlSets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets">resetControlSets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putControlSets` <a name="putControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets"></a>

```java
public void putControlSets(IResolvable OR java.util.List<DataAwsAuditmanagerFrameworkControlSets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.putControlSets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>>

---

##### `resetControlSets` <a name="resetControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.resetControlSets"></a>

```java
public void resetControlSets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFramework;

DataAwsAuditmanagerFramework.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFramework;

DataAwsAuditmanagerFramework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFramework;

DataAwsAuditmanagerFramework.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType">complianceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets">controlSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput">controlSetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput">frameworkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType">frameworkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `complianceType`<sup>Required</sup> <a name="complianceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.complianceType"></a>

```java
public java.lang.String getComplianceType();
```

- *Type:* java.lang.String

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSets"></a>

```java
public DataAwsAuditmanagerFrameworkControlSetsList getControlSets();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList">DataAwsAuditmanagerFrameworkControlSetsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `controlSetsInput`<sup>Optional</sup> <a name="controlSetsInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.controlSetsInput"></a>

```java
public java.lang.Object getControlSetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>>

---

##### `frameworkTypeInput`<sup>Optional</sup> <a name="frameworkTypeInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkTypeInput"></a>

```java
public java.lang.String getFrameworkTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `frameworkType`<sup>Required</sup> <a name="frameworkType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.frameworkType"></a>

```java
public java.lang.String getFrameworkType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFramework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAuditmanagerFrameworkConfig <a name="DataAwsAuditmanagerFrameworkConfig" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFrameworkConfig;

DataAwsAuditmanagerFrameworkConfig.builder()
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
    .frameworkType(java.lang.String)
    .name(java.lang.String)
//  .controlSets(IResolvable)
//  .controlSets(java.util.List<DataAwsAuditmanagerFrameworkControlSets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType">frameworkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets">controlSets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>></code> | control_sets block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frameworkType`<sup>Required</sup> <a name="frameworkType" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.frameworkType"></a>

```java
public java.lang.String getFrameworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#name DataAwsAuditmanagerFramework#name}.

---

##### `controlSets`<sup>Optional</sup> <a name="controlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkConfig.property.controlSets"></a>

```java
public java.lang.Object getControlSets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>>

control_sets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}

---

### DataAwsAuditmanagerFrameworkControlSets <a name="DataAwsAuditmanagerFrameworkControlSets" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFrameworkControlSets;

DataAwsAuditmanagerFrameworkControlSets.builder()
//  .controls(IResolvable)
//  .controls(java.util.List<DataAwsAuditmanagerFrameworkControlSetsControls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls">controls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>></code> | controls block. |

---

##### `controls`<sup>Optional</sup> <a name="controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets.property.controls"></a>

```java
public java.lang.Object getControls();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>>

controls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_framework#controls DataAwsAuditmanagerFramework#controls}

---

### DataAwsAuditmanagerFrameworkControlSetsControls <a name="DataAwsAuditmanagerFrameworkControlSetsControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFrameworkControlSetsControls;

DataAwsAuditmanagerFrameworkControlSetsControls.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAuditmanagerFrameworkControlSetsControlsList <a name="DataAwsAuditmanagerFrameworkControlSetsControlsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFrameworkControlSetsControlsList;

new DataAwsAuditmanagerFrameworkControlSetsControlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get"></a>

```java
public DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>>

---


### DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference;

new DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsAuditmanagerFrameworkControlSetsList <a name="DataAwsAuditmanagerFrameworkControlSetsList" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFrameworkControlSetsList;

new DataAwsAuditmanagerFrameworkControlSetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get"></a>

```java
public DataAwsAuditmanagerFrameworkControlSetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a>>

---


### DataAwsAuditmanagerFrameworkControlSetsOutputReference <a name="DataAwsAuditmanagerFrameworkControlSetsOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_framework.DataAwsAuditmanagerFrameworkControlSetsOutputReference;

new DataAwsAuditmanagerFrameworkControlSetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls">putControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls">resetControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControls` <a name="putControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls"></a>

```java
public void putControls(IResolvable OR java.util.List<DataAwsAuditmanagerFrameworkControlSetsControls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>>

---

##### `resetControls` <a name="resetControls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.resetControls"></a>

```java
public void resetControls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput">controlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controls"></a>

```java
public DataAwsAuditmanagerFrameworkControlSetsControlsList getControls();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControlsList">DataAwsAuditmanagerFrameworkControlSetsControlsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `controlsInput`<sup>Optional</sup> <a name="controlsInput" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.controlsInput"></a>

```java
public java.lang.Object getControlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsControls">DataAwsAuditmanagerFrameworkControlSetsControls</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerFramework.DataAwsAuditmanagerFrameworkControlSets">DataAwsAuditmanagerFrameworkControlSets</a> OR com.hashicorp.cdktf.IResolvable

---



