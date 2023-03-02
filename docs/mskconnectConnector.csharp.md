# `mskconnectConnector` Submodule <a name="`mskconnectConnector` Submodule" id="@cdktf/provider-aws.mskconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskconnectConnector <a name="MskconnectConnector" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector aws_mskconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnector(Construct Scope, string Id, MskconnectConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig">MskconnectConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig">MskconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster">PutKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication">PutKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit">PutKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery">PutLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin">PutPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration">PutWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery">ResetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration">ResetWorkerConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity"></a>

```csharp
private void PutCapacity(MskconnectConnectorCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `PutKafkaCluster` <a name="PutKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster"></a>

```csharp
private void PutKafkaCluster(MskconnectConnectorKafkaCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `PutKafkaClusterClientAuthentication` <a name="PutKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication"></a>

```csharp
private void PutKafkaClusterClientAuthentication(MskconnectConnectorKafkaClusterClientAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `PutKafkaClusterEncryptionInTransit` <a name="PutKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```csharp
private void PutKafkaClusterEncryptionInTransit(MskconnectConnectorKafkaClusterEncryptionInTransit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `PutLogDelivery` <a name="PutLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery"></a>

```csharp
private void PutLogDelivery(MskconnectConnectorLogDelivery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `PutPlugin` <a name="PutPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin"></a>

```csharp
private void PutPlugin(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putPlugin.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(MskconnectConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

---

##### `PutWorkerConfiguration` <a name="PutWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration"></a>

```csharp
private void PutWorkerConfiguration(MskconnectConnectorWorkerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogDelivery` <a name="ResetLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetLogDelivery"></a>

```csharp
private void ResetLogDelivery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkerConfiguration` <a name="ResetWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.resetWorkerConfiguration"></a>

```csharp
private void ResetWorkerConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

MskconnectConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin">Plugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput">ConnectorConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput">KafkaClusterClientAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput">KafkaClusterEncryptionInTransitInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput">KafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput">KafkaconnectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput">LogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput">PluginInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput">WorkerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion">KafkaconnectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacity"></a>

```csharp
public MskconnectConnectorCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference">MskconnectConnectorCapacityOutputReference</a>

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaCluster"></a>

```csharp
public MskconnectConnectorKafkaClusterOutputReference KafkaCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference">MskconnectConnectorKafkaClusterOutputReference</a>

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthentication"></a>

```csharp
public MskconnectConnectorKafkaClusterClientAuthenticationOutputReference KafkaClusterClientAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference">MskconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```csharp
public MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference KafkaClusterEncryptionInTransit { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference">MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `LogDelivery`<sup>Required</sup> <a name="LogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDelivery"></a>

```csharp
public MskconnectConnectorLogDeliveryOutputReference LogDelivery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference">MskconnectConnectorLogDeliveryOutputReference</a>

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.plugin"></a>

```csharp
public MskconnectConnectorPluginList Plugin { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList">MskconnectConnectorPluginList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeouts"></a>

```csharp
public MskconnectConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference">MskconnectConnectorTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfiguration"></a>

```csharp
public MskconnectConnectorWorkerConfigurationOutputReference WorkerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference">MskconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.capacityInput"></a>

```csharp
public MskconnectConnectorCapacity CapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---

##### `ConnectorConfigurationInput`<sup>Optional</sup> <a name="ConnectorConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfigurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectorConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="KafkaClusterClientAuthenticationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```csharp
public MskconnectConnectorKafkaClusterClientAuthentication KafkaClusterClientAuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `KafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="KafkaClusterEncryptionInTransitInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```csharp
public MskconnectConnectorKafkaClusterEncryptionInTransit KafkaClusterEncryptionInTransitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `KafkaClusterInput`<sup>Optional</sup> <a name="KafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaClusterInput"></a>

```csharp
public MskconnectConnectorKafkaCluster KafkaClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---

##### `KafkaconnectVersionInput`<sup>Optional</sup> <a name="KafkaconnectVersionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersionInput"></a>

```csharp
public string KafkaconnectVersionInput { get; }
```

- *Type:* string

---

##### `LogDeliveryInput`<sup>Optional</sup> <a name="LogDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.logDeliveryInput"></a>

```csharp
public MskconnectConnectorLogDelivery LogDeliveryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PluginInput`<sup>Optional</sup> <a name="PluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.pluginInput"></a>

```csharp
public object PluginInput { get; }
```

- *Type:* object

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArnInput"></a>

```csharp
public string ServiceExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkerConfigurationInput`<sup>Optional</sup> <a name="WorkerConfigurationInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.workerConfigurationInput"></a>

```csharp
public MskconnectConnectorWorkerConfiguration WorkerConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.connectorConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectorConfiguration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KafkaconnectVersion`<sup>Required</sup> <a name="KafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.kafkaconnectVersion"></a>

```csharp
public string KafkaconnectVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskconnectConnectorCapacity <a name="MskconnectConnectorCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacity {
    MskconnectConnectorCapacityAutoscaling Autoscaling = null,
    MskconnectConnectorCapacityProvisionedCapacity ProvisionedCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | provisioned_capacity block. |

---

##### `Autoscaling`<sup>Optional</sup> <a name="Autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.autoscaling"></a>

```csharp
public MskconnectConnectorCapacityAutoscaling Autoscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#autoscaling MskconnectConnector#autoscaling}

---

##### `ProvisionedCapacity`<sup>Optional</sup> <a name="ProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity.property.provisionedCapacity"></a>

```csharp
public MskconnectConnectorCapacityProvisionedCapacity ProvisionedCapacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

provisioned_capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#provisioned_capacity MskconnectConnector#provisioned_capacity}

---

### MskconnectConnectorCapacityAutoscaling <a name="MskconnectConnectorCapacityAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityAutoscaling {
    double MaxWorkerCount,
    double MinWorkerCount,
    double McuCount = null,
    MskconnectConnectorCapacityAutoscalingScaleInPolicy ScaleInPolicy = null,
    MskconnectConnectorCapacityAutoscalingScaleOutPolicy ScaleOutPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount">MinWorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount">McuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | scale_in_policy block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | scale_out_policy block. |

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.maxWorkerCount"></a>

```csharp
public double MaxWorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#max_worker_count MskconnectConnector#max_worker_count}.

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.minWorkerCount"></a>

```csharp
public double MinWorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#min_worker_count MskconnectConnector#min_worker_count}.

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.mcuCount"></a>

```csharp
public double McuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

##### `ScaleInPolicy`<sup>Optional</sup> <a name="ScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleInPolicy"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleInPolicy ScaleInPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

scale_in_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_in_policy MskconnectConnector#scale_in_policy}

---

##### `ScaleOutPolicy`<sup>Optional</sup> <a name="ScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling.property.scaleOutPolicy"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleOutPolicy ScaleOutPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

scale_out_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#scale_out_policy MskconnectConnector#scale_out_policy}

---

### MskconnectConnectorCapacityAutoscalingScaleInPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityAutoscalingScaleInPolicy {
    double CpuUtilizationPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityAutoscalingScaleOutPolicy <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityAutoscalingScaleOutPolicy {
    double CpuUtilizationPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}. |

---

##### `CpuUtilizationPercentage`<sup>Optional</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cpu_utilization_percentage MskconnectConnector#cpu_utilization_percentage}.

---

### MskconnectConnectorCapacityProvisionedCapacity <a name="MskconnectConnectorCapacityProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityProvisionedCapacity {
    double WorkerCount,
    double McuCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount">WorkerCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount">McuCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}. |

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```csharp
public double WorkerCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_count MskconnectConnector#worker_count}.

---

##### `McuCount`<sup>Optional</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```csharp
public double McuCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#mcu_count MskconnectConnector#mcu_count}.

---

### MskconnectConnectorConfig <a name="MskconnectConnectorConfig" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    MskconnectConnectorCapacity Capacity,
    System.Collections.Generic.IDictionary<string, string> ConnectorConfiguration,
    MskconnectConnectorKafkaCluster KafkaCluster,
    MskconnectConnectorKafkaClusterClientAuthentication KafkaClusterClientAuthentication,
    MskconnectConnectorKafkaClusterEncryptionInTransit KafkaClusterEncryptionInTransit,
    string KafkaconnectVersion,
    string Name,
    object Plugin,
    string ServiceExecutionRoleArn,
    string Description = null,
    string Id = null,
    MskconnectConnectorLogDelivery LogDelivery = null,
    MskconnectConnectorTimeouts Timeouts = null,
    MskconnectConnectorWorkerConfiguration WorkerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | kafka_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | kafka_cluster_client_authentication block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | kafka_cluster_encryption_in_transit block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion">KafkaconnectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin">Plugin</a></code> | <code>object</code> | plugin block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | log_delivery block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | worker_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.capacity"></a>

```csharp
public MskconnectConnectorCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#capacity MskconnectConnector#capacity}

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.connectorConfiguration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConnectorConfiguration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#connector_configuration MskconnectConnector#connector_configuration}.

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaCluster"></a>

```csharp
public MskconnectConnectorKafkaCluster KafkaCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster MskconnectConnector#kafka_cluster}

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```csharp
public MskconnectConnectorKafkaClusterClientAuthentication KafkaClusterClientAuthentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

kafka_cluster_client_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_client_authentication MskconnectConnector#kafka_cluster_client_authentication}

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```csharp
public MskconnectConnectorKafkaClusterEncryptionInTransit KafkaClusterEncryptionInTransit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

kafka_cluster_encryption_in_transit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafka_cluster_encryption_in_transit MskconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `KafkaconnectVersion`<sup>Required</sup> <a name="KafkaconnectVersion" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.kafkaconnectVersion"></a>

```csharp
public string KafkaconnectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#kafkaconnect_version MskconnectConnector#kafkaconnect_version}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#name MskconnectConnector#name}.

---

##### `Plugin`<sup>Required</sup> <a name="Plugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.plugin"></a>

```csharp
public object Plugin { get; set; }
```

- *Type:* object

plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#plugin MskconnectConnector#plugin}

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#service_execution_role_arn MskconnectConnector#service_execution_role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#description MskconnectConnector#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#id MskconnectConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogDelivery`<sup>Optional</sup> <a name="LogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.logDelivery"></a>

```csharp
public MskconnectConnectorLogDelivery LogDelivery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_delivery MskconnectConnector#log_delivery}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.timeouts"></a>

```csharp
public MskconnectConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts">MskconnectConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#timeouts MskconnectConnector#timeouts}

---

##### `WorkerConfiguration`<sup>Optional</sup> <a name="WorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorConfig.property.workerConfiguration"></a>

```csharp
public MskconnectConnectorWorkerConfiguration WorkerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

worker_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_configuration MskconnectConnector#worker_configuration}

---

### MskconnectConnectorKafkaCluster <a name="MskconnectConnectorKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaCluster {
    MskconnectConnectorKafkaClusterApacheKafkaCluster ApacheKafkaCluster
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | apache_kafka_cluster block. |

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaCluster ApacheKafkaCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

apache_kafka_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#apache_kafka_cluster MskconnectConnector#apache_kafka_cluster}

---

### MskconnectConnectorKafkaClusterApacheKafkaCluster <a name="MskconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterApacheKafkaCluster {
    string BootstrapServers,
    MskconnectConnectorKafkaClusterApacheKafkaClusterVpc Vpc
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">BootstrapServers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">Vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | vpc block. |

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```csharp
public string BootstrapServers { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bootstrap_servers MskconnectConnector#bootstrap_servers}.

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpc Vpc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#vpc MskconnectConnector#vpc}

---

### MskconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterApacheKafkaClusterVpc {
    string[] SecurityGroups,
    string[] Subnets
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}. |

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#security_groups MskconnectConnector#security_groups}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#subnets MskconnectConnector#subnets}.

---

### MskconnectConnectorKafkaClusterClientAuthentication <a name="MskconnectConnectorKafkaClusterClientAuthentication" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterClientAuthentication {
    string AuthenticationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#authentication_type MskconnectConnector#authentication_type}.

---

### MskconnectConnectorKafkaClusterEncryptionInTransit <a name="MskconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterEncryptionInTransit {
    string EncryptionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#encryption_type MskconnectConnector#encryption_type}.

---

### MskconnectConnectorLogDelivery <a name="MskconnectConnectorLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDelivery {
    MskconnectConnectorLogDeliveryWorkerLogDelivery WorkerLogDelivery
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | worker_log_delivery block. |

---

##### `WorkerLogDelivery`<sup>Required</sup> <a name="WorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDelivery WorkerLogDelivery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

worker_log_delivery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#worker_log_delivery MskconnectConnector#worker_log_delivery}

---

### MskconnectConnectorLogDeliveryWorkerLogDelivery <a name="MskconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDelivery {
    MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs CloudwatchLogs = null,
    MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose Firehose = null,
    MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | s3 block. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#cloudwatch_logs MskconnectConnector#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#firehose MskconnectConnector#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#s3 MskconnectConnector#s3}

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {
    object Enabled,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#log_group MskconnectConnector#log_group}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {
    object Enabled,
    string DeliveryStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delivery_stream MskconnectConnector#delivery_stream}.

---

### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 {
    object Enabled,
    string Bucket = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#enabled MskconnectConnector#enabled}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#bucket MskconnectConnector#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#prefix MskconnectConnector#prefix}.

---

### MskconnectConnectorPlugin <a name="MskconnectConnectorPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorPlugin {
    MskconnectConnectorPluginCustomPlugin CustomPlugin
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | custom_plugin block. |

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPlugin.property.customPlugin"></a>

```csharp
public MskconnectConnectorPluginCustomPlugin CustomPlugin { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

custom_plugin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#custom_plugin MskconnectConnector#custom_plugin}

---

### MskconnectConnectorPluginCustomPlugin <a name="MskconnectConnectorPluginCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorPluginCustomPlugin {
    string Arn,
    double Revision
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision">Revision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

### MskconnectConnectorTimeouts <a name="MskconnectConnectorTimeouts" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#create MskconnectConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#delete MskconnectConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#update MskconnectConnector#update}.

---

### MskconnectConnectorWorkerConfiguration <a name="MskconnectConnectorWorkerConfiguration" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorWorkerConfiguration {
    string Arn,
    double Revision
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision">Revision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#arn MskconnectConnector#arn}.

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mskconnect_connector#revision MskconnectConnector#revision}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskconnectConnectorCapacityAutoscalingOutputReference <a name="MskconnectConnectorCapacityAutoscalingOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityAutoscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy">PutScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy">PutScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy">ResetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy">ResetScaleOutPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleInPolicy` <a name="PutScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy"></a>

```csharp
private void PutScaleInPolicy(MskconnectConnectorCapacityAutoscalingScaleInPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `PutScaleOutPolicy` <a name="PutScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy"></a>

```csharp
private void PutScaleOutPolicy(MskconnectConnectorCapacityAutoscalingScaleOutPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetMcuCount"></a>

```csharp
private void ResetMcuCount()
```

##### `ResetScaleInPolicy` <a name="ResetScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleInPolicy"></a>

```csharp
private void ResetScaleInPolicy()
```

##### `ResetScaleOutPolicy` <a name="ResetScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.resetScaleOutPolicy"></a>

```csharp
private void ResetScaleOutPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput">MaxWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput">MinWorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput">ScaleInPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput">ScaleOutPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount">McuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount">MinWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicy"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference ScaleInPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference</a>

---

##### `ScaleOutPolicy`<sup>Required</sup> <a name="ScaleOutPolicy" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicy"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference ScaleOutPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference">MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference</a>

---

##### `MaxWorkerCountInput`<sup>Optional</sup> <a name="MaxWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCountInput"></a>

```csharp
public double MaxWorkerCountInput { get; }
```

- *Type:* double

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCountInput"></a>

```csharp
public double McuCountInput { get; }
```

- *Type:* double

---

##### `MinWorkerCountInput`<sup>Optional</sup> <a name="MinWorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCountInput"></a>

```csharp
public double MinWorkerCountInput { get; }
```

- *Type:* double

---

##### `ScaleInPolicyInput`<sup>Optional</sup> <a name="ScaleInPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleInPolicyInput"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleInPolicy ScaleInPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---

##### `ScaleOutPolicyInput`<sup>Optional</sup> <a name="ScaleOutPolicyInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.scaleOutPolicyInput"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleOutPolicy ScaleOutPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.maxWorkerCount"></a>

```csharp
public double MaxWorkerCount { get; }
```

- *Type:* double

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.mcuCount"></a>

```csharp
public double McuCount { get; }
```

- *Type:* double

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.minWorkerCount"></a>

```csharp
public double MinWorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorCapacityAutoscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---


### MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```csharp
private void ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```csharp
public double CpuUtilizationPercentageInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicyOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleInPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleInPolicy">MskconnectConnectorCapacityAutoscalingScaleInPolicy</a>

---


### MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference <a name="MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">ResetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationPercentage` <a name="ResetCpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```csharp
private void ResetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">CpuUtilizationPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilizationPercentageInput`<sup>Optional</sup> <a name="CpuUtilizationPercentageInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```csharp
public double CpuUtilizationPercentageInput { get; }
```

- *Type:* double

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicyOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingScaleOutPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingScaleOutPolicy">MskconnectConnectorCapacityAutoscalingScaleOutPolicy</a>

---


### MskconnectConnectorCapacityOutputReference <a name="MskconnectConnectorCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling">PutAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity">PutProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling">ResetAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity">ResetProvisionedCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaling` <a name="PutAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling"></a>

```csharp
private void PutAutoscaling(MskconnectConnectorCapacityAutoscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `PutProvisionedCapacity` <a name="PutProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```csharp
private void PutProvisionedCapacity(MskconnectConnectorCapacityProvisionedCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `ResetAutoscaling` <a name="ResetAutoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetAutoscaling"></a>

```csharp
private void ResetAutoscaling()
```

##### `ResetProvisionedCapacity` <a name="ResetProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```csharp
private void ResetProvisionedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling">Autoscaling</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput">AutoscalingInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">ProvisionedCapacityInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autoscaling`<sup>Required</sup> <a name="Autoscaling" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscaling"></a>

```csharp
public MskconnectConnectorCapacityAutoscalingOutputReference Autoscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscalingOutputReference">MskconnectConnectorCapacityAutoscalingOutputReference</a>

---

##### `ProvisionedCapacity`<sup>Required</sup> <a name="ProvisionedCapacity" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```csharp
public MskconnectConnectorCapacityProvisionedCapacityOutputReference ProvisionedCapacity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference">MskconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `AutoscalingInput`<sup>Optional</sup> <a name="AutoscalingInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.autoscalingInput"></a>

```csharp
public MskconnectConnectorCapacityAutoscaling AutoscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityAutoscaling">MskconnectConnectorCapacityAutoscaling</a>

---

##### `ProvisionedCapacityInput`<sup>Optional</sup> <a name="ProvisionedCapacityInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```csharp
public MskconnectConnectorCapacityProvisionedCapacity ProvisionedCapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacity">MskconnectConnectorCapacity</a>

---


### MskconnectConnectorCapacityProvisionedCapacityOutputReference <a name="MskconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorCapacityProvisionedCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">ResetMcuCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMcuCount` <a name="ResetMcuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```csharp
private void ResetMcuCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">McuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">WorkerCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">McuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">WorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McuCountInput`<sup>Optional</sup> <a name="McuCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```csharp
public double McuCountInput { get; }
```

- *Type:* double

---

##### `WorkerCountInput`<sup>Optional</sup> <a name="WorkerCountInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```csharp
public double WorkerCountInput { get; }
```

- *Type:* double

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```csharp
public double McuCount { get; }
```

- *Type:* double

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```csharp
public double WorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorCapacityProvisionedCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorCapacityProvisionedCapacity">MskconnectConnectorCapacityProvisionedCapacity</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">PutVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpc` <a name="PutVpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```csharp
private void PutVpc(MskconnectConnectorKafkaClusterApacheKafkaClusterVpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">VpcInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">BootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```csharp
public string BootstrapServersInput { get; }
```

- *Type:* string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpc VpcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```csharp
public string BootstrapServers { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaClusterVpc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterVpc">MskconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### MskconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="MskconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorKafkaClusterClientAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterClientAuthentication">MskconnectConnectorKafkaClusterClientAuthentication</a>

---


### MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorKafkaClusterEncryptionInTransit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterEncryptionInTransit">MskconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### MskconnectConnectorKafkaClusterOutputReference <a name="MskconnectConnectorKafkaClusterOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorKafkaClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">PutApacheKafkaCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApacheKafkaCluster` <a name="PutApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```csharp
private void PutApacheKafkaCluster(MskconnectConnectorKafkaClusterApacheKafkaCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">ApacheKafkaClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference ApacheKafkaCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">MskconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `ApacheKafkaClusterInput`<sup>Optional</sup> <a name="ApacheKafkaClusterInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```csharp
public MskconnectConnectorKafkaClusterApacheKafkaCluster ApacheKafkaClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterApacheKafkaCluster">MskconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorKafkaCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorKafkaCluster">MskconnectConnectorKafkaCluster</a>

---


### MskconnectConnectorLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">PutWorkerLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorkerLogDelivery` <a name="PutWorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```csharp
private void PutWorkerLogDelivery(MskconnectConnectorLogDeliveryWorkerLogDelivery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">WorkerLogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkerLogDelivery`<sup>Required</sup> <a name="WorkerLogDelivery" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference WorkerLogDelivery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `WorkerLogDeliveryInput`<sup>Optional</sup> <a name="WorkerLogDeliveryInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDelivery WorkerLogDeliveryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorLogDelivery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDelivery">MskconnectConnectorLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```csharp
private void PutS3(MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">MskconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose FirehoseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">MskconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDelivery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDelivery">MskconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorLogDeliveryWorkerLogDeliveryS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorLogDeliveryWorkerLogDeliveryS3">MskconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### MskconnectConnectorPluginCustomPluginOutputReference <a name="MskconnectConnectorPluginCustomPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorPluginCustomPluginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorPluginCustomPlugin InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


### MskconnectConnectorPluginList <a name="MskconnectConnectorPluginList" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorPluginList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get"></a>

```csharp
private MskconnectConnectorPluginOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MskconnectConnectorPluginOutputReference <a name="MskconnectConnectorPluginOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorPluginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin">PutCustomPlugin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPlugin` <a name="PutCustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin"></a>

```csharp
private void PutCustomPlugin(MskconnectConnectorPluginCustomPlugin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput">CustomPluginInput</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPlugin"></a>

```csharp
public MskconnectConnectorPluginCustomPluginOutputReference CustomPlugin { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPluginOutputReference">MskconnectConnectorPluginCustomPluginOutputReference</a>

---

##### `CustomPluginInput`<sup>Optional</sup> <a name="CustomPluginInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.customPluginInput"></a>

```csharp
public MskconnectConnectorPluginCustomPlugin CustomPluginInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginCustomPlugin">MskconnectConnectorPluginCustomPlugin</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorPluginOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MskconnectConnectorTimeoutsOutputReference <a name="MskconnectConnectorTimeoutsOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MskconnectConnectorWorkerConfigurationOutputReference <a name="MskconnectConnectorWorkerConfigurationOutputReference" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new MskconnectConnectorWorkerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```csharp
public MskconnectConnectorWorkerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.mskconnectConnector.MskconnectConnectorWorkerConfiguration">MskconnectConnectorWorkerConfiguration</a>

---



