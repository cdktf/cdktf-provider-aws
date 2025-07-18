# `opensearchOutboundConnection` Submodule <a name="`opensearchOutboundConnection` Submodule" id="@cdktf/provider-aws.opensearchOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOutboundConnection <a name="OpensearchOutboundConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection aws_opensearch_outbound_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnection(Construct Scope, string Id, OpensearchOutboundConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig">OpensearchOutboundConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig">OpensearchOutboundConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties">PutConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo">PutLocalDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo">PutRemoteDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetAcceptConnection">ResetAcceptConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionMode">ResetConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionProperties">ResetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionProperties` <a name="PutConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties"></a>

```csharp
private void PutConnectionProperties(OpensearchOutboundConnectionConnectionProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---

##### `PutLocalDomainInfo` <a name="PutLocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo"></a>

```csharp
private void PutLocalDomainInfo(OpensearchOutboundConnectionLocalDomainInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---

##### `PutRemoteDomainInfo` <a name="PutRemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo"></a>

```csharp
private void PutRemoteDomainInfo(OpensearchOutboundConnectionRemoteDomainInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(OpensearchOutboundConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

---

##### `ResetAcceptConnection` <a name="ResetAcceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetAcceptConnection"></a>

```csharp
private void ResetAcceptConnection()
```

##### `ResetConnectionMode` <a name="ResetConnectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionMode"></a>

```csharp
private void ResetConnectionMode()
```

##### `ResetConnectionProperties` <a name="ResetConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionProperties"></a>

```csharp
private void ResetConnectionProperties()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchOutboundConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchOutboundConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchOutboundConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchOutboundConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchOutboundConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpensearchOutboundConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchOutboundConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchOutboundConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOutboundConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionProperties">ConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference">OpensearchOutboundConnectionConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus">ConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo">LocalDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo">RemoteDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnectionInput">AcceptConnectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput">ConnectionAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionModeInput">ConnectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionPropertiesInput">ConnectionPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput">LocalDomainInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput">RemoteDomainInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnection">AcceptConnection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias">ConnectionAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionMode">ConnectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectionProperties`<sup>Required</sup> <a name="ConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionProperties"></a>

```csharp
public OpensearchOutboundConnectionConnectionPropertiesOutputReference ConnectionProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference">OpensearchOutboundConnectionConnectionPropertiesOutputReference</a>

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus"></a>

```csharp
public string ConnectionStatus { get; }
```

- *Type:* string

---

##### `LocalDomainInfo`<sup>Required</sup> <a name="LocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo"></a>

```csharp
public OpensearchOutboundConnectionLocalDomainInfoOutputReference LocalDomainInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a>

---

##### `RemoteDomainInfo`<sup>Required</sup> <a name="RemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo"></a>

```csharp
public OpensearchOutboundConnectionRemoteDomainInfoOutputReference RemoteDomainInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts"></a>

```csharp
public OpensearchOutboundConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a>

---

##### `AcceptConnectionInput`<sup>Optional</sup> <a name="AcceptConnectionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnectionInput"></a>

```csharp
public object AcceptConnectionInput { get; }
```

- *Type:* object

---

##### `ConnectionAliasInput`<sup>Optional</sup> <a name="ConnectionAliasInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput"></a>

```csharp
public string ConnectionAliasInput { get; }
```

- *Type:* string

---

##### `ConnectionModeInput`<sup>Optional</sup> <a name="ConnectionModeInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionModeInput"></a>

```csharp
public string ConnectionModeInput { get; }
```

- *Type:* string

---

##### `ConnectionPropertiesInput`<sup>Optional</sup> <a name="ConnectionPropertiesInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionPropertiesInput"></a>

```csharp
public OpensearchOutboundConnectionConnectionProperties ConnectionPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalDomainInfoInput`<sup>Optional</sup> <a name="LocalDomainInfoInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput"></a>

```csharp
public OpensearchOutboundConnectionLocalDomainInfo LocalDomainInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RemoteDomainInfoInput`<sup>Optional</sup> <a name="RemoteDomainInfoInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput"></a>

```csharp
public OpensearchOutboundConnectionRemoteDomainInfo RemoteDomainInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AcceptConnection`<sup>Required</sup> <a name="AcceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnection"></a>

```csharp
public object AcceptConnection { get; }
```

- *Type:* object

---

##### `ConnectionAlias`<sup>Required</sup> <a name="ConnectionAlias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias"></a>

```csharp
public string ConnectionAlias { get; }
```

- *Type:* string

---

##### `ConnectionMode`<sup>Required</sup> <a name="ConnectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionMode"></a>

```csharp
public string ConnectionMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOutboundConnectionConfig <a name="OpensearchOutboundConnectionConfig" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionAlias,
    OpensearchOutboundConnectionLocalDomainInfo LocalDomainInfo,
    OpensearchOutboundConnectionRemoteDomainInfo RemoteDomainInfo,
    object AcceptConnection = null,
    string ConnectionMode = null,
    OpensearchOutboundConnectionConnectionProperties ConnectionProperties = null,
    string Id = null,
    string Region = null,
    OpensearchOutboundConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias">ConnectionAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo">LocalDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | local_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo">RemoteDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | remote_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.acceptConnection">AcceptConnection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionMode">ConnectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionProperties">ConnectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | connection_properties block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionAlias`<sup>Required</sup> <a name="ConnectionAlias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias"></a>

```csharp
public string ConnectionAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}.

---

##### `LocalDomainInfo`<sup>Required</sup> <a name="LocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo"></a>

```csharp
public OpensearchOutboundConnectionLocalDomainInfo LocalDomainInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

local_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}

---

##### `RemoteDomainInfo`<sup>Required</sup> <a name="RemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo"></a>

```csharp
public OpensearchOutboundConnectionRemoteDomainInfo RemoteDomainInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

remote_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}

---

##### `AcceptConnection`<sup>Optional</sup> <a name="AcceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.acceptConnection"></a>

```csharp
public object AcceptConnection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}.

---

##### `ConnectionMode`<sup>Optional</sup> <a name="ConnectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionMode"></a>

```csharp
public string ConnectionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}.

---

##### `ConnectionProperties`<sup>Optional</sup> <a name="ConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionProperties"></a>

```csharp
public OpensearchOutboundConnectionConnectionProperties ConnectionProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

connection_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#connection_properties OpensearchOutboundConnection#connection_properties}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts"></a>

```csharp
public OpensearchOutboundConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}

---

### OpensearchOutboundConnectionConnectionProperties <a name="OpensearchOutboundConnectionConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionConnectionProperties {
    OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch CrossClusterSearch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.property.crossClusterSearch">CrossClusterSearch</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | cross_cluster_search block. |

---

##### `CrossClusterSearch`<sup>Optional</sup> <a name="CrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.property.crossClusterSearch"></a>

```csharp
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch CrossClusterSearch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

cross_cluster_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#cross_cluster_search OpensearchOutboundConnection#cross_cluster_search}

---

### OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch <a name="OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch {
    string SkipUnavailable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.property.skipUnavailable">SkipUnavailable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#skip_unavailable OpensearchOutboundConnection#skip_unavailable}. |

---

##### `SkipUnavailable`<sup>Optional</sup> <a name="SkipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.property.skipUnavailable"></a>

```csharp
public string SkipUnavailable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#skip_unavailable OpensearchOutboundConnection#skip_unavailable}.

---

### OpensearchOutboundConnectionLocalDomainInfo <a name="OpensearchOutboundConnectionLocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionLocalDomainInfo {
    string DomainName,
    string OwnerId,
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId">OwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId"></a>

```csharp
public string OwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionRemoteDomainInfo <a name="OpensearchOutboundConnectionRemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionRemoteDomainInfo {
    string DomainName,
    string OwnerId,
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId">OwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId"></a>

```csharp
public string OwnerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionTimeouts <a name="OpensearchOutboundConnectionTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#create OpensearchOutboundConnection#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#create OpensearchOutboundConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference <a name="OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resetSkipUnavailable">ResetSkipUnavailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSkipUnavailable` <a name="ResetSkipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resetSkipUnavailable"></a>

```csharp
private void ResetSkipUnavailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailableInput">SkipUnavailableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailable">SkipUnavailable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SkipUnavailableInput`<sup>Optional</sup> <a name="SkipUnavailableInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailableInput"></a>

```csharp
public string SkipUnavailableInput { get; }
```

- *Type:* string

---

##### `SkipUnavailable`<sup>Required</sup> <a name="SkipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailable"></a>

```csharp
public string SkipUnavailable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.internalValue"></a>

```csharp
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---


### OpensearchOutboundConnectionConnectionPropertiesOutputReference <a name="OpensearchOutboundConnectionConnectionPropertiesOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionConnectionPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch">PutCrossClusterSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resetCrossClusterSearch">ResetCrossClusterSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossClusterSearch` <a name="PutCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch"></a>

```csharp
private void PutCrossClusterSearch(OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---

##### `ResetCrossClusterSearch` <a name="ResetCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resetCrossClusterSearch"></a>

```csharp
private void ResetCrossClusterSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearch">CrossClusterSearch</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearchInput">CrossClusterSearchInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossClusterSearch`<sup>Required</sup> <a name="CrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearch"></a>

```csharp
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference CrossClusterSearch { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `CrossClusterSearchInput`<sup>Optional</sup> <a name="CrossClusterSearchInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearchInput"></a>

```csharp
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch CrossClusterSearchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.internalValue"></a>

```csharp
public OpensearchOutboundConnectionConnectionProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---


### OpensearchOutboundConnectionLocalDomainInfoOutputReference <a name="OpensearchOutboundConnectionLocalDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionLocalDomainInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput">OwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `OwnerIdInput`<sup>Optional</sup> <a name="OwnerIdInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput"></a>

```csharp
public string OwnerIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue"></a>

```csharp
public OpensearchOutboundConnectionLocalDomainInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---


### OpensearchOutboundConnectionRemoteDomainInfoOutputReference <a name="OpensearchOutboundConnectionRemoteDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionRemoteDomainInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput">OwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `OwnerIdInput`<sup>Optional</sup> <a name="OwnerIdInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput"></a>

```csharp
public string OwnerIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue"></a>

```csharp
public OpensearchOutboundConnectionRemoteDomainInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---


### OpensearchOutboundConnectionTimeoutsOutputReference <a name="OpensearchOutboundConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchOutboundConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



