# `ceAnomalyMonitor` Submodule <a name="`ceAnomalyMonitor` Submodule" id="@cdktf/provider-aws.ceAnomalyMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalyMonitor <a name="CeAnomalyMonitor" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor aws_ce_anomaly_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_monitor.CeAnomalyMonitor;

CeAnomalyMonitor.Builder.create(Construct scope, java.lang.String id)
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
    .monitorType(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .monitorDimension(java.lang.String)
//  .monitorSpecification(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorType">monitorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorDimension">monitorDimension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorSpecification">monitorSpecification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorDimension`<sup>Optional</sup> <a name="monitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorDimension"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}.

---

##### `monitorSpecification`<sup>Optional</sup> <a name="monitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.monitorSpecification"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension">resetMonitorDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification">resetMonitorSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetMonitorDimension` <a name="resetMonitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorDimension"></a>

```java
public void resetMonitorDimension()
```

##### `resetMonitorSpecification` <a name="resetMonitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetMonitorSpecification"></a>

```java
public void resetMonitorSpecification()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_monitor.CeAnomalyMonitor;

CeAnomalyMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_monitor.CeAnomalyMonitor;

CeAnomalyMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_monitor.CeAnomalyMonitor;

CeAnomalyMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput">monitorDimensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput">monitorSpecificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput">monitorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension">monitorDimension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification">monitorSpecification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType">monitorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitorDimensionInput`<sup>Optional</sup> <a name="monitorDimensionInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimensionInput"></a>

```java
public java.lang.String getMonitorDimensionInput();
```

- *Type:* java.lang.String

---

##### `monitorSpecificationInput`<sup>Optional</sup> <a name="monitorSpecificationInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecificationInput"></a>

```java
public java.lang.String getMonitorSpecificationInput();
```

- *Type:* java.lang.String

---

##### `monitorTypeInput`<sup>Optional</sup> <a name="monitorTypeInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorTypeInput"></a>

```java
public java.lang.String getMonitorTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorDimension`<sup>Required</sup> <a name="monitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorDimension"></a>

```java
public java.lang.String getMonitorDimension();
```

- *Type:* java.lang.String

---

##### `monitorSpecification`<sup>Required</sup> <a name="monitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorSpecification"></a>

```java
public java.lang.String getMonitorSpecification();
```

- *Type:* java.lang.String

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.monitorType"></a>

```java
public java.lang.String getMonitorType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalyMonitorConfig <a name="CeAnomalyMonitorConfig" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_anomaly_monitor.CeAnomalyMonitorConfig;

CeAnomalyMonitorConfig.builder()
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
    .monitorType(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .monitorDimension(java.lang.String)
//  .monitorSpecification(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType">monitorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension">monitorDimension</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification">monitorSpecification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorType`<sup>Required</sup> <a name="monitorType" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorType"></a>

```java
public java.lang.String getMonitorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_type CeAnomalyMonitor#monitor_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#name CeAnomalyMonitor#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#id CeAnomalyMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitorDimension`<sup>Optional</sup> <a name="monitorDimension" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorDimension"></a>

```java
public java.lang.String getMonitorDimension();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_dimension CeAnomalyMonitor#monitor_dimension}.

---

##### `monitorSpecification`<sup>Optional</sup> <a name="monitorSpecification" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.monitorSpecification"></a>

```java
public java.lang.String getMonitorSpecification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#monitor_specification CeAnomalyMonitor#monitor_specification}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags CeAnomalyMonitor#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceAnomalyMonitor.CeAnomalyMonitorConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_monitor#tags_all CeAnomalyMonitor#tags_all}.

---



