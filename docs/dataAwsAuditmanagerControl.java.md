# `dataAwsAuditmanagerControl` Submodule <a name="`dataAwsAuditmanagerControl` Submodule" id="@cdktf/provider-aws.dataAwsAuditmanagerControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAuditmanagerControl <a name="DataAwsAuditmanagerControl" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control aws_auditmanager_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControl;

DataAwsAuditmanagerControl.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .controlMappingSources(IResolvable)
//  .controlMappingSources(java.util.List<DataAwsAuditmanagerControlControlMappingSources>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.controlMappingSources">controlMappingSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>></code> | control_mapping_sources block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}.

---

##### `controlMappingSources`<sup>Optional</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.Initializer.parameter.controlMappingSources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>>

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#control_mapping_sources DataAwsAuditmanagerControl#control_mapping_sources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources">putControlMappingSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetControlMappingSources">resetControlMappingSources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putControlMappingSources` <a name="putControlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources"></a>

```java
public void putControlMappingSources(IResolvable OR java.util.List<DataAwsAuditmanagerControlControlMappingSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.putControlMappingSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>>

---

##### `resetControlMappingSources` <a name="resetControlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.resetControlMappingSources"></a>

```java
public void resetControlMappingSources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControl;

DataAwsAuditmanagerControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControl;

DataAwsAuditmanagerControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControl;

DataAwsAuditmanagerControl.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanInstructions">actionPlanInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanTitle">actionPlanTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSources">controlMappingSources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList">DataAwsAuditmanagerControlControlMappingSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.testingInformation">testingInformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSourcesInput">controlMappingSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `actionPlanInstructions`<sup>Required</sup> <a name="actionPlanInstructions" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanInstructions"></a>

```java
public java.lang.String getActionPlanInstructions();
```

- *Type:* java.lang.String

---

##### `actionPlanTitle`<sup>Required</sup> <a name="actionPlanTitle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.actionPlanTitle"></a>

```java
public java.lang.String getActionPlanTitle();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `controlMappingSources`<sup>Required</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSources"></a>

```java
public DataAwsAuditmanagerControlControlMappingSourcesList getControlMappingSources();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList">DataAwsAuditmanagerControlControlMappingSourcesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `testingInformation`<sup>Required</sup> <a name="testingInformation" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.testingInformation"></a>

```java
public java.lang.String getTestingInformation();
```

- *Type:* java.lang.String

---

##### `controlMappingSourcesInput`<sup>Optional</sup> <a name="controlMappingSourcesInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.controlMappingSourcesInput"></a>

```java
public java.lang.Object getControlMappingSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAuditmanagerControlConfig <a name="DataAwsAuditmanagerControlConfig" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControlConfig;

DataAwsAuditmanagerControlConfig.builder()
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
    .type(java.lang.String)
//  .controlMappingSources(IResolvable)
//  .controlMappingSources(java.util.List<DataAwsAuditmanagerControlControlMappingSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.controlMappingSources">controlMappingSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>></code> | control_mapping_sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#name DataAwsAuditmanagerControl#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#type DataAwsAuditmanagerControl#type}.

---

##### `controlMappingSources`<sup>Optional</sup> <a name="controlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlConfig.property.controlMappingSources"></a>

```java
public java.lang.Object getControlMappingSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>>

control_mapping_sources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#control_mapping_sources DataAwsAuditmanagerControl#control_mapping_sources}

---

### DataAwsAuditmanagerControlControlMappingSources <a name="DataAwsAuditmanagerControlControlMappingSources" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControlControlMappingSources;

DataAwsAuditmanagerControlControlMappingSources.builder()
//  .sourceKeyword(IResolvable)
//  .sourceKeyword(java.util.List<DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.property.sourceKeyword">sourceKeyword</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>></code> | source_keyword block. |

---

##### `sourceKeyword`<sup>Optional</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources.property.sourceKeyword"></a>

```java
public java.lang.Object getSourceKeyword();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>>

source_keyword block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/auditmanager_control#source_keyword DataAwsAuditmanagerControl#source_keyword}

---

### DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword;

DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAuditmanagerControlControlMappingSourcesList <a name="DataAwsAuditmanagerControlControlMappingSourcesList" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControlControlMappingSourcesList;

new DataAwsAuditmanagerControlControlMappingSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get"></a>

```java
public DataAwsAuditmanagerControlControlMappingSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a>>

---


### DataAwsAuditmanagerControlControlMappingSourcesOutputReference <a name="DataAwsAuditmanagerControlControlMappingSourcesOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControlControlMappingSourcesOutputReference;

new DataAwsAuditmanagerControlControlMappingSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword">putSourceKeyword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword">resetSourceKeyword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceKeyword` <a name="putSourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword"></a>

```java
public void putSourceKeyword(IResolvable OR java.util.List<DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.putSourceKeyword.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>>

---

##### `resetSourceKeyword` <a name="resetSourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.resetSourceKeyword"></a>

```java
public void resetSourceKeyword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription">sourceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency">sourceFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceId">sourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword">sourceKeyword</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList">DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption">sourceSetUpOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText">troubleshootingText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput">sourceKeywordInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceDescription`<sup>Required</sup> <a name="sourceDescription" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceDescription"></a>

```java
public java.lang.String getSourceDescription();
```

- *Type:* java.lang.String

---

##### `sourceFrequency`<sup>Required</sup> <a name="sourceFrequency" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceFrequency"></a>

```java
public java.lang.String getSourceFrequency();
```

- *Type:* java.lang.String

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceId"></a>

```java
public java.lang.String getSourceId();
```

- *Type:* java.lang.String

---

##### `sourceKeyword`<sup>Required</sup> <a name="sourceKeyword" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeyword"></a>

```java
public DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList getSourceKeyword();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList">DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceSetUpOption`<sup>Required</sup> <a name="sourceSetUpOption" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceSetUpOption"></a>

```java
public java.lang.String getSourceSetUpOption();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `troubleshootingText`<sup>Required</sup> <a name="troubleshootingText" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.troubleshootingText"></a>

```java
public java.lang.String getTroubleshootingText();
```

- *Type:* java.lang.String

---

##### `sourceKeywordInput`<sup>Optional</sup> <a name="sourceKeywordInput" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.sourceKeywordInput"></a>

```java
public java.lang.Object getSourceKeywordInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSources">DataAwsAuditmanagerControlControlMappingSources</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList;

new DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get"></a>

```java
public DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a>>

---


### DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference <a name="DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_auditmanager_control.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference;

new DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType">keywordInputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue">keywordValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keywordInputType`<sup>Required</sup> <a name="keywordInputType" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordInputType"></a>

```java
public java.lang.String getKeywordInputType();
```

- *Type:* java.lang.String

---

##### `keywordValue`<sup>Required</sup> <a name="keywordValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.keywordValue"></a>

```java
public java.lang.String getKeywordValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeywordOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAuditmanagerControl.DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword">DataAwsAuditmanagerControlControlMappingSourcesSourceKeyword</a> OR com.hashicorp.cdktf.IResolvable

---



