# `internetmonitorMonitor` Submodule <a name="`internetmonitorMonitor` Submodule" id="@cdktf/provider-aws.internetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InternetmonitorMonitor <a name="InternetmonitorMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor aws_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitor(Construct Scope, string Id, InternetmonitorMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig">PutHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery">PutInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig">ResetHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery">ResetInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor">ResetMaxCityNetworksToMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor">ResetTrafficPercentageToMonitor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthEventsConfig` <a name="PutHealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig"></a>

```csharp
private void PutHealthEventsConfig(InternetmonitorMonitorHealthEventsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `PutInternetMeasurementsLogDelivery` <a name="PutInternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery"></a>

```csharp
private void PutInternetMeasurementsLogDelivery(InternetmonitorMonitorInternetMeasurementsLogDelivery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `ResetHealthEventsConfig` <a name="ResetHealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig"></a>

```csharp
private void ResetHealthEventsConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternetMeasurementsLogDelivery` <a name="ResetInternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery"></a>

```csharp
private void ResetInternetMeasurementsLogDelivery()
```

##### `ResetMaxCityNetworksToMonitor` <a name="ResetMaxCityNetworksToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor"></a>

```csharp
private void ResetMaxCityNetworksToMonitor()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetResources"></a>

```csharp
private void ResetResources()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTrafficPercentageToMonitor` <a name="ResetTrafficPercentageToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor"></a>

```csharp
private void ResetTrafficPercentageToMonitor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InternetmonitorMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InternetmonitorMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InternetmonitorMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

InternetmonitorMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InternetmonitorMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InternetmonitorMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput">HealthEventsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput">InternetMeasurementsLogDeliveryInput</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput">MaxCityNetworksToMonitorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput">TrafficPercentageToMonitorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HealthEventsConfig`<sup>Required</sup> <a name="HealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfigOutputReference HealthEventsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `InternetMeasurementsLogDelivery`<sup>Required</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference InternetMeasurementsLogDelivery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `HealthEventsConfigInput`<sup>Optional</sup> <a name="HealthEventsConfigInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfig HealthEventsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternetMeasurementsLogDeliveryInput`<sup>Optional</sup> <a name="InternetMeasurementsLogDeliveryInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDelivery InternetMeasurementsLogDeliveryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `MaxCityNetworksToMonitorInput`<sup>Optional</sup> <a name="MaxCityNetworksToMonitorInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput"></a>

```csharp
public double MaxCityNetworksToMonitorInput { get; }
```

- *Type:* double

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput"></a>

```csharp
public string MonitorNameInput { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrafficPercentageToMonitorInput`<sup>Optional</sup> <a name="TrafficPercentageToMonitorInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput"></a>

```csharp
public double TrafficPercentageToMonitorInput { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxCityNetworksToMonitor`<sup>Required</sup> <a name="MaxCityNetworksToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```csharp
public double MaxCityNetworksToMonitor { get; }
```

- *Type:* double

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrafficPercentageToMonitor`<sup>Required</sup> <a name="TrafficPercentageToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```csharp
public double TrafficPercentageToMonitor { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InternetmonitorMonitorConfig <a name="InternetmonitorMonitorConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MonitorName,
    InternetmonitorMonitorHealthEventsConfig HealthEventsConfig = null,
    string Id = null,
    InternetmonitorMonitorInternetMeasurementsLogDelivery InternetMeasurementsLogDelivery = null,
    double MaxCityNetworksToMonitor = null,
    string[] Resources = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double TrafficPercentageToMonitor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName">MonitorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | health_events_config block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | internet_measurements_log_delivery block. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName"></a>

```csharp
public string MonitorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}.

---

##### `HealthEventsConfig`<sup>Optional</sup> <a name="HealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfig HealthEventsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

health_events_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#id InternetmonitorMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetMeasurementsLogDelivery`<sup>Optional</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDelivery InternetMeasurementsLogDelivery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

internet_measurements_log_delivery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}

---

##### `MaxCityNetworksToMonitor`<sup>Optional</sup> <a name="MaxCityNetworksToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor"></a>

```csharp
public double MaxCityNetworksToMonitor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#tags_all InternetmonitorMonitor#tags_all}.

---

##### `TrafficPercentageToMonitor`<sup>Optional</sup> <a name="TrafficPercentageToMonitor" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor"></a>

```csharp
public double TrafficPercentageToMonitor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}.

---

### InternetmonitorMonitorHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfig" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitorHealthEventsConfig {
    double AvailabilityScoreThreshold = null,
    double PerformanceScoreThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}. |

---

##### `AvailabilityScoreThreshold`<sup>Optional</sup> <a name="AvailabilityScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold"></a>

```csharp
public double AvailabilityScoreThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}.

---

##### `PerformanceScoreThreshold`<sup>Optional</sup> <a name="PerformanceScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold"></a>

```csharp
public double PerformanceScoreThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}.

---

### InternetmonitorMonitorInternetMeasurementsLogDelivery <a name="InternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitorInternetMeasurementsLogDelivery {
    InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config S3Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config">S3Config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | s3_config block. |

---

##### `S3Config`<sup>Optional</sup> <a name="S3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config S3Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

s3_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}

---

### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
    string BucketName,
    string BucketPrefix = null,
    string LogDeliveryStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}.

---

##### `LogDeliveryStatus`<sup>Optional</sup> <a name="LogDeliveryStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus"></a>

```csharp
public string LogDeliveryStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### InternetmonitorMonitorHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitorHealthEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold">ResetAvailabilityScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold">ResetPerformanceScoreThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityScoreThreshold` <a name="ResetAvailabilityScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold"></a>

```csharp
private void ResetAvailabilityScoreThreshold()
```

##### `ResetPerformanceScoreThreshold` <a name="ResetPerformanceScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold"></a>

```csharp
private void ResetPerformanceScoreThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput">AvailabilityScoreThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput">PerformanceScoreThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityScoreThresholdInput`<sup>Optional</sup> <a name="AvailabilityScoreThresholdInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput"></a>

```csharp
public double AvailabilityScoreThresholdInput { get; }
```

- *Type:* double

---

##### `PerformanceScoreThresholdInput`<sup>Optional</sup> <a name="PerformanceScoreThresholdInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput"></a>

```csharp
public double PerformanceScoreThresholdInput { get; }
```

- *Type:* double

---

##### `AvailabilityScoreThreshold`<sup>Required</sup> <a name="AvailabilityScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```csharp
public double AvailabilityScoreThreshold { get; }
```

- *Type:* double

---

##### `PerformanceScoreThreshold`<sup>Required</sup> <a name="PerformanceScoreThreshold" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```csharp
public double PerformanceScoreThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```csharp
public InternetmonitorMonitorHealthEventsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config">ResetS3Config</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Config` <a name="PutS3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config"></a>

```csharp
private void PutS3Config(InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `ResetS3Config` <a name="ResetS3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config"></a>

```csharp
private void ResetS3Config()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput">S3ConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference S3Config { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config S3ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDelivery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus">ResetLogDeliveryStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```

##### `ResetLogDeliveryStatus` <a name="ResetLogDeliveryStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus"></a>

```csharp
private void ResetLogDeliveryStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput">LogDeliveryStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `LogDeliveryStatusInput`<sup>Optional</sup> <a name="LogDeliveryStatusInput" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput"></a>

```csharp
public string LogDeliveryStatusInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `LogDeliveryStatus`<sup>Required</sup> <a name="LogDeliveryStatus" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```csharp
public string LogDeliveryStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```csharp
public InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---



