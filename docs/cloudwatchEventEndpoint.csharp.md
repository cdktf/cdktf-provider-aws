# `cloudwatchEventEndpoint` Submodule <a name="`cloudwatchEventEndpoint` Submodule" id="@cdktf/provider-aws.cloudwatchEventEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventEndpoint <a name="CloudwatchEventEndpoint" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpoint(Construct Scope, string Id, CloudwatchEventEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig">CloudwatchEventEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig">CloudwatchEventEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus">PutEventBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig">PutReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig">PutRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetReplicationConfig">ResetReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventBus` <a name="PutEventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus"></a>

```csharp
private void PutEventBus(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putEventBus.parameter.value"></a>

- *Type:* object

---

##### `PutReplicationConfig` <a name="PutReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig"></a>

```csharp
private void PutReplicationConfig(CloudwatchEventEndpointReplicationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putReplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---

##### `PutRoutingConfig` <a name="PutRoutingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig"></a>

```csharp
private void PutRoutingConfig(CloudwatchEventEndpointRoutingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.putRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReplicationConfig` <a name="ResetReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetReplicationConfig"></a>

```csharp
private void ResetReplicationConfig()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchEventEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchEventEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchEventEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchEventEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudwatchEventEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudwatchEventEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchEventEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchEventEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchEventEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.endpointUrl">EndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBus">EventBus</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList">CloudwatchEventEndpointEventBusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfig">ReplicationConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference">CloudwatchEventEndpointReplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference">CloudwatchEventEndpointRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBusInput">EventBusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfigInput">ReplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfigInput">RoutingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.endpointUrl"></a>

```csharp
public string EndpointUrl { get; }
```

- *Type:* string

---

##### `EventBus`<sup>Required</sup> <a name="EventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBus"></a>

```csharp
public CloudwatchEventEndpointEventBusList EventBus { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList">CloudwatchEventEndpointEventBusList</a>

---

##### `ReplicationConfig`<sup>Required</sup> <a name="ReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfig"></a>

```csharp
public CloudwatchEventEndpointReplicationConfigOutputReference ReplicationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference">CloudwatchEventEndpointReplicationConfigOutputReference</a>

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfig"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigOutputReference RoutingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference">CloudwatchEventEndpointRoutingConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventBusInput`<sup>Optional</sup> <a name="EventBusInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.eventBusInput"></a>

```csharp
public object EventBusInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicationConfigInput`<sup>Optional</sup> <a name="ReplicationConfigInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.replicationConfigInput"></a>

```csharp
public CloudwatchEventEndpointReplicationConfig ReplicationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoutingConfigInput`<sup>Optional</sup> <a name="RoutingConfigInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.routingConfigInput"></a>

```csharp
public CloudwatchEventEndpointRoutingConfig RoutingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventEndpointConfig <a name="CloudwatchEventEndpointConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object EventBus,
    string Name,
    CloudwatchEventEndpointRoutingConfig RoutingConfig,
    string Description = null,
    string Id = null,
    CloudwatchEventEndpointReplicationConfig ReplicationConfig = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.eventBus">EventBus</a></code> | <code>object</code> | event_bus block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.routingConfig">RoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | routing_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.replicationConfig">ReplicationConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | replication_config block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EventBus`<sup>Required</sup> <a name="EventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.eventBus"></a>

```csharp
public object EventBus { get; set; }
```

- *Type:* object

event_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#event_bus CloudwatchEventEndpoint#event_bus}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}.

---

##### `RoutingConfig`<sup>Required</sup> <a name="RoutingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.routingConfig"></a>

```csharp
public CloudwatchEventEndpointRoutingConfig RoutingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#routing_config CloudwatchEventEndpoint#routing_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicationConfig`<sup>Optional</sup> <a name="ReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.replicationConfig"></a>

```csharp
public CloudwatchEventEndpointReplicationConfig ReplicationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

replication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#replication_config CloudwatchEventEndpoint#replication_config}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}.

---

### CloudwatchEventEndpointEventBus <a name="CloudwatchEventEndpointEventBus" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointEventBus {
    string EventBusArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}. |

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBus.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}.

---

### CloudwatchEventEndpointReplicationConfig <a name="CloudwatchEventEndpointReplicationConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointReplicationConfig {
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}.

---

### CloudwatchEventEndpointRoutingConfig <a name="CloudwatchEventEndpointRoutingConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfig {
    CloudwatchEventEndpointRoutingConfigFailoverConfig FailoverConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | failover_config block. |

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig.property.failoverConfig"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfig FailoverConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

failover_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#failover_config CloudwatchEventEndpoint#failover_config}

---

### CloudwatchEventEndpointRoutingConfigFailoverConfig <a name="CloudwatchEventEndpointRoutingConfigFailoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfigFailoverConfig {
    CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary Primary,
    CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary Secondary
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | primary block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.secondary">Secondary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | secondary block. |

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.primary"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary Primary { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

primary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#primary CloudwatchEventEndpoint#primary}

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig.property.secondary"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary Secondary { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

secondary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#secondary CloudwatchEventEndpoint#secondary}

---

### CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary {
    string HealthCheck = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck">HealthCheck</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}. |

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary.property.healthCheck"></a>

```csharp
public string HealthCheck { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}.

---

### CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary {
    string Route = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.property.route">Route</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}. |

---

##### `Route`<sup>Optional</sup> <a name="Route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary.property.route"></a>

```csharp
public string Route { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventEndpointEventBusList <a name="CloudwatchEventEndpointEventBusList" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointEventBusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get"></a>

```csharp
private CloudwatchEventEndpointEventBusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventEndpointEventBusOutputReference <a name="CloudwatchEventEndpointEventBusOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointEventBusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArnInput">EventBusArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArnInput"></a>

```csharp
public string EventBusArnInput { get; }
```

- *Type:* string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.eventBusArn"></a>

```csharp
public string EventBusArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointEventBusOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudwatchEventEndpointReplicationConfigOutputReference <a name="CloudwatchEventEndpointReplicationConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointReplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfigOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventEndpointReplicationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointReplicationConfig">CloudwatchEventEndpointReplicationConfig</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary">PutPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary">PutSecondary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimary` <a name="PutPrimary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary"></a>

```csharp
private void PutPrimary(CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putPrimary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `PutSecondary` <a name="PutSecondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary"></a>

```csharp
private void PutSecondary(CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.putSecondary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primary">Primary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondary">Secondary</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput">PrimaryInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput">SecondaryInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primary"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference Primary { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference</a>

---

##### `Secondary`<sup>Required</sup> <a name="Secondary" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondary"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference Secondary { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference</a>

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.primaryInput"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary PrimaryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---

##### `SecondaryInput`<sup>Optional</sup> <a name="SecondaryInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.secondaryInput"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary SecondaryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck">HealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheckInput"></a>

```csharp
public string HealthCheckInput { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.healthCheck"></a>

```csharp
public string HealthCheck { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary">CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary</a>

---


### CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference <a name="CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resetRoute">ResetRoute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoute` <a name="ResetRoute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.resetRoute"></a>

```csharp
private void ResetRoute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput">RouteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route">Route</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RouteInput`<sup>Optional</sup> <a name="RouteInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.routeInput"></a>

```csharp
public string RouteInput { get; }
```

- *Type:* string

---

##### `Route`<sup>Required</sup> <a name="Route" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.route"></a>

```csharp
public string Route { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary">CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary</a>

---


### CloudwatchEventEndpointRoutingConfigOutputReference <a name="CloudwatchEventEndpointRoutingConfigOutputReference" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudwatchEventEndpointRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig">PutFailoverConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFailoverConfig` <a name="PutFailoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig"></a>

```csharp
private void PutFailoverConfig(CloudwatchEventEndpointRoutingConfigFailoverConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.putFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfig">FailoverConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfigInput">FailoverConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverConfig`<sup>Required</sup> <a name="FailoverConfig" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfig"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference FailoverConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference">CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference</a>

---

##### `FailoverConfigInput`<sup>Optional</sup> <a name="FailoverConfigInput" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.failoverConfigInput"></a>

```csharp
public CloudwatchEventEndpointRoutingConfigFailoverConfig FailoverConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigFailoverConfig">CloudwatchEventEndpointRoutingConfigFailoverConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public CloudwatchEventEndpointRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventEndpoint.CloudwatchEventEndpointRoutingConfig">CloudwatchEventEndpointRoutingConfig</a>

---



