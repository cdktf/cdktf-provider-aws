# `rumAppMonitor` Submodule <a name="`rumAppMonitor` Submodule" id="@cdktf/provider-aws.rumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumAppMonitor <a name="RumAppMonitor" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor aws_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitor;

RumAppMonitor.Builder.create(Construct scope, java.lang.String id)
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
    .domain(java.lang.String)
    .name(java.lang.String)
//  .appMonitorConfiguration(RumAppMonitorAppMonitorConfiguration)
//  .customEvents(RumAppMonitorCustomEvents)
//  .cwLogEnabled(java.lang.Boolean)
//  .cwLogEnabled(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | app_monitor_configuration block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents">customEvents</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | custom_events block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled">cwLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}.

---

##### `appMonitorConfiguration`<sup>Optional</sup> <a name="appMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.appMonitorConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

app_monitor_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `customEvents`<sup>Optional</sup> <a name="customEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.customEvents"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

custom_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cwLogEnabled`<sup>Optional</sup> <a name="cwLogEnabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.cwLogEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration">putAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents">putCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration">resetAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCustomEvents">resetCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCwLogEnabled">resetCwLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAppMonitorConfiguration` <a name="putAppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration"></a>

```java
public void putAppMonitorConfiguration(RumAppMonitorAppMonitorConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `putCustomEvents` <a name="putCustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents"></a>

```java
public void putCustomEvents(RumAppMonitorCustomEvents value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.putCustomEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `resetAppMonitorConfiguration` <a name="resetAppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration"></a>

```java
public void resetAppMonitorConfiguration()
```

##### `resetCustomEvents` <a name="resetCustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCustomEvents"></a>

```java
public void resetCustomEvents()
```

##### `resetCwLogEnabled` <a name="resetCwLogEnabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetCwLogEnabled"></a>

```java
public void resetCwLogEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitor;

RumAppMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitor;

RumAppMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitor;

RumAppMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorId">appMonitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEvents">customEvents</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogGroup">cwLogGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput">appMonitorConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEventsInput">customEventsInput</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput">cwLogEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabled">cwLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appMonitorConfiguration`<sup>Required</sup> <a name="appMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration"></a>

```java
public RumAppMonitorAppMonitorConfigurationOutputReference getAppMonitorConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `appMonitorId`<sup>Required</sup> <a name="appMonitorId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorId"></a>

```java
public java.lang.String getAppMonitorId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `customEvents`<sup>Required</sup> <a name="customEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEvents"></a>

```java
public RumAppMonitorCustomEventsOutputReference getCustomEvents();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a>

---

##### `cwLogGroup`<sup>Required</sup> <a name="cwLogGroup" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogGroup"></a>

```java
public java.lang.String getCwLogGroup();
```

- *Type:* java.lang.String

---

##### `appMonitorConfigurationInput`<sup>Optional</sup> <a name="appMonitorConfigurationInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput"></a>

```java
public RumAppMonitorAppMonitorConfiguration getAppMonitorConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `customEventsInput`<sup>Optional</sup> <a name="customEventsInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.customEventsInput"></a>

```java
public RumAppMonitorCustomEvents getCustomEventsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `cwLogEnabledInput`<sup>Optional</sup> <a name="cwLogEnabledInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput"></a>

```java
public java.lang.Object getCwLogEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cwLogEnabled`<sup>Required</sup> <a name="cwLogEnabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.cwLogEnabled"></a>

```java
public java.lang.Object getCwLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorAppMonitorConfiguration <a name="RumAppMonitorAppMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitorAppMonitorConfiguration;

RumAppMonitorAppMonitorConfiguration.builder()
//  .allowCookies(java.lang.Boolean)
//  .allowCookies(IResolvable)
//  .enableXray(java.lang.Boolean)
//  .enableXray(IResolvable)
//  .excludedPages(java.util.List<java.lang.String>)
//  .favoritePages(java.util.List<java.lang.String>)
//  .guestRoleArn(java.lang.String)
//  .identityPoolId(java.lang.String)
//  .includedPages(java.util.List<java.lang.String>)
//  .sessionSampleRate(java.lang.Number)
//  .telemetries(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies">allowCookies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXray">enableXray</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages">excludedPages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages">favoritePages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn">guestRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages">includedPages</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#included_pages RumAppMonitor#included_pages}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate">sessionSampleRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries">telemetries</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#telemetries RumAppMonitor#telemetries}. |

---

##### `allowCookies`<sup>Optional</sup> <a name="allowCookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies"></a>

```java
public java.lang.Object getAllowCookies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}.

---

##### `enableXray`<sup>Optional</sup> <a name="enableXray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXray"></a>

```java
public java.lang.Object getEnableXray();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}.

---

##### `excludedPages`<sup>Optional</sup> <a name="excludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages"></a>

```java
public java.util.List<java.lang.String> getExcludedPages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}.

---

##### `favoritePages`<sup>Optional</sup> <a name="favoritePages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages"></a>

```java
public java.util.List<java.lang.String> getFavoritePages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}.

---

##### `guestRoleArn`<sup>Optional</sup> <a name="guestRoleArn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn"></a>

```java
public java.lang.String getGuestRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}.

---

##### `identityPoolId`<sup>Optional</sup> <a name="identityPoolId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}.

---

##### `includedPages`<sup>Optional</sup> <a name="includedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages"></a>

```java
public java.util.List<java.lang.String> getIncludedPages();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#included_pages RumAppMonitor#included_pages}.

---

##### `sessionSampleRate`<sup>Optional</sup> <a name="sessionSampleRate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate"></a>

```java
public java.lang.Number getSessionSampleRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}.

---

##### `telemetries`<sup>Optional</sup> <a name="telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries"></a>

```java
public java.util.List<java.lang.String> getTelemetries();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#telemetries RumAppMonitor#telemetries}.

---

### RumAppMonitorConfig <a name="RumAppMonitorConfig" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitorConfig;

RumAppMonitorConfig.builder()
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
    .domain(java.lang.String)
    .name(java.lang.String)
//  .appMonitorConfiguration(RumAppMonitorAppMonitorConfiguration)
//  .customEvents(RumAppMonitorCustomEvents)
//  .cwLogEnabled(java.lang.Boolean)
//  .cwLogEnabled(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration">appMonitorConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | app_monitor_configuration block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.customEvents">customEvents</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | custom_events block. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled">cwLogEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#domain RumAppMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#name RumAppMonitor#name}.

---

##### `appMonitorConfiguration`<sup>Optional</sup> <a name="appMonitorConfiguration" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration"></a>

```java
public RumAppMonitorAppMonitorConfiguration getAppMonitorConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

app_monitor_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `customEvents`<sup>Optional</sup> <a name="customEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.customEvents"></a>

```java
public RumAppMonitorCustomEvents getCustomEvents();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

custom_events block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `cwLogEnabled`<sup>Optional</sup> <a name="cwLogEnabled" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled"></a>

```java
public java.lang.Object getCwLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#id RumAppMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags RumAppMonitor#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#tags_all RumAppMonitor#tags_all}.

---

### RumAppMonitorCustomEvents <a name="RumAppMonitorCustomEvents" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitorCustomEvents;

RumAppMonitorCustomEvents.builder()
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#status RumAppMonitor#status}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rum_app_monitor#status RumAppMonitor#status}.

---

## Classes <a name="Classes" id="Classes"></a>

### RumAppMonitorAppMonitorConfigurationOutputReference <a name="RumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitorAppMonitorConfigurationOutputReference;

new RumAppMonitorAppMonitorConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies">resetAllowCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXray">resetEnableXray</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages">resetExcludedPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages">resetFavoritePages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn">resetGuestRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId">resetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages">resetIncludedPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate">resetSessionSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries">resetTelemetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCookies` <a name="resetAllowCookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies"></a>

```java
public void resetAllowCookies()
```

##### `resetEnableXray` <a name="resetEnableXray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXray"></a>

```java
public void resetEnableXray()
```

##### `resetExcludedPages` <a name="resetExcludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages"></a>

```java
public void resetExcludedPages()
```

##### `resetFavoritePages` <a name="resetFavoritePages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages"></a>

```java
public void resetFavoritePages()
```

##### `resetGuestRoleArn` <a name="resetGuestRoleArn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn"></a>

```java
public void resetGuestRoleArn()
```

##### `resetIdentityPoolId` <a name="resetIdentityPoolId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId"></a>

```java
public void resetIdentityPoolId()
```

##### `resetIncludedPages` <a name="resetIncludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages"></a>

```java
public void resetIncludedPages()
```

##### `resetSessionSampleRate` <a name="resetSessionSampleRate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate"></a>

```java
public void resetSessionSampleRate()
```

##### `resetTelemetries` <a name="resetTelemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries"></a>

```java
public void resetTelemetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput">allowCookiesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXrayInput">enableXrayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput">excludedPagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput">favoritePagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput">guestRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput">includedPagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput">sessionSampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput">telemetriesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">allowCookies</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXray">enableXray</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">excludedPages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">favoritePages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">guestRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">includedPages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">sessionSampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">telemetries</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCookiesInput`<sup>Optional</sup> <a name="allowCookiesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput"></a>

```java
public java.lang.Object getAllowCookiesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableXrayInput`<sup>Optional</sup> <a name="enableXrayInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXrayInput"></a>

```java
public java.lang.Object getEnableXrayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedPagesInput`<sup>Optional</sup> <a name="excludedPagesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedPagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `favoritePagesInput`<sup>Optional</sup> <a name="favoritePagesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput"></a>

```java
public java.util.List<java.lang.String> getFavoritePagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guestRoleArnInput`<sup>Optional</sup> <a name="guestRoleArnInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput"></a>

```java
public java.lang.String getGuestRoleArnInput();
```

- *Type:* java.lang.String

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput"></a>

```java
public java.lang.String getIdentityPoolIdInput();
```

- *Type:* java.lang.String

---

##### `includedPagesInput`<sup>Optional</sup> <a name="includedPagesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedPagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sessionSampleRateInput`<sup>Optional</sup> <a name="sessionSampleRateInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput"></a>

```java
public java.lang.Number getSessionSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `telemetriesInput`<sup>Optional</sup> <a name="telemetriesInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput"></a>

```java
public java.util.List<java.lang.String> getTelemetriesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowCookies`<sup>Required</sup> <a name="allowCookies" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```java
public java.lang.Object getAllowCookies();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableXray`<sup>Required</sup> <a name="enableXray" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXray"></a>

```java
public java.lang.Object getEnableXray();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedPages`<sup>Required</sup> <a name="excludedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```java
public java.util.List<java.lang.String> getExcludedPages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `favoritePages`<sup>Required</sup> <a name="favoritePages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```java
public java.util.List<java.lang.String> getFavoritePages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `guestRoleArn`<sup>Required</sup> <a name="guestRoleArn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```java
public java.lang.String getGuestRoleArn();
```

- *Type:* java.lang.String

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```java
public java.lang.String getIdentityPoolId();
```

- *Type:* java.lang.String

---

##### `includedPages`<sup>Required</sup> <a name="includedPages" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```java
public java.util.List<java.lang.String> getIncludedPages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sessionSampleRate`<sup>Required</sup> <a name="sessionSampleRate" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```java
public java.lang.Number getSessionSampleRate();
```

- *Type:* java.lang.Number

---

##### `telemetries`<sup>Required</sup> <a name="telemetries" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```java
public java.util.List<java.lang.String> getTelemetries();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```java
public RumAppMonitorAppMonitorConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---


### RumAppMonitorCustomEventsOutputReference <a name="RumAppMonitorCustomEventsOutputReference" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rum_app_monitor.RumAppMonitorCustomEventsOutputReference;

new RumAppMonitorCustomEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```java
public RumAppMonitorCustomEvents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---



