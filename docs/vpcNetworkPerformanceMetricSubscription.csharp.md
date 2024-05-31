# `vpcNetworkPerformanceMetricSubscription` Submodule <a name="`vpcNetworkPerformanceMetricSubscription` Submodule" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcNetworkPerformanceMetricSubscription <a name="VpcNetworkPerformanceMetricSubscription" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription aws_vpc_network_performance_metric_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcNetworkPerformanceMetricSubscription(Construct Scope, string Id, VpcNetworkPerformanceMetricSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig">VpcNetworkPerformanceMetricSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig">VpcNetworkPerformanceMetricSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetStatistic">ResetStatistic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.resetStatistic"></a>

```csharp
private void ResetStatistic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcNetworkPerformanceMetricSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcNetworkPerformanceMetricSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcNetworkPerformanceMetricSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcNetworkPerformanceMetricSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcNetworkPerformanceMetricSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpcNetworkPerformanceMetricSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcNetworkPerformanceMetricSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcNetworkPerformanceMetricSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpcNetworkPerformanceMetricSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcNetworkPerformanceMetricSubscriptionConfig <a name="VpcNetworkPerformanceMetricSubscriptionConfig" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcNetworkPerformanceMetricSubscriptionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Destination,
    string Source,
    string Id = null,
    string Metric = null,
    string Statistic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.metric">Metric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}. |
| <code><a href="#@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#destination VpcNetworkPerformanceMetricSubscription#destination}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#source VpcNetworkPerformanceMetricSubscription#source}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#id VpcNetworkPerformanceMetricSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#metric VpcNetworkPerformanceMetricSubscription#metric}.

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktf/provider-aws.vpcNetworkPerformanceMetricSubscription.VpcNetworkPerformanceMetricSubscriptionConfig.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/vpc_network_performance_metric_subscription#statistic VpcNetworkPerformanceMetricSubscription#statistic}.

---



