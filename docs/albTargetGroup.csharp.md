# `albTargetGroup` Submodule <a name="`albTargetGroup` Submodule" id="@cdktf/provider-aws.albTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbTargetGroup <a name="AlbTargetGroup" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group aws_alb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroup(Construct Scope, string Id, AlbTargetGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig">AlbTargetGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig">AlbTargetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover">PutTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination">ResetConnectionTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay">ResetDeregistrationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled">ResetLambdaMultiValueHeadersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType">ResetLoadBalancingAlgorithmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp">ResetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion">ResetProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2">ResetProxyProtocolV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart">ResetSlowStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness">ResetStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover">ResetTargetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType">ResetTargetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck"></a>

```csharp
private void PutHealthCheck(AlbTargetGroupHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness"></a>

```csharp
private void PutStickiness(AlbTargetGroupStickiness Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---

##### `PutTargetFailover` <a name="PutTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover"></a>

```csharp
private void PutTargetFailover(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* object

---

##### `ResetConnectionTermination` <a name="ResetConnectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination"></a>

```csharp
private void ResetConnectionTermination()
```

##### `ResetDeregistrationDelay` <a name="ResetDeregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay"></a>

```csharp
private void ResetDeregistrationDelay()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetLambdaMultiValueHeadersEnabled` <a name="ResetLambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```csharp
private void ResetLambdaMultiValueHeadersEnabled()
```

##### `ResetLoadBalancingAlgorithmType` <a name="ResetLoadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```csharp
private void ResetLoadBalancingAlgorithmType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreserveClientIp` <a name="ResetPreserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp"></a>

```csharp
private void ResetPreserveClientIp()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolVersion` <a name="ResetProtocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion"></a>

```csharp
private void ResetProtocolVersion()
```

##### `ResetProxyProtocolV2` <a name="ResetProxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2"></a>

```csharp
private void ResetProxyProtocolV2()
```

##### `ResetSlowStart` <a name="ResetSlowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart"></a>

```csharp
private void ResetSlowStart()
```

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness"></a>

```csharp
private void ResetStickiness()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTargetFailover` <a name="ResetTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover"></a>

```csharp
private void ResetTargetFailover()
```

##### `ResetTargetType` <a name="ResetTargetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType"></a>

```csharp
private void ResetTargetType()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AlbTargetGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AlbTargetGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AlbTargetGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix">ArnSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover">TargetFailover</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput">ConnectionTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput">DeregistrationDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">LambdaMultiValueHeadersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput">LoadBalancingAlgorithmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput">PreserveClientIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input">ProxyProtocolV2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput">SlowStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput">TargetFailoverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput">TargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination">ConnectionTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay">DeregistrationDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled">LambdaMultiValueHeadersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType">LoadBalancingAlgorithmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp">PreserveClientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2">ProxyProtocolV2</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart">SlowStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType">TargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ArnSuffix`<sup>Required</sup> <a name="ArnSuffix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix"></a>

```csharp
public string ArnSuffix { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck"></a>

```csharp
public AlbTargetGroupHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a>

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness"></a>

```csharp
public AlbTargetGroupStickinessOutputReference Stickiness { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a>

---

##### `TargetFailover`<sup>Required</sup> <a name="TargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover"></a>

```csharp
public AlbTargetGroupTargetFailoverList TargetFailover { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a>

---

##### `ConnectionTerminationInput`<sup>Optional</sup> <a name="ConnectionTerminationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput"></a>

```csharp
public object ConnectionTerminationInput { get; }
```

- *Type:* object

---

##### `DeregistrationDelayInput`<sup>Optional</sup> <a name="DeregistrationDelayInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput"></a>

```csharp
public string DeregistrationDelayInput { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput"></a>

```csharp
public AlbTargetGroupHealthCheck HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `LambdaMultiValueHeadersEnabledInput`<sup>Optional</sup> <a name="LambdaMultiValueHeadersEnabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```csharp
public object LambdaMultiValueHeadersEnabledInput { get; }
```

- *Type:* object

---

##### `LoadBalancingAlgorithmTypeInput`<sup>Optional</sup> <a name="LoadBalancingAlgorithmTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```csharp
public string LoadBalancingAlgorithmTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreserveClientIpInput`<sup>Optional</sup> <a name="PreserveClientIpInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput"></a>

```csharp
public string PreserveClientIpInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput"></a>

```csharp
public string ProtocolVersionInput { get; }
```

- *Type:* string

---

##### `ProxyProtocolV2Input`<sup>Optional</sup> <a name="ProxyProtocolV2Input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input"></a>

```csharp
public object ProxyProtocolV2Input { get; }
```

- *Type:* object

---

##### `SlowStartInput`<sup>Optional</sup> <a name="SlowStartInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput"></a>

```csharp
public double SlowStartInput { get; }
```

- *Type:* double

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput"></a>

```csharp
public AlbTargetGroupStickiness StickinessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetFailoverInput`<sup>Optional</sup> <a name="TargetFailoverInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput"></a>

```csharp
public object TargetFailoverInput { get; }
```

- *Type:* object

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput"></a>

```csharp
public string TargetTypeInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `ConnectionTermination`<sup>Required</sup> <a name="ConnectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination"></a>

```csharp
public object ConnectionTermination { get; }
```

- *Type:* object

---

##### `DeregistrationDelay`<sup>Required</sup> <a name="DeregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay"></a>

```csharp
public string DeregistrationDelay { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `LambdaMultiValueHeadersEnabled`<sup>Required</sup> <a name="LambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```csharp
public object LambdaMultiValueHeadersEnabled { get; }
```

- *Type:* object

---

##### `LoadBalancingAlgorithmType`<sup>Required</sup> <a name="LoadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType"></a>

```csharp
public string LoadBalancingAlgorithmType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreserveClientIp`<sup>Required</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp"></a>

```csharp
public string PreserveClientIp { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; }
```

- *Type:* string

---

##### `ProxyProtocolV2`<sup>Required</sup> <a name="ProxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2"></a>

```csharp
public object ProxyProtocolV2 { get; }
```

- *Type:* object

---

##### `SlowStart`<sup>Required</sup> <a name="SlowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart"></a>

```csharp
public double SlowStart { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType"></a>

```csharp
public string TargetType { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlbTargetGroupConfig <a name="AlbTargetGroupConfig" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ConnectionTermination = null,
    string DeregistrationDelay = null,
    AlbTargetGroupHealthCheck HealthCheck = null,
    string Id = null,
    string IpAddressType = null,
    object LambdaMultiValueHeadersEnabled = null,
    string LoadBalancingAlgorithmType = null,
    string Name = null,
    string NamePrefix = null,
    double Port = null,
    string PreserveClientIp = null,
    string Protocol = null,
    string ProtocolVersion = null,
    object ProxyProtocolV2 = null,
    double SlowStart = null,
    AlbTargetGroupStickiness Stickiness = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object TargetFailover = null,
    string TargetType = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination">ConnectionTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay">DeregistrationDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">LambdaMultiValueHeadersEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType">LoadBalancingAlgorithmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp">PreserveClientIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2">ProxyProtocolV2</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart">SlowStart</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover">TargetFailover</a></code> | <code>object</code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType">TargetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionTermination`<sup>Optional</sup> <a name="ConnectionTermination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination"></a>

```csharp
public object ConnectionTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#connection_termination AlbTargetGroup#connection_termination}.

---

##### `DeregistrationDelay`<sup>Optional</sup> <a name="DeregistrationDelay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay"></a>

```csharp
public string DeregistrationDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}.

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck"></a>

```csharp
public AlbTargetGroupHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#health_check AlbTargetGroup#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#id AlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}.

---

##### `LambdaMultiValueHeadersEnabled`<sup>Optional</sup> <a name="LambdaMultiValueHeadersEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```csharp
public object LambdaMultiValueHeadersEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `LoadBalancingAlgorithmType`<sup>Optional</sup> <a name="LoadBalancingAlgorithmType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```csharp
public string LoadBalancingAlgorithmType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name AlbTargetGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#name_prefix AlbTargetGroup#name_prefix}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}.

---

##### `PreserveClientIp`<sup>Optional</sup> <a name="PreserveClientIp" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp"></a>

```csharp
public string PreserveClientIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `ProtocolVersion`<sup>Optional</sup> <a name="ProtocolVersion" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol_version AlbTargetGroup#protocol_version}.

---

##### `ProxyProtocolV2`<sup>Optional</sup> <a name="ProxyProtocolV2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2"></a>

```csharp
public object ProxyProtocolV2 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}.

---

##### `SlowStart`<sup>Optional</sup> <a name="SlowStart" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart"></a>

```csharp
public double SlowStart { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#slow_start AlbTargetGroup#slow_start}.

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness"></a>

```csharp
public AlbTargetGroupStickiness Stickiness { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#stickiness AlbTargetGroup#stickiness}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags AlbTargetGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#tags_all AlbTargetGroup#tags_all}.

---

##### `TargetFailover`<sup>Optional</sup> <a name="TargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover"></a>

```csharp
public object TargetFailover { get; set; }
```

- *Type:* object

target_failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_failover AlbTargetGroup#target_failover}

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType"></a>

```csharp
public string TargetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#target_type AlbTargetGroup#target_type}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#vpc_id AlbTargetGroup#vpc_id}.

---

### AlbTargetGroupHealthCheck <a name="AlbTargetGroupHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupHealthCheck {
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
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#interval AlbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher">Matcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#matcher AlbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#path AlbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#timeout AlbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}.

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#interval AlbTargetGroup#interval}.

---

##### `Matcher`<sup>Optional</sup> <a name="Matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher"></a>

```csharp
public string Matcher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#matcher AlbTargetGroup#matcher}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#path AlbTargetGroup#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#port AlbTargetGroup#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#timeout AlbTargetGroup#timeout}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}.

---

### AlbTargetGroupStickiness <a name="AlbTargetGroupStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupStickiness {
    string Type,
    double CookieDuration = null,
    string CookieName = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#type AlbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration">CookieDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName">CookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_name AlbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#type AlbTargetGroup#type}.

---

##### `CookieDuration`<sup>Optional</sup> <a name="CookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration"></a>

```csharp
public double CookieDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}.

---

##### `CookieName`<sup>Optional</sup> <a name="CookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#cookie_name AlbTargetGroup#cookie_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#enabled AlbTargetGroup#enabled}.

---

### AlbTargetGroupTargetFailover <a name="AlbTargetGroupTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupTargetFailover {
    string OnDeregistration,
    string OnUnhealthy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration">OnDeregistration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy">OnUnhealthy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}. |

---

##### `OnDeregistration`<sup>Required</sup> <a name="OnDeregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration"></a>

```csharp
public string OnDeregistration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}.

---

##### `OnUnhealthy`<sup>Required</sup> <a name="OnUnhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy"></a>

```csharp
public string OnUnhealthy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbTargetGroupHealthCheckOutputReference <a name="AlbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher">ResetMatcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```csharp
private void ResetHealthyThreshold()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMatcher` <a name="ResetMatcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```csharp
private void ResetMatcher()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```csharp
private void ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput">MatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher">Matcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```csharp
public double HealthyThresholdInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `MatcherInput`<sup>Optional</sup> <a name="MatcherInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```csharp
public string MatcherInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```csharp
public double UnhealthyThresholdInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```csharp
public double HealthyThreshold { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Matcher`<sup>Required</sup> <a name="Matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```csharp
public string Matcher { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```csharp
public double UnhealthyThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```csharp
public AlbTargetGroupHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---


### AlbTargetGroupStickinessOutputReference <a name="AlbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupStickinessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration">ResetCookieDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName">ResetCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookieDuration` <a name="ResetCookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```csharp
private void ResetCookieDuration()
```

##### `ResetCookieName` <a name="ResetCookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName"></a>

```csharp
private void ResetCookieName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput">CookieDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration">CookieDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieDurationInput`<sup>Optional</sup> <a name="CookieDurationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```csharp
public double CookieDurationInput { get; }
```

- *Type:* double

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CookieDuration`<sup>Required</sup> <a name="CookieDuration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```csharp
public double CookieDuration { get; }
```

- *Type:* double

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue"></a>

```csharp
public AlbTargetGroupStickiness InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---


### AlbTargetGroupTargetFailoverList <a name="AlbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupTargetFailoverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get"></a>

```csharp
private AlbTargetGroupTargetFailoverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AlbTargetGroupTargetFailoverOutputReference <a name="AlbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AlbTargetGroupTargetFailoverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">OnDeregistrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">OnUnhealthyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration">OnDeregistration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">OnUnhealthy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnDeregistrationInput`<sup>Optional</sup> <a name="OnDeregistrationInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```csharp
public string OnDeregistrationInput { get; }
```

- *Type:* string

---

##### `OnUnhealthyInput`<sup>Optional</sup> <a name="OnUnhealthyInput" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```csharp
public string OnUnhealthyInput { get; }
```

- *Type:* string

---

##### `OnDeregistration`<sup>Required</sup> <a name="OnDeregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```csharp
public string OnDeregistration { get; }
```

- *Type:* string

---

##### `OnUnhealthy`<sup>Required</sup> <a name="OnUnhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```csharp
public string OnUnhealthy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



