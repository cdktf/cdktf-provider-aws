# `globalacceleratorEndpointGroup` Submodule <a name="`globalacceleratorEndpointGroup` Submodule" id="@cdktf/provider-aws.globalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorEndpointGroup <a name="GlobalacceleratorEndpointGroup" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroup(Construct Scope, string Id, GlobalacceleratorEndpointGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration">PutEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride">PutPortOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration">ResetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion">ResetEndpointGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds">ResetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort">ResetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol">ResetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride">ResetPortOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount">ResetThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage">ResetTrafficDialPercentage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEndpointConfiguration` <a name="PutEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration"></a>

```csharp
private void PutEndpointConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutPortOverride` <a name="PutPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride"></a>

```csharp
private void PutPortOverride(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverride.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GlobalacceleratorEndpointGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

---

##### `ResetEndpointConfiguration` <a name="ResetEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfiguration"></a>

```csharp
private void ResetEndpointConfiguration()
```

##### `ResetEndpointGroupRegion` <a name="ResetEndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointGroupRegion"></a>

```csharp
private void ResetEndpointGroupRegion()
```

##### `ResetHealthCheckIntervalSeconds` <a name="ResetHealthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds"></a>

```csharp
private void ResetHealthCheckIntervalSeconds()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath"></a>

```csharp
private void ResetHealthCheckPath()
```

##### `ResetHealthCheckPort` <a name="ResetHealthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort"></a>

```csharp
private void ResetHealthCheckPort()
```

##### `ResetHealthCheckProtocol` <a name="ResetHealthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol"></a>

```csharp
private void ResetHealthCheckProtocol()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPortOverride` <a name="ResetPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverride"></a>

```csharp
private void ResetPortOverride()
```

##### `ResetThresholdCount` <a name="ResetThresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount"></a>

```csharp
private void ResetThresholdCount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficDialPercentage` <a name="ResetTrafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage"></a>

```csharp
private void ResetTrafficDialPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorEndpointGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorEndpointGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorEndpointGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride">PortOverride</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput">EndpointConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput">EndpointGroupRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput">HealthCheckIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput">HealthCheckPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput">HealthCheckProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput">ListenerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput">PortOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput">ThresholdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput">TrafficDialPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort">HealthCheckPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount">ThresholdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfiguration"></a>

```csharp
public GlobalacceleratorEndpointGroupEndpointConfigurationList EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList">GlobalacceleratorEndpointGroupEndpointConfigurationList</a>

---

##### `PortOverride`<sup>Required</sup> <a name="PortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverride"></a>

```csharp
public GlobalacceleratorEndpointGroupPortOverrideList PortOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList">GlobalacceleratorEndpointGroupPortOverrideList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeouts"></a>

```csharp
public GlobalacceleratorEndpointGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference">GlobalacceleratorEndpointGroupTimeoutsOutputReference</a>

---

##### `EndpointConfigurationInput`<sup>Optional</sup> <a name="EndpointConfigurationInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationInput"></a>

```csharp
public object EndpointConfigurationInput { get; }
```

- *Type:* object

---

##### `EndpointGroupRegionInput`<sup>Optional</sup> <a name="EndpointGroupRegionInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput"></a>

```csharp
public string EndpointGroupRegionInput { get; }
```

- *Type:* string

---

##### `HealthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="HealthCheckIntervalSecondsInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput"></a>

```csharp
public double HealthCheckIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput"></a>

```csharp
public string HealthCheckPathInput { get; }
```

- *Type:* string

---

##### `HealthCheckPortInput`<sup>Optional</sup> <a name="HealthCheckPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput"></a>

```csharp
public double HealthCheckPortInput { get; }
```

- *Type:* double

---

##### `HealthCheckProtocolInput`<sup>Optional</sup> <a name="HealthCheckProtocolInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput"></a>

```csharp
public string HealthCheckProtocolInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput"></a>

```csharp
public string ListenerArnInput { get; }
```

- *Type:* string

---

##### `PortOverrideInput`<sup>Optional</sup> <a name="PortOverrideInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrideInput"></a>

```csharp
public object PortOverrideInput { get; }
```

- *Type:* object

---

##### `ThresholdCountInput`<sup>Optional</sup> <a name="ThresholdCountInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput"></a>

```csharp
public double ThresholdCountInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrafficDialPercentageInput`<sup>Optional</sup> <a name="TrafficDialPercentageInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput"></a>

```csharp
public double TrafficDialPercentageInput { get; }
```

- *Type:* double

---

##### `EndpointGroupRegion`<sup>Required</sup> <a name="EndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```csharp
public string EndpointGroupRegion { get; }
```

- *Type:* string

---

##### `HealthCheckIntervalSeconds`<sup>Required</sup> <a name="HealthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```csharp
public double HealthCheckIntervalSeconds { get; }
```

- *Type:* double

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `HealthCheckPort`<sup>Required</sup> <a name="HealthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```csharp
public double HealthCheckPort { get; }
```

- *Type:* double

---

##### `HealthCheckProtocol`<sup>Required</sup> <a name="HealthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```csharp
public string HealthCheckProtocol { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

##### `ThresholdCount`<sup>Required</sup> <a name="ThresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```csharp
public double ThresholdCount { get; }
```

- *Type:* double

---

##### `TrafficDialPercentage`<sup>Required</sup> <a name="TrafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```csharp
public double TrafficDialPercentage { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorEndpointGroupConfig <a name="GlobalacceleratorEndpointGroupConfig" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ListenerArn,
    object EndpointConfiguration = null,
    string EndpointGroupRegion = null,
    double HealthCheckIntervalSeconds = null,
    string HealthCheckPath = null,
    double HealthCheckPort = null,
    string HealthCheckProtocol = null,
    string Id = null,
    object PortOverride = null,
    double ThresholdCount = null,
    GlobalacceleratorEndpointGroupTimeouts Timeouts = null,
    double TrafficDialPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn">ListenerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration">EndpointConfiguration</a></code> | <code>object</code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort">HealthCheckPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride">PortOverride</a></code> | <code>object</code> | port_override block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount">ThresholdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn"></a>

```csharp
public string ListenerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}.

---

##### `EndpointConfiguration`<sup>Optional</sup> <a name="EndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfiguration"></a>

```csharp
public object EndpointConfiguration { get; set; }
```

- *Type:* object

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}

---

##### `EndpointGroupRegion`<sup>Optional</sup> <a name="EndpointGroupRegion" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion"></a>

```csharp
public string EndpointGroupRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}.

---

##### `HealthCheckIntervalSeconds`<sup>Optional</sup> <a name="HealthCheckIntervalSeconds" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds"></a>

```csharp
public double HealthCheckIntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `HealthCheckPort`<sup>Optional</sup> <a name="HealthCheckPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort"></a>

```csharp
public double HealthCheckPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}.

---

##### `HealthCheckProtocol`<sup>Optional</sup> <a name="HealthCheckProtocol" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol"></a>

```csharp
public string HealthCheckProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PortOverride`<sup>Optional</sup> <a name="PortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverride"></a>

```csharp
public object PortOverride { get; set; }
```

- *Type:* object

port_override block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#port_override GlobalacceleratorEndpointGroup#port_override}

---

##### `ThresholdCount`<sup>Optional</sup> <a name="ThresholdCount" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount"></a>

```csharp
public double ThresholdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.timeouts"></a>

```csharp
public GlobalacceleratorEndpointGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts">GlobalacceleratorEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#timeouts GlobalacceleratorEndpointGroup#timeouts}

---

##### `TrafficDialPercentage`<sup>Optional</sup> <a name="TrafficDialPercentage" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage"></a>

```csharp
public double TrafficDialPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}.

---

### GlobalacceleratorEndpointGroupEndpointConfiguration <a name="GlobalacceleratorEndpointGroupEndpointConfiguration" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupEndpointConfiguration {
    object ClientIpPreservationEnabled = null,
    string EndpointId = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled">ClientIpPreservationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}. |

---

##### `ClientIpPreservationEnabled`<sup>Optional</sup> <a name="ClientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.clientIpPreservationEnabled"></a>

```csharp
public object ClientIpPreservationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}.

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfiguration.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}.

---

### GlobalacceleratorEndpointGroupPortOverride <a name="GlobalacceleratorEndpointGroupPortOverride" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupPortOverride {
    double EndpointPort,
    double ListenerPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort">EndpointPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort">ListenerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}. |

---

##### `EndpointPort`<sup>Required</sup> <a name="EndpointPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.endpointPort"></a>

```csharp
public double EndpointPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}.

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverride.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}.

---

### GlobalacceleratorEndpointGroupTimeouts <a name="GlobalacceleratorEndpointGroupTimeouts" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorEndpointGroupEndpointConfigurationList <a name="GlobalacceleratorEndpointGroupEndpointConfigurationList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupEndpointConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get"></a>

```csharp
private GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference <a name="GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled">ResetClientIpPreservationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId">ResetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientIpPreservationEnabled` <a name="ResetClientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetClientIpPreservationEnabled"></a>

```csharp
private void ResetClientIpPreservationEnabled()
```

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetEndpointId"></a>

```csharp
private void ResetEndpointId()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput">ClientIpPreservationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled">ClientIpPreservationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIpPreservationEnabledInput`<sup>Optional</sup> <a name="ClientIpPreservationEnabledInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabledInput"></a>

```csharp
public object ClientIpPreservationEnabledInput { get; }
```

- *Type:* object

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `ClientIpPreservationEnabled`<sup>Required</sup> <a name="ClientIpPreservationEnabled" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.clientIpPreservationEnabled"></a>

```csharp
public object ClientIpPreservationEnabled { get; }
```

- *Type:* object

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorEndpointGroupPortOverrideList <a name="GlobalacceleratorEndpointGroupPortOverrideList" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupPortOverrideList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get"></a>

```csharp
private GlobalacceleratorEndpointGroupPortOverrideOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorEndpointGroupPortOverrideOutputReference <a name="GlobalacceleratorEndpointGroupPortOverrideOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupPortOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput">EndpointPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort">EndpointPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointPortInput`<sup>Optional</sup> <a name="EndpointPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPortInput"></a>

```csharp
public double EndpointPortInput { get; }
```

- *Type:* double

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `EndpointPort`<sup>Required</sup> <a name="EndpointPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.endpointPort"></a>

```csharp
public double EndpointPort { get; }
```

- *Type:* double

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrideOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorEndpointGroupTimeoutsOutputReference <a name="GlobalacceleratorEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorEndpointGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



