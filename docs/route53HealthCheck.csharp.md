# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktf/provider-aws.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check aws_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53HealthCheck(Construct Scope, string Id, Route53HealthCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks">ResetChildHealthchecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold">ResetChildHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName">ResetCloudwatchAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion">ResetCloudwatchAlarmRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni">ResetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus">ResetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck">ResetInvertHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency">ResetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName">ResetReferenceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval">ResetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn">ResetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString">ResetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetChildHealthchecks` <a name="ResetChildHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks"></a>

```csharp
private void ResetChildHealthchecks()
```

##### `ResetChildHealthThreshold` <a name="ResetChildHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold"></a>

```csharp
private void ResetChildHealthThreshold()
```

##### `ResetCloudwatchAlarmName` <a name="ResetCloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName"></a>

```csharp
private void ResetCloudwatchAlarmName()
```

##### `ResetCloudwatchAlarmRegion` <a name="ResetCloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion"></a>

```csharp
private void ResetCloudwatchAlarmRegion()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEnableSni` <a name="ResetEnableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni"></a>

```csharp
private void ResetEnableSni()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold"></a>

```csharp
private void ResetFailureThreshold()
```

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn"></a>

```csharp
private void ResetFqdn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsufficientDataHealthStatus` <a name="ResetInsufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus"></a>

```csharp
private void ResetInsufficientDataHealthStatus()
```

##### `ResetInvertHealthcheck` <a name="ResetInvertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck"></a>

```csharp
private void ResetInvertHealthcheck()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetMeasureLatency` <a name="ResetMeasureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency"></a>

```csharp
private void ResetMeasureLatency()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetReferenceName` <a name="ResetReferenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName"></a>

```csharp
private void ResetReferenceName()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetRequestInterval` <a name="ResetRequestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval"></a>

```csharp
private void ResetRequestInterval()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath"></a>

```csharp
private void ResetResourcePath()
```

##### `ResetRoutingControlArn` <a name="ResetRoutingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn"></a>

```csharp
private void ResetRoutingControlArn()
```

##### `ResetSearchString` <a name="ResetSearchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString"></a>

```csharp
private void ResetSearchString()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53HealthCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53HealthCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Route53HealthCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput">ChildHealthchecksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput">ChildHealthThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput">CloudwatchAlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput">CloudwatchAlarmRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput">EnableSniInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput">InsufficientDataHealthStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput">InvertHealthcheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput">MeasureLatencyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput">ReferenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput">RequestIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput">ResourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput">RoutingControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput">SearchStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks">ChildHealthchecks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold">ChildHealthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName">CloudwatchAlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion">CloudwatchAlarmRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni">EnableSni</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck">InvertHealthcheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency">MeasureLatency</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName">ReferenceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval">RequestInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath">ResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn">RoutingControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString">SearchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChildHealthchecksInput`<sup>Optional</sup> <a name="ChildHealthchecksInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput"></a>

```csharp
public string[] ChildHealthchecksInput { get; }
```

- *Type:* string[]

---

##### `ChildHealthThresholdInput`<sup>Optional</sup> <a name="ChildHealthThresholdInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput"></a>

```csharp
public double ChildHealthThresholdInput { get; }
```

- *Type:* double

---

##### `CloudwatchAlarmNameInput`<sup>Optional</sup> <a name="CloudwatchAlarmNameInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput"></a>

```csharp
public string CloudwatchAlarmNameInput { get; }
```

- *Type:* string

---

##### `CloudwatchAlarmRegionInput`<sup>Optional</sup> <a name="CloudwatchAlarmRegionInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput"></a>

```csharp
public string CloudwatchAlarmRegionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `EnableSniInput`<sup>Optional</sup> <a name="EnableSniInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput"></a>

```csharp
public object EnableSniInput { get; }
```

- *Type:* object

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput"></a>

```csharp
public double FailureThresholdInput { get; }
```

- *Type:* double

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsufficientDataHealthStatusInput`<sup>Optional</sup> <a name="InsufficientDataHealthStatusInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput"></a>

```csharp
public string InsufficientDataHealthStatusInput { get; }
```

- *Type:* string

---

##### `InvertHealthcheckInput`<sup>Optional</sup> <a name="InvertHealthcheckInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput"></a>

```csharp
public object InvertHealthcheckInput { get; }
```

- *Type:* object

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `MeasureLatencyInput`<sup>Optional</sup> <a name="MeasureLatencyInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput"></a>

```csharp
public object MeasureLatencyInput { get; }
```

- *Type:* object

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ReferenceNameInput`<sup>Optional</sup> <a name="ReferenceNameInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput"></a>

```csharp
public string ReferenceNameInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RequestIntervalInput`<sup>Optional</sup> <a name="RequestIntervalInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput"></a>

```csharp
public double RequestIntervalInput { get; }
```

- *Type:* double

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput"></a>

```csharp
public string ResourcePathInput { get; }
```

- *Type:* string

---

##### `RoutingControlArnInput`<sup>Optional</sup> <a name="RoutingControlArnInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput"></a>

```csharp
public string RoutingControlArnInput { get; }
```

- *Type:* string

---

##### `SearchStringInput`<sup>Optional</sup> <a name="SearchStringInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput"></a>

```csharp
public string SearchStringInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ChildHealthchecks`<sup>Required</sup> <a name="ChildHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks"></a>

```csharp
public string[] ChildHealthchecks { get; }
```

- *Type:* string[]

---

##### `ChildHealthThreshold`<sup>Required</sup> <a name="ChildHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold"></a>

```csharp
public double ChildHealthThreshold { get; }
```

- *Type:* double

---

##### `CloudwatchAlarmName`<sup>Required</sup> <a name="CloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName"></a>

```csharp
public string CloudwatchAlarmName { get; }
```

- *Type:* string

---

##### `CloudwatchAlarmRegion`<sup>Required</sup> <a name="CloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion"></a>

```csharp
public string CloudwatchAlarmRegion { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `EnableSni`<sup>Required</sup> <a name="EnableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni"></a>

```csharp
public object EnableSni { get; }
```

- *Type:* object

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; }
```

- *Type:* double

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InsufficientDataHealthStatus`<sup>Required</sup> <a name="InsufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus"></a>

```csharp
public string InsufficientDataHealthStatus { get; }
```

- *Type:* string

---

##### `InvertHealthcheck`<sup>Required</sup> <a name="InvertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck"></a>

```csharp
public object InvertHealthcheck { get; }
```

- *Type:* object

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `MeasureLatency`<sup>Required</sup> <a name="MeasureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency"></a>

```csharp
public object MeasureLatency { get; }
```

- *Type:* object

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ReferenceName`<sup>Required</sup> <a name="ReferenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName"></a>

```csharp
public string ReferenceName { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RequestInterval`<sup>Required</sup> <a name="RequestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval"></a>

```csharp
public double RequestInterval { get; }
```

- *Type:* double

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath"></a>

```csharp
public string ResourcePath { get; }
```

- *Type:* string

---

##### `RoutingControlArn`<sup>Required</sup> <a name="RoutingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn"></a>

```csharp
public string RoutingControlArn { get; }
```

- *Type:* string

---

##### `SearchString`<sup>Required</sup> <a name="SearchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString"></a>

```csharp
public string SearchString { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Route53HealthCheckConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Type,
    string[] ChildHealthchecks = null,
    double ChildHealthThreshold = null,
    string CloudwatchAlarmName = null,
    string CloudwatchAlarmRegion = null,
    object Disabled = null,
    object EnableSni = null,
    double FailureThreshold = null,
    string Fqdn = null,
    string Id = null,
    string InsufficientDataHealthStatus = null,
    object InvertHealthcheck = null,
    string IpAddress = null,
    object MeasureLatency = null,
    double Port = null,
    string ReferenceName = null,
    string[] Regions = null,
    double RequestInterval = null,
    string ResourcePath = null,
    string RoutingControlArn = null,
    string SearchString = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks">ChildHealthchecks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold">ChildHealthThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName">CloudwatchAlarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion">CloudwatchAlarmRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled">Disabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni">EnableSni</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn">Fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck">InvertHealthcheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency">MeasureLatency</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName">ReferenceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval">RequestInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath">ResourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn">RoutingControlArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString">SearchString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}.

---

##### `ChildHealthchecks`<sup>Optional</sup> <a name="ChildHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks"></a>

```csharp
public string[] ChildHealthchecks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}.

---

##### `ChildHealthThreshold`<sup>Optional</sup> <a name="ChildHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold"></a>

```csharp
public double ChildHealthThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}.

---

##### `CloudwatchAlarmName`<sup>Optional</sup> <a name="CloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName"></a>

```csharp
public string CloudwatchAlarmName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.

---

##### `CloudwatchAlarmRegion`<sup>Optional</sup> <a name="CloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion"></a>

```csharp
public string CloudwatchAlarmRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}.

---

##### `EnableSni`<sup>Optional</sup> <a name="EnableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni"></a>

```csharp
public object EnableSni { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold"></a>

```csharp
public double FailureThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsufficientDataHealthStatus`<sup>Optional</sup> <a name="InsufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus"></a>

```csharp
public string InsufficientDataHealthStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `InvertHealthcheck`<sup>Optional</sup> <a name="InvertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck"></a>

```csharp
public object InvertHealthcheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `MeasureLatency`<sup>Optional</sup> <a name="MeasureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency"></a>

```csharp
public object MeasureLatency { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}.

---

##### `ReferenceName`<sup>Optional</sup> <a name="ReferenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName"></a>

```csharp
public string ReferenceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `RequestInterval`<sup>Optional</sup> <a name="RequestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval"></a>

```csharp
public double RequestInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath"></a>

```csharp
public string ResourcePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `RoutingControlArn`<sup>Optional</sup> <a name="RoutingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn"></a>

```csharp
public string RoutingControlArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `SearchString`<sup>Optional</sup> <a name="SearchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString"></a>

```csharp
public string SearchString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}.

---



