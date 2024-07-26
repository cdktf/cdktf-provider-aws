# `lbTargetGroup` Submodule <a name="`lbTargetGroup` Submodule" id="@cdktf/provider-aws.lbTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTargetGroup <a name="LbTargetGroup" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group aws_lb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroup(Construct Scope, string Id, LbTargetGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig">LbTargetGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig">LbTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover">PutTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth">PutTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState">PutTargetHealthState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination">ResetConnectionTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay">ResetDeregistrationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled">ResetLambdaMultiValueHeadersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType">ResetLoadBalancingAlgorithmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAnomalyMitigation">ResetLoadBalancingAnomalyMitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingCrossZoneEnabled">ResetLoadBalancingCrossZoneEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp">ResetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2">ResetProxyProtocolV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart">ResetSlowStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness">ResetStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover">ResetTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetGroupHealth">ResetTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetHealthState">ResetTargetHealthState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType">ResetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck"></a>

```csharp
private void PutHealthCheck(LbTargetGroupHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness"></a>

```csharp
private void PutStickiness(LbTargetGroupStickiness Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `PutTargetFailover` <a name="PutTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover"></a>

```csharp
private void PutTargetFailover(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* object

---

##### `PutTargetGroupHealth` <a name="PutTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth"></a>

```csharp
private void PutTargetGroupHealth(LbTargetGroupTargetGroupHealth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetGroupHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---

##### `PutTargetHealthState` <a name="PutTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState"></a>

```csharp
private void PutTargetHealthState(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.putTargetHealthState.parameter.value"></a>

- *Type:* object

---

##### `ResetConnectionTermination` <a name="ResetConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetConnectionTermination"></a>

```csharp
private void ResetConnectionTermination()
```

##### `ResetDeregistrationDelay` <a name="ResetDeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetDeregistrationDelay"></a>

```csharp
private void ResetDeregistrationDelay()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetLambdaMultiValueHeadersEnabled` <a name="ResetLambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```csharp
private void ResetLambdaMultiValueHeadersEnabled()
```

##### `ResetLoadBalancingAlgorithmType` <a name="ResetLoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```csharp
private void ResetLoadBalancingAlgorithmType()
```

##### `ResetLoadBalancingAnomalyMitigation` <a name="ResetLoadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingAnomalyMitigation"></a>

```csharp
private void ResetLoadBalancingAnomalyMitigation()
```

##### `ResetLoadBalancingCrossZoneEnabled` <a name="ResetLoadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetLoadBalancingCrossZoneEnabled"></a>

```csharp
private void ResetLoadBalancingCrossZoneEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreserveClientIp` <a name="ResetPreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetPreserveClientIp"></a>

```csharp
private void ResetPreserveClientIp()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProtocolVersion"></a>

```csharp
private void ResetProtocolVersion()
```

##### `ResetProxyProtocolV2` <a name="ResetProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetProxyProtocolV2"></a>

```csharp
private void ResetProxyProtocolV2()
```

##### `ResetSlowStart` <a name="ResetSlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetSlowStart"></a>

```csharp
private void ResetSlowStart()
```

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetStickiness"></a>

```csharp
private void ResetStickiness()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTargetFailover` <a name="ResetTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetFailover"></a>

```csharp
private void ResetTargetFailover()
```

##### `ResetTargetGroupHealth` <a name="ResetTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetGroupHealth"></a>

```csharp
private void ResetTargetGroupHealth()
```

##### `ResetTargetHealthState` <a name="ResetTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetHealthState"></a>

```csharp
private void ResetTargetHealthState()
```

##### `ResetTargetType` <a name="ResetTargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetTargetType"></a>

```csharp
private void ResetTargetType()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTargetGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTargetGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTargetGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTargetGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbTargetGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LbTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix">ArnSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancerArns">LoadBalancerArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover">TargetFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealth">TargetGroupHealth</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference">LbTargetGroupTargetGroupHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthState">TargetHealthState</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList">LbTargetGroupTargetHealthStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput">ConnectionTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput">DeregistrationDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">LambdaMultiValueHeadersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput">LoadBalancingAlgorithmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigationInput">LoadBalancingAnomalyMitigationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabledInput">LoadBalancingCrossZoneEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput">PreserveClientIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input">ProxyProtocolV2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput">SlowStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput">TargetFailoverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealthInput">TargetGroupHealthInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthStateInput">TargetHealthStateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination">ConnectionTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay">DeregistrationDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled">LambdaMultiValueHeadersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType">LoadBalancingAlgorithmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigation">LoadBalancingAnomalyMitigation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabled">LoadBalancingCrossZoneEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp">PreserveClientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2">ProxyProtocolV2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart">SlowStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ArnSuffix`<sup>Required</sup> <a name="ArnSuffix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.arnSuffix"></a>

```csharp
public string ArnSuffix { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheck"></a>

```csharp
public LbTargetGroupHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference">LbTargetGroupHealthCheckOutputReference</a>

---

##### `LoadBalancerArns`<sup>Required</sup> <a name="LoadBalancerArns" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancerArns"></a>

```csharp
public string[] LoadBalancerArns { get; }
```

- *Type:* string[]

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickiness"></a>

```csharp
public LbTargetGroupStickinessOutputReference Stickiness { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference">LbTargetGroupStickinessOutputReference</a>

---

##### `TargetFailover`<sup>Required</sup> <a name="TargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailover"></a>

```csharp
public LbTargetGroupTargetFailoverList TargetFailover { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList">LbTargetGroupTargetFailoverList</a>

---

##### `TargetGroupHealth`<sup>Required</sup> <a name="TargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealth"></a>

```csharp
public LbTargetGroupTargetGroupHealthOutputReference TargetGroupHealth { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference">LbTargetGroupTargetGroupHealthOutputReference</a>

---

##### `TargetHealthState`<sup>Required</sup> <a name="TargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthState"></a>

```csharp
public LbTargetGroupTargetHealthStateList TargetHealthState { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList">LbTargetGroupTargetHealthStateList</a>

---

##### `ConnectionTerminationInput`<sup>Optional</sup> <a name="ConnectionTerminationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTerminationInput"></a>

```csharp
public object ConnectionTerminationInput { get; }
```

- *Type:* object

---

##### `DeregistrationDelayInput`<sup>Optional</sup> <a name="DeregistrationDelayInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelayInput"></a>

```csharp
public string DeregistrationDelayInput { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.healthCheckInput"></a>

```csharp
public LbTargetGroupHealthCheck HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `LambdaMultiValueHeadersEnabledInput`<sup>Optional</sup> <a name="LambdaMultiValueHeadersEnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```csharp
public object LambdaMultiValueHeadersEnabledInput { get; }
```

- *Type:* object

---

##### `LoadBalancingAlgorithmTypeInput`<sup>Optional</sup> <a name="LoadBalancingAlgorithmTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```csharp
public string LoadBalancingAlgorithmTypeInput { get; }
```

- *Type:* string

---

##### `LoadBalancingAnomalyMitigationInput`<sup>Optional</sup> <a name="LoadBalancingAnomalyMitigationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigationInput"></a>

```csharp
public string LoadBalancingAnomalyMitigationInput { get; }
```

- *Type:* string

---

##### `LoadBalancingCrossZoneEnabledInput`<sup>Optional</sup> <a name="LoadBalancingCrossZoneEnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabledInput"></a>

```csharp
public string LoadBalancingCrossZoneEnabledInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreserveClientIpInput`<sup>Optional</sup> <a name="PreserveClientIpInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIpInput"></a>

```csharp
public string PreserveClientIpInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersionInput"></a>

```csharp
public string ProtocolVersionInput { get; }
```

- *Type:* string

---

##### `ProxyProtocolV2Input`<sup>Optional</sup> <a name="ProxyProtocolV2Input" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2Input"></a>

```csharp
public object ProxyProtocolV2Input { get; }
```

- *Type:* object

---

##### `SlowStartInput`<sup>Optional</sup> <a name="SlowStartInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStartInput"></a>

```csharp
public double SlowStartInput { get; }
```

- *Type:* double

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.stickinessInput"></a>

```csharp
public LbTargetGroupStickiness StickinessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetFailoverInput`<sup>Optional</sup> <a name="TargetFailoverInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetFailoverInput"></a>

```csharp
public object TargetFailoverInput { get; }
```

- *Type:* object

---

##### `TargetGroupHealthInput`<sup>Optional</sup> <a name="TargetGroupHealthInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetGroupHealthInput"></a>

```csharp
public LbTargetGroupTargetGroupHealth TargetGroupHealthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---

##### `TargetHealthStateInput`<sup>Optional</sup> <a name="TargetHealthStateInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetHealthStateInput"></a>

```csharp
public object TargetHealthStateInput { get; }
```

- *Type:* object

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `ConnectionTermination`<sup>Required</sup> <a name="ConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.connectionTermination"></a>

```csharp
public object ConnectionTermination { get; }
```

- *Type:* object

---

##### `DeregistrationDelay`<sup>Required</sup> <a name="DeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.deregistrationDelay"></a>

```csharp
public string DeregistrationDelay { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `LambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="LambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```csharp
public object LambdaMultiValueHeadersEnabled { get; }
```

- *Type:* object

---

##### `LoadBalancingAlgorithmType`<sup>Required</sup> <a name="LoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAlgorithmType"></a>

```csharp
public string LoadBalancingAlgorithmType { get; }
```

- *Type:* string

---

##### `LoadBalancingAnomalyMitigation`<sup>Required</sup> <a name="LoadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingAnomalyMitigation"></a>

```csharp
public string LoadBalancingAnomalyMitigation { get; }
```

- *Type:* string

---

##### `LoadBalancingCrossZoneEnabled`<sup>Required</sup> <a name="LoadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.loadBalancingCrossZoneEnabled"></a>

```csharp
public string LoadBalancingCrossZoneEnabled { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreserveClientIp`<sup>Required</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.preserveClientIp"></a>

```csharp
public string PreserveClientIp { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; }
```

- *Type:* string

---

##### `ProxyProtocolV2`<sup>Required</sup> <a name="ProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.proxyProtocolV2"></a>

```csharp
public object ProxyProtocolV2 { get; }
```

- *Type:* object

---

##### `SlowStart`<sup>Required</sup> <a name="SlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.slowStart"></a>

```csharp
public double SlowStart { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbTargetGroupConfig <a name="LbTargetGroupConfig" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ConnectionTermination = null,
    string DeregistrationDelay = null,
    LbTargetGroupHealthCheck HealthCheck = null,
    string Id = null,
    string IpAddressType = null,
    object LambdaMultiValueHeadersEnabled = null,
    string LoadBalancingAlgorithmType = null,
    string LoadBalancingAnomalyMitigation = null,
    string LoadBalancingCrossZoneEnabled = null,
    string Name = null,
    string NamePrefix = null,
    double Port = null,
    string PreserveClientIp = null,
    string Protocol = null,
    string ProtocolVersion = null,
    object ProxyProtocolV2 = null,
    double SlowStart = null,
    LbTargetGroupStickiness Stickiness = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object TargetFailover = null,
    LbTargetGroupTargetGroupHealth TargetGroupHealth = null,
    object TargetHealthState = null,
    string TargetType = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination">ConnectionTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay">DeregistrationDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#id LbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">LambdaMultiValueHeadersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType">LoadBalancingAlgorithmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAnomalyMitigation">LoadBalancingAnomalyMitigation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingCrossZoneEnabled">LoadBalancingCrossZoneEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#name LbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp">PreserveClientIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2">ProxyProtocolV2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart">SlowStart</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover">TargetFailover</a></code> | <code>object</code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetGroupHealth">TargetGroupHealth</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | target_group_health block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetHealthState">TargetHealthState</a></code> | <code>object</code> | target_health_state block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionTermination`<sup>Optional</sup> <a name="ConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.connectionTermination"></a>

```csharp
public object ConnectionTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}.

---

##### `DeregistrationDelay`<sup>Optional</sup> <a name="DeregistrationDelay" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.deregistrationDelay"></a>

```csharp
public string DeregistrationDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}.

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.healthCheck"></a>

```csharp
public LbTargetGroupHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#health_check LbTargetGroup#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#id LbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}.

---

##### `LambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="LambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```csharp
public object LambdaMultiValueHeadersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `LoadBalancingAlgorithmType`<sup>Optional</sup> <a name="LoadBalancingAlgorithmType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```csharp
public string LoadBalancingAlgorithmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}.

---

##### `LoadBalancingAnomalyMitigation`<sup>Optional</sup> <a name="LoadBalancingAnomalyMitigation" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingAnomalyMitigation"></a>

```csharp
public string LoadBalancingAnomalyMitigation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `LoadBalancingCrossZoneEnabled`<sup>Optional</sup> <a name="LoadBalancingCrossZoneEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.loadBalancingCrossZoneEnabled"></a>

```csharp
public string LoadBalancingCrossZoneEnabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#name LbTargetGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#port LbTargetGroup#port}.

---

##### `PreserveClientIp`<sup>Optional</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.preserveClientIp"></a>

```csharp
public string PreserveClientIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}.

---

##### `ProxyProtocolV2`<sup>Optional</sup> <a name="ProxyProtocolV2" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.proxyProtocolV2"></a>

```csharp
public object ProxyProtocolV2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}.

---

##### `SlowStart`<sup>Optional</sup> <a name="SlowStart" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.slowStart"></a>

```csharp
public double SlowStart { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}.

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.stickiness"></a>

```csharp
public LbTargetGroupStickiness Stickiness { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#stickiness LbTargetGroup#stickiness}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}.

---

##### `TargetFailover`<sup>Optional</sup> <a name="TargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetFailover"></a>

```csharp
public object TargetFailover { get; set; }
```

- *Type:* object

target_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#target_failover LbTargetGroup#target_failover}

---

##### `TargetGroupHealth`<sup>Optional</sup> <a name="TargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetGroupHealth"></a>

```csharp
public LbTargetGroupTargetGroupHealth TargetGroupHealth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

target_group_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#target_group_health LbTargetGroup#target_group_health}

---

##### `TargetHealthState`<sup>Optional</sup> <a name="TargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetHealthState"></a>

```csharp
public object TargetHealthState { get; set; }
```

- *Type:* object

target_health_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#target_health_state LbTargetGroup#target_health_state}

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}.

---

### LbTargetGroupHealthCheck <a name="LbTargetGroupHealthCheck" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupHealthCheck {
    object Enabled = null,
    double HealthyThreshold = null,
    double Interval = null,
    string Matcher = null,
    string Path = null,
    string Port = null,
    string Protocol = null,
    double Timeout = null,
    double UnhealthyThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#interval LbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher">Matcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#matcher LbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#path LbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#port LbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#timeout LbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}.

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#interval LbTargetGroup#interval}.

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.matcher"></a>

```csharp
public string Matcher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#matcher LbTargetGroup#matcher}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#path LbTargetGroup#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#port LbTargetGroup#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#timeout LbTargetGroup#timeout}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}.

---

### LbTargetGroupStickiness <a name="LbTargetGroupStickiness" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupStickiness {
    string Type,
    double CookieDuration = null,
    string CookieName = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#type LbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration">CookieDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName">CookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#cookie_name LbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#type LbTargetGroup#type}.

---

##### `CookieDuration`<sup>Optional</sup> <a name="CookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieDuration"></a>

```csharp
public double CookieDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}.

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#cookie_name LbTargetGroup#cookie_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}.

---

### LbTargetGroupTargetFailover <a name="LbTargetGroupTargetFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetFailover {
    string OnDeregistration,
    string OnUnhealthy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration">OnDeregistration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy">OnUnhealthy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}. |

---

##### `OnDeregistration`<sup>Required</sup> <a name="OnDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onDeregistration"></a>

```csharp
public string OnDeregistration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}.

---

##### `OnUnhealthy`<sup>Required</sup> <a name="OnUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailover.property.onUnhealthy"></a>

```csharp
public string OnUnhealthy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}.

---

### LbTargetGroupTargetGroupHealth <a name="LbTargetGroupTargetGroupHealth" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetGroupHealth {
    LbTargetGroupTargetGroupHealthDnsFailover DnsFailover = null,
    LbTargetGroupTargetGroupHealthUnhealthyStateRouting UnhealthyStateRouting = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.dnsFailover">DnsFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | dns_failover block. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.unhealthyStateRouting">UnhealthyStateRouting</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | unhealthy_state_routing block. |

---

##### `DnsFailover`<sup>Optional</sup> <a name="DnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.dnsFailover"></a>

```csharp
public LbTargetGroupTargetGroupHealthDnsFailover DnsFailover { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

dns_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#dns_failover LbTargetGroup#dns_failover}

---

##### `UnhealthyStateRouting`<sup>Optional</sup> <a name="UnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth.property.unhealthyStateRouting"></a>

```csharp
public LbTargetGroupTargetGroupHealthUnhealthyStateRouting UnhealthyStateRouting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

unhealthy_state_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#unhealthy_state_routing LbTargetGroup#unhealthy_state_routing}

---

### LbTargetGroupTargetGroupHealthDnsFailover <a name="LbTargetGroupTargetGroupHealthDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetGroupHealthDnsFailover {
    string MinimumHealthyTargetsCount = null,
    string MinimumHealthyTargetsPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount">MinimumHealthyTargetsCount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage">MinimumHealthyTargetsPercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `MinimumHealthyTargetsCount`<sup>Optional</sup> <a name="MinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount"></a>

```csharp
public string MinimumHealthyTargetsCount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}.

---

##### `MinimumHealthyTargetsPercentage`<sup>Optional</sup> <a name="MinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage"></a>

```csharp
public string MinimumHealthyTargetsPercentage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}.

---

### LbTargetGroupTargetGroupHealthUnhealthyStateRouting <a name="LbTargetGroupTargetGroupHealthUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetGroupHealthUnhealthyStateRouting {
    double MinimumHealthyTargetsCount = null,
    string MinimumHealthyTargetsPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount">MinimumHealthyTargetsCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage">MinimumHealthyTargetsPercentage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `MinimumHealthyTargetsCount`<sup>Optional</sup> <a name="MinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount"></a>

```csharp
public double MinimumHealthyTargetsCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}.

---

##### `MinimumHealthyTargetsPercentage`<sup>Optional</sup> <a name="MinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage"></a>

```csharp
public string MinimumHealthyTargetsPercentage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}.

---

### LbTargetGroupTargetHealthState <a name="LbTargetGroupTargetHealthState" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetHealthState {
    object EnableUnhealthyConnectionTermination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination">EnableUnhealthyConnectionTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#enable_unhealthy_connection_termination LbTargetGroup#enable_unhealthy_connection_termination}. |

---

##### `EnableUnhealthyConnectionTermination`<sup>Required</sup> <a name="EnableUnhealthyConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination"></a>

```csharp
public object EnableUnhealthyConnectionTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/lb_target_group#enable_unhealthy_connection_termination LbTargetGroup#enable_unhealthy_connection_termination}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbTargetGroupHealthCheckOutputReference <a name="LbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```csharp
private void ResetMatcher()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput">MatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher">Matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```csharp
public string MatcherInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```csharp
public string Matcher { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```csharp
public LbTargetGroupHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupHealthCheck">LbTargetGroupHealthCheck</a>

---


### LbTargetGroupStickinessOutputReference <a name="LbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupStickinessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration">ResetCookieDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieDuration` <a name="ResetCookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```csharp
private void ResetCookieDuration()
```

##### `ResetCookieName` <a name="ResetCookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetCookieName"></a>

```csharp
private void ResetCookieName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput">CookieDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration">CookieDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieDurationInput`<sup>Optional</sup> <a name="CookieDurationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```csharp
public double CookieDurationInput { get; }
```

- *Type:* double

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CookieDuration`<sup>Required</sup> <a name="CookieDuration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```csharp
public double CookieDuration { get; }
```

- *Type:* double

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickinessOutputReference.property.internalValue"></a>

```csharp
public LbTargetGroupStickiness InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupStickiness">LbTargetGroupStickiness</a>

---


### LbTargetGroupTargetFailoverList <a name="LbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetFailoverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get"></a>

```csharp
private LbTargetGroupTargetFailoverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbTargetGroupTargetFailoverOutputReference <a name="LbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetFailoverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">OnDeregistrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">OnUnhealthyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration">OnDeregistration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">OnUnhealthy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnDeregistrationInput`<sup>Optional</sup> <a name="OnDeregistrationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```csharp
public string OnDeregistrationInput { get; }
```

- *Type:* string

---

##### `OnUnhealthyInput`<sup>Optional</sup> <a name="OnUnhealthyInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```csharp
public string OnUnhealthyInput { get; }
```

- *Type:* string

---

##### `OnDeregistration`<sup>Required</sup> <a name="OnDeregistration" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```csharp
public string OnDeregistration { get; }
```

- *Type:* string

---

##### `OnUnhealthy`<sup>Required</sup> <a name="OnUnhealthy" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```csharp
public string OnUnhealthy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbTargetGroupTargetGroupHealthDnsFailoverOutputReference <a name="LbTargetGroupTargetGroupHealthDnsFailoverOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetGroupHealthDnsFailoverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount">ResetMinimumHealthyTargetsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage">ResetMinimumHealthyTargetsPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumHealthyTargetsCount` <a name="ResetMinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount"></a>

```csharp
private void ResetMinimumHealthyTargetsCount()
```

##### `ResetMinimumHealthyTargetsPercentage` <a name="ResetMinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```csharp
private void ResetMinimumHealthyTargetsPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput">MinimumHealthyTargetsCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput">MinimumHealthyTargetsPercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount">MinimumHealthyTargetsCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage">MinimumHealthyTargetsPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumHealthyTargetsCountInput`<sup>Optional</sup> <a name="MinimumHealthyTargetsCountInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput"></a>

```csharp
public string MinimumHealthyTargetsCountInput { get; }
```

- *Type:* string

---

##### `MinimumHealthyTargetsPercentageInput`<sup>Optional</sup> <a name="MinimumHealthyTargetsPercentageInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```csharp
public string MinimumHealthyTargetsPercentageInput { get; }
```

- *Type:* string

---

##### `MinimumHealthyTargetsCount`<sup>Required</sup> <a name="MinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount"></a>

```csharp
public string MinimumHealthyTargetsCount { get; }
```

- *Type:* string

---

##### `MinimumHealthyTargetsPercentage`<sup>Required</sup> <a name="MinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage"></a>

```csharp
public string MinimumHealthyTargetsPercentage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue"></a>

```csharp
public LbTargetGroupTargetGroupHealthDnsFailover InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---


### LbTargetGroupTargetGroupHealthOutputReference <a name="LbTargetGroupTargetGroupHealthOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetGroupHealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover">PutDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting">PutUnhealthyStateRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover">ResetDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting">ResetUnhealthyStateRouting</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsFailover` <a name="PutDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover"></a>

```csharp
private void PutDnsFailover(LbTargetGroupTargetGroupHealthDnsFailover Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putDnsFailover.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---

##### `PutUnhealthyStateRouting` <a name="PutUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting"></a>

```csharp
private void PutUnhealthyStateRouting(LbTargetGroupTargetGroupHealthUnhealthyStateRouting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---

##### `ResetDnsFailover` <a name="ResetDnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover"></a>

```csharp
private void ResetDnsFailover()
```

##### `ResetUnhealthyStateRouting` <a name="ResetUnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting"></a>

```csharp
private void ResetUnhealthyStateRouting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover">DnsFailover</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference">LbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting">UnhealthyStateRouting</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput">DnsFailoverInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput">UnhealthyStateRoutingInput</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsFailover`<sup>Required</sup> <a name="DnsFailover" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover"></a>

```csharp
public LbTargetGroupTargetGroupHealthDnsFailoverOutputReference DnsFailover { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailoverOutputReference">LbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a>

---

##### `UnhealthyStateRouting`<sup>Required</sup> <a name="UnhealthyStateRouting" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting"></a>

```csharp
public LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference UnhealthyStateRouting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a>

---

##### `DnsFailoverInput`<sup>Optional</sup> <a name="DnsFailoverInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput"></a>

```csharp
public LbTargetGroupTargetGroupHealthDnsFailover DnsFailoverInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthDnsFailover">LbTargetGroupTargetGroupHealthDnsFailover</a>

---

##### `UnhealthyStateRoutingInput`<sup>Optional</sup> <a name="UnhealthyStateRoutingInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput"></a>

```csharp
public LbTargetGroupTargetGroupHealthUnhealthyStateRouting UnhealthyStateRoutingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthOutputReference.property.internalValue"></a>

```csharp
public LbTargetGroupTargetGroupHealth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealth">LbTargetGroupTargetGroupHealth</a>

---


### LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference <a name="LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount">ResetMinimumHealthyTargetsCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage">ResetMinimumHealthyTargetsPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumHealthyTargetsCount` <a name="ResetMinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount"></a>

```csharp
private void ResetMinimumHealthyTargetsCount()
```

##### `ResetMinimumHealthyTargetsPercentage` <a name="ResetMinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```csharp
private void ResetMinimumHealthyTargetsPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput">MinimumHealthyTargetsCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput">MinimumHealthyTargetsPercentageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount">MinimumHealthyTargetsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage">MinimumHealthyTargetsPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumHealthyTargetsCountInput`<sup>Optional</sup> <a name="MinimumHealthyTargetsCountInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput"></a>

```csharp
public double MinimumHealthyTargetsCountInput { get; }
```

- *Type:* double

---

##### `MinimumHealthyTargetsPercentageInput`<sup>Optional</sup> <a name="MinimumHealthyTargetsPercentageInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```csharp
public string MinimumHealthyTargetsPercentageInput { get; }
```

- *Type:* string

---

##### `MinimumHealthyTargetsCount`<sup>Required</sup> <a name="MinimumHealthyTargetsCount" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount"></a>

```csharp
public double MinimumHealthyTargetsCount { get; }
```

- *Type:* double

---

##### `MinimumHealthyTargetsPercentage`<sup>Required</sup> <a name="MinimumHealthyTargetsPercentage" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage"></a>

```csharp
public string MinimumHealthyTargetsPercentage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue"></a>

```csharp
public LbTargetGroupTargetGroupHealthUnhealthyStateRouting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetGroupHealthUnhealthyStateRouting">LbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---


### LbTargetGroupTargetHealthStateList <a name="LbTargetGroupTargetHealthStateList" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetHealthStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get"></a>

```csharp
private LbTargetGroupTargetHealthStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LbTargetGroupTargetHealthStateOutputReference <a name="LbTargetGroupTargetHealthStateOutputReference" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTargetGroupTargetHealthStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput">EnableUnhealthyConnectionTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination">EnableUnhealthyConnectionTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableUnhealthyConnectionTerminationInput`<sup>Optional</sup> <a name="EnableUnhealthyConnectionTerminationInput" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput"></a>

```csharp
public object EnableUnhealthyConnectionTerminationInput { get; }
```

- *Type:* object

---

##### `EnableUnhealthyConnectionTermination`<sup>Required</sup> <a name="EnableUnhealthyConnectionTermination" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination"></a>

```csharp
public object EnableUnhealthyConnectionTermination { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTargetGroup.LbTargetGroupTargetHealthStateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



