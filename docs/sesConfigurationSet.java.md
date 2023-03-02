# `sesConfigurationSet` Submodule <a name="`sesConfigurationSet` Submodule" id="@cdktf/provider-aws.sesConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSet <a name="SesConfigurationSet" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set aws_ses_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.Builder.create(Construct scope, java.lang.String id)
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
//  .deliveryOptions(SesConfigurationSetDeliveryOptions)
//  .id(java.lang.String)
//  .reputationMetricsEnabled(java.lang.Boolean)
//  .reputationMetricsEnabled(IResolvable)
//  .sendingEnabled(java.lang.Boolean)
//  .sendingEnabled(IResolvable)
//  .trackingOptions(SesConfigurationSetTrackingOptions)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#name SesConfigurationSet#name}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#id SesConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.sendingEnabled">sendingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | tracking_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#name SesConfigurationSet#name}.

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.deliveryOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#id SesConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.reputationMetricsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}.

---

##### `sendingEnabled`<sup>Optional</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.sendingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.trackingOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions">putDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putTrackingOptions">putTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions">resetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetReputationMetricsEnabled">resetReputationMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetSendingEnabled">resetSendingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions">resetTrackingOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDeliveryOptions` <a name="putDeliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions"></a>

```java
public void putDeliveryOptions(SesConfigurationSetDeliveryOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `putTrackingOptions` <a name="putTrackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putTrackingOptions"></a>

```java
public void putTrackingOptions(SesConfigurationSetTrackingOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.putTrackingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `resetDeliveryOptions` <a name="resetDeliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions"></a>

```java
public void resetDeliveryOptions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetId"></a>

```java
public void resetId()
```

##### `resetReputationMetricsEnabled` <a name="resetReputationMetricsEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetReputationMetricsEnabled"></a>

```java
public void resetReputationMetricsEnabled()
```

##### `resetSendingEnabled` <a name="resetSendingEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetSendingEnabled"></a>

```java
public void resetSendingEnabled()
```

##### `resetTrackingOptions` <a name="resetTrackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions"></a>

```java
public void resetTrackingOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSet;

SesConfigurationSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lastFreshStart">lastFreshStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput">deliveryOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabledInput">reputationMetricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabledInput">sendingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput">trackingOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabled">sendingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deliveryOptions`<sup>Required</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions"></a>

```java
public SesConfigurationSetDeliveryOptionsOutputReference getDeliveryOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `lastFreshStart`<sup>Required</sup> <a name="lastFreshStart" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.lastFreshStart"></a>

```java
public java.lang.String getLastFreshStart();
```

- *Type:* java.lang.String

---

##### `trackingOptions`<sup>Required</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptions"></a>

```java
public SesConfigurationSetTrackingOptionsOutputReference getTrackingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a>

---

##### `deliveryOptionsInput`<sup>Optional</sup> <a name="deliveryOptionsInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput"></a>

```java
public SesConfigurationSetDeliveryOptions getDeliveryOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `reputationMetricsEnabledInput`<sup>Optional</sup> <a name="reputationMetricsEnabledInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabledInput"></a>

```java
public java.lang.Object getReputationMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendingEnabledInput`<sup>Optional</sup> <a name="sendingEnabledInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabledInput"></a>

```java
public java.lang.Object getSendingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `trackingOptionsInput`<sup>Optional</sup> <a name="trackingOptionsInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput"></a>

```java
public SesConfigurationSetTrackingOptions getTrackingOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reputationMetricsEnabled`<sup>Required</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.reputationMetricsEnabled"></a>

```java
public java.lang.Object getReputationMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendingEnabled`<sup>Required</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.sendingEnabled"></a>

```java
public java.lang.Object getSendingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetConfig <a name="SesConfigurationSetConfig" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSetConfig;

SesConfigurationSetConfig.builder()
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
//  .deliveryOptions(SesConfigurationSetDeliveryOptions)
//  .id(java.lang.String)
//  .reputationMetricsEnabled(java.lang.Boolean)
//  .reputationMetricsEnabled(IResolvable)
//  .sendingEnabled(java.lang.Boolean)
//  .sendingEnabled(IResolvable)
//  .trackingOptions(SesConfigurationSetTrackingOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#name SesConfigurationSet#name}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions">deliveryOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | delivery_options block. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#id SesConfigurationSet#id}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.reputationMetricsEnabled">reputationMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.sendingEnabled">sendingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions">trackingOptions</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | tracking_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#name SesConfigurationSet#name}.

---

##### `deliveryOptions`<sup>Optional</sup> <a name="deliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions"></a>

```java
public SesConfigurationSetDeliveryOptions getDeliveryOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

delivery_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#id SesConfigurationSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reputationMetricsEnabled`<sup>Optional</sup> <a name="reputationMetricsEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.reputationMetricsEnabled"></a>

```java
public java.lang.Object getReputationMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}.

---

##### `sendingEnabled`<sup>Optional</sup> <a name="sendingEnabled" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.sendingEnabled"></a>

```java
public java.lang.Object getSendingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

##### `trackingOptions`<sup>Optional</sup> <a name="trackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions"></a>

```java
public SesConfigurationSetTrackingOptions getTrackingOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

tracking_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

### SesConfigurationSetDeliveryOptions <a name="SesConfigurationSetDeliveryOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSetDeliveryOptions;

SesConfigurationSetDeliveryOptions.builder()
//  .tlsPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}. |

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}.

---

### SesConfigurationSetTrackingOptions <a name="SesConfigurationSetTrackingOptions" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSetTrackingOptions;

SesConfigurationSetTrackingOptions.builder()
//  .customRedirectDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain">customRedirectDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}. |

---

##### `customRedirectDomain`<sup>Optional</sup> <a name="customRedirectDomain" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```java
public java.lang.String getCustomRedirectDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetDeliveryOptionsOutputReference <a name="SesConfigurationSetDeliveryOptionsOutputReference" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSetDeliveryOptionsOutputReference;

new SesConfigurationSetDeliveryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```java
public void resetTlsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```java
public java.lang.String getTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```java
public SesConfigurationSetDeliveryOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---


### SesConfigurationSetTrackingOptionsOutputReference <a name="SesConfigurationSetTrackingOptionsOutputReference" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ses_configuration_set.SesConfigurationSetTrackingOptionsOutputReference;

new SesConfigurationSetTrackingOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain">resetCustomRedirectDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomRedirectDomain` <a name="resetCustomRedirectDomain" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain"></a>

```java
public void resetCustomRedirectDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">customRedirectDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">customRedirectDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRedirectDomainInput`<sup>Optional</sup> <a name="customRedirectDomainInput" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```java
public java.lang.String getCustomRedirectDomainInput();
```

- *Type:* java.lang.String

---

##### `customRedirectDomain`<sup>Required</sup> <a name="customRedirectDomain" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```java
public java.lang.String getCustomRedirectDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```java
public SesConfigurationSetTrackingOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---



