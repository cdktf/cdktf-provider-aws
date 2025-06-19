# `vpcEndpoint` Submodule <a name="`vpcEndpoint` Submodule" id="@cdktf/provider-aws.vpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpoint <a name="VpcEndpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint aws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpoint(Construct Scope, string Id, VpcEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig">VpcEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig">VpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putDnsOptions">PutDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putSubnetConfiguration">PutSubnetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetAutoAccept">ResetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetDnsOptions">ResetDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPrivateDnsEnabled">ResetPrivateDnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetResourceConfigurationArn">ResetResourceConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRouteTableIds">ResetRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceNetworkArn">ResetServiceNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceRegion">ResetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetConfiguration">ResetSubnetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetVpcEndpointType">ResetVpcEndpointType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDnsOptions` <a name="PutDnsOptions" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putDnsOptions"></a>

```csharp
private void PutDnsOptions(VpcEndpointDnsOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putDnsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

---

##### `PutSubnetConfiguration` <a name="PutSubnetConfiguration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putSubnetConfiguration"></a>

```csharp
private void PutSubnetConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putSubnetConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(VpcEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>

---

##### `ResetAutoAccept` <a name="ResetAutoAccept" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetAutoAccept"></a>

```csharp
private void ResetAutoAccept()
```

##### `ResetDnsOptions` <a name="ResetDnsOptions" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetDnsOptions"></a>

```csharp
private void ResetDnsOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetPrivateDnsEnabled` <a name="ResetPrivateDnsEnabled" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetPrivateDnsEnabled"></a>

```csharp
private void ResetPrivateDnsEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceConfigurationArn` <a name="ResetResourceConfigurationArn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetResourceConfigurationArn"></a>

```csharp
private void ResetResourceConfigurationArn()
```

##### `ResetRouteTableIds` <a name="ResetRouteTableIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetRouteTableIds"></a>

```csharp
private void ResetRouteTableIds()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetServiceNetworkArn` <a name="ResetServiceNetworkArn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceNetworkArn"></a>

```csharp
private void ResetServiceNetworkArn()
```

##### `ResetServiceRegion` <a name="ResetServiceRegion" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetServiceRegion"></a>

```csharp
private void ResetServiceRegion()
```

##### `ResetSubnetConfiguration` <a name="ResetSubnetConfiguration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetConfiguration"></a>

```csharp
private void ResetSubnetConfiguration()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcEndpointType` <a name="ResetVpcEndpointType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.resetVpcEndpointType"></a>

```csharp
private void ResetVpcEndpointType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpcEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpcEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpcEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList">VpcEndpointDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptions">DnsOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference">VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.prefixListId">PrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.requesterManaged">RequesterManaged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfiguration">SubnetConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList">VpcEndpointSubnetConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference">VpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAcceptInput">AutoAcceptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptionsInput">DnsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabledInput">PrivateDnsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArnInput">ResourceConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIdsInput">RouteTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArnInput">ServiceNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegionInput">ServiceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfigurationInput">SubnetConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointTypeInput">VpcEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAccept">AutoAccept</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegion">ServiceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointType">VpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; }
```

- *Type:* string[]

---

##### `DnsEntry`<sup>Required</sup> <a name="DnsEntry" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsEntry"></a>

```csharp
public VpcEndpointDnsEntryList DnsEntry { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList">VpcEndpointDnsEntryList</a>

---

##### `DnsOptions`<sup>Required</sup> <a name="DnsOptions" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptions"></a>

```csharp
public VpcEndpointDnsOptionsOutputReference DnsOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference">VpcEndpointDnsOptionsOutputReference</a>

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.prefixListId"></a>

```csharp
public string PrefixListId { get; }
```

- *Type:* string

---

##### `RequesterManaged`<sup>Required</sup> <a name="RequesterManaged" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.requesterManaged"></a>

```csharp
public IResolvable RequesterManaged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetConfiguration`<sup>Required</sup> <a name="SubnetConfiguration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfiguration"></a>

```csharp
public VpcEndpointSubnetConfigurationList SubnetConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList">VpcEndpointSubnetConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeouts"></a>

```csharp
public VpcEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference">VpcEndpointTimeoutsOutputReference</a>

---

##### `AutoAcceptInput`<sup>Optional</sup> <a name="AutoAcceptInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAcceptInput"></a>

```csharp
public object AutoAcceptInput { get; }
```

- *Type:* object

---

##### `DnsOptionsInput`<sup>Optional</sup> <a name="DnsOptionsInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.dnsOptionsInput"></a>

```csharp
public VpcEndpointDnsOptions DnsOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PrivateDnsEnabledInput`<sup>Optional</sup> <a name="PrivateDnsEnabledInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabledInput"></a>

```csharp
public object PrivateDnsEnabledInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceConfigurationArnInput`<sup>Optional</sup> <a name="ResourceConfigurationArnInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArnInput"></a>

```csharp
public string ResourceConfigurationArnInput { get; }
```

- *Type:* string

---

##### `RouteTableIdsInput`<sup>Optional</sup> <a name="RouteTableIdsInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIdsInput"></a>

```csharp
public string[] RouteTableIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkArnInput`<sup>Optional</sup> <a name="ServiceNetworkArnInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArnInput"></a>

```csharp
public string ServiceNetworkArnInput { get; }
```

- *Type:* string

---

##### `ServiceRegionInput`<sup>Optional</sup> <a name="ServiceRegionInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegionInput"></a>

```csharp
public string ServiceRegionInput { get; }
```

- *Type:* string

---

##### `SubnetConfigurationInput`<sup>Optional</sup> <a name="SubnetConfigurationInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetConfigurationInput"></a>

```csharp
public object SubnetConfigurationInput { get; }
```

- *Type:* object

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcEndpointTypeInput`<sup>Optional</sup> <a name="VpcEndpointTypeInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointTypeInput"></a>

```csharp
public string VpcEndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AutoAccept`<sup>Required</sup> <a name="AutoAccept" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.autoAccept"></a>

```csharp
public object AutoAccept { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PrivateDnsEnabled`<sup>Required</sup> <a name="PrivateDnsEnabled" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.privateDnsEnabled"></a>

```csharp
public object PrivateDnsEnabled { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; }
```

- *Type:* string

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceNetworkArn`<sup>Required</sup> <a name="ServiceNetworkArn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceNetworkArn"></a>

```csharp
public string ServiceNetworkArn { get; }
```

- *Type:* string

---

##### `ServiceRegion`<sup>Required</sup> <a name="ServiceRegion" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.serviceRegion"></a>

```csharp
public string ServiceRegion { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcEndpointType`<sup>Required</sup> <a name="VpcEndpointType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcEndpointType"></a>

```csharp
public string VpcEndpointType { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointConfig <a name="VpcEndpointConfig" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VpcId,
    object AutoAccept = null,
    VpcEndpointDnsOptions DnsOptions = null,
    string Id = null,
    string IpAddressType = null,
    string Policy = null,
    object PrivateDnsEnabled = null,
    string Region = null,
    string ResourceConfigurationArn = null,
    string[] RouteTableIds = null,
    string[] SecurityGroupIds = null,
    string ServiceName = null,
    string ServiceNetworkArn = null,
    string ServiceRegion = null,
    object SubnetConfiguration = null,
    string[] SubnetIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpcEndpointTimeouts Timeouts = null,
    string VpcEndpointType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#vpc_id VpcEndpoint#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.autoAccept">AutoAccept</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#auto_accept VpcEndpoint#auto_accept}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dnsOptions">DnsOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a></code> | dns_options block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#id VpcEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#ip_address_type VpcEndpoint#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#policy VpcEndpoint#policy}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#private_dns_enabled VpcEndpoint#private_dns_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#resource_configuration_arn VpcEndpoint#resource_configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#route_table_ids VpcEndpoint#route_table_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#security_group_ids VpcEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#service_name VpcEndpoint#service_name}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceNetworkArn">ServiceNetworkArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#service_network_arn VpcEndpoint#service_network_arn}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceRegion">ServiceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#service_region VpcEndpoint#service_region}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetConfiguration">SubnetConfiguration</a></code> | <code>object</code> | subnet_configuration block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#subnet_ids VpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#tags VpcEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#tags_all VpcEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcEndpointType">VpcEndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#vpc_id VpcEndpoint#vpc_id}.

---

##### `AutoAccept`<sup>Optional</sup> <a name="AutoAccept" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.autoAccept"></a>

```csharp
public object AutoAccept { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#auto_accept VpcEndpoint#auto_accept}.

---

##### `DnsOptions`<sup>Optional</sup> <a name="DnsOptions" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.dnsOptions"></a>

```csharp
public VpcEndpointDnsOptions DnsOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

dns_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#dns_options VpcEndpoint#dns_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#id VpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#ip_address_type VpcEndpoint#ip_address_type}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#policy VpcEndpoint#policy}.

---

##### `PrivateDnsEnabled`<sup>Optional</sup> <a name="PrivateDnsEnabled" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.privateDnsEnabled"></a>

```csharp
public object PrivateDnsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#private_dns_enabled VpcEndpoint#private_dns_enabled}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#region VpcEndpoint#region}

---

##### `ResourceConfigurationArn`<sup>Optional</sup> <a name="ResourceConfigurationArn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.resourceConfigurationArn"></a>

```csharp
public string ResourceConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#resource_configuration_arn VpcEndpoint#resource_configuration_arn}.

---

##### `RouteTableIds`<sup>Optional</sup> <a name="RouteTableIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#route_table_ids VpcEndpoint#route_table_ids}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#security_group_ids VpcEndpoint#security_group_ids}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#service_name VpcEndpoint#service_name}.

---

##### `ServiceNetworkArn`<sup>Optional</sup> <a name="ServiceNetworkArn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceNetworkArn"></a>

```csharp
public string ServiceNetworkArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#service_network_arn VpcEndpoint#service_network_arn}.

---

##### `ServiceRegion`<sup>Optional</sup> <a name="ServiceRegion" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.serviceRegion"></a>

```csharp
public string ServiceRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#service_region VpcEndpoint#service_region}.

---

##### `SubnetConfiguration`<sup>Optional</sup> <a name="SubnetConfiguration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetConfiguration"></a>

```csharp
public object SubnetConfiguration { get; set; }
```

- *Type:* object

subnet_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#subnet_configuration VpcEndpoint#subnet_configuration}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#subnet_ids VpcEndpoint#subnet_ids}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#tags VpcEndpoint#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#tags_all VpcEndpoint#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.timeouts"></a>

```csharp
public VpcEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts">VpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#timeouts VpcEndpoint#timeouts}

---

##### `VpcEndpointType`<sup>Optional</sup> <a name="VpcEndpointType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointConfig.property.vpcEndpointType"></a>

```csharp
public string VpcEndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}.

---

### VpcEndpointDnsEntry <a name="VpcEndpointDnsEntry" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointDnsEntry {

};
```


### VpcEndpointDnsOptions <a name="VpcEndpointDnsOptions" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointDnsOptions {
    string DnsRecordIpType = null,
    object PrivateDnsOnlyForInboundResolverEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.dnsRecordIpType">DnsRecordIpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#dns_record_ip_type VpcEndpoint#dns_record_ip_type}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint">PrivateDnsOnlyForInboundResolverEndpoint</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}. |

---

##### `DnsRecordIpType`<sup>Optional</sup> <a name="DnsRecordIpType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.dnsRecordIpType"></a>

```csharp
public string DnsRecordIpType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#dns_record_ip_type VpcEndpoint#dns_record_ip_type}.

---

##### `PrivateDnsOnlyForInboundResolverEndpoint`<sup>Optional</sup> <a name="PrivateDnsOnlyForInboundResolverEndpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```csharp
public object PrivateDnsOnlyForInboundResolverEndpoint { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}.

---

### VpcEndpointSubnetConfiguration <a name="VpcEndpointSubnetConfiguration" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointSubnetConfiguration {
    string Ipv4 = null,
    string Ipv6 = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv4">Ipv4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#ipv4 VpcEndpoint#ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv6">Ipv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#ipv6 VpcEndpoint#ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#subnet_id VpcEndpoint#subnet_id}. |

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv4"></a>

```csharp
public string Ipv4 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#ipv4 VpcEndpoint#ipv4}.

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.ipv6"></a>

```csharp
public string Ipv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#ipv6 VpcEndpoint#ipv6}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#subnet_id VpcEndpoint#subnet_id}.

---

### VpcEndpointTimeouts <a name="VpcEndpointTimeouts" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#create VpcEndpoint#create}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#delete VpcEndpoint#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#update VpcEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#create VpcEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#delete VpcEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/vpc_endpoint#update VpcEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEndpointDnsEntryList <a name="VpcEndpointDnsEntryList" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointDnsEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.get"></a>

```csharp
private VpcEndpointDnsEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VpcEndpointDnsEntryOutputReference <a name="VpcEndpointDnsEntryOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointDnsEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry">VpcEndpointDnsEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntryOutputReference.property.internalValue"></a>

```csharp
public VpcEndpointDnsEntry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsEntry">VpcEndpointDnsEntry</a>

---


### VpcEndpointDnsOptionsOutputReference <a name="VpcEndpointDnsOptionsOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointDnsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType">ResetDnsRecordIpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint">ResetPrivateDnsOnlyForInboundResolverEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsRecordIpType` <a name="ResetDnsRecordIpType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType"></a>

```csharp
private void ResetDnsRecordIpType()
```

##### `ResetPrivateDnsOnlyForInboundResolverEndpoint` <a name="ResetPrivateDnsOnlyForInboundResolverEndpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint"></a>

```csharp
private void ResetPrivateDnsOnlyForInboundResolverEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput">DnsRecordIpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput">PrivateDnsOnlyForInboundResolverEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">DnsRecordIpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">PrivateDnsOnlyForInboundResolverEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsRecordIpTypeInput`<sup>Optional</sup> <a name="DnsRecordIpTypeInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput"></a>

```csharp
public string DnsRecordIpTypeInput { get; }
```

- *Type:* string

---

##### `PrivateDnsOnlyForInboundResolverEndpointInput`<sup>Optional</sup> <a name="PrivateDnsOnlyForInboundResolverEndpointInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput"></a>

```csharp
public object PrivateDnsOnlyForInboundResolverEndpointInput { get; }
```

- *Type:* object

---

##### `DnsRecordIpType`<sup>Required</sup> <a name="DnsRecordIpType" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```csharp
public string DnsRecordIpType { get; }
```

- *Type:* string

---

##### `PrivateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="PrivateDnsOnlyForInboundResolverEndpoint" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```csharp
public object PrivateDnsOnlyForInboundResolverEndpoint { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```csharp
public VpcEndpointDnsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointDnsOptions">VpcEndpointDnsOptions</a>

---


### VpcEndpointSubnetConfigurationList <a name="VpcEndpointSubnetConfigurationList" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointSubnetConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.get"></a>

```csharp
private VpcEndpointSubnetConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpcEndpointSubnetConfigurationOutputReference <a name="VpcEndpointSubnetConfigurationOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointSubnetConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv4"></a>

```csharp
private void ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetIpv6"></a>

```csharp
private void ResetIpv6()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4">Ipv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6">Ipv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4Input"></a>

```csharp
public string Ipv4Input { get; }
```

- *Type:* string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6Input"></a>

```csharp
public string Ipv6Input { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv4"></a>

```csharp
public string Ipv4 { get; }
```

- *Type:* string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.ipv6"></a>

```csharp
public string Ipv6 { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointSubnetConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpcEndpointTimeoutsOutputReference <a name="VpcEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpcEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcEndpoint.VpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



