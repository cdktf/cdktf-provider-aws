# `verifiedaccessEndpoint` Submodule <a name="`verifiedaccessEndpoint` Submodule" id="@cdktf/provider-aws.verifiedaccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessEndpoint <a name="VerifiedaccessEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint aws_verifiedaccess_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpoint(Construct Scope, string Id, VerifiedaccessEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig">VerifiedaccessEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig">VerifiedaccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putCidrOptions">PutCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions">PutLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions">PutNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putRdsOptions">PutRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetApplicationDomain">ResetApplicationDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetCidrOptions">ResetCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDomainCertificateArn">ResetDomainCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetEndpointDomainPrefix">ResetEndpointDomainPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetLoadBalancerOptions">ResetLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetNetworkInterfaceOptions">ResetNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetRdsOptions">ResetRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCidrOptions` <a name="PutCidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putCidrOptions"></a>

```csharp
private void PutCidrOptions(VerifiedaccessEndpointCidrOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putCidrOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

---

##### `PutLoadBalancerOptions` <a name="PutLoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions"></a>

```csharp
private void PutLoadBalancerOptions(VerifiedaccessEndpointLoadBalancerOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putLoadBalancerOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---

##### `PutNetworkInterfaceOptions` <a name="PutNetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions"></a>

```csharp
private void PutNetworkInterfaceOptions(VerifiedaccessEndpointNetworkInterfaceOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putNetworkInterfaceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---

##### `PutRdsOptions` <a name="PutRdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putRdsOptions"></a>

```csharp
private void PutRdsOptions(VerifiedaccessEndpointRdsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putRdsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification"></a>

```csharp
private void PutSseSpecification(VerifiedaccessEndpointSseSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(VerifiedaccessEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>

---

##### `ResetApplicationDomain` <a name="ResetApplicationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetApplicationDomain"></a>

```csharp
private void ResetApplicationDomain()
```

##### `ResetCidrOptions` <a name="ResetCidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetCidrOptions"></a>

```csharp
private void ResetCidrOptions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainCertificateArn` <a name="ResetDomainCertificateArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetDomainCertificateArn"></a>

```csharp
private void ResetDomainCertificateArn()
```

##### `ResetEndpointDomainPrefix` <a name="ResetEndpointDomainPrefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetEndpointDomainPrefix"></a>

```csharp
private void ResetEndpointDomainPrefix()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoadBalancerOptions` <a name="ResetLoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetLoadBalancerOptions"></a>

```csharp
private void ResetLoadBalancerOptions()
```

##### `ResetNetworkInterfaceOptions` <a name="ResetNetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetNetworkInterfaceOptions"></a>

```csharp
private void ResetNetworkInterfaceOptions()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetPolicyDocument"></a>

```csharp
private void ResetPolicyDocument()
```

##### `ResetRdsOptions` <a name="ResetRdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetRdsOptions"></a>

```csharp
private void ResetRdsOptions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetSseSpecification"></a>

```csharp
private void ResetSseSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VerifiedaccessEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedaccessEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedaccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference">VerifiedaccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.deviceValidationDomain">DeviceValidationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomain">EndpointDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference">VerifiedaccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference">VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference">VerifiedaccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference">VerifiedaccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference">VerifiedaccessEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomainInput">ApplicationDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentTypeInput">AttachmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptionsInput">CidrOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArnInput">DomainCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefixInput">EndpointDomainPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptionsInput">LoadBalancerOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptionsInput">NetworkInterfaceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptionsInput">RdsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupIdInput">VerifiedAccessGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomain">ApplicationDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CidrOptions`<sup>Required</sup> <a name="CidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptions"></a>

```csharp
public VerifiedaccessEndpointCidrOptionsOutputReference CidrOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference">VerifiedaccessEndpointCidrOptionsOutputReference</a>

---

##### `DeviceValidationDomain`<sup>Required</sup> <a name="DeviceValidationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.deviceValidationDomain"></a>

```csharp
public string DeviceValidationDomain { get; }
```

- *Type:* string

---

##### `EndpointDomain`<sup>Required</sup> <a name="EndpointDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomain"></a>

```csharp
public string EndpointDomain { get; }
```

- *Type:* string

---

##### `LoadBalancerOptions`<sup>Required</sup> <a name="LoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptions"></a>

```csharp
public VerifiedaccessEndpointLoadBalancerOptionsOutputReference LoadBalancerOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference">VerifiedaccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `NetworkInterfaceOptions`<sup>Required</sup> <a name="NetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptions"></a>

```csharp
public VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference NetworkInterfaceOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference">VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `RdsOptions`<sup>Required</sup> <a name="RdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptions"></a>

```csharp
public VerifiedaccessEndpointRdsOptionsOutputReference RdsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference">VerifiedaccessEndpointRdsOptionsOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecification"></a>

```csharp
public VerifiedaccessEndpointSseSpecificationOutputReference SseSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference">VerifiedaccessEndpointSseSpecificationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeouts"></a>

```csharp
public VerifiedaccessEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference">VerifiedaccessEndpointTimeoutsOutputReference</a>

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessInstanceId"></a>

```csharp
public string VerifiedAccessInstanceId { get; }
```

- *Type:* string

---

##### `ApplicationDomainInput`<sup>Optional</sup> <a name="ApplicationDomainInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomainInput"></a>

```csharp
public string ApplicationDomainInput { get; }
```

- *Type:* string

---

##### `AttachmentTypeInput`<sup>Optional</sup> <a name="AttachmentTypeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentTypeInput"></a>

```csharp
public string AttachmentTypeInput { get; }
```

- *Type:* string

---

##### `CidrOptionsInput`<sup>Optional</sup> <a name="CidrOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.cidrOptionsInput"></a>

```csharp
public VerifiedaccessEndpointCidrOptions CidrOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainCertificateArnInput`<sup>Optional</sup> <a name="DomainCertificateArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArnInput"></a>

```csharp
public string DomainCertificateArnInput { get; }
```

- *Type:* string

---

##### `EndpointDomainPrefixInput`<sup>Optional</sup> <a name="EndpointDomainPrefixInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefixInput"></a>

```csharp
public string EndpointDomainPrefixInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerOptionsInput`<sup>Optional</sup> <a name="LoadBalancerOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.loadBalancerOptionsInput"></a>

```csharp
public VerifiedaccessEndpointLoadBalancerOptions LoadBalancerOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---

##### `NetworkInterfaceOptionsInput`<sup>Optional</sup> <a name="NetworkInterfaceOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.networkInterfaceOptionsInput"></a>

```csharp
public VerifiedaccessEndpointNetworkInterfaceOptions NetworkInterfaceOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `RdsOptionsInput`<sup>Optional</sup> <a name="RdsOptionsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.rdsOptionsInput"></a>

```csharp
public VerifiedaccessEndpointRdsOptions RdsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.sseSpecificationInput"></a>

```csharp
public VerifiedaccessEndpointSseSpecification SseSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VerifiedAccessGroupIdInput`<sup>Optional</sup> <a name="VerifiedAccessGroupIdInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupIdInput"></a>

```csharp
public string VerifiedAccessGroupIdInput { get; }
```

- *Type:* string

---

##### `ApplicationDomain`<sup>Required</sup> <a name="ApplicationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.applicationDomain"></a>

```csharp
public string ApplicationDomain { get; }
```

- *Type:* string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainCertificateArn`<sup>Required</sup> <a name="DomainCertificateArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.domainCertificateArn"></a>

```csharp
public string DomainCertificateArn { get; }
```

- *Type:* string

---

##### `EndpointDomainPrefix`<sup>Required</sup> <a name="EndpointDomainPrefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointDomainPrefix"></a>

```csharp
public string EndpointDomainPrefix { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.verifiedAccessGroupId"></a>

```csharp
public string VerifiedAccessGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessEndpointCidrOptions <a name="VerifiedaccessEndpointCidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointCidrOptions {
    string Cidr,
    object PortRange,
    string Protocol = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#cidr VerifiedaccessEndpoint#cidr}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.portRange">PortRange</a></code> | <code>object</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#cidr VerifiedaccessEndpoint#cidr}.

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.portRange"></a>

```csharp
public object PortRange { get; set; }
```

- *Type:* object

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

### VerifiedaccessEndpointCidrOptionsPortRange <a name="VerifiedaccessEndpointCidrOptionsPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointCidrOptionsPortRange {
    double FromPort,
    double ToPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}.

---

### VerifiedaccessEndpointConfig <a name="VerifiedaccessEndpointConfig" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AttachmentType,
    string EndpointType,
    string VerifiedAccessGroupId,
    string ApplicationDomain = null,
    VerifiedaccessEndpointCidrOptions CidrOptions = null,
    string Description = null,
    string DomainCertificateArn = null,
    string EndpointDomainPrefix = null,
    string Id = null,
    VerifiedaccessEndpointLoadBalancerOptions LoadBalancerOptions = null,
    VerifiedaccessEndpointNetworkInterfaceOptions NetworkInterfaceOptions = null,
    string PolicyDocument = null,
    VerifiedaccessEndpointRdsOptions RdsOptions = null,
    string Region = null,
    string[] SecurityGroupIds = null,
    VerifiedaccessEndpointSseSpecification SseSpecification = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VerifiedaccessEndpointTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.attachmentType">AttachmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.applicationDomain">ApplicationDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a></code> | cidr_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | load_balancer_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | network_interface_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a></code> | rds_options block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | sse_specification block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.attachmentType"></a>

```csharp
public string AttachmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#attachment_type VerifiedaccessEndpoint#attachment_type}.

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#endpoint_type VerifiedaccessEndpoint#endpoint_type}.

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.verifiedAccessGroupId"></a>

```csharp
public string VerifiedAccessGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#verified_access_group_id VerifiedaccessEndpoint#verified_access_group_id}.

---

##### `ApplicationDomain`<sup>Optional</sup> <a name="ApplicationDomain" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.applicationDomain"></a>

```csharp
public string ApplicationDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#application_domain VerifiedaccessEndpoint#application_domain}.

---

##### `CidrOptions`<sup>Optional</sup> <a name="CidrOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.cidrOptions"></a>

```csharp
public VerifiedaccessEndpointCidrOptions CidrOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

cidr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#cidr_options VerifiedaccessEndpoint#cidr_options}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#description VerifiedaccessEndpoint#description}.

---

##### `DomainCertificateArn`<sup>Optional</sup> <a name="DomainCertificateArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.domainCertificateArn"></a>

```csharp
public string DomainCertificateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#domain_certificate_arn VerifiedaccessEndpoint#domain_certificate_arn}.

---

##### `EndpointDomainPrefix`<sup>Optional</sup> <a name="EndpointDomainPrefix" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.endpointDomainPrefix"></a>

```csharp
public string EndpointDomainPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#endpoint_domain_prefix VerifiedaccessEndpoint#endpoint_domain_prefix}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#id VerifiedaccessEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerOptions`<sup>Optional</sup> <a name="LoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.loadBalancerOptions"></a>

```csharp
public VerifiedaccessEndpointLoadBalancerOptions LoadBalancerOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

load_balancer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#load_balancer_options VerifiedaccessEndpoint#load_balancer_options}

---

##### `NetworkInterfaceOptions`<sup>Optional</sup> <a name="NetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.networkInterfaceOptions"></a>

```csharp
public VerifiedaccessEndpointNetworkInterfaceOptions NetworkInterfaceOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

network_interface_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#network_interface_options VerifiedaccessEndpoint#network_interface_options}

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#policy_document VerifiedaccessEndpoint#policy_document}.

---

##### `RdsOptions`<sup>Optional</sup> <a name="RdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.rdsOptions"></a>

```csharp
public VerifiedaccessEndpointRdsOptions RdsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

rds_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_options VerifiedaccessEndpoint#rds_options}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#region VerifiedaccessEndpoint#region}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#security_group_ids VerifiedaccessEndpoint#security_group_ids}.

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.sseSpecification"></a>

```csharp
public VerifiedaccessEndpointSseSpecification SseSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

sse_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#sse_specification VerifiedaccessEndpoint#sse_specification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#tags VerifiedaccessEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#tags_all VerifiedaccessEndpoint#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointConfig.property.timeouts"></a>

```csharp
public VerifiedaccessEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts">VerifiedaccessEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#timeouts VerifiedaccessEndpoint#timeouts}

---

### VerifiedaccessEndpointLoadBalancerOptions <a name="VerifiedaccessEndpointLoadBalancerOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointLoadBalancerOptions {
    string LoadBalancerArn = null,
    double Port = null,
    object PortRange = null,
    string Protocol = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.portRange">PortRange</a></code> | <code>object</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}. |

---

##### `LoadBalancerArn`<sup>Optional</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#load_balancer_arn VerifiedaccessEndpoint#load_balancer_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.portRange"></a>

```csharp
public object PortRange { get; set; }
```

- *Type:* object

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

### VerifiedaccessEndpointLoadBalancerOptionsPortRange <a name="VerifiedaccessEndpointLoadBalancerOptionsPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointLoadBalancerOptionsPortRange {
    double FromPort,
    double ToPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}.

---

### VerifiedaccessEndpointNetworkInterfaceOptions <a name="VerifiedaccessEndpointNetworkInterfaceOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointNetworkInterfaceOptions {
    string NetworkInterfaceId = null,
    double Port = null,
    object PortRange = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.portRange">PortRange</a></code> | <code>object</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#network_interface_id VerifiedaccessEndpoint#network_interface_id}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.portRange"></a>

```csharp
public object PortRange { get; set; }
```

- *Type:* object

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port_range VerifiedaccessEndpoint#port_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

### VerifiedaccessEndpointNetworkInterfaceOptionsPortRange <a name="VerifiedaccessEndpointNetworkInterfaceOptionsPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointNetworkInterfaceOptionsPortRange {
    double FromPort,
    double ToPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}. |

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#from_port VerifiedaccessEndpoint#from_port}.

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#to_port VerifiedaccessEndpoint#to_port}.

---

### VerifiedaccessEndpointRdsOptions <a name="VerifiedaccessEndpointRdsOptions" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointRdsOptions {
    double Port = null,
    string Protocol = null,
    string RdsDbClusterArn = null,
    string RdsDbInstanceArn = null,
    string RdsDbProxyArn = null,
    string RdsEndpoint = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_db_cluster_arn VerifiedaccessEndpoint#rds_db_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_db_instance_arn VerifiedaccessEndpoint#rds_db_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_db_proxy_arn VerifiedaccessEndpoint#rds_db_proxy_arn}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsEndpoint">RdsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_endpoint VerifiedaccessEndpoint#rds_endpoint}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#port VerifiedaccessEndpoint#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#protocol VerifiedaccessEndpoint#protocol}.

---

##### `RdsDbClusterArn`<sup>Optional</sup> <a name="RdsDbClusterArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbClusterArn"></a>

```csharp
public string RdsDbClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_db_cluster_arn VerifiedaccessEndpoint#rds_db_cluster_arn}.

---

##### `RdsDbInstanceArn`<sup>Optional</sup> <a name="RdsDbInstanceArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbInstanceArn"></a>

```csharp
public string RdsDbInstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_db_instance_arn VerifiedaccessEndpoint#rds_db_instance_arn}.

---

##### `RdsDbProxyArn`<sup>Optional</sup> <a name="RdsDbProxyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsDbProxyArn"></a>

```csharp
public string RdsDbProxyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_db_proxy_arn VerifiedaccessEndpoint#rds_db_proxy_arn}.

---

##### `RdsEndpoint`<sup>Optional</sup> <a name="RdsEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.rdsEndpoint"></a>

```csharp
public string RdsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#rds_endpoint VerifiedaccessEndpoint#rds_endpoint}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#subnet_ids VerifiedaccessEndpoint#subnet_ids}.

---

### VerifiedaccessEndpointSseSpecification <a name="VerifiedaccessEndpointSseSpecification" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointSseSpecification {
    object CustomerManagedKeyEnabled = null,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}. |

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.customerManagedKeyEnabled"></a>

```csharp
public object CustomerManagedKeyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#customer_managed_key_enabled VerifiedaccessEndpoint#customer_managed_key_enabled}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#kms_key_arn VerifiedaccessEndpoint#kms_key_arn}.

---

### VerifiedaccessEndpointTimeouts <a name="VerifiedaccessEndpointTimeouts" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#create VerifiedaccessEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#delete VerifiedaccessEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/verifiedaccess_endpoint#update VerifiedaccessEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessEndpointCidrOptionsOutputReference <a name="VerifiedaccessEndpointCidrOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointCidrOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.putPortRange"></a>

```csharp
private void PutPortRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.putPortRange.parameter.value"></a>

- *Type:* object

---

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList">VerifiedaccessEndpointCidrOptionsPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRange"></a>

```csharp
public VerifiedaccessEndpointCidrOptionsPortRangeList PortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList">VerifiedaccessEndpointCidrOptionsPortRangeList</a>

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.portRangeInput"></a>

```csharp
public object PortRangeInput { get; }
```

- *Type:* object

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```csharp
public VerifiedaccessEndpointCidrOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptions">VerifiedaccessEndpointCidrOptions</a>

---


### VerifiedaccessEndpointCidrOptionsPortRangeList <a name="VerifiedaccessEndpointCidrOptionsPortRangeList" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointCidrOptionsPortRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.get"></a>

```csharp
private VerifiedaccessEndpointCidrOptionsPortRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VerifiedaccessEndpointCidrOptionsPortRangeOutputReference <a name="VerifiedaccessEndpointCidrOptionsPortRangeOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointCidrOptionsPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointCidrOptionsPortRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VerifiedaccessEndpointLoadBalancerOptionsOutputReference <a name="VerifiedaccessEndpointLoadBalancerOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointLoadBalancerOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn">ResetLoadBalancerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.putPortRange"></a>

```csharp
private void PutPortRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.putPortRange.parameter.value"></a>

- *Type:* object

---

##### `ResetLoadBalancerArn` <a name="ResetLoadBalancerArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetLoadBalancerArn"></a>

```csharp
private void ResetLoadBalancerArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList">VerifiedaccessEndpointLoadBalancerOptionsPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRange"></a>

```csharp
public VerifiedaccessEndpointLoadBalancerOptionsPortRangeList PortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList">VerifiedaccessEndpointLoadBalancerOptionsPortRangeList</a>

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArnInput"></a>

```csharp
public string LoadBalancerArnInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.portRangeInput"></a>

```csharp
public object PortRangeInput { get; }
```

- *Type:* object

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```csharp
public VerifiedaccessEndpointLoadBalancerOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptions">VerifiedaccessEndpointLoadBalancerOptions</a>

---


### VerifiedaccessEndpointLoadBalancerOptionsPortRangeList <a name="VerifiedaccessEndpointLoadBalancerOptionsPortRangeList" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointLoadBalancerOptionsPortRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.get"></a>

```csharp
private VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference <a name="VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointLoadBalancerOptionsPortRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference <a name="VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.putPortRange"></a>

```csharp
private void PutPortRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.putPortRange.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList">VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRange"></a>

```csharp
public VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList PortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList">VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList</a>

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.portRangeInput"></a>

```csharp
public object PortRangeInput { get; }
```

- *Type:* object

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```csharp
public VerifiedaccessEndpointNetworkInterfaceOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptions">VerifiedaccessEndpointNetworkInterfaceOptions</a>

---


### VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList <a name="VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.get"></a>

```csharp
private VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference <a name="VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointNetworkInterfaceOptionsPortRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VerifiedaccessEndpointRdsOptionsOutputReference <a name="VerifiedaccessEndpointRdsOptionsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointRdsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn">ResetRdsDbClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn">ResetRdsDbInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn">ResetRdsDbProxyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsEndpoint">ResetRdsEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRdsDbClusterArn` <a name="ResetRdsDbClusterArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbClusterArn"></a>

```csharp
private void ResetRdsDbClusterArn()
```

##### `ResetRdsDbInstanceArn` <a name="ResetRdsDbInstanceArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbInstanceArn"></a>

```csharp
private void ResetRdsDbInstanceArn()
```

##### `ResetRdsDbProxyArn` <a name="ResetRdsDbProxyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsDbProxyArn"></a>

```csharp
private void ResetRdsDbProxyArn()
```

##### `ResetRdsEndpoint` <a name="ResetRdsEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetRdsEndpoint"></a>

```csharp
private void ResetRdsEndpoint()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput">RdsDbClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput">RdsDbInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput">RdsDbProxyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput">RdsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">RdsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RdsDbClusterArnInput`<sup>Optional</sup> <a name="RdsDbClusterArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArnInput"></a>

```csharp
public string RdsDbClusterArnInput { get; }
```

- *Type:* string

---

##### `RdsDbInstanceArnInput`<sup>Optional</sup> <a name="RdsDbInstanceArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArnInput"></a>

```csharp
public string RdsDbInstanceArnInput { get; }
```

- *Type:* string

---

##### `RdsDbProxyArnInput`<sup>Optional</sup> <a name="RdsDbProxyArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArnInput"></a>

```csharp
public string RdsDbProxyArnInput { get; }
```

- *Type:* string

---

##### `RdsEndpointInput`<sup>Optional</sup> <a name="RdsEndpointInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpointInput"></a>

```csharp
public string RdsEndpointInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RdsDbClusterArn`<sup>Required</sup> <a name="RdsDbClusterArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```csharp
public string RdsDbClusterArn { get; }
```

- *Type:* string

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```csharp
public string RdsDbInstanceArn { get; }
```

- *Type:* string

---

##### `RdsDbProxyArn`<sup>Required</sup> <a name="RdsDbProxyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```csharp
public string RdsDbProxyArn { get; }
```

- *Type:* string

---

##### `RdsEndpoint`<sup>Required</sup> <a name="RdsEndpoint" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```csharp
public string RdsEndpoint { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```csharp
public VerifiedaccessEndpointRdsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointRdsOptions">VerifiedaccessEndpointRdsOptions</a>

---


### VerifiedaccessEndpointSseSpecificationOutputReference <a name="VerifiedaccessEndpointSseSpecificationOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointSseSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```csharp
private void ResetCustomerManagedKeyEnabled()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```csharp
public object CustomerManagedKeyEnabledInput { get; }
```

- *Type:* object

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```csharp
public object CustomerManagedKeyEnabled { get; }
```

- *Type:* object

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```csharp
public VerifiedaccessEndpointSseSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointSseSpecification">VerifiedaccessEndpointSseSpecification</a>

---


### VerifiedaccessEndpointTimeoutsOutputReference <a name="VerifiedaccessEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessEndpoint.VerifiedaccessEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



