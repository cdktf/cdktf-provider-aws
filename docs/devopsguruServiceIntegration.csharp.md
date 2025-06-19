# `devopsguruServiceIntegration` Submodule <a name="`devopsguruServiceIntegration` Submodule" id="@cdktf/provider-aws.devopsguruServiceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruServiceIntegration <a name="DevopsguruServiceIntegration" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegration(Construct Scope, string Id, DevopsguruServiceIntegrationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig">DevopsguruServiceIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig">DevopsguruServiceIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption">PutKmsServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection">PutLogsAnomalyDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter">PutOpsCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetKmsServerSideEncryption">ResetKmsServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetLogsAnomalyDetection">ResetLogsAnomalyDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOpsCenter">ResetOpsCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKmsServerSideEncryption` <a name="PutKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption"></a>

```csharp
private void PutKmsServerSideEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption.parameter.value"></a>

- *Type:* object

---

##### `PutLogsAnomalyDetection` <a name="PutLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection"></a>

```csharp
private void PutLogsAnomalyDetection(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection.parameter.value"></a>

- *Type:* object

---

##### `PutOpsCenter` <a name="PutOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter"></a>

```csharp
private void PutOpsCenter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter.parameter.value"></a>

- *Type:* object

---

##### `ResetKmsServerSideEncryption` <a name="ResetKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetKmsServerSideEncryption"></a>

```csharp
private void ResetKmsServerSideEncryption()
```

##### `ResetLogsAnomalyDetection` <a name="ResetLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetLogsAnomalyDetection"></a>

```csharp
private void ResetLogsAnomalyDetection()
```

##### `ResetOpsCenter` <a name="ResetOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOpsCenter"></a>

```csharp
private void ResetOpsCenter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevopsguruServiceIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevopsguruServiceIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevopsguruServiceIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DevopsguruServiceIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsguruServiceIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsguruServiceIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevopsguruServiceIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryption">KmsServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList">DevopsguruServiceIntegrationKmsServerSideEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetection">LogsAnomalyDetection</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList">DevopsguruServiceIntegrationLogsAnomalyDetectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenter">OpsCenter</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList">DevopsguruServiceIntegrationOpsCenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryptionInput">KmsServerSideEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetectionInput">LogsAnomalyDetectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenterInput">OpsCenterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsServerSideEncryption`<sup>Required</sup> <a name="KmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryption"></a>

```csharp
public DevopsguruServiceIntegrationKmsServerSideEncryptionList KmsServerSideEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList">DevopsguruServiceIntegrationKmsServerSideEncryptionList</a>

---

##### `LogsAnomalyDetection`<sup>Required</sup> <a name="LogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetection"></a>

```csharp
public DevopsguruServiceIntegrationLogsAnomalyDetectionList LogsAnomalyDetection { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList">DevopsguruServiceIntegrationLogsAnomalyDetectionList</a>

---

##### `OpsCenter`<sup>Required</sup> <a name="OpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenter"></a>

```csharp
public DevopsguruServiceIntegrationOpsCenterList OpsCenter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList">DevopsguruServiceIntegrationOpsCenterList</a>

---

##### `KmsServerSideEncryptionInput`<sup>Optional</sup> <a name="KmsServerSideEncryptionInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryptionInput"></a>

```csharp
public object KmsServerSideEncryptionInput { get; }
```

- *Type:* object

---

##### `LogsAnomalyDetectionInput`<sup>Optional</sup> <a name="LogsAnomalyDetectionInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetectionInput"></a>

```csharp
public object LogsAnomalyDetectionInput { get; }
```

- *Type:* object

---

##### `OpsCenterInput`<sup>Optional</sup> <a name="OpsCenterInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenterInput"></a>

```csharp
public object OpsCenterInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruServiceIntegrationConfig <a name="DevopsguruServiceIntegrationConfig" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object KmsServerSideEncryption = null,
    object LogsAnomalyDetection = null,
    object OpsCenter = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.kmsServerSideEncryption">KmsServerSideEncryption</a></code> | <code>object</code> | kms_server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.logsAnomalyDetection">LogsAnomalyDetection</a></code> | <code>object</code> | logs_anomaly_detection block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.opsCenter">OpsCenter</a></code> | <code>object</code> | ops_center block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KmsServerSideEncryption`<sup>Optional</sup> <a name="KmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.kmsServerSideEncryption"></a>

```csharp
public object KmsServerSideEncryption { get; set; }
```

- *Type:* object

kms_server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#kms_server_side_encryption DevopsguruServiceIntegration#kms_server_side_encryption}

---

##### `LogsAnomalyDetection`<sup>Optional</sup> <a name="LogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.logsAnomalyDetection"></a>

```csharp
public object LogsAnomalyDetection { get; set; }
```

- *Type:* object

logs_anomaly_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#logs_anomaly_detection DevopsguruServiceIntegration#logs_anomaly_detection}

---

##### `OpsCenter`<sup>Optional</sup> <a name="OpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.opsCenter"></a>

```csharp
public object OpsCenter { get; set; }
```

- *Type:* object

ops_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#ops_center DevopsguruServiceIntegration#ops_center}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#region DevopsguruServiceIntegration#region}

---

### DevopsguruServiceIntegrationKmsServerSideEncryption <a name="DevopsguruServiceIntegrationKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationKmsServerSideEncryption {
    string KmsKeyId = null,
    string OptInStatus = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.optInStatus">OptInStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}.

---

##### `OptInStatus`<sup>Optional</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.optInStatus"></a>

```csharp
public string OptInStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}.

---

### DevopsguruServiceIntegrationLogsAnomalyDetection <a name="DevopsguruServiceIntegrationLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationLogsAnomalyDetection {
    string OptInStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.property.optInStatus">OptInStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |

---

##### `OptInStatus`<sup>Optional</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.property.optInStatus"></a>

```csharp
public string OptInStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

### DevopsguruServiceIntegrationOpsCenter <a name="DevopsguruServiceIntegrationOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationOpsCenter {
    string OptInStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.property.optInStatus">OptInStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |

---

##### `OptInStatus`<sup>Optional</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.property.optInStatus"></a>

```csharp
public string OptInStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruServiceIntegrationKmsServerSideEncryptionList <a name="DevopsguruServiceIntegrationKmsServerSideEncryptionList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationKmsServerSideEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get"></a>

```csharp
private DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference <a name="DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetOptInStatus">ResetOptInStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetOptInStatus` <a name="ResetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetOptInStatus"></a>

```csharp
private void ResetOptInStatus()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatusInput">OptInStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatus">OptInStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `OptInStatusInput`<sup>Optional</sup> <a name="OptInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatusInput"></a>

```csharp
public string OptInStatusInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `OptInStatus`<sup>Required</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatus"></a>

```csharp
public string OptInStatus { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsguruServiceIntegrationLogsAnomalyDetectionList <a name="DevopsguruServiceIntegrationLogsAnomalyDetectionList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationLogsAnomalyDetectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get"></a>

```csharp
private DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference <a name="DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resetOptInStatus">ResetOptInStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptInStatus` <a name="ResetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resetOptInStatus"></a>

```csharp
private void ResetOptInStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatusInput">OptInStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatus">OptInStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptInStatusInput`<sup>Optional</sup> <a name="OptInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatusInput"></a>

```csharp
public string OptInStatusInput { get; }
```

- *Type:* string

---

##### `OptInStatus`<sup>Required</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatus"></a>

```csharp
public string OptInStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsguruServiceIntegrationOpsCenterList <a name="DevopsguruServiceIntegrationOpsCenterList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationOpsCenterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get"></a>

```csharp
private DevopsguruServiceIntegrationOpsCenterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DevopsguruServiceIntegrationOpsCenterOutputReference <a name="DevopsguruServiceIntegrationOpsCenterOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DevopsguruServiceIntegrationOpsCenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resetOptInStatus">ResetOptInStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptInStatus` <a name="ResetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resetOptInStatus"></a>

```csharp
private void ResetOptInStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatusInput">OptInStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatus">OptInStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptInStatusInput`<sup>Optional</sup> <a name="OptInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatusInput"></a>

```csharp
public string OptInStatusInput { get; }
```

- *Type:* string

---

##### `OptInStatus`<sup>Required</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatus"></a>

```csharp
public string OptInStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



