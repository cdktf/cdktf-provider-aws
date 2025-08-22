# `cloudfrontVpcOrigin` Submodule <a name="`cloudfrontVpcOrigin` Submodule" id="@cdktf/provider-aws.cloudfrontVpcOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontVpcOrigin <a name="CloudfrontVpcOrigin" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin aws_cloudfront_vpc_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOrigin(Construct Scope, string Id, CloudfrontVpcOriginConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig">CloudfrontVpcOriginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig">CloudfrontVpcOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig">PutVpcOriginEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetVpcOriginEndpointConfig">ResetVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudfrontVpcOriginTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

---

##### `PutVpcOriginEndpointConfig` <a name="PutVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig"></a>

```csharp
private void PutVpcOriginEndpointConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.putVpcOriginEndpointConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcOriginEndpointConfig` <a name="ResetVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.resetVpcOriginEndpointConfig"></a>

```csharp
private void ResetVpcOriginEndpointConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontVpcOrigin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontVpcOrigin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontVpcOrigin.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CloudfrontVpcOrigin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudfrontVpcOrigin resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontVpcOrigin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontVpcOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontVpcOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference">CloudfrontVpcOriginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig">VpcOriginEndpointConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList">CloudfrontVpcOriginVpcOriginEndpointConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput">VpcOriginEndpointConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeouts"></a>

```csharp
public CloudfrontVpcOriginTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference">CloudfrontVpcOriginTimeoutsOutputReference</a>

---

##### `VpcOriginEndpointConfig`<sup>Required</sup> <a name="VpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfig"></a>

```csharp
public CloudfrontVpcOriginVpcOriginEndpointConfigList VpcOriginEndpointConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList">CloudfrontVpcOriginVpcOriginEndpointConfigList</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcOriginEndpointConfigInput`<sup>Optional</sup> <a name="VpcOriginEndpointConfigInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.vpcOriginEndpointConfigInput"></a>

```csharp
public object VpcOriginEndpointConfigInput { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOrigin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontVpcOriginConfig <a name="CloudfrontVpcOriginConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    CloudfrontVpcOriginTimeouts Timeouts = null,
    object VpcOriginEndpointConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig">VpcOriginEndpointConfig</a></code> | <code>object</code> | vpc_origin_endpoint_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#tags CloudfrontVpcOrigin#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.timeouts"></a>

```csharp
public CloudfrontVpcOriginTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts">CloudfrontVpcOriginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#timeouts CloudfrontVpcOrigin#timeouts}

---

##### `VpcOriginEndpointConfig`<sup>Optional</sup> <a name="VpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginConfig.property.vpcOriginEndpointConfig"></a>

```csharp
public object VpcOriginEndpointConfig { get; set; }
```

- *Type:* object

vpc_origin_endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#vpc_origin_endpoint_config CloudfrontVpcOrigin#vpc_origin_endpoint_config}

---

### CloudfrontVpcOriginTimeouts <a name="CloudfrontVpcOriginTimeouts" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#create CloudfrontVpcOrigin#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#delete CloudfrontVpcOrigin#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#update CloudfrontVpcOrigin#update}

---

### CloudfrontVpcOriginVpcOriginEndpointConfig <a name="CloudfrontVpcOriginVpcOriginEndpointConfig" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginVpcOriginEndpointConfig {
    string Arn,
    double HttpPort,
    double HttpsPort,
    string Name,
    string OriginProtocolPolicy,
    object OriginSslProtocols = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort">HttpPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort">HttpsPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols">OriginSslProtocols</a></code> | <code>object</code> | origin_ssl_protocols block. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#arn CloudfrontVpcOrigin#arn}.

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpPort"></a>

```csharp
public double HttpPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#http_port CloudfrontVpcOrigin#http_port}.

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.httpsPort"></a>

```csharp
public double HttpsPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#https_port CloudfrontVpcOrigin#https_port}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#name CloudfrontVpcOrigin#name}.

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originProtocolPolicy"></a>

```csharp
public string OriginProtocolPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#origin_protocol_policy CloudfrontVpcOrigin#origin_protocol_policy}.

---

##### `OriginSslProtocols`<sup>Optional</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfig.property.originSslProtocols"></a>

```csharp
public object OriginSslProtocols { get; set; }
```

- *Type:* object

origin_ssl_protocols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#origin_ssl_protocols CloudfrontVpcOrigin#origin_ssl_protocols}

---

### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols {
    string[] Items,
    double Quantity
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.items">Items</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.quantity">Quantity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}. |

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.items"></a>

```csharp
public string[] Items { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#items CloudfrontVpcOrigin#items}.

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocols.property.quantity"></a>

```csharp
public double Quantity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/cloudfront_vpc_origin#quantity CloudfrontVpcOrigin#quantity}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontVpcOriginTimeoutsOutputReference <a name="CloudfrontVpcOriginTimeoutsOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontVpcOriginVpcOriginEndpointConfigList <a name="CloudfrontVpcOriginVpcOriginEndpointConfigList" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginVpcOriginEndpointConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get"></a>

```csharp
private CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get"></a>

```csharp
private CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantityInput">QuantityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.items">Items</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantity">Quantity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.itemsInput"></a>

```csharp
public string[] ItemsInput { get; }
```

- *Type:* string[]

---

##### `QuantityInput`<sup>Optional</sup> <a name="QuantityInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantityInput"></a>

```csharp
public double QuantityInput { get; }
```

- *Type:* double

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.items"></a>

```csharp
public string[] Items { get; }
```

- *Type:* string[]

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.quantity"></a>

```csharp
public double Quantity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference <a name="CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols">PutOriginSslProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols">ResetOriginSslProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOriginSslProtocols` <a name="PutOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols"></a>

```csharp
private void PutOriginSslProtocols(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.putOriginSslProtocols.parameter.value"></a>

- *Type:* object

---

##### `ResetOriginSslProtocols` <a name="ResetOriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resetOriginSslProtocols"></a>

```csharp
private void ResetOriginSslProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols">OriginSslProtocols</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput">HttpPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput">HttpsPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput">OriginProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput">OriginSslProtocolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort">HttpPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort">HttpsPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy">OriginProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OriginSslProtocols`<sup>Required</sup> <a name="OriginSslProtocols" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols"></a>

```csharp
public CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList OriginSslProtocols { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList">CloudfrontVpcOriginVpcOriginEndpointConfigOriginSslProtocolsList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `HttpPortInput`<sup>Optional</sup> <a name="HttpPortInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPortInput"></a>

```csharp
public double HttpPortInput { get; }
```

- *Type:* double

---

##### `HttpsPortInput`<sup>Optional</sup> <a name="HttpsPortInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPortInput"></a>

```csharp
public double HttpsPortInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OriginProtocolPolicyInput`<sup>Optional</sup> <a name="OriginProtocolPolicyInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicyInput"></a>

```csharp
public string OriginProtocolPolicyInput { get; }
```

- *Type:* string

---

##### `OriginSslProtocolsInput`<sup>Optional</sup> <a name="OriginSslProtocolsInput" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocolsInput"></a>

```csharp
public object OriginSslProtocolsInput { get; }
```

- *Type:* object

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HttpPort`<sup>Required</sup> <a name="HttpPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort"></a>

```csharp
public double HttpPort { get; }
```

- *Type:* double

---

##### `HttpsPort`<sup>Required</sup> <a name="HttpsPort" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort"></a>

```csharp
public double HttpsPort { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginProtocolPolicy`<sup>Required</sup> <a name="OriginProtocolPolicy" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy"></a>

```csharp
public string OriginProtocolPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudfrontVpcOrigin.CloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



