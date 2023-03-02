# `dataAwsMqBrokerInstanceTypeOfferings` Submodule <a name="`dataAwsMqBrokerInstanceTypeOfferings` Submodule" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMqBrokerInstanceTypeOfferings <a name="DataAwsMqBrokerInstanceTypeOfferings" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings aws_mq_broker_instance_type_offerings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferings(Construct Scope, string Id, DataAwsMqBrokerInstanceTypeOfferingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig">DataAwsMqBrokerInstanceTypeOfferingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig">DataAwsMqBrokerInstanceTypeOfferingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetEngineType">ResetEngineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetHostInstanceType">ResetHostInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetStorageType">ResetStorageType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngineType` <a name="ResetEngineType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetEngineType"></a>

```csharp
private void ResetEngineType()
```

##### `ResetHostInstanceType` <a name="ResetHostInstanceType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetHostInstanceType"></a>

```csharp
private void ResetHostInstanceType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMqBrokerInstanceTypeOfferings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMqBrokerInstanceTypeOfferings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsMqBrokerInstanceTypeOfferings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.brokerInstanceOptions">BrokerInstanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceTypeInput">HostInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BrokerInstanceOptions`<sup>Required</sup> <a name="BrokerInstanceOptions" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.brokerInstanceOptions"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList BrokerInstanceOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList</a>

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `HostInstanceTypeInput`<sup>Optional</sup> <a name="HostInstanceTypeInput" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceTypeInput"></a>

```csharp
public string HostInstanceTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `HostInstanceType`<sup>Required</sup> <a name="HostInstanceType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions {

};
```


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones {

};
```


### DataAwsMqBrokerInstanceTypeOfferingsConfig <a name="DataAwsMqBrokerInstanceTypeOfferingsConfig" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EngineType = null,
    string HostInstanceType = null,
    string Id = null,
    string StorageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.engineType">EngineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#engine_type DataAwsMqBrokerInstanceTypeOfferings#engine_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#host_instance_type DataAwsMqBrokerInstanceTypeOfferings#host_instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#id DataAwsMqBrokerInstanceTypeOfferings#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#storage_type DataAwsMqBrokerInstanceTypeOfferings#storage_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EngineType`<sup>Optional</sup> <a name="EngineType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#engine_type DataAwsMqBrokerInstanceTypeOfferings#engine_type}.

---

##### `HostInstanceType`<sup>Optional</sup> <a name="HostInstanceType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#host_instance_type DataAwsMqBrokerInstanceTypeOfferings#host_instance_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#id DataAwsMqBrokerInstanceTypeOfferings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker_instance_type_offerings#storage_type DataAwsMqBrokerInstanceTypeOfferings#storage_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.get"></a>

```csharp
private DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.internalValue"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones</a>

---


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.get"></a>

```csharp
private DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedDeploymentModes">SupportedDeploymentModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedEngineVersions">SupportedEngineVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.availabilityZones"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList AvailabilityZones { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList</a>

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `HostInstanceType`<sup>Required</sup> <a name="HostInstanceType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SupportedDeploymentModes`<sup>Required</sup> <a name="SupportedDeploymentModes" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedDeploymentModes"></a>

```csharp
public string[] SupportedDeploymentModes { get; }
```

- *Type:* string[]

---

##### `SupportedEngineVersions`<sup>Required</sup> <a name="SupportedEngineVersions" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedEngineVersions"></a>

```csharp
public string[] SupportedEngineVersions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions</a>

---



