# `codedeployDeploymentConfig` Submodule <a name="`codedeployDeploymentConfig` Submodule" id="@cdktf/provider-aws.codedeployDeploymentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodedeployDeploymentConfig <a name="CodedeployDeploymentConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config aws_codedeploy_deployment_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfig(Construct Scope, string Id, CodedeployDeploymentConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig">CodedeployDeploymentConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig">CodedeployDeploymentConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts">PutMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig">PutTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig">PutZonalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform">ResetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts">ResetMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig">ResetTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetZonalConfig">ResetZonalConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMinimumHealthyHosts` <a name="PutMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts"></a>

```csharp
private void PutMinimumHealthyHosts(CodedeployDeploymentConfigMinimumHealthyHosts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putMinimumHealthyHosts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `PutTrafficRoutingConfig` <a name="PutTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig"></a>

```csharp
private void PutTrafficRoutingConfig(CodedeployDeploymentConfigTrafficRoutingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putTrafficRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `PutZonalConfig` <a name="PutZonalConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig"></a>

```csharp
private void PutZonalConfig(CodedeployDeploymentConfigZonalConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.putZonalConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---

##### `ResetComputePlatform` <a name="ResetComputePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetComputePlatform"></a>

```csharp
private void ResetComputePlatform()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinimumHealthyHosts` <a name="ResetMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetMinimumHealthyHosts"></a>

```csharp
private void ResetMinimumHealthyHosts()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTrafficRoutingConfig` <a name="ResetTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetTrafficRoutingConfig"></a>

```csharp
private void ResetTrafficRoutingConfig()
```

##### `ResetZonalConfig` <a name="ResetZonalConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.resetZonalConfig"></a>

```csharp
private void ResetZonalConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodedeployDeploymentConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodedeployDeploymentConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodedeployDeploymentConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodedeployDeploymentConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodedeployDeploymentConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CodedeployDeploymentConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodedeployDeploymentConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodedeployDeploymentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CodedeployDeploymentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigId">DeploymentConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts">MinimumHealthyHosts</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig">TrafficRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfig">ZonalConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference">CodedeployDeploymentConfigZonalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput">ComputePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput">DeploymentConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput">MinimumHealthyHostsInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput">TrafficRoutingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfigInput">ZonalConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeploymentConfigId`<sup>Required</sup> <a name="DeploymentConfigId" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigId"></a>

```csharp
public string DeploymentConfigId { get; }
```

- *Type:* string

---

##### `MinimumHealthyHosts`<sup>Required</sup> <a name="MinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHosts"></a>

```csharp
public CodedeployDeploymentConfigMinimumHealthyHostsOutputReference MinimumHealthyHosts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference">CodedeployDeploymentConfigMinimumHealthyHostsOutputReference</a>

---

##### `TrafficRoutingConfig`<sup>Required</sup> <a name="TrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfig"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigOutputReference TrafficRoutingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigOutputReference</a>

---

##### `ZonalConfig`<sup>Required</sup> <a name="ZonalConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfig"></a>

```csharp
public CodedeployDeploymentConfigZonalConfigOutputReference ZonalConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference">CodedeployDeploymentConfigZonalConfigOutputReference</a>

---

##### `ComputePlatformInput`<sup>Optional</sup> <a name="ComputePlatformInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatformInput"></a>

```csharp
public string ComputePlatformInput { get; }
```

- *Type:* string

---

##### `DeploymentConfigNameInput`<sup>Optional</sup> <a name="DeploymentConfigNameInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigNameInput"></a>

```csharp
public string DeploymentConfigNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MinimumHealthyHostsInput`<sup>Optional</sup> <a name="MinimumHealthyHostsInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.minimumHealthyHostsInput"></a>

```csharp
public CodedeployDeploymentConfigMinimumHealthyHosts MinimumHealthyHostsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TrafficRoutingConfigInput`<sup>Optional</sup> <a name="TrafficRoutingConfigInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.trafficRoutingConfigInput"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfig TrafficRoutingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---

##### `ZonalConfigInput`<sup>Optional</sup> <a name="ZonalConfigInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.zonalConfigInput"></a>

```csharp
public CodedeployDeploymentConfigZonalConfig ZonalConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---

##### `ComputePlatform`<sup>Required</sup> <a name="ComputePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; }
```

- *Type:* string

---

##### `DeploymentConfigName`<sup>Required</sup> <a name="DeploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodedeployDeploymentConfigConfig <a name="CodedeployDeploymentConfigConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DeploymentConfigName,
    string ComputePlatform = null,
    string Id = null,
    CodedeployDeploymentConfigMinimumHealthyHosts MinimumHealthyHosts = null,
    string Region = null,
    CodedeployDeploymentConfigTrafficRoutingConfig TrafficRoutingConfig = null,
    CodedeployDeploymentConfigZonalConfig ZonalConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName">DeploymentConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts">MinimumHealthyHosts</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | minimum_healthy_hosts block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig">TrafficRoutingConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | traffic_routing_config block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.zonalConfig">ZonalConfig</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | zonal_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DeploymentConfigName`<sup>Required</sup> <a name="DeploymentConfigName" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.deploymentConfigName"></a>

```csharp
public string DeploymentConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}.

---

##### `ComputePlatform`<sup>Optional</sup> <a name="ComputePlatform" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinimumHealthyHosts`<sup>Optional</sup> <a name="MinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.minimumHealthyHosts"></a>

```csharp
public CodedeployDeploymentConfigMinimumHealthyHosts MinimumHealthyHosts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

minimum_healthy_hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#region CodedeployDeploymentConfig#region}

---

##### `TrafficRoutingConfig`<sup>Optional</sup> <a name="TrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.trafficRoutingConfig"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfig TrafficRoutingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

traffic_routing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}

---

##### `ZonalConfig`<sup>Optional</sup> <a name="ZonalConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigConfig.property.zonalConfig"></a>

```csharp
public CodedeployDeploymentConfigZonalConfig ZonalConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

zonal_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}

---

### CodedeployDeploymentConfigMinimumHealthyHosts <a name="CodedeployDeploymentConfigMinimumHealthyHosts" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigMinimumHealthyHosts {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

### CodedeployDeploymentConfigTrafficRoutingConfig <a name="CodedeployDeploymentConfigTrafficRoutingConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigTrafficRoutingConfig {
    CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary TimeBasedCanary = null,
    CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear TimeBasedLinear = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary">TimeBasedCanary</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | time_based_canary block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear">TimeBasedLinear</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | time_based_linear block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |

---

##### `TimeBasedCanary`<sup>Optional</sup> <a name="TimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedCanary"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary TimeBasedCanary { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

time_based_canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}

---

##### `TimeBasedLinear`<sup>Optional</sup> <a name="TimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.timeBasedLinear"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear TimeBasedLinear { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

time_based_linear block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
    double Interval = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.percentage">Percentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}.

---

### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
    double Interval = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.percentage">Percentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}.

---

### CodedeployDeploymentConfigZonalConfig <a name="CodedeployDeploymentConfigZonalConfig" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigZonalConfig {
    double FirstZoneMonitorDurationInSeconds = null,
    CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone MinimumHealthyHostsPerZone = null,
    double MonitorDurationInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.firstZoneMonitorDurationInSeconds">FirstZoneMonitorDurationInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.minimumHealthyHostsPerZone">MinimumHealthyHostsPerZone</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | minimum_healthy_hosts_per_zone block. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.monitorDurationInSeconds">MonitorDurationInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}. |

---

##### `FirstZoneMonitorDurationInSeconds`<sup>Optional</sup> <a name="FirstZoneMonitorDurationInSeconds" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.firstZoneMonitorDurationInSeconds"></a>

```csharp
public double FirstZoneMonitorDurationInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}.

---

##### `MinimumHealthyHostsPerZone`<sup>Optional</sup> <a name="MinimumHealthyHostsPerZone" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.minimumHealthyHostsPerZone"></a>

```csharp
public CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone MinimumHealthyHostsPerZone { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

minimum_healthy_hosts_per_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}

---

##### `MonitorDurationInSeconds`<sup>Optional</sup> <a name="MonitorDurationInSeconds" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig.property.monitorDurationInSeconds"></a>

```csharp
public double MonitorDurationInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}.

---

### CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone <a name="CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone {
    string Type = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodedeployDeploymentConfigMinimumHealthyHostsOutputReference <a name="CodedeployDeploymentConfigMinimumHealthyHostsOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigMinimumHealthyHostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHostsOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentConfigMinimumHealthyHosts InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigMinimumHealthyHosts">CodedeployDeploymentConfigMinimumHealthyHosts</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigTrafficRoutingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary">PutTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear">PutTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary">ResetTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear">ResetTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeBasedCanary` <a name="PutTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary"></a>

```csharp
private void PutTimeBasedCanary(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `PutTimeBasedLinear` <a name="PutTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear"></a>

```csharp
private void PutTimeBasedLinear(CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.putTimeBasedLinear.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `ResetTimeBasedCanary` <a name="ResetTimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedCanary"></a>

```csharp
private void ResetTimeBasedCanary()
```

##### `ResetTimeBasedLinear` <a name="ResetTimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetTimeBasedLinear"></a>

```csharp
private void ResetTimeBasedLinear()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary">TimeBasedCanary</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear">TimeBasedLinear</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput">TimeBasedCanaryInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput">TimeBasedLinearInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeBasedCanary`<sup>Required</sup> <a name="TimeBasedCanary" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanary"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference TimeBasedCanary { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference</a>

---

##### `TimeBasedLinear`<sup>Required</sup> <a name="TimeBasedLinear" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinear"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference TimeBasedLinear { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference</a>

---

##### `TimeBasedCanaryInput`<sup>Optional</sup> <a name="TimeBasedCanaryInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedCanaryInput"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary TimeBasedCanaryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---

##### `TimeBasedLinearInput`<sup>Optional</sup> <a name="TimeBasedLinearInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.timeBasedLinearInput"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear TimeBasedLinearInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfig">CodedeployDeploymentConfigTrafficRoutingConfig</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary</a>

---


### CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference <a name="CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear">CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear</a>

---


### CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference <a name="CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---


### CodedeployDeploymentConfigZonalConfigOutputReference <a name="CodedeployDeploymentConfigZonalConfigOutputReference" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodedeployDeploymentConfigZonalConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone">PutMinimumHealthyHostsPerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetFirstZoneMonitorDurationInSeconds">ResetFirstZoneMonitorDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMinimumHealthyHostsPerZone">ResetMinimumHealthyHostsPerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMonitorDurationInSeconds">ResetMonitorDurationInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMinimumHealthyHostsPerZone` <a name="PutMinimumHealthyHostsPerZone" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone"></a>

```csharp
private void PutMinimumHealthyHostsPerZone(CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.putMinimumHealthyHostsPerZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---

##### `ResetFirstZoneMonitorDurationInSeconds` <a name="ResetFirstZoneMonitorDurationInSeconds" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetFirstZoneMonitorDurationInSeconds"></a>

```csharp
private void ResetFirstZoneMonitorDurationInSeconds()
```

##### `ResetMinimumHealthyHostsPerZone` <a name="ResetMinimumHealthyHostsPerZone" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMinimumHealthyHostsPerZone"></a>

```csharp
private void ResetMinimumHealthyHostsPerZone()
```

##### `ResetMonitorDurationInSeconds` <a name="ResetMonitorDurationInSeconds" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.resetMonitorDurationInSeconds"></a>

```csharp
private void ResetMonitorDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone">MinimumHealthyHostsPerZone</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSecondsInput">FirstZoneMonitorDurationInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZoneInput">MinimumHealthyHostsPerZoneInput</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSecondsInput">MonitorDurationInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds">FirstZoneMonitorDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds">MonitorDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumHealthyHostsPerZone`<sup>Required</sup> <a name="MinimumHealthyHostsPerZone" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZone"></a>

```csharp
public CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference MinimumHealthyHostsPerZone { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference</a>

---

##### `FirstZoneMonitorDurationInSecondsInput`<sup>Optional</sup> <a name="FirstZoneMonitorDurationInSecondsInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSecondsInput"></a>

```csharp
public double FirstZoneMonitorDurationInSecondsInput { get; }
```

- *Type:* double

---

##### `MinimumHealthyHostsPerZoneInput`<sup>Optional</sup> <a name="MinimumHealthyHostsPerZoneInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.minimumHealthyHostsPerZoneInput"></a>

```csharp
public CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone MinimumHealthyHostsPerZoneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone">CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone</a>

---

##### `MonitorDurationInSecondsInput`<sup>Optional</sup> <a name="MonitorDurationInSecondsInput" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSecondsInput"></a>

```csharp
public double MonitorDurationInSecondsInput { get; }
```

- *Type:* double

---

##### `FirstZoneMonitorDurationInSeconds`<sup>Required</sup> <a name="FirstZoneMonitorDurationInSeconds" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.firstZoneMonitorDurationInSeconds"></a>

```csharp
public double FirstZoneMonitorDurationInSeconds { get; }
```

- *Type:* double

---

##### `MonitorDurationInSeconds`<sup>Required</sup> <a name="MonitorDurationInSeconds" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.monitorDurationInSeconds"></a>

```csharp
public double MonitorDurationInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfigOutputReference.property.internalValue"></a>

```csharp
public CodedeployDeploymentConfigZonalConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.codedeployDeploymentConfig.CodedeployDeploymentConfigZonalConfig">CodedeployDeploymentConfigZonalConfig</a>

---



