# `chimeVoiceConnectorLogging` Submodule <a name="`chimeVoiceConnectorLogging` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorLogging <a name="ChimeVoiceConnectorLogging" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging aws_chime_voice_connector_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_logging.ChimeVoiceConnectorLogging;

ChimeVoiceConnectorLogging.Builder.create(Construct scope, java.lang.String id)
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
    .voiceConnectorId(java.lang.String)
//  .enableMediaMetricLogs(java.lang.Boolean)
//  .enableMediaMetricLogs(IResolvable)
//  .enableSipLogs(java.lang.Boolean)
//  .enableSipLogs(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableMediaMetricLogs">enableMediaMetricLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableSipLogs">enableSipLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.voiceConnectorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}.

---

##### `enableMediaMetricLogs`<sup>Optional</sup> <a name="enableMediaMetricLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableMediaMetricLogs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}.

---

##### `enableSipLogs`<sup>Optional</sup> <a name="enableSipLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableSipLogs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableMediaMetricLogs">resetEnableMediaMetricLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableSipLogs">resetEnableSipLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnableMediaMetricLogs` <a name="resetEnableMediaMetricLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableMediaMetricLogs"></a>

```java
public void resetEnableMediaMetricLogs()
```

##### `resetEnableSipLogs` <a name="resetEnableSipLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableSipLogs"></a>

```java
public void resetEnableSipLogs()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_logging.ChimeVoiceConnectorLogging;

ChimeVoiceConnectorLogging.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_logging.ChimeVoiceConnectorLogging;

ChimeVoiceConnectorLogging.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_logging.ChimeVoiceConnectorLogging;

ChimeVoiceConnectorLogging.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogsInput">enableMediaMetricLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogsInput">enableSipLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogs">enableMediaMetricLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogs">enableSipLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableMediaMetricLogsInput`<sup>Optional</sup> <a name="enableMediaMetricLogsInput" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogsInput"></a>

```java
public java.lang.Object getEnableMediaMetricLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSipLogsInput`<sup>Optional</sup> <a name="enableSipLogsInput" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogsInput"></a>

```java
public java.lang.Object getEnableSipLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorIdInput"></a>

```java
public java.lang.String getVoiceConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `enableMediaMetricLogs`<sup>Required</sup> <a name="enableMediaMetricLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogs"></a>

```java
public java.lang.Object getEnableMediaMetricLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSipLogs`<sup>Required</sup> <a name="enableSipLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogs"></a>

```java
public java.lang.Object getEnableSipLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorId"></a>

```java
public java.lang.String getVoiceConnectorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorLoggingConfig <a name="ChimeVoiceConnectorLoggingConfig" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.chime_voice_connector_logging.ChimeVoiceConnectorLoggingConfig;

ChimeVoiceConnectorLoggingConfig.builder()
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
    .voiceConnectorId(java.lang.String)
//  .enableMediaMetricLogs(java.lang.Boolean)
//  .enableMediaMetricLogs(IResolvable)
//  .enableSipLogs(java.lang.Boolean)
//  .enableSipLogs(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.voiceConnectorId">voiceConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableMediaMetricLogs">enableMediaMetricLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableSipLogs">enableSipLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.voiceConnectorId"></a>

```java
public java.lang.String getVoiceConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}.

---

##### `enableMediaMetricLogs`<sup>Optional</sup> <a name="enableMediaMetricLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableMediaMetricLogs"></a>

```java
public java.lang.Object getEnableMediaMetricLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}.

---

##### `enableSipLogs`<sup>Optional</sup> <a name="enableSipLogs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableSipLogs"></a>

```java
public java.lang.Object getEnableSipLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



